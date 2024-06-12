import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentationComponent } from './component/documentation/documentation.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LeftMenuComponent } from './component/left-menu/left-menu.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SettingsComponent } from './component/settings/settings.component';
import { DocumentationAddNewFileComponent } from './component/documentation/documentation-add-new-file/documentation-add-new-file.component';
import {EmailConfigurationComponent} from "./component/email-configuration/email-configuration.component";
import {IntervalRateComponent} from "./component/interval-rate/interval-rate.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    DocumentationComponent,
    NavbarComponent,
    LeftMenuComponent,
    DashboardComponent,
    SettingsComponent,
    DocumentationAddNewFileComponent,
    LeftMenuComponent,
    EmailConfigurationComponent,
    IntervalRateComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
