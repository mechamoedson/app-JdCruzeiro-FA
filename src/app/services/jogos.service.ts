import { Injectable } from "@angular/core";
import { Jogo } from "../models/Jogo";
import { Observable } from "rxjs";
import {
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  AngularFirestore
} from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class JogosService {
  jogosCollection: AngularFirestoreCollection<Jogo>;
  jogosDoc: AngularFirestoreDocument<Jogo>;
  jogos: Observable<Jogo[]>;
  // client: Observable<Jogo>;
  LocalCollection: AngularFirestoreCollection<Jogo>;
  LocalDoc: AngularFirestoreDocument<Jogo>;

  constructor(private afs: AngularFirestore) {
    this.jogosCollection = this.afs.collection("jogos", ref =>
      ref.orderBy("data", "asc")
    );
  }

  getJogos(): Observable<Jogo[]> {
    this.jogos = this.jogosCollection.valueChanges();
    return this.jogos;
  }

}
