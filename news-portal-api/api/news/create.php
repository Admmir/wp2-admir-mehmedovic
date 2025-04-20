<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require_once '../../config/db.php';

$data = json_decode(file_get_contents("php://input"));

if (!isset($data->title) || !isset($data->content) || !isset($data->category_id) || !isset($data->author_id)) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}

$stmt = $pdo->prepare("
    INSERT INTO news (title, content, category_id, author_id, image_url, is_approved)
    VALUES (?, ?, ?, ?, ?, ?)
");

$success = $stmt->execute([
    $data->title,
    $data->content,
    $data->category_id,
    $data->author_id,
    $data->image_url ?? null,
    $data->is_approved ?? 0
]);

if ($success) {
    $newsId = $pdo->lastInsertId();
    http_response_code(201);
    echo json_encode(['id' => $newsId, 'message' => 'News created successfully']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to create news']);
}
?>