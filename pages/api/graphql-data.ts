import { ApolloServer, gql } from "apollo-server-micro";

let book = {
  name: "The Hungarian Sausage",
  author: "Ben Grunfeld",
};

const typeDefs = gql`
  type Book {
    name: String
    author: String
  }
  type Query {
    book: Book
  }
  type Mutation {
    updateBook(name: String!, author: String!): Book
  }
`;

const resolvers = {
  Query: {
    book: () => book,
  },

  Mutation: {
    updateBook: (_: any, args: { name: string; author: string; }) => {
      book.name = args.name;
      book.author = args.author;
      return book;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default server.createHandler({ path: "/api/graphql-data" })