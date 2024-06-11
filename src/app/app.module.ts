import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { DocumentationComponent } from './component/documentation/documentation.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LeftMenuComponent } from './component/left-menu/left-menu.component';
import { DocumentationAddNewFileComponent } from './component/documentation/documentation-add-new-file/documentation-add-new-file.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DocumentationComponent,
    NavbarComponent,
    LeftMenuComponent,
    DocumentationAddNewFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
