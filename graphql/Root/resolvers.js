import { merge } from 'lodash';
import Books from '../Books';

/** Here is where you place any custom mutation response, or any resolver no attached with any type */
const rootResolvers = {
  
}
const resolvers = merge(Books.resolvers);
export default resolvers;
