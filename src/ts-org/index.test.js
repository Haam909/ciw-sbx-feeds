const test = require('node:test');
const assert = require('node:assert');
test('formats', () => assert.strictEqual(require('./dist/index.js').format(1000), '1s'));
