const capitalize = require('./capitalize');
test('capitalize',()=>{
    //act
    const res = capitalize('developer');
    //assert
    expect(res).toBe('Developer');
})