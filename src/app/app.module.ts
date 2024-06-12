import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';
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
import { ReportComponent } from './component/report/report.component';
import {FormsModule} from "@angular/forms";
import { NgxAceEditorComponent } from './component/ngx-ace-editor/ngx-ace-editor.component';

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
    SettingsComponent,
    ReportComponent,
    NgxAceEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
