export type GoogleTokenSet = {
  accessToken: string;
  refreshToken: string;
  expiryDate?: number;
  scope: string;
};

export async function exchangeCodeForTokens(code: string): Promise<GoogleTokenSet> {
  return {
    accessToken: `mock-access-${code}`,
    refreshToken: `mock-refresh-${code}`,
    expiryDate: Date.now() + 3600 * 1000,
    scope: "https://www.googleapis.com/auth/gmail.readonly"
  };
}

export function getOAuthConsentUrl() {
  return "https://accounts.google.com/o/oauth2/v2/auth";
}
