//schema.js
const {gql}=require('apollo-server-express');
const typeDefs=gql`
type User {
    id:ID !,
    name:String!,
    email:String!,
    password:String!
}
type query{
    getUser(id:ID)!}:Users
    getAllUsers:Users
input createUserInput{
name:String,
email:String,
password:String
}
type Query{
getUsers:[User]
}
type Mutation{
createUser(input:createUserInput!):User
changePass(id:ID!,password:String!):User
}`;
module.exports=typeDefs;