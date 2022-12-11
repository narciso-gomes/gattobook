import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { NovoUsuarioService } from 'src/app/home/novo-usuario/novo-usuario.service';
import { NovoUsuario } from './novo-usuario';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService
  ) {}

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email: [''],
      fullName: [''],
      userName: [''],
      password: [''],
    });
  }

  cadastrar() {
    console.log(this.novoUsuarioForm.getRawValue() as NovoUsuario)
  }
}
