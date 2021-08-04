import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation';

import { NavigationModule } from './navegacao/navigation.module';
import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';

import { AppRoutingModule } from './app.routing';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { CadastroNovoComponent } from './demos/reactiveForms/cadastro-novo/cadastro-novo.component';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent,
    CadastroNovoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NavigationModule,
    TextMaskModule,
    NgBrazil,
    CustomFormsModule,
    AppRoutingModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
