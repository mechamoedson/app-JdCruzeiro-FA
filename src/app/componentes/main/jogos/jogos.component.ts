import { Component, OnInit } from "@angular/core";
import { Jogo } from "src/app/models/Jogo";
import { JogosService } from "src/app/services/jogos.service";
import { Observable } from 'rxjs';

@Component({
  selector: "app-jogos",
  templateUrl: "./jogos.component.html",
  styleUrls: ["./jogos.component.css"]
})
export class JogosComponent implements OnInit {
  jogos: Observable<Jogo[]>;

  constructor(private _jogosService: JogosService) {}

  ngOnInit() {
    this.jogos = this._jogosService.getJogos();
  }
}
