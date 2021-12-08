function nombre_vali(nombreUsuario1){

    let tamano= String(nombreUsuario1).length;

    if (nombreUsuario1== null || nombreUsuario1.length == 0){
        return "campo vacio"
    }

    for(x=0; x<tamano; x++){

        c=nombreUsuario1.charAt(x);

        if ( !((c>='a' && c<='z' )||(c>='A'&& c<='Z')  ||(c===' ') || (c=='ñ') ||( c=='Ñ')) ){

        return "Solo se permiten digitar letras";
     } 
    } 

   return"ok";  
     

}

function correo_vali(correo1){

    if (correo1== null || correo1.length == 0){
        return "campo vacio"
    }

    let tamano= String(correo1).length;

    for(x=0; x<tamano; x++){

        c=correo1.charAt(x);
    
        if ( !((c=='@' ) && ((c>='a' && c<='z' )||(c>='A'&& c<='Z')|| (c>=0 && c<=9)))){

        return "Falta el simbolo'@'";
     } 
    } 

   return"ok2";  
     
}