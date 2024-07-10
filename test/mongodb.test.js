const mongoose=require('mongoose')
const { describe, default: test } = require('node:test')
describe('Mongo connected',()=>{
    beforeAll(async()=>{
        const url= 'mongodb+srv://balasarayudevarakonda:AktXPkon5xXMtoF1@cluster0.blhrd3i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
        await mongoose.connected(url);
    })
    //cal test case inside describe and below all
    test('MongoDB connected to server',()=>{
        hasUncaughtExceptionCaptureCallback(mongoose.connection.readyState).toBe(1)
})

});