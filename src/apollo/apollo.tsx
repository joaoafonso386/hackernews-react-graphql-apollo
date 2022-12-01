import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const httpLink = createHttpLink({
  uri: "http://localhost:4000",
});

const Apollo_Client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export { Apollo_Client };
