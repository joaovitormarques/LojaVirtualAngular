import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado = false;
  private usuarioAdmin = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {
  if (usuario.nome === 'admin' && usuario.senha === 'admin') {
    this.usuarioAutenticado = true;
    this.usuarioAdmin = true;
  } else if (usuario.nome === 'user' && usuario.senha === 'user') {
    this.usuarioAutenticado = true;
  } else {
    this.usuarioAutenticado = false;
  }

  if (this.usuarioAutenticado) {
    this.mostrarMenuEmitter.emit(true);
    this.router.navigate(['/']);
  } else {
    this.mostrarMenuEmitter.emit(false);
    this.usuarioAutenticado = false;
  }

}

}
