/*
import VideoCallDAO from '../dao/videoCallDAO.js';

class VideoCallService {
  static async initiateCall(roomId) {
    return await VideoCallDAO.createCall(roomId);
  }

  static async joinCall(roomId, participant) {
    return await VideoCallDAO.updateCall(roomId, participant);
  }

  static async endCall(roomId) {
    return await VideoCallDAO.endCall(roomId);
  }
}

export default VideoCallService;
*/

import VideoCallDAO from '../dao/videoCallDAO.js';


class VideoCallService {
  static async initiateCall(roomId) {
    return await VideoCallDAO.createCall(roomId);
  }

  static async joinCall(roomId, participant) {
    return await VideoCallDAO.updateCall(roomId, participant);
  }

  static async endCall(roomId) {
    return await VideoCallDAO.endCall(roomId);
  }

  // Nuevo método para obtener información de la llamada
  static async getCallInfo(roomId) {
    return await VideoCallDAO.getCallInfo(roomId);
  }
}

export default VideoCallService;
