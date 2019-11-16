import * as mongoose from 'mongoose';

export const TaleSchema = new mongoose.Schema({
    author: String,
    name: String,
    part: Number,
    totalParts: Number,
    tags: [String],
    animal: String,
    animalName: String
});
