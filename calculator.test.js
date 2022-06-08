const calculate = require('./calculator.js');
describe('calculator',()=>{
    test('check add', ()=>{
        //arrange
        const calc = new calculate();
        //act
        const res = calc.add(10,40);
        //assert
        expect(res).toBe(50);

    })
    test('check subtract', ()=>{
        //arrange
        const calc = new calculate();
        //act
        const res = calc.sub(90,40);
        //assert
        expect(res).toBe(50);

    })
    test('check multiply', ()=>{
        //arrange
        const calc = new calculate();
        //act
        const res = calc.mult(10,40);
        //assert
        expect(res).toBe(400);

    })
})