
import VideoCall from './models/VideoCall.js';

class VideoCallDAO {
  static async createCall(roomId) {
    const call = new VideoCall({ roomId });
    return await call.save();
  }

  static async getCall(roomId) {
    return await VideoCall.findOne({ roomId });
  }

  static async addParticipant(roomId, participantId) {
    return await VideoCall.findOneAndUpdate(
      { roomId },
      { $addToSet: { participants: participantId } },
      { new: true }
    );
  }

  static async endCall(roomId) {
    return await VideoCall.findOneAndUpdate(
      { roomId },
      { status: 'ended', endTime: Date.now() },
      { new: true }
    );
  }
}

export default VideoCallDAO;