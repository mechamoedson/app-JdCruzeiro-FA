import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { JogadorService } from "src/app/services/jogador.service";
import { Jogador } from "src/app/models/Jogador";

@Component({
  selector: "app-jogador",
  templateUrl: "./jogador.component.html",
  styleUrls: ["./jogador.component.css"]
})
export class JogadorComponent implements OnInit {
  jogador: Jogador;

  constructor(
    private _route: ActivatedRoute,
    private _jogadorService: JogadorService
  ) {}

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get("id");
    this.jogador = this._jogadorService.getJogador(id);
    console.log('jogador: ',this.jogador);
  }
}
