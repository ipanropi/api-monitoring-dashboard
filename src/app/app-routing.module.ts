import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DocumentationComponent} from "./component/documentation/documentation.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {DocumentationAddNewFileComponent} from "./component/documentation/documentation-add-new-file/documentation-add-new-file.component";
import {SettingsComponent} from "./component/settings/settings.component";
import {EmailConfigurationComponent} from "./component/email-configuration/email-configuration.component";
import {IntervalRateComponent} from "./component/interval-rate/interval-rate.component";
import {ReportComponent} from "./component/report/report.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'documentation', component: DocumentationComponent},
  { path: 'documentation/newfile', component: DocumentationAddNewFileComponent},
  { path: 'settings', component: SettingsComponent, children: [
      { path: 'email', component: EmailConfigurationComponent },
      { path: 'interval-rate', component: IntervalRateComponent }
    ]},
  { path: 'reporting', component: ReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
