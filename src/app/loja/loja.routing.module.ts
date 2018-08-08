import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LojaComponent } from './loja.component';

const lojaRoutes: Routes = [
    { path: 'loja', component: LojaComponent, children: [
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(lojaRoutes)],
    exports: [RouterModule]
})
export class LojaRoutingModule {}
