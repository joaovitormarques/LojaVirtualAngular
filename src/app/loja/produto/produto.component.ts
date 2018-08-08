
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LojaService } from '../loja.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {


  @Input('ind') ind: string;
  @Input('desc') desc: string;

  urlImagem: String;
  preco = 'R$' + (Math.random() * 10).toFixed(2);

  constructor(
    private lojaService: LojaService,
    private router: Router) {
   }

  ngOnInit() {
    this.urlImagem = './assets/food_images/' + this.ind + '.jpg';
  }

  incrementa() {
    this.lojaService.adicionouItem();
  }

  editarProduto() {
    this.router.navigate(['/produto', this.ind]);
  }

}
