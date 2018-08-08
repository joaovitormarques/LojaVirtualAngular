import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AlunosModule } from './alunos/alunos.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LojaModule } from './loja/loja.module';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProdutoDetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AlunosModule,
    LojaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
