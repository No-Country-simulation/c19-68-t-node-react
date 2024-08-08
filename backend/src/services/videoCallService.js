
import VideoCallDAO from '../dao/videoCallDAO.js';

class VideoCallService {
  static async initiateCall(roomId) {
    return await VideoCallDAO.createCall(roomId);
  }

  static async joinCall(roomId, participantId) {
    const call = await VideoCallDAO.getCall(roomId);
    if (!call) {
      throw new Error('Call not found');
    }
    return await VideoCallDAO.addParticipant(roomId, participantId);
  }

  static async endCall(roomId) {
    const call = await VideoCallDAO.getCall(roomId);
    if (!call) {
      throw new Error('Call not found');
    }
    return await VideoCallDAO.endCall(roomId);
  }
}

export default VideoCallService;