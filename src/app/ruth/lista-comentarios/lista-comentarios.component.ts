import { Component, OnInit } from '@angular/core';
import {ServiciogeneralService} from '../serviciogeneral.service';

@Component({
  selector: 'app-lista-comentarios',
  templateUrl: './lista-comentarios.component.html',
  styleUrls: ['./lista-comentarios.component.css']
})
export class ListaComentariosComponent implements OnInit {

  comentarios =null;



  comentario1 = {
   id_persona: "",
   comentario: ""


  }




  constructor(private APIService:ServiciogeneralService) { }

  ngOnInit(): void {
    this.listar_comentarios();
  }

  listar_comentarios(){
    this.APIService.lista_comentarios().subscribe((data:any) => {
    this.comentarios = data
    });

}
}
