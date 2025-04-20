<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require_once '../../config/db.php';

$data = json_decode(file_get_contents("php://input"));

if (!isset($data->username) || !isset($data->password)) {
    http_response_code(400);
    echo json_encode(['error' => 'Username and password are required']);
    exit;
}

$stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
$stmt->execute([$data->username]);
$user = $stmt->fetch();

if ($user && password_verify($data->password, $user['password'])) {
    unset($user['password']);
    echo json_encode($user);
} else {
    http_response_code(401);
    echo json_encode(['error' => 'Invalid username or password']);
}
?>