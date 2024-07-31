/*import VideoCall from "./models/VideoCall.js";

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
*/
/*
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

  // Nuevo método para obtener información de la llamada
  static async getCallInfo(roomId) {
    return await VideoCall.findOne({ roomId });
  }
}

export default VideoCallDAO;
*/
import VideoCall from "./models/VideoCall.js"

class VideoCallDAO {
  static async createCall(roomId) {
    const videoCall = new VideoCall({
      roomId,
      participants: [],
    });
    return await videoCall.save();
  }

  static async updateCall(roomId, participant) {
    return await VideoCall.findOneAndUpdate(
      { roomId },
      { $addToSet: { participants: participant } },
      { new: true, runValidators: true }
    );
  }

  static async endCall(roomId) {
    return await VideoCall.findOneAndUpdate(
      { roomId },
      { endTime: new Date() },
      { new: true, runValidators: true }
    );
  }

  static async getCallInfo(roomId) {
    return await VideoCall.findOne({ roomId });
  }

  // Nuevo método para verificar si una llamada está activa
  static async isCallActive(roomId) {
    const call = await VideoCall.findOne({ roomId, endTime: { $exists: false } });
    return !!call;
  }
}

export default VideoCallDAO;