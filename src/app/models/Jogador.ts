import { Categoria } from './enuns/Categoria';
import { Posicionamento } from './Posicionamento';

export interface Jogador {
    id?: string,
    nome?: string,
    altura?: number,
    imgUrl?:String
    dataNascimento?: Date,
    categoria?: Categoria,
    posicoes?: Posicionamento[],
}
