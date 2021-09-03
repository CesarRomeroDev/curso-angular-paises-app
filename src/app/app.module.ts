import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';       //se agreaga para las peticiones de una api

import { AppComponent } from './app.component';
import { PaisModule } from './pais/pais.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,                                          //se agreaga para las peticiones de una api
    PaisModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
