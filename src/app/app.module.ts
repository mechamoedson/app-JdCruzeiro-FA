import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// environments
import {environment} from '../../src/environments/environment'

// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { AboutComponent } from './componentes/about/about.component';
import { NoticiasComponent } from './componentes/main/noticias/noticias.component';
import { ElencoComponent } from './componentes/main/elenco/elenco.component';
import { JogadorComponent } from './componentes/main/jogador/jogador.component';
import { JogosComponent } from './componentes/main/jogos/jogos.component';
import { JogoComponent } from './componentes/main/jogo/jogo.component';
import { GaleriaComponent } from './componentes/main/galeria/galeria.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';

// firestore
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

// modules
import { AppRoutingModule } from './app-routing.module';
import { FlashMessagesModule } from 'angular2-flash-messages';

// services
import { JogadorService } from './services/jogador.service';
import { FooterComponent } from './componentes/footer/footer.component';
import { ElencoService } from './services/elenco.service';
import { TimeLineComponent } from './componentes/main/time-line/time-line.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    NotFoundComponent,
    JogadorComponent,
    ElencoComponent,
    AboutComponent,
    JogosComponent,
    JogoComponent,
    GaleriaComponent,
    NoticiasComponent,
    ElencoComponent,
    FooterComponent,
    TimeLineComponent
  ],
  imports: [
    BrowserModule,
    FlashMessagesModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'app-jd-cruzeiro-fa'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore
    AngularFireAuthModule, // imports firebase/auth
    AngularFireStorageModule // imports firebase/storage
  ],
  providers: [JogadorService, ElencoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
