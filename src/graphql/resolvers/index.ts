import { questionResolvers } from "./question.resolver";

export const resolvers = {
    Query: {
      ...questionResolvers.Query,
    },
    Mutation: {
        ...questionResolvers.Mutation,
    }
  };
