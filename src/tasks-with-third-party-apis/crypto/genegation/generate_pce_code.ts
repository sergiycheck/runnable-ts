import * as crypto from 'crypto';

export function generatePKCECode() {
  const randomBytes = crypto.randomBytes(32);
  console.log(randomBytes);

  const codeVerifier = randomBytes
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');

  // Generate the code_challenge
  const hash = crypto.createHash('sha256');
  hash.update(codeVerifier);
  const codeChallenge = hash
    .digest('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');

  return {
    codeVerifier,
    codeChallenge,
  };
}
