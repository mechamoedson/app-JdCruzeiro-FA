import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./componentes/about/about.component";
import { NotFoundComponent } from "./componentes/not-found/not-found.component";
import { JogadorComponent } from "./componentes/main/jogador/jogador.component";
import { JogosComponent } from "./componentes/main/jogos/jogos.component";
import { JogoComponent } from "./componentes/main/jogo/jogo.component";
import { GaleriaComponent } from "./componentes/main/galeria/galeria.component";
import { ElencoComponent } from "./componentes/main/elenco/elenco.component";
import { NoticiasComponent } from "./componentes/main/noticias/noticias.component";

const routes: Routes = [
  { path: "", component: AboutComponent },
  { path: "elenco/jogador/:id", component: JogadorComponent, data:{} },
  { path: "elenco", component: ElencoComponent },
  { path: "jogos", component: JogosComponent },
  { path: "jogo/:id", component: JogoComponent },
  { path: "galeria", component: GaleriaComponent },
  { path: "noticias", component: NoticiasComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
