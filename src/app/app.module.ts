import { ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VillamarMaterialModule } from "./Shared/villamar-material.module";
import { VillamarToolbarComponent } from './Shared/villamar-toolbar/villamar-toolbar.component';
import { VillamarLoginComponent } from './Components/villamar-login/villamar-login.component';
import { VillamarPrincipalComponent } from './Components/villamar-principal/villamar-principal.component';

@NgModule({
    declarations: [
        AppComponent,
        VillamarToolbarComponent,
        VillamarLoginComponent,
        VillamarPrincipalComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        VillamarMaterialModule,
        ReactiveFormsModule
    ]
})
export class AppModule { }
