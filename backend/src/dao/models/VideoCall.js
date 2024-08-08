import mongoose from 'mongoose';

const VideoCallSchema = new mongoose.Schema({
  roomId: {
    type: String,
    required: true,
    unique: true
  },
  participants: [{
    type: String
  }],
  startTime: {
    type: Date,
    default: Date.now
  },
  endTime: {
    type: Date
  },
  status: {
    type: String,
    enum: ['active', 'ended'],
    default: 'active'
  }
});

export default mongoose.model('VideoCall', VideoCallSchema);