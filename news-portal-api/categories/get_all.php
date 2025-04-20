<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require_once '../../config/db.php';

$stmt = $pdo->query("SELECT * FROM categories ORDER BY name");
$categories = $stmt->fetchAll();

echo json_encode($categories);
?>