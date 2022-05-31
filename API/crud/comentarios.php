<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Access-Control-Allow-Methods: POST');

if($_SERVER['REQUEST_METHOD'] === 'POST'){

$json = file_get_contents('php://input');

$params = json_decode($json);

require("../base/conexion.php");

$conexion = conexion();


$result=mysqli_query($conexion,"INSERT INTO comentariostab (comentario) VALUES ('$params->comentario')");


class  Result{

}

 // GENERA LOS DATOS DE RESPUESTA
 $response = new Result();
 $response->resultado = 'OK';
 $response->mensaje = 'mensaje EXITOSO';
 $response->comentario1=$params->comentario;


 /*if($resultado->num_rows > 0) {
     $response->resultado = 'OK';
     $response->mensaje = 'mensaje EXITOSO';
     $response->comentario1=$params->comentario;
 } else {
     $response->resultado = 'FAIL';
     $response->mensaje = 'mensaje FALLIDO';
     $response->comentario1="xx";
 }*/

 header('Content-Type: application/json');

 echo json_encode($response); // MUESTRA EL JSON GENERADO
 }

?>




