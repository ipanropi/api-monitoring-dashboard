import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {AppComponent} from "./app.component";
import {DocumentationComponent} from "./component/documentation/documentation.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'documentation', component: DocumentationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
