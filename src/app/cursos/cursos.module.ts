import { NgModule } from "@angular/core";
import { CursosComponent } from "./cursos.component";
import { CursosService } from "./cursos.service";
import { CursoNaoEncontradoComponent } from "./curso-nao-encontrado/curso-nao-encontrado.component";
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CommonModule } from "@angular/common";
import { CursosRoutingModule } from "./cursos.routing.module";

@NgModule({
    declarations: [
        CursosComponent,
        CursoNaoEncontradoComponent,
        CursoDetalheComponent
    ],
    providers: [CursosService],
    imports: [
        CommonModule,
        CursosRoutingModule
    ]
})

export class CursosModule {}