import { logErrorToBin } from './jsonbin';

function sanitize(code: string): string {
  // A simple sanitizer to remove script and iframe tags.
  // This is a basic implementation and can be improved with a more robust library like DOMPurify in the future.
  const sanitizedCode = code
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<iframe\b[^>]*>[\s\S]*?<\/iframe>/gi, '');

  return sanitizedCode;
}

export async function process(rawCode: string): Promise<string> {
  const sanitizedCode = sanitize(rawCode);

  if (rawCode !== sanitizedCode) {
    const logData = {
      originalCode: rawCode,
      sanitizedCode: sanitizedCode,
      errorType: 'Unsafe HTML detected',
      timestamp: new Date().toISOString(),
    };
    await logErrorToBin(logData);
  }

  return sanitizedCode;
}
