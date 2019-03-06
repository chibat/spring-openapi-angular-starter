import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // ★
import { ApiModule } from './client/api.module' // ★
import { BASE_PATH } from './client/variables' // ★

import {
  MatInputModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatButtonModule,
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule, // ★
    ApiModule // ★
  ],
  providers: [{provide: BASE_PATH, useValue: window.location.origin}], // ★
  bootstrap: [AppComponent]
})
export class AppModule { }
