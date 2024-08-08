
import VideoCallService from '../services/videoCallService.js';

class VideoCallController {
  static async initiateCall(req, res) {
    try {
      const { roomId } = req.body;
      const call = await VideoCallService.initiateCall(roomId);
      res.status(201).json(call);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async joinCall(req, res) {
    try {
      const { roomId, participantId } = req.body;
      const call = await VideoCallService.joinCall(roomId, participantId);
      res.status(200).json(call);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async endCall(req, res) {
    try {
      const { roomId } = req.params;
      const call = await VideoCallService.endCall(roomId);
      res.status(200).json(call);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default VideoCallController;