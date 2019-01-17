import { Time } from "@angular/common";
import { TIPO_JOGO } from "./enuns/TIPO_JOGO";
import { TIPO_CARTAO } from "./enuns/TIPO_CARTAO";

export interface Jogo {
  id: string;
  data: Date | string;
  timeMandante: string;
  timeVizitante: string;
  placar?: {
    golsMandante: [
      {
        jogadorId: string;
        assistenciaId: string;
        tempoJogo?: Time;
      }
    ];
    golsVizitante: [
      {
        jogadorId: string;
        assistenciaId: string;
        tempoJogo?: Time;
      }
    ];
  };
  tipo?: TIPO_JOGO;
  cartoes?: {
    cartoesMandante?: [
      {
        tipoCartao: TIPO_CARTAO;
        jogadorId: string;
        tempoJogo?: Time;
      }
    ];
    cartoesVizitante?: [
      {
        tipoCartao: TIPO_CARTAO;
        jogadorId: string;
        tempoJogo?: Time;
      }
    ];
  };
  local: {
    nome: string;
    local?: string;
  };
}
