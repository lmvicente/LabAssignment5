import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialDesignModule} from '../material-design/material-design.module';
// routing
import {AppRoutes} from './app.routes';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    MainFooterComponent,
    MainHeaderComponent,
    HomeComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MaterialDesignModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
