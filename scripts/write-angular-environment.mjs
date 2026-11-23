import { mkdirSync, writeFileSync } from 'node:fs';

const apiUrl = new URL(process.env.DIRECTUS_API_URL ?? '');
if (apiUrl.protocol !== 'https:' || apiUrl.username || apiUrl.password || apiUrl.search || apiUrl.hash) {
  throw new Error('DIRECTUS_API_URL moet een publiek HTTPS-adres zonder inloggegevens zijn.');
}

const directory = new URL('../src/environments/', import.meta.url);
mkdirSync(directory, { recursive: true });
const environment = {
  production: true,
  api_url: apiUrl.href.replace(/\/+$/, ''),
};
writeFileSync(
  new URL('environment.ts', directory),
  `export const environment = ${JSON.stringify(environment, null, 2)};\n`,
);
