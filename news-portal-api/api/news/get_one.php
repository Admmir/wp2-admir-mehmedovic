<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require_once '../../config/db.php';

if (!isset($_GET['id'])) {
    http_response_code(400);
    echo json_encode(['error' => 'News ID is required']);
    exit;
}

$stmt = $pdo->prepare("
    SELECT n.*, c.name as category_name, u.username as author_name 
    FROM news n
    LEFT JOIN categories c ON n.category_id = c.id
    LEFT JOIN users u ON n.author_id = u.id
    WHERE n.id = ?
");
$stmt->execute([$_GET['id']]);
$news = $stmt->fetch();

if ($news) {
    echo json_encode($news);
} else {
    http_response_code(404);
    echo json_encode(['error' => 'News not found']);
}
?>