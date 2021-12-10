import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarPersonasComponent } from './ruth/registrar-personas/registrar-personas.component';
import { BarrahorizontalnavbarComponent } from './ruth/barrahorizontalnavbar/barrahorizontalnavbar.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginaPrincipalComponent } from './ruth/pagina-principal/pagina-principal.component';
import { Pagina404Component } from './ruth/pagina404/pagina404.component';
import { BarrahorizontalfooterComponent } from './ruth/barrahorizontalfooter/barrahorizontalfooter.component';
import { IniciarSesionComponent } from './ruth/iniciar-sesion/iniciar-sesion.component';
import { RecursosComponent } from './ruth/recursos/recursos.component';
import { NosotrosComponent } from './ruth/nosotros/nosotros.component';
import { ComentariosComponent } from './ruth/comentarios/comentarios.component';
import { LearningVideosComponent } from './ruth/learning-videos/learning-videos.component';
import { TipsGrammarComponent } from './ruth/tips-grammar/tips-grammar.component';
import { MatriculaComponent } from './ruth/matricula/matricula.component';
import { FrameunoComponent } from './ruth/frameuno/frameuno.component';
import { ServiciogeneralService } from './ruth/serviciogeneral.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarPersonasComponent,
    BarrahorizontalnavbarComponent,
    PaginaPrincipalComponent,
    Pagina404Component,
    BarrahorizontalfooterComponent,
    IniciarSesionComponent,
    RecursosComponent,
    NosotrosComponent,
    ComentariosComponent,
    LearningVideosComponent,
    TipsGrammarComponent,
    MatriculaComponent,
    FrameunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ServiciogeneralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
