import express from "express";
import { ApolloServer } from "apollo-server-express";
import { connectDB } from "./config/db.config";
import { typeDefs } from "./graphql/schemas";
import { resolvers } from "./graphql/resolvers";

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

async function startServer() {
    await server.start();
    connectDB()
    server.applyMiddleware({ app });
}

startServer();

const PORT = process.env.PORT || 5200;

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}${server.graphqlPath}`);
});
