import { Injectable } from "@angular/core";
import { Jogador } from "../models/Jogador";
import { BASE } from '../models/enuns/BASE';
import { POSICAO } from '../models/enuns/POSICAO';
import { Categoria } from '../models/enuns/Categoria';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class ElencoService {
  jogadoresEsporte: Jogador[];
  jogadoresVeterano: Jogador[];
  comissaoTec: Jogador[];

  elencoEsporteCollection: AngularFirestoreCollection<Jogador>;
  elencoVeteranoCollection: AngularFirestoreCollection<Jogador>;
  elencoComissaoTecCollection: AngularFirestoreCollection<Jogador>;
  jogadoresEsporteDoc: AngularFirestoreDocument<Jogador>;
  jogadoresVeteranoDoc: AngularFirestoreDocument<Jogador>;
  comissaoTecObs: Observable<Jogador[]>;
  // clients: Observable<Client[]>;
  // client: Observable<Client>;

  constructor(private afs: AngularFirestore) { 
    this.elencoComissaoTecCollection = this.afs.collection('elenco').doc('comissaoTec').collection('tecnicos');
    // console.log(this.elencoComissaoTecCollection.doc('comissaoTec').collection('tecnicos').valueChanges());
    // this.elencoEsporteCollection = this.afs.collection('elenco/esporte', ref => ref.orderBy('nome', 'asc'));
    // this.elencoVeteranoCollection = this.afs.collection('elenco/veterano', ref => ref.orderBy('nome', 'asc'));
    
   }

  getJogadoresEsporte(): Jogador[] {
    
    //jogadores do esporte
    return this.jogadoresEsporte = [
      {
        id: "1",
        nome: "Everton Ribeiro",
        altura: 1.84,
        categoria: Categoria.ESPORTE,
        posicoes: [{ posicaoBase: BASE.GOLEIRO, posicao: POSICAO.GOLEIRO }],
        dataNascimento: new Date("10/12/1988"),
        imgUrl:'https://randomuser.me/api/portraits/med/men/65.jpg'
      },
      {
        id: "2",
        nome: "Robson Santos da Silva",
        altura: 1.83,
        categoria: Categoria.ESPORTE,
        posicoes: [
          { posicaoBase: BASE.MEIO_CAMPO, posicao: POSICAO.MEIA_ARMADOR },
          { posicaoBase: BASE.MEIO_CAMPO, posicao: POSICAO.MEIA_OFENSIVO },
          { posicaoBase: BASE.MEIO_CAMPO, posicao: POSICAO.VOLANTE },
          { posicaoBase: BASE.DEFESA, posicao: POSICAO.ZAGUEIRO }
        ],
        dataNascimento: new Date("02/18/1988"),
        imgUrl:'https://randomuser.me/api/portraits/med/men/2.jpg'
      },
      {
        id: "3",
        nome: "Rafael mendes da Silva",
        altura: 1.71,
        categoria: Categoria.ESPORTE,
        posicoes: [
          { posicaoBase: BASE.MEIO_CAMPO, posicao: POSICAO.VOLANTE },
          { posicaoBase: BASE.DEFESA, posicao: POSICAO.ZAGUEIRO },
          { posicaoBase: BASE.MEIO_CAMPO, posicao: POSICAO.MEIA_OFENSIVO }
        ],
        dataNascimento: new Date("02/18/1988"),
        imgUrl:'https://randomuser.me/api/portraits/med/men/35.jpg'
      },
      {
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
        imgUrl:'https://randomuser.me/api/portraits/med/men/60.jpg'
      },

    ];
  }
  
  getJogadoresVeterano(): Jogador[]{
    
    //jogodores do veterano
    return this.jogadoresVeterano = [
      {
        id: "1",
        nome: "Everton Ribeiro",
        altura: 1.84,
        // categoria: Categoria.VETERANO,
        posicoes: [{ posicaoBase: BASE.GOLEIRO, posicao: POSICAO.GOLEIRO }],
        dataNascimento: new Date("10/12/1988"),
        imgUrl:'https://randomuser.me/api/portraits/med/men/65.jpg'
      },
      {
        id: "5",
        nome: "Edson Santos da Silva",
        altura: 1.8,
        categoria: Categoria.ESPORTE,
        posicoes: [
          { posicaoBase: BASE.ATAQUE, posicao: POSICAO.ATACANTE },
          { posicaoBase: BASE.MEIO_CAMPO, posicao: POSICAO.MEIA_ARMADOR },
          { posicaoBase: BASE.MEIO_CAMPO, posicao: POSICAO.MEIA_OFENSIVO }
        ],
        dataNascimento: new Date("09/12/1985"),
        imgUrl:'https://randomuser.me/api/portraits/med/men/1.jpg'
      },
      {
        id: "2",
        nome: "Robson Santos da Silva",
        altura: 1.83,
        categoria: Categoria.VETERANO,
        posicoes: [
          { posicaoBase: BASE.MEIO_CAMPO, posicao: POSICAO.MEIA_ARMADOR },
          { posicaoBase: BASE.MEIO_CAMPO, posicao: POSICAO.MEIA_OFENSIVO },
          { posicaoBase: BASE.MEIO_CAMPO, posicao: POSICAO.VOLANTE },
          { posicaoBase: BASE.DEFESA, posicao: POSICAO.ZAGUEIRO }
        ],
        dataNascimento: new Date("02/18/1988"),
        imgUrl:'https://randomuser.me/api/portraits/med/men/2.jpg'
      },
      {
        id: "3",
        nome: "Rafael mendes da Silva",
        altura: 1.71,
        categoria: Categoria.ESPORTE,
        posicoes: [
          { posicaoBase: BASE.MEIO_CAMPO, posicao: POSICAO.VOLANTE },
          { posicaoBase: BASE.DEFESA, posicao: POSICAO.ZAGUEIRO },
          { posicaoBase: BASE.MEIO_CAMPO, posicao: POSICAO.MEIA_OFENSIVO }
        ],
        dataNascimento: new Date("02/18/1988"),
        imgUrl:'https://randomuser.me/api/portraits/med/men/35.jpg'
      },
      {
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
        imgUrl:'https://randomuser.me/api/portraits/med/men/60.jpg'
      },

    ];
  }

  getComissaoTecnica(): Observable<Jogador[]> {

    // comissão técnica
    this.comissaoTecObs = this.elencoComissaoTecCollection.valueChanges();
    console.log(this.comissaoTecObs);
    return this.comissaoTecObs;
  }
}
