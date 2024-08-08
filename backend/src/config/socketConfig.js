
import { Server } from 'socket.io';
import http from 'http';
import { ExpressPeerServer } from 'peer';
import VideoCallService from '../services/videoCallService.js';

export const initializeServer = (app) => {
  const server = http.createServer(app);
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

  const peerServer = ExpressPeerServer(server, {
    debug: true,
    path: '/peerjs'
  });

  app.use('/peerjs', peerServer);

  io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('initiate', async ({ peerId }) => {
      try {
        const roomId = socket.id;
        console.log(roomId);
        const call = await VideoCallService.initiateCall(roomId);
        socket.emit('call-initiated', { callId: call.roomId, initiatorId: peerId });
      } catch (error) {
        console.error('Error initiating call:', error);
      }
    });

    socket.on('join', async ({ callId, peerId }) => {
      try {
        const call = await VideoCallService.joinCall(callId, peerId);
        socket.join(callId);
        socket.to(callId).emit('user-joined', { peerId });
      } catch (error) {
        console.error('Error joining call:', error);
      }
    });

    socket.on('end', async ({ callId }) => {
      try {
        await VideoCallService.endCall(callId);
        io.to(callId).emit('call-ended');
      } catch (error) {
        console.error('Error ending call:', error);
      }
    });

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });

  return server;
};

