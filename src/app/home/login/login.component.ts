import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(private autenticacaoService: AutenticacaoService) {}

  ngOnInit(): void {}

  login() {
    this.autenticacaoService.autenticar(this.usuario, this.senha).subscribe({
      next: () => console.log('Autenticado com sucesso'),
      error: (e) => {
        alert('Usuário ou senha inválido');
        console.log('error');
      },
    });
  }
}
