import { Injectable } from '@angular/core';
import { Modulo } from './modulo';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciogeneralService {

  URL_viaje='https://localhost/ciclog29unab/API/Insertardatos.php' //Aquí va la url del backend

  constructor(private http:HttpClient) { }

  InsertarDatos(usuario:Modulo){
    //comunicar con la base de datos

    alert("llego alservicio" + JSON.stringify(usuario));
    return this.http.post<Modulo>(this.URL_viaje,usuario);
  }
}
