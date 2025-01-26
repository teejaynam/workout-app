import mongoose from 'mongoose';

const workoutSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  exercises: [
    {
      name: { type: String, required: true },
      reps: { type: Number },
      sets: { type: Number },
      weight: { type: Number },
      duration: { type: Number }, // in mins
    },
  ],
  date: { type: Date, default: Date.now },
});

export default mongoose.model('Workout', workoutSchema);
