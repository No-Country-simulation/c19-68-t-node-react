
import { Server } from 'socket.io';
import http from 'http';
import VideoCallService from '../services/videoCallService.js';

export const initializeServer = (app) => {
  const server = http.createServer(app);
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

  io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('initiate', async ({ signal }) => {
      try {
        const roomId = socket.id; // Usando el ID del socket como roomId*/
        const call = await VideoCallService.initiateCall(roomId);
        socket.emit('call-initiated', { callId: call.roomId });
      } catch (error) {
        console.error('Error initiating call:', error);
      }
    });

    socket.on('join', async ({ callId, signal }) => {
      try {
        const call = await VideoCallService.joinCall(callId, socket.id);
        socket.join(callId);
        socket.to(callId).emit('call-joined', { signal, participantId: socket.id });
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



