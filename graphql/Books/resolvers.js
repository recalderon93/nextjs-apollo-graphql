import booksData from './data';

console.log(booksData)
function getBooks() {
  return booksData;
}
const resolvers = {
  Query: {
    books: (parent, args, context, info) => booksData,
  },
};

export default resolvers;