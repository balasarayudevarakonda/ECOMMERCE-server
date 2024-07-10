//async.test.js
const fetchData=require('./test/async');
test('Callback Data',done=>{
    function callback(data){
        try{
            expect(data).toBe('admin');
            done();
        }catch(err){
            done(err);
        }
    }
    fetchData(callback);
})

//MOCK FUNCTION
test('Mocking callback function',done=>{
    const MockFunction=jest.fn(data=>{
        expect(data).toBe('admin');
        //console/log("Mock FUncion")
        done();

    })
    fetchData(MockFunction);
})
