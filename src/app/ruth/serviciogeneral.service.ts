import { Injectable } from '@angular/core';
import { Modulo } from './modulo';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciogeneralService {

  URL_viaje='http://localhost/ciclog29unab/API/crud/' //Aquí va la url del backend

  constructor(private http:HttpClient) { }

  InsertarDatos(usuario:Modulo){
    //comunicar con la base de datos

    alert("llego alservicio" + JSON.stringify(usuario));

     return this.http.post<Modulo>(`${this.URL_viaje}Insertardatos.php`,usuario);
  }

  ComprobarUsuario(usuario:Modulo){

    alert("llego alservicio" + JSON.stringify(usuario));
    //alert("llego alservicio" + JSON.stringify(contrasena1));

    return this.http.post<Modulo>(`${this.URL_viaje}Comprobarusuario.php`,usuario);
  }

  lista_comentarios(){
    return this.http.get(`${this.URL_viaje}Listarcomentarios.php`);

  }


  InsertarComentario(usuario:Modulo){
    alert("llego alservicio" + JSON.stringify(usuario));

    return this.http.post<Modulo>(`${this.URL_viaje}comentarios.php`,usuario);
  }

//lista_datos(){
  //return this.http.get(`${this.URL_viaje}Listardatos.php`);

}


