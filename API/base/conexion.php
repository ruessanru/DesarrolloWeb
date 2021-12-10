<?php
global $enlace;

function conexion(){

  $enlace=mysqli_connect('localhost', 'root', '', 'enjoyenglishdb'); //si fuera un servidor aqui va la IP

  if(!$enlace){

    echo "Error: no se puede conectar a la base de datos";
    exit;
  }
  return $enlace;
}


?>
