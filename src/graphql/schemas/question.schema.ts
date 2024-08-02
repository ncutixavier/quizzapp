import { gql } from "apollo-server-express";

export const questionTypeDefs = gql`
    scalar DateTime

    type Question {
        id: ID!
        title: String!
        body: String
        createdAt: DateTime!
        updatedAt: DateTime!
    }

    type Query {
        getQuestions: [Question]
        getQuestion(id: ID!): Question
    }

    type Mutation {
        createQuestion(title: String!, body: String): Question
    }
`
