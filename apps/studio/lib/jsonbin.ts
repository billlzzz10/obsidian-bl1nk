interface LogData {
  originalCode: string;
  sanitizedCode: string;
  errorType: string;
  timestamp: string;
}

export async function logErrorToBin(logData: LogData): Promise<void> {
  const apiKey = process.env.NEXT_PUBLIC_JSONBIN_API_KEY;
  const binId = process.env.NEXT_PUBLIC_JSONBIN_ERROR_LOG_BIN_ID;

  if (!apiKey || !binId) {
    console.warn("JSONBin.io API key or Bin ID is not configured. Skipping error logging.");
    return;
  }

  try {
    const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': apiKey,
      },
      body: JSON.stringify(logData),
    });

    if (!response.ok) {
      console.error("Failed to log error to JSONBin.io:", await response.text());
    }
  } catch (error) {
    console.error("An error occurred while logging to JSONBin.io:", error);
  }
}
