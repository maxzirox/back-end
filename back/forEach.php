<?php
   $meses = array('Enero', 'Febrero', 'Marzo', 'Abril', 
   'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiempre',
   'Octubre', 'Noviembre', 'Diciembre');
  
   foreach($meses as $mes){
      echo 'mes: '.$mes.
   }
?>

<!DOCTYPE html>
<html lang="es">
   <head>
      <meta charset="UTF-8">
      <title>Document</title>
   </head>
   <body>
      <ul>
      <?php
         foreach($meses as $mes){
            echo '<li>'.'mes: '.$mes.' </li>'
         }
      ?>
      </ul>
   </body>
</html>
