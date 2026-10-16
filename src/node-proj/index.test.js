const test = require('node:test');
const assert = require('node:assert');
test('formats', () => assert.strictEqual(require('./index.js')(1000), '1s'));
