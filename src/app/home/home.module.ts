import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from 'src/app/home/home-routing.module';
import { HomeComponent } from 'src/app/home/home.component';
import { LoginComponent } from 'src/app/home/login/login.component';
import { MensagemModule } from 'src/app/componentes/mensagem/mensagem.module';
import { NovoUsuarioComponent } from 'src/app/home/novo-usuario/novo-usuario.component';

@NgModule({
  declarations: [HomeComponent, LoginComponent, NovoUsuarioComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MensagemModule,
    ReactiveFormsModule,
  ],
})
export class HomeModule {}
