import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsuntoItemComponent } from './asunto-item/asunto-item.component';
import { AsuntosComponent } from './asuntos/asuntos.component';
import { AsuntoScreenComponent } from './asunto-screen/asunto-screen.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { AvatarComponent } from './avatar/avatar.component';
import { MensajeFormComponent } from './mensaje-form/mensaje-form.component';

import { AsuntoService } from './services/asunto.service';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    HeaderComponent,
    FooterComponent,
    AsuntoItemComponent,
    AsuntosComponent,
    AsuntoScreenComponent,
    MensajeComponent,
    AvatarComponent,
    MensajeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AsuntoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
