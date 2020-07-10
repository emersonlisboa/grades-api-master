import mongoose from 'mongoose';
import gradesModel from './grade_model.js'

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;
db.grade = gradesModel(mongoose);
export { db };
