function nombre_vali(nombreUsuario1){

    let tamano= String(nombreUsuario1).length;

    if (nombreUsuario1== null || nombreUsuario1.length == 0){
        return "campo vacio";
    }

    for(x=0; x<tamano; x++){

        c=nombreUsuario1.charAt(x);

        if ( !((c>='a' && c<='z' )||(c>='A'&& c<='Z')  ||(c===' ') || (c=='ñ') ||( c=='Ñ')) ){

        return "Solo se permiten digitar letras";
     } 
    } 

   return" ";  
     

}

function correo_vali(correo1){

    if (correo1== null || correo1.length == 0){
        return "campo vacio"
    }
    if( (/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(correo1)) ||(/\w+([-+.']\w+)*@\w+([-.]\w+)/.test(correo1)) ) {
        return " ";
      }else{
          return "correo inválido";
      }

   

   return"ok2";  
     
}

function contrasena1_vali(contrasena11){
    if (contrasena11== null || contrasena11.length == 0){
        return "campo vacio"; 


}
}

function contrasena2_vali(contrasena11,contrasena21){
    if(!(contrasena21 == contrasena11)){
        return "La contraseña no coincide";
        
        
    }

}