const {add} = require('./new');
const test = require('node:test');
const assert = require('node:assert');
test('add function',()=>{
    assert.strictEqual(add(1,2),3);
})