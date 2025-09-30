<?php
// CORS preflight
$origin = $_SERVER['HTTP_ORIGIN'] ?? '*';
header('Access-Control-Allow-Origin: ' . $origin);
header('Vary: Origin');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

header('Content-Type: application/json');

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$message = trim($data['message'] ?? '');

if ($name === '' || $email === '' || $message === '') {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Champs requis manquants.']);
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Email invalide.']);
  exit;
}

require __DIR__ . '/../vendor/autoload.php';

$to = getenv('CONTACT_TO') ?: 'contact@example.com';
$host = getenv('SMTP_HOST') ?: '';
$user = getenv('SMTP_USER') ?: '';
$pass = getenv('SMTP_PASS') ?: '';
$port = getenv('SMTP_PORT') ?: 587;
$secure = getenv('SMTP_SECURE') ?: PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;

$mail = new PHPMailer\PHPMailer\PHPMailer(true);

try {
  if ($host) {
    $mail->isSMTP();
    $mail->Host = $host;
    $mail->SMTPAuth = true;
    $mail->Username = $user;
    $mail->Password = $pass;
    $mail->SMTPSecure = $secure;
    $mail->Port = (int)$port;
  }

  $mail->setFrom($email, $name);
  $mail->addAddress($to);
  $mail->Subject = 'Nouveau message du portfolio';
  $mail->isHTML(true);
  $mail->Body = nl2br(htmlspecialchars($message));
  $mail->AltBody = $message;

  $mail->send();
  echo json_encode(['ok' => true]);
} catch (Throwable $e) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Envoi impossible.']);
}
