<?php
// Simple password protection
$valid_password = "silly";
$entered_password = $_POST['password'] ?? '';

if ($entered_password !== $valid_password) {
    echo json_encode(['error' => 'Unauthorized']);
    exit;
}

// Get the text from the POST request
$text = $_POST['text'] ?? '';

if ($text) {
    // Log the text into a file (e.g., logs.txt)
    $logFile = 'logs.txt';
    $timestamp = date('Y-m-d H:i:s');
    $logMessage = "[{$timestamp}] {$text}\n";
    file_put_contents($logFile, $logMessage, FILE_APPEND);

    // Return a success message
    echo json_encode(['success' => 'Text logged successfully']);
} else {
    echo json_encode(['error' => 'No text provided']);
}
?>
