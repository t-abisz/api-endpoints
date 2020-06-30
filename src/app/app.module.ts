import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatExpansionModule} from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './endpoints/header/header.component';
import { FooterComponent } from './endpoints/footer/footer.component';
import { EndpointsComponent } from './endpoints/endpoints.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListApiComponent } from './endpoints/list-api/list-api.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EndpointsComponent,
    ListApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
