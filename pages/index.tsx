import { BookInfo } from "@/components/BookInfo";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/react-hooks";

const Home = ({ data }: { data: any }) => {
  const client = new ApolloClient({
    uri: "http://localhost:3000/api/graphql-data",
    cache: new InMemoryCache()
  });
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>NextJS GraphQL Apollo App</h1>
        <BookInfo />
      </div>
    </ApolloProvider>
  )
}

export default Home;