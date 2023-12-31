import {gql} from '@apollo/client';

export const getAuthorsQuery = gql`
    {
      authors {
        name
        id
      }
    }
  `;

export const getBooks = gql`
  {
    books {
      name
      id
    }
  }
`;

export const addBookMutation=gql`
mutation AddBook($name:String!,$genre:String!,$authorID:ID!){
    addBook(name:$name, genre:$genre, authorID:$authorID){
        name
        id
    }
}
`;

export const getBookQuery = gql`
  query($id: ID) {
    book(id: $id) {
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;
