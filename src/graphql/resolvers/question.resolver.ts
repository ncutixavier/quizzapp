import { Question } from '../../models/question.model';
import { DateTimeScalar } from '../scalar/datetime';

export const questionResolvers = {
    DateTime: DateTimeScalar,
    Query: {
        getQuestions: async (_: any) => {
            return await Question.find();
        },
        getQuestion: async (_: any, { id }: { id: string }) => {
            return await Question.findById(id);
        },
    },
    Mutation: {
        createQuestion: async (_: any, { title, body }: { title: string, body: string }) => {
            const newQuestion = new Question({ title, body });
            return await newQuestion.save();
        },
    },
};
