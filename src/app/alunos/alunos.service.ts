import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: any[] = [
    { id: 1, nome: 'João', email: 'joao@email.com'},
    { id: 2, nome: 'Maria', email: 'maria@email.com'},
    { id: 3, nome: 'José', email: 'jose@email.com'},
    { id: 4, nome: 'Ana', email: 'ana@email.com'},
  ]

  constructor() { }


  getAlunos() {
    return this.alunos;
  }

  getAluno(id: number) {
    for (let i=0; i< this.alunos.length; i++){
      let aluno = this.alunos[i];
      if (aluno.id == id) {
        return aluno;
      }
    }
    return null;
  }

}
