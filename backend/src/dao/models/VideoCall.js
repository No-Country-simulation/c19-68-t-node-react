import mongoose from 'mongoose';

const VideoCallSchema = new mongoose.Schema({
  roomId: String,
  participants: [String],
  startTime: Date,
  endTime: Date
});


const VideoCall = mongoose.model('VideoCall', VideoCallSchema);

export default VideoCall;
