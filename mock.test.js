//server/mock.test.js

//mock getData and process the mocked Data
//mock module
//('module Url', function)
jest.mock('./test/utils',()=>{
    {getData: jest.fn(),}  

});

const {getData}=require('./test/utils');
const processData=require('./test/processData');
//mockReturnValue ->
Test("Mocked the process data",()=>{
    //mock the return value
    getData.mockReturnValue('Mocked Data');
    expect(processData()).toBe('processed:Mocked Data');

});