
function nombre_vali(nombreUsuario){

    let tamano= String(nombreUsuario).length;

    if (nombreUsuario== null || nombreUsuario.length == 0){
        return "campo vacio";
    }

    for(x=0; x<tamano; x++){

        c=nombreUsuario.charAt(x);

        if ( !((c>='a' && c<='z' )||(c>='A'&& c<='Z')  ||(c===' ') || (c=='ñ') ||( c=='Ñ')) ){

        return "Solo se permiten digitar letras";
        }

    }

   return" ";


}

function correo_vali(correo){

    if (correo== null || correo.length == 0){
        return "campo vacio"
    }
    if( (/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(correo)) ||(/\w+([-+.']\w+)*@\w+([-.]\w+)/.test(correo)) ) {
        return " ";
      }else{
          return "correo inválido";
      }



 return"ok2";

}

function contrasena1_vali(contrasena1){
    if (contrasena1== null || contrasena1.length == 0){
        return "campo vacio";
    }
    if (contrasena1.length<8){
        return "Ingrese una contraseña >= 8 caracteres";

    }
    return " ";

}


function contrasena2_vali(contrasena1,contrasena2){
    if(!(contrasena2 == contrasena1)){
        return "La contraseña no coincide";


    }
    return" ";

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

  if ( comentario1.length > 100){
    return " Excede el número de caracteres ";

  }else if (comentario1== null || comentario1.length == 0){
  return "campo vacio";
  }
return "ok"
}
