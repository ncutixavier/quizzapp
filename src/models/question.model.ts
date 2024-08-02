import { Schema, model } from 'mongoose';

const questionSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

questionSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.createdAt = ret.createdAt.toISOString();
    ret.updatedAt = ret.updatedAt.toISOString();
    return ret;
  },
});

questionSchema.set('toObject', {
  transform: (doc, ret) => {
    ret.createdAt = ret.createdAt.toISOString();
    ret.updatedAt = ret.updatedAt.toISOString();
    return ret;
  },
});

export const Question = model('Question', questionSchema);
