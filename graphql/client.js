import {
    ApolloClient,
    InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api-ap-south-1.graphcms.com/v2/ckzs1esed1euf01wcc8033fey/master",
    cache: new InMemoryCache(),
})

export default client