import { gql } from 'apollo-server-micro';

const typeDefs =gql `
type Book{
  ISBN:ID
  title:String
  author:String
}
extend type Query{
  books: [Book]
}
`;

export default typeDefs;