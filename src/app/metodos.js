
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
function telefono_vali(telefono1){
    let tamano= String(telefono1).length;

    if (telefono1== null || telefono1.length == 0){
        return  "campo vacío";
    }

    for(x=0; x<tamano; x++){

        c=telefono1.charAt(x);

        if ( !((c>='0' && c<='9' ) )){

        return "Solo se permiten digitar números";
     }
    }

   return"OK ";


}
function apellido_vali(apellidoUsuario1){
    let tamano= String(apellidoUsuario1).length;

    if (apellidoUsuario1== null || apellidoUsuario1.length == 0){
        return "campo vacio";
    }

    for(x=0; x<tamano; x++){

        c=apellidoUsuario1.charAt(x);

        if ( !((c>='a' && c<='z' )||(c>='A'&& c<='Z')  ||(c===' ') || (c=='ñ') ||( c=='Ñ')) ){

        return "Solo se permiten digitar letras";
     }
    }

   return" ";
}

function comentario_vali(comentario1){

  if ( comentario1.length > 10){
    return " Excede el número de caracteres ";

  }else if (comentario1== null || comentario1.length == 0){
  return "campo vacio";
  }
return "ok"
}
