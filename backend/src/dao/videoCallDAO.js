import VideoCall from "./models/VideoCall.js";

class VideoCallDAO {
  static async createCall(roomId) {
    const videoCall = new VideoCall({
      roomId,
      participants: [],
      startTime: new Date(),
    });
    return await videoCall.save();
  }

  static async updateCall(roomId, participant) {
    return await VideoCall.findOneAndUpdate(
      { roomId },
      { $addToSet: { participants: participant } },
      { new: true }
    );
  }

  static async endCall(roomId) {
    return await VideoCall.findOneAndUpdate(
      { roomId },
      { endTime: new Date() },
      { new: true }
    );
  }
}

export default VideoCallDAO;