import express from 'express';
import VideoCallController from '../controllers/videoCallController.js';

const router = express.Router();

router.post('/initiate', VideoCallController.initiateCall);
router.post('/join', VideoCallController.joinCall);
router.post('/end/:roomId', VideoCallController.endCall);

export default router;