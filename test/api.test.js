//api.test.js
const { default: test } = require('node:test');
const  fetchData=require('./test/api');
const fetch=require('node-fetch');
//npm install node-fetch

test('GET/users api data',async()=>{
    const data=await fetchData();
    console.log(data);
    expect(data).ToHaveProperty('getAllUsers');
    //test if all data has 4 pairs
    data.getAllUsers.forEach(user=>{
        expect(user).ToHaveProperty('id')
        expect(user).ToHaveProperty('name')
        expect(user).ToHaveProperty('email')

    }))