const { ApolloServer, PubSub } = require("apollo-server");
const jwt = require("jsonwebtoken");
const connectDb = require("./config/db");
const typeDefs = require("./types");
const resolvers = require("./resolvers");
const models = require("./models");

connectDb();

const pubsub = new PubSub();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const auth = req ? req.headers.authorization : null;
    if (auth && auth.toLowerCase().startsWith("bearer ")) {
      const decodedToken = jwt.verify(
        auth.substring(7),
        process.env.JWT_SECRET
      );
      const currentUser = await models.User.findById(decodedToken.id);
      return { currentUser, models, pubsub };
    }
    return { models, pubsub };
  },
});

server
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url, subscriptionsUrl }) => {
    console.log(`🚀 Server ready at ${url}`);
    console.log(`Subscriptions ready at ${subscriptionsUrl}`);
  });
