<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Access-Control-Allow-Methods: POST');

if($_SERVER['REQUEST_METHOD'] === 'POST'){

session_start();
$recibido=$_SESSION['cliente'];
}
?>


!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>bienvenidos</title>
</head>
<body>
<h1>Bienvenido <?php echo $recibido?></h1>

</body>
</html>
