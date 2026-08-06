<?php
/**
 * IntelliForceAI - Visit Counter PHP Backend
 * Deployed on cPanel shared hosting. Increments and returns a persisted
 * total-visit count on every page load, stored in a flat file alongside
 * this script (outside of public_html web-servable data whenever possible).
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method Not Allowed']);
    exit;
}

$counterFile = __DIR__ . '/visits.count';

$fp = fopen($counterFile, 'c+');
if ($fp === false) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Unable to access counter storage.']);
    exit;
}

$count = 0;

if (flock($fp, LOCK_EX)) {
    $contents = stream_get_contents($fp);
    $count = (int) trim($contents);
    $count++;

    ftruncate($fp, 0);
    rewind($fp);
    fwrite($fp, (string) $count);
    fflush($fp);
    flock($fp, LOCK_UN);
} else {
    http_response_code(500);
    fclose($fp);
    echo json_encode(['success' => false, 'message' => 'Could not lock counter storage.']);
    exit;
}

fclose($fp);

echo json_encode(['success' => true, 'count' => $count]);
