import { BrowserModule } from '@angular/platform-browser';
import {NgModule, DoBootstrap, ApplicationRef, APP_INITIALIZER} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './endpoints/header/header.component';
import { FooterComponent } from './endpoints/footer/footer.component';
import { EndpointsComponent } from './endpoints/endpoints.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListApiComponent } from './endpoints/list-api/list-api.component';
import { DialogComponent } from './endpoints/dialog/dialog.component';
import {VersionDiffService} from './services/version-diff.service';
import { ImplementationComponent } from './endpoints/implementation/implementation.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import {FormsModule} from '@angular/forms';
import { EditorComponent } from './endpoints/editor/editor.component';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import {initializer} from './services/initializer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EndpointsComponent,
    ListApiComponent,
    DialogComponent,
    ImplementationComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatDialogModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MonacoEditorModule.forRoot(),
    FormsModule,
    KeycloakAngularModule
  ],
  providers: [VersionDiffService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
