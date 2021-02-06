import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../graphql/client/queries';

export default function QueryComponent() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  const Table = () => {
    let res;
    if (error) {
      res = <h3>{error.message}</h3>
    } else {
      res = (
        <>
          <table>
            <thead>
              <tr>
                <th>ISBN</th>
                <th>Title</th>
                <th>Author</th>
              </tr>
            </thead>
            <tbody>
              {data.books.map((item) => {
                return (
                  <tr key={item.ISBN}>
                    <td>{item.ISBN}</td>
                    <td>{item.title}</td>
                    <td>{item.author}</td>
                  </tr>
                
                )
              })}
            </tbody>
          </table>

        </>
      )
    }
    return res;
  }
  return (<>
    {!loading && <Table/>}
  </>)
}