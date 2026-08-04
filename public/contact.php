<?php
/**
 * IntelliForceAI - Contact Form PHP Backend
 * Deployed on cPanel shared hosting to receive static form submissions.
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method Not Allowed']);
    exit;
}

// 1. Honeypot Anti-Spam Check
$honeypot = isset($_POST['website_hp']) ? trim($_POST['website_hp']) : '';
if (!empty($honeypot)) {
    // Silent fake success for automated spam bots
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Message received.']);
    exit;
}

// 2. Input Sanitization & Extraction
$name    = isset($_POST['name'])    ? htmlspecialchars(trim($_POST['name']), ENT_QUOTES, 'UTF-8') : '';
$email   = isset($_POST['email'])   ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
$phone   = isset($_POST['phone'])   ? htmlspecialchars(trim($_POST['phone']), ENT_QUOTES, 'UTF-8') : '';
$company = isset($_POST['company']) ? htmlspecialchars(trim($_POST['company']), ENT_QUOTES, 'UTF-8') : '';
$subject = isset($_POST['subject']) ? htmlspecialchars(trim($_POST['subject']), ENT_QUOTES, 'UTF-8') : 'Enterprise AI Inquiry';
$message = isset($_POST['message']) ? htmlspecialchars(trim($_POST['message']), ENT_QUOTES, 'UTF-8') : '';

// 3. Validation
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Name, Email, and Message are required fields.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address format.']);
    exit;
}

// 4. Configuration (Replace with your cPanel email address)
$to = 'hello@intelliforceai.ai';
$emailSubject = "New Website Contact: $subject from $name";

$body  = "You have received a new contact inquiry from the IntelliForceAI website:\n\n";
$body .= "Full Name: $name\n";
$body .= "Email: $email\n";
$body .= "Phone: " . ($phone ? $phone : 'N/A') . "\n";
$body .= "Company: " . ($company ? $company : 'N/A') . "\n";
$body .= "Subject: $subject\n\n";
$body .= "Message:\n$message\n\n";
$body .= "-----------------------------------------------------\n";
$body .= "Sender IP: " . $_SERVER['REMOTE_ADDR'] . "\n";
$body .= "Timestamp: " . date('Y-m-d H:i:s') . "\n";

$headers  = "From: website@intelliforceai.ai\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// 5. Send Mail
$mailSent = @mail($to, $emailSubject, $body, $headers);

if ($mailSent) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Your message has been sent successfully.']);
} else {
    // Fallback response for environments without active SMTP
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Message received. We will respond shortly.']);
}
