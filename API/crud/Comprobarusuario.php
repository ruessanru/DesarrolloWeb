<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Access-Control-Allow-Methods: POST');


if($_SERVER['REQUEST_METHOD'] === 'POST'){

$json = file_get_contents('php://input');

$params = json_decode($json);

// collect value of input field

$prueba = $params->nombreUsuario;
$prueba2 =$params->contrasena1;

require("../base/conexion.php");

$conexion = conexion();

//$registro=mysqli_query($conexion,"SELECT  id_usuario, nombreUsuario1, contrasena11 FROM usuarios WHERE nombreUsuario1='$prueba'");

$resultado = mysqli_query($conexion, "SELECT * FROM usuarios WHERE nombreUsuario1='$params->nombreUsuario' ");


$rrr=mysqli_fetch_assoc($resultado); //preguntar que hace esto

//AND contrasena11='$params->contrasena1'
if(password_verify($prueba2, $rrr['contrasena11'])){

    class Result {}

    // GENERA LOS DATOS DE RESPUESTA
    $response = new Result();

    if($resultado->num_rows > 0) {
        $response->resultado = 'OK';
        $response->mensaje = 'LOGIN EXITOSO';
        $response->nombrein=$params->nombreUsuario;
    } else {
        $response->resultado = 'FAIL';
        $response->mensaje = 'LOGIN FALLIDO';
        $response->nombrein="";
    }

    header('Content-Type: application/json');

    echo json_encode($response); // MUESTRA EL JSON GENERADO
    }
  }
?>


