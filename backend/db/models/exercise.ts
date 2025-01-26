import mongoose from 'mongoose';

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  muscles: { type: [String], required: true },
  equipment: { type: String },
  description: { type: String },
  videoUrl: { type: String }, // utube embedded video
});

export default mongoose.model('Exercise', exerciseSchema);
