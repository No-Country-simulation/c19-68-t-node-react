/*const VideoCallService = require('../services/videoCallService');*/
/*
import VideoCallService from '../services/videoCallService.js';


class VideoCallController {
  static async initiateCall(req, res) {
    const { roomId } = req.body;
    try {
      const call = await VideoCallService.initiateCall(roomId);
      res.status(201).json(call);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async joinCall(req, res) {
    const { roomId, participant } = req.body;
    try {
      const call = await VideoCallService.joinCall(roomId, participant);
      res.status(200).json(call);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async endCall(req, res) {
    const { roomId } = req.body;
    try {
      const call = await VideoCallService.endCall(roomId);
      res.status(200).json(call);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default VideoCallController;
*/

import VideoCallService from '../services/videoCallService.js'

class VideoCallController {
  static async initiateCall(req, res) {
    const { roomId } = req.body;
    try {
      const call = await VideoCallService.initiateCall(roomId);
      console.log(roomId)
      res.status(201).json(call);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async joinCall(req, res) {
    const { roomId, participant } = req.body;
    try {
      const call = await VideoCallService.joinCall(roomId, participant);
      res.status(200).json(call);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async endCall(req, res) {
    const { roomId } = req.body;
    try {
      const call = await VideoCallService.endCall(roomId);
      res.status(200).json(call);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Nuevo método para obtener información de la llamada
  static async getCallInfo(req, res) {
    const { roomId } = req.params;
    try {
      const call = await VideoCallService.getCallInfo(roomId);
      res.status(200).json(call);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

}

export default VideoCallController;
