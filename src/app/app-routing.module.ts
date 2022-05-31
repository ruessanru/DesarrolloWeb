import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaginaPrincipalComponent} from './ruth/pagina-principal/pagina-principal.component';
import {RegistrarPersonasComponent}from './ruth/registrar-personas/registrar-personas.component';
import {Pagina404Component}from './ruth/pagina404/pagina404.component';
import {IniciarSesionComponent}from './ruth/iniciar-sesion/iniciar-sesion.component';
import { RecursosComponent } from './ruth/recursos/recursos.component';
import { NosotrosComponent } from './ruth/nosotros/nosotros.component';
import { ComentariosComponent } from './ruth/comentarios/comentarios.component';
import { MatriculaComponent } from './ruth/matricula/matricula.component';
import { FrameunoComponent } from './ruth/frameuno/frameuno.component';



const routes: Routes = [
  {path: '',component: PaginaPrincipalComponent },
  {path: 'pagina_principal',component: PaginaPrincipalComponent },
  {path: 'formu_registrar',component: RegistrarPersonasComponent},
  {path: 'iniciar_sesion',component:IniciarSesionComponent},
  {path: 'recursos',component:RecursosComponent},
  {path: 'nosotros',component:NosotrosComponent},
  {path: 'comentarios',component:ComentariosComponent},
  {path: 'matricula',component:MatriculaComponent},
  {path: 'menuframe',component:FrameunoComponent},


  {path: '**',component: Pagina404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
