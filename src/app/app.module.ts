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

@NgModule({
  declarations: [
    AppComponent,
    DocumentationComponent,
    NavbarComponent,
    LeftMenuComponent,
    DashboardComponent,
    SettingsComponent,
    DocumentationAddNewFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
