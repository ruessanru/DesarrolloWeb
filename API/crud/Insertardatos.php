<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

$json =file_get_contents('php://input');

$params = json_decode($json);

require("../base/conexion.php")

$conexion = conexion();

mysqli_queri($conexion,"INSERT INTO usuarios ( nombreUsuario1, correo1, contrasena11, contrasena21) VALUES ('$params -> nombreUsuario1', '$params -> correo1', '$params -> contrasena11','$params -> contrasena21')");

class  Result{

}
$response = new Result();
$response -> resultado ='OK';
$response -> mensaje = 'Se registró con éxito';

header('Content-Type: application/json');

?>
