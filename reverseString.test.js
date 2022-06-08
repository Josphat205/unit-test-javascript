const reverseString = require('./reverseString.js');

describe('my test', ()=>{
    test("test reverse correct", ()=>{
        //act
        const res = reverseString('welcome');
        //assert
        expect(res).toBe('emoclew');
    })
})