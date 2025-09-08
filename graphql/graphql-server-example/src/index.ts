import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql
  type Book {
    id: ID!
    title: String!
    author: Author!
  }

  type Author {
    id: ID!
    name: String!
    books: [Book!]!
  }

  type Query {
    books: [Book!]!
    authors: [Author!]!
  }

  type Mutation {
    addBook(title: String!, authorId: ID!): Book!
    addAuthor(name: String!): Author!
  }
`;

const data = {
  authors: [
    { id: '1', name: "Kate Chopin" },
    { id: '2', name: "Paul Auster" },
  ],
  books: [
    { id: '101', title: "The Awakening", authorId: '1' },
    { id: '102', title: "City of Glass", authorId: '2' },
    { id: '103', title: "Another book by Paul", authorId: '2' },
  ]
};

const resolvers = {
  Query: {
    authors: () => data.authors,
    books: () => data.books,
  },
  Book: {
    author: (parent) => data.authors.find(author => author.id === parent.authorId),
  },
  Author: {
    books: (parent) => data.books.filter(book => book.authorId === parent.id),
  },
  Mutation: {
    addBook: (_, { title, authorId }) => {
      const newBook = {
        id: String(data.books.length + 101),
        title,
        authorId,
      }; 
      data.books.push(newBook);
      return newBook;
    },
    addAuthor: (_, { name }) => {
      const newAuthor = {
        id: String(data.authors.length + 1),
        name,
      };
      data.authors.push(newAuthor);
      return newAuthor;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at: ${url}`);