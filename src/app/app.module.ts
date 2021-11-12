import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxCaptchaModule } from 'ngx-captcha';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DisplayweddingComponent } from './displaywedding/displaywedding.component';
import { TestvalidComponent } from './testvalid/testvalid.component';

import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin! 
import listPlugin from '@fullcalendar/list'; // a plugin! 

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ListbirthComponent } from './listbirth/listbirth.component';
import {MatDialogModule} from '@angular/material/dialog';

FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin,
  listPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    DisplayweddingComponent, 
    TestvalidComponent, 
    ListbirthComponent,
       //declare nama sama mcm kita import
  ],

  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    NgbModule,
    FullCalendarModule,// register FullCalendar with you app
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
