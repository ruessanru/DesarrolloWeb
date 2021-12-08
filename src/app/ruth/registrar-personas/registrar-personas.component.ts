import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
declare var nombre_vali:any;
declare var retornoNombre:any;
declare var correo_vali:any;
declare var retornoCorreo:any;
declare var contrasena1_vali:any;
declare var contrasena2_vali:any;



@Component({
  selector: 'app-registrar-personas',
  templateUrl: './registrar-personas.component.html',
  styleUrls: ['./registrar-personas.component.css']
})
export class RegistrarPersonasComponent implements OnInit {

//atributos
 nombre= "Ruth";
 retornoNombre=" ";
 retornoCorreo=" ";
 retornoContrasena1=" ";
 retornoContrasena2=" ";
 



 datosformulario= new FormGroup({
   nombreUsuario: new FormControl(''),
   correo: new FormControl(''),
   contrasena1: new FormControl (''),
   contrasena2: new FormControl('')


 })

 //métodos

 recoger_datos(){

  let nombreUsuario1=this.datosformulario.value.nombreUsuario;
  let retorno =nombre_vali(nombreUsuario1);
  this.retornoNombre=retorno;

  let correo1=this.datosformulario.value.correo;
  let retorno1 =correo_vali(correo1);
  this.retornoCorreo=retorno1;

  let contrasena11=this.datosformulario.value.contrasena1;
  let retorno2= contrasena1_vali(contrasena11);
  this.retornoContrasena1=retorno2;

  let contrasena21=this.datosformulario.value.contrasena2;
  let retorno3 = contrasena2_vali(contrasena11,contrasena21);
  this.retornoContrasena2=retorno3;

  


  
  
   
 }

  constructor() { }

  ngOnInit(): void {
  }

}
