<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require_once '../../config/db.php';

$stmt = $pdo->query("
    SELECT n.*, c.name as category_name, u.username as author_name 
    FROM news n
    LEFT JOIN categories c ON n.category_id = c.id
    LEFT JOIN users u ON n.author_id = u.id
    WHERE n.is_approved = 1
    ORDER BY n.created_at DESC
");

$news = $stmt->fetchAll();

echo json_encode($news);
?>