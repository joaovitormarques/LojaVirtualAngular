import { Component, OnInit } from '@angular/core';
import { LojaService } from './loja.service';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  lista: Array<number>;
  decricoes: Array<string>;
  numeroDeItens = 0;

  constructor(
    private lojaService: LojaService) { }

  ngOnInit() {
    this.lista = this.lojaService.getIndexes();
    this.decricoes = this.lojaService.getDescricoes();
    this.lojaService.adicionarItem.subscribe(
      (adicionou) => {
        if (adicionou) {
          this.numeroDeItens++;
        }
      }
    );
  }

  resetNumeroDeItens() {
    this.numeroDeItens = 0;
  }

}
