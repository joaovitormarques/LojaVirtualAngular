import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LojaService } from '../loja/loja.service';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit {

  inscricao: Subscription;
  produto: any;
  descricao = '';
  id: number;

  constructor(
    private route: ActivatedRoute,
    private service: LojaService,
    private router: Router) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.produto = this.service.getProduto(this.id);
        if (this.produto === null) {
          this.produto = 'Produto Não Encontrado';
        }
        this.descricao = this.produto;
      }
    );
  }

  editarProduto() {
    this.service.alterar(this.id, this.descricao);
    this.router.navigate(['/loja']);
  }

  deletarProduto() {
    this.service.deletar(this.id);
    this.router.navigate(['/loja']);
  }

}
