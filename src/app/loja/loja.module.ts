import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LojaComponent } from './loja.component';
import { LojaRoutingModule } from './loja.routing.module';
import { ProdutoComponent } from './produto/produto.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    LojaRoutingModule
  ],
  declarations: [LojaComponent, ProdutoComponent]
})
export class LojaModule { }
