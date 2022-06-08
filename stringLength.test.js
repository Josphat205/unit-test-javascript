const stringlength = require('./stringLength');
describe("stringlength",()=>{
    test("stringlenth", ()=>{
        //act
        const res = stringlength('kiploman');
        //assert
        expect(res).toBe(8)
    })
   
})

