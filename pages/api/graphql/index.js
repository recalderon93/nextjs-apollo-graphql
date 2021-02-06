import { ApolloServer } from 'apollo-server-micro';
import cors from 'micro-cors';
import schema from '../../../graphql/Root';

/** Cors Configuration, using the default React development Port
 */
console.log(schema);
const corsDef = cors({
  origin: 'http://localhost:3000',
  credentials:true,// <-- REQUIRED backend setting
})

/** Creating the Apollo Server, using the schema created in the graphql folder in the root of the project */
const apolloServer = new ApolloServer({
  typeDefs: schema.typeDefs,
  resolvers:schema.resolvers,
  context: ({ req, res }) => {
    return {
      res,
      req,
    };
  },
});

/** NextJS handler, used to create the Apollo Graphql Server */
const handler = apolloServer.createHandler({ path: '/api/graphql' });
/** Enable CORS to the request and response object */
exports = cors((req, res) => (req.method === 'OPTIONS' ? res.end() : handler(req, res)));

export const config = {
  api: { bodyParser: false },
};

export default handler;