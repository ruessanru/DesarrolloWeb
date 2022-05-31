import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ServiciogeneralService} from '../serviciogeneral.service';

declare var nombre_vali:any;
declare var retornoNombre:any;
declare var contrasena1_vali:any;

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  //atributos
 nombre= "Ruth";
 retornoNombre=" ";
 retornoContrasena1=" ";

 usuarioin="";

  usuario={
    id_usuario:"",
    nombreUsuario1: "",
    contrasena11: ""
  }



 datosformulario= new FormGroup({
 nombreUsuario: new FormControl(''),
 contrasena1: new FormControl (''),



 })

 //métodos

 recoger_datos(){

  let nombreUsuario=this.datosformulario.value.nombreUsuario;
  let contrasena1= this.datosformulario.value.contrasena1;

  //let retorno =nombre_vali(nombreUsuario);
  //this.retornoNombre=retorno;

  //let retorno2= contrasena1_vali(contrasena1);
  //this.retornoContrasena1=retorno2;

  //if ( retorno2==" " && retorno2==" "){
  //retorno2==" " ){

    this.APIService.ComprobarUsuario(this.datosformulario.value).subscribe((data:any) => {

      if(data['resultado'] == 'OK'){
        //ventana_exito();
        alert(data['mensaje']);
      }else{
        //ventana_incorrecta();
      alert(data['mensaje']);
      }
      this.usuarioin=data['nombrein'];
    }


  )//}


}

  constructor(private APIService:ServiciogeneralService) { }

  ngOnInit(): void {

  }


  }

