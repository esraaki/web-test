import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const config = JSON.parse(fs.readFileSync(new URL('../vercel.json', import.meta.url), 'utf8'));

test('Vercel serves the SPA for /concepts', () => {
  assert.ok(Array.isArray(config.rewrites));
  assert.ok(config.rewrites.some(r => r.source === '/concepts' && r.destination === '/index.html'));
});

test('nested concepts paths also resolve to the SPA', () => {
  assert.ok(config.rewrites.some(r => r.source === '/concepts/(.*)' && r.destination === '/index.html'));
});
