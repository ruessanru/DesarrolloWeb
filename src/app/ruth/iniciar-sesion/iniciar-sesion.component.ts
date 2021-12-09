import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
 
 
 datosformulario= new FormGroup({
 nombreUsuario: new FormControl(''),
 contrasena1: new FormControl (''),
   


 })

 //métodos

 recoger_datos(){

  let nombreUsuario1=this.datosformulario.value.nombreUsuario;
  let retorno =nombre_vali(nombreUsuario1);
  this.retornoNombre=retorno;

  let contrasena11=this.datosformulario.value.contrasena1;
  let retorno2= contrasena1_vali(contrasena11);
  this.retornoContrasena1=retorno2;

  
   
 }

  constructor() { }

  ngOnInit(): void {
  }

}
