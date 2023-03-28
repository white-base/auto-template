/**
 * ES6 + CJS
 */
//==============================================================
// gobal defined
const index   = require('../');

//==============================================================
// test
describe('index 타입 검사', () => {
    beforeAll(() => {
    });
    it('- named export check ', () => {
        expect(typeof index.AutoTemplate).toBe('function');
    });
});
