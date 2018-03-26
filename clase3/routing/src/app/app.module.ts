import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Ruta1Component } from './components/ruta1/ruta1.component';
import { Ruta2Component } from './components/ruta2/ruta2.component';
import { Ruta3Component } from './components/ruta3/ruta3.component';
import { ErrorComponent } from './components/error/error.component';

import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';

import { ClienteService } from './services/clientes.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Ruta1Component,
    Ruta2Component,
    Ruta3Component,
    ErrorComponent,
    ClienteFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 