//test/procewss.js

const {getData}=request('./util');
function processData(){
    return `processed:${getData}`;
    //processed real data;
}

module.exports=processData;