import dotenv from 'dotenv';

// ✅ Load environment variables from .env file once
dotenv.config();

/**
 * Get a required environment variable and throw error if missing.
 */
export function getEnvVariable(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Environment variable "${key}" is not set.`);
  }
  return value;
}
