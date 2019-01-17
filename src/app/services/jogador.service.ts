import { Injectable } from "@angular/core";
import { Jogador } from "../models/Jogador";
import { Categoria } from "../models/enuns/Categoria";
import { BASE } from "../models/enuns/BASE";
import { POSICAO } from "../models/enuns/POSICAO";

@Injectable({
  providedIn: "root"
})
export class JogadorService {
  constructor() {}

  getJogador(id: number): Jogador {
    return {
      id: "4",
      nome: "Anderson Alves",
      altura: 1.92,
      categoria: Categoria.ESPORTE,
      posicoes: [
        { posicaoBase: BASE.ATAQUE, posicao: POSICAO.ATACANTE },
        { posicaoBase: BASE.MEIO_CAMPO, posicao: POSICAO.MEIA_ARMADOR },
        { posicaoBase: BASE.MEIO_CAMPO, posicao: POSICAO.MEIA_OFENSIVO }
      ],
      dataNascimento: new Date("02/18/1988"),
      imgUrl: "../../../assets/jogador/anderson.jpg"
    };
  }
}
