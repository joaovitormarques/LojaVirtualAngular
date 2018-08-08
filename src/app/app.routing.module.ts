import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';



const appRoutes: Routes = [
    { path: 'cursos', loadChildren: '../app/cursos/cursos.module#CursosModule'},
    { path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent },
    { path: 'produto/:id', component: ProdutoDetalheComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
