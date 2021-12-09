import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
declare var comentario_vali:any;

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  //atributos
  retornoComentario="";
  prueba="";

datoscomentarios = new FormGroup({
   comentario: new FormControl(' '),

});



  //metodos
  recoger_comentarios(){
    let comentario1=this.datoscomentarios.value.comentario;
    let retorno = comentario_vali(comentario1);
    let prueba1 =comentario1;
    this.retornoComentario=retorno;
    this.prueba=prueba1;



  }

  constructor() { }

  ngOnInit(): void {
  }

}
