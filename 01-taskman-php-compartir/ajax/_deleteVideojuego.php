<?php
// Recibe como parámetro el ID de la tarea que debe eliminar
// La elimina y retorna el resultado. 

    // Pasa la entrada a json
    $json = file_get_contents('php://input');

    // Aquí tenemos un array con los parámetros de entrada
    $objeto = json_decode($json, TRUE);

    // Obtiene los valores que vienen en el array asociativo
    $id = $objeto['id'];

    // Obtiene la lógica de negocio de Tareas
    $lnVideojuegos = LnVideojuegos::singletonVideojuegos();

    // Elimina el registro
    $r = $lnVideojuegos->deleteVideojuego($id);

    // Prepara la respuesta en caso de éxito
    $respuesta['ok'] = $r?"1":"0";
    $respuesta['mensaje'] = "";
    $respuesta['datos'] = "";            
?>