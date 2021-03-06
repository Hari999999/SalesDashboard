import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './shared/login/login.component';
import { LogoutComponent } from './shared/logout/logout.component';

import { DashComponent } from './dashboard/dash/dash.component';
import { KpiComponent } from './dashboard/dash/kpi/kpi.component';
import { ChartComponent } from './dashboard/dash/chart/chart.component';
import { TableComponent } from './dashboard/dash/table/table.component';
import { EntryformComponent } from './newform/entryform/entryform.component';

import { SalesService } from './services/sales.service';
import { NewService } from './services/new.service';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DashComponent,
    KpiComponent,
    ChartComponent,
    TableComponent,
    EntryformComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
	  AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SalesService, 
    NewService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
