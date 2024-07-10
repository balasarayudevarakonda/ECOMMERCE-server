//trst cases for unit fun sum

const sum=require('./test/sum')

//jest test cases
//test function to test
Test('function should return3',()=>{
    expect(sum(1,2)).toBe(3);
    //toBe()->exactly equal
    //expect
})
//run 'npm test ' under server folder

Test('Object in array',()=>{
    const data={one:1}
    data['two']=2;
    expect(data).toEqual({one:1,two:2});
})


//toBeNull ->if the recived value is NULL
Test('Value is NULL',()=>{
    const n=null; //OR NULL REPLACE ON 1 
    expect(n).toBeNull();
})

//toBeDefined -> if a value /varible is defined or not
Test('Value is Defined ',()=>{
    const a=1;
    expect(a).toBeDefined();
})
/*or
Test('url is Defined ',()=>{
    const url='sarayuy@gmailurl';
    expect(a).toBeDefined();
}) */



//testTruly-> recived value should be truth

Test('Value is True',()=>{
    const bool=true
    expect(bool).toBeTruthly();
})

//testFalse -> recivied value should be false


