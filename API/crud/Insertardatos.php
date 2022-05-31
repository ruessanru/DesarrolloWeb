<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Access-Control-Allow-Methods: POST');

if($_SERVER['REQUEST_METHOD'] === 'POST'){

$json = file_get_contents('php://input');

$params = json_decode($json);

require("../base/conexion.php");

$conexion = conexion();

$contrasenaprueba=password_hash($params->contrasena1,PASSWORD_BCRYPT);


mysqli_query($conexion,"INSERT INTO usuarios (nombreUsuario1, correo1, contrasena11, contrasena21) VALUES ('$params->nombreUsuario', '$params->correo', '$contrasenaprueba','$params->contrasena2')");


class  Result{

}
$response = new Result();
$response -> resultado ='OK';
$response -> mensaje = 'Se registró con éxito';

header('Content-Type: application/json');

echo json_encode($response);
}

?>
