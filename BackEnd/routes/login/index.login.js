const express = require('express');
const oracledb = require('oracledb');
const jwt = require('jsonwebtoken');
oracledb.outFormat = oracledb.OBJECT;

const config = require('../../config');
const authenticate = require('../../middleware/auth');

const router = express.Router();

let jsonError = { Status: "Fail" };
let maxRows = 1;

router.post('/', async (req, res) => {
	let conn;
	try {
		conn = await oracledb.getConnection(config.connection);
		let row = await conn.execute(
			'BEGIN SALES.PKG_LOGIN.prc_get_user(:user, :pass, :userid); END;',
			{
				user: req.body.user,
				pass: req.body.pass, // TODO bcrypt
				userid: { type: oracledb.NUMBER, dir: oracledb.BIND_OUT }
			}
		);
        response = await row.outBinds;
        let token = jwt.sign(
            {
                id: response.userid
            }
            , config.secret
            , { expiresIn: '2h' }
        );
		res.send({response, token});
	} catch (err) {
		res.status(500).send(jsonError);
	} finally {
		if (conn) {
			await conn.close();
		}
	}
});

router.get('/valid', authenticate, async(req, res) => {
    try {
        res.status(200).send({success: true});
    }
    catch (err) {
        res.status(401).send();
    }
});

module.exports = router;