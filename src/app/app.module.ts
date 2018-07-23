import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule
    ],
  //https://stackoverflow.com/questions/34535163/angular-2-router-no-base-href-set
    providers: [{ provide: APP_BASE_HREF, useValue: '/Home/Angular/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
