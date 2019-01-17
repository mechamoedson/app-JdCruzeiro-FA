import { Component, OnInit } from "@angular/core";
import { ElencoService } from "src/app/services/elenco.service";
import { Jogador } from "src/app/models/Jogador";
import { Observable } from 'rxjs';

@Component({
  selector: "app-elenco",
  templateUrl: "./elenco.component.html",
  styleUrls: ["./elenco.component.css"]
})
export class ElencoComponent implements OnInit {
  jogadoresEsporte: Jogador[];
  jogadoresVeterano: Jogador[];
  comissaoTec: Observable<Jogador[]>;

  constructor(private _elencoService: ElencoService) {}

  ngOnInit() {
    this.jogadoresEsporte = this._elencoService.getJogadoresEsporte();
    // this.getJogadoresEsporte();
    // this.getJogadoresVeterano();
    // this.getComissaoTecnica();
  }

  getJogadoresEsporte() {
    this.jogadoresEsporte = this._elencoService.getJogadoresEsporte();
    // console.log('getJogadoresEsporte', this.jogadoresEsporte);
  }

  getJogadoresVeterano() {
    this.jogadoresVeterano = this._elencoService.getJogadoresVeterano();
    // console.log('getJogadoresVeterano');
  }

  getComissaoTecnica() {
    this.comissaoTec = this._elencoService.getComissaoTecnica();
    // console.log('getComissaoTecnica');
  }

}
