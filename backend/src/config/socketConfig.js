/*
import http from "http";
import { Server } from "socket.io";

export const initializeServer = (app) => {
  const server = http.createServer(app);
  const io = new Server(server);

  io.on("connection", (socket) => {
    console.log("New client connected");

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });

    // Define other socket events here
  });

  const PORTSOCKET = process.env.PORTSOCKET || 3001;
  server.listen(PORTSOCKET, () =>
  console.log(`Socket.io running on port ${PORTSOCKET}`)
  );
};
*/
/*
 import { Server } from "socket.io";

 export function initializeServer(app) {
   const httpServer = app.listen(3001, () => {
     console.log("Server Socket running on port 3001");
   });

   const io = new Server(httpServer, {
     cors: {
       origin: "*",
       methods: ["GET", "POST"],
     },
   });

   io.on("connection", (socket) => {
     console.log("A user connected");

       socket.on("disconnect", () => {
       console.log("A user disconnected");
     });
   });
 }
*/

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
        const roomId = socket.id; // Usando el ID del socket como roomId
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
