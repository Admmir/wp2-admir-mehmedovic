<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require_once '../../config/db.php';

$data = json_decode(file_get_contents("php://input"));

$required = ['username', 'password', 'email', 'first_name', 'last_name'];
foreach ($required as $field) {
    if (!isset($data->$field)) {
        http_response_code(400);
        echo json_encode(['error' => "Missing required field: $field"]);
        exit;
    }
}

$stmt = $pdo->prepare("SELECT id FROM users WHERE username = ? OR email = ?");
$stmt->execute([$data->username, $data->email]);
if ($stmt->fetch()) {
    http_response_code(400);
    echo json_encode(['error' => 'Username or email already exists']);
    exit;
}

$stmt = $pdo->prepare("
    INSERT INTO users (username, password, email, first_name, last_name, role)
    VALUES (?, ?, ?, ?, ?, 'user')
");

$hashedPassword = password_hash($data->password, PASSWORD_BCRYPT);
$success = $stmt->execute([
    $data->username,
    $hashedPassword,
    $data->email,
    $data->first_name,
    $data->last_name
]);

if ($success) {
    http_response_code(201);
    echo json_encode(['message' => 'User registered successfully']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to register user']);
}
?>