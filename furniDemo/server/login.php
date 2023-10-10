<?php

if($_SERVER['REQUEST_METHOD']==='POST'){
    $username = $_POST['username'];
    $password = $_POST['password'];

    $response = [
        'message' => 'Data sent succesfully',
        'username' => $username,
        'password' => $password
    ];
    echo json_encode($response);
} else {
    http_response_code(400);
    echo json_encode(['error'=>'Invalid request']);
}