const Test = require("supertest/lib/test");

//server/env.test.js
let datasets=[];
///excutes my env before all
brforeAll(()=>{
    dataSets=['sarayu','hari'];

})
beforeEach(()=>{
    console.log('Before Each setup is called');

})
afterEach(()=>{
    console.log('After Each setup is called');

})
afterAll(()=>{
    dataSets=[];
})
test ('Test Case',()=>{
    expect(dataSets.length).toBE(2);
})
test('Data set contain',()=>{
    expect(dataSets).contains('sarayu');
})
test('Data set contain',()=>{
    expect(dataSets).contains('hari');
})

//to run the terminal "npm test"