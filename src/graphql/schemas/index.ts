import { gql } from 'apollo-server-express';
import { questionTypeDefs } from './question.schema';

const rootTypeDefs = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

export const typeDefs = [
    rootTypeDefs, 
    questionTypeDefs,
];
