<?php
$host = 'sql7.freesqldatabase.com';
$port = 3306;
$db   = 'sql7774314';
$user = 'sql7774314';
$pass = 'WNnF29R1t5';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;port=$port;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
    echo "Connected successfully!";
} catch (\PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>
