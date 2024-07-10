//test/async.js
//how can perform unit tests on asybc

const Test = require("supertest/lib/test");

//function 
function fetchData(callback){
    setTimeout(()=>{
        callback('admin')
    },4000);
}

//calls admin after 4 sec
module.exports=fetchData();

