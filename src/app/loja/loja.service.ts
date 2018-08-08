import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LojaService {

  adicionarItem = new EventEmitter();
  indexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  descricoes =  [
    'Feijão carioca',
    'Cerejas',
    'Trufas de chocolate',
    'Ovo frito',
    'Peixe assado',
    'Framboesas frescas',
    'Tangerina',
    'Especiarias',
    'Sabão líquido',
    'Uvas'
  ];

  getIndexes() {
    return this.indexes;
  }

  getDescricoes() {
    return this.descricoes;
  }

  adicionouItem() {
    this.adicionarItem.emit(true);
  }

  getProduto(id: number) {
    return this.descricoes[id];
  }

  alterar(id: number, novaDescricao: string) {
    this.descricoes[id] = novaDescricao;
  }

  deletar(id: number) {
    this.indexes.splice(id, 1);
  }

  constructor() { }
}
