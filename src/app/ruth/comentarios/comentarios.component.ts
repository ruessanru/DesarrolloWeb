import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ServiciogeneralService} from '../serviciogeneral.service';
declare var comentario_vali:any;
declare var ventana_exito:any;

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  //atributos
  retornoComentario="";
  prueba="";
  comentarioin="";

datoscomentarios = new FormGroup({
   comentario: new FormControl(' '),

});



  //metodos
  recoger_comentarios(){
    let comentario1=this.datoscomentarios.value.comentario;
    let retorno = comentario_vali(comentario1);

    this.APIService.InsertarComentario(this.datoscomentarios.value).subscribe((data:any) => {

      if(data['resultado'] == 'OK'){
        //ventana_exito();
        alert(data['mensaje']);
      }else{
        //ventana_incorrecta();
      alert(data['mensaje']);
      }
      this.comentarioin=data['comentario1'];
    }


  )

    let prueba1 =comentario1;
    this.retornoComentario=retorno;
    this.prueba=prueba1;



  }

  constructor(private APIService:ServiciogeneralService) { }

  ngOnInit(): void {
  }

}
