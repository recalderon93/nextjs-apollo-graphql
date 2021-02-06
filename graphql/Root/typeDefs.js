import { gql } from 'apollo-server-micro';
import Books from '../Books';

const rootDefs = gql`
type Query{
  root: String
}
type Mutation{
  root: String
}`;

const typeDefs = [rootDefs, Books.typeDefs]
export default typeDefs;