import { Router } from "express";
import VideoCallController from '../controllers/videoCallController.js';

const router = Router();

router.post('/initiate', VideoCallController.initiateCall);
router.post('/join', VideoCallController.joinCall);
router.post('/end', VideoCallController.endCall);

export default  router;