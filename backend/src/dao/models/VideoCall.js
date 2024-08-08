import mongoose from 'mongoose';

const VideoCallSchema = new mongoose.Schema({
  roomId: { type: String, required: true, unique: true },
  participants: [{ type: String }],
  startTime: { type: Date, default: Date.now },
  endTime: { type: Date }
}, { timestamps: true });

const VideoCall = mongoose.model('VideoCall', VideoCallSchema);

export default VideoCall;