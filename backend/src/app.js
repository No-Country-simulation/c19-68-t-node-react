/*
import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import paymentGatewayRoutes from "./routes/paymentGateway.routes.js";
import appointmentsRoutes from "./routes/appointments.routes.js";
import patientsRoutes from "./routes/patients.routes.js";
import doctorsRoutes from "./routes/doctors.routes.js";
import authRoutes from "./routes/auth.routes.js";
import videoCallRoutes from "./routes/videoCallRoutes.js";
import { logResponseStatus } from "./middlewares/loggerRes.middleware.js";
import { initializeServer } from "./config/socketConfig.js";

// Configuración de la aplicación Express
const app = express();

// Middleware para parsear JSON y URL encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
// Middleware para mostrar las solicitudes
app.use(morgan("dev"));

// Configuración de CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Rutas
app.use("/", logResponseStatus);
app.use("/paymentGateway", paymentGatewayRoutes);
app.use("/appointments", appointmentsRoutes);
app.use("/patients", patientsRoutes);
app.use("/doctors", doctorsRoutes);
app.use("/auth", authRoutes);
app.use("/api/videocall", videoCallRoutes);

// Inicializar servidor y socket.io
initializeServer(app);

export default app;
*/


import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import paymentGatewayRoutes from "./routes/paymentGateway.routes.js";
import appointmentsRoutes from "./routes/appointments.routes.js";
import patientsRoutes from "./routes/patients.routes.js";
import doctorsRoutes from "./routes/doctors.routes.js";
import authRoutes from "./routes/auth.routes.js";
import videoCallRoutes from "./routes/videoCallRoutes.js";
import { logResponseStatus } from "./middlewares/loggerRes.middleware.js";
import { initializeServer } from "./config/socketConfig.js";

// Configuración de la aplicación Express
const app = express();

// Middleware para parsear JSON y URL encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Middleware para mostrar las solicitudes
app.use(morgan("dev"));

// Configuración de CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Rutas
app.use("/", logResponseStatus);
app.use("/paymentGateway", paymentGatewayRoutes);
app.use("/appointments", appointmentsRoutes);
app.use("/patients", patientsRoutes);
app.use("/doctors", doctorsRoutes);
app.use("/auth", authRoutes);
app.use("/api/videocall", videoCallRoutes);

// Inicializar servidor y socket.io
const server = initializeServer(app);

const SocketPORT = process.env.SocketPORT || 3001;
server.listen(SocketPORT, () => {
  console.log(`Server Socket running on port ${SocketPORT}`);
});

export default app;

/*
import { Server } from 'socket.io';
import http from 'http';
import VideoCallService from '../src/services/videoCallService.js';

let io;

export const initializeServer = (app) => {
  const server = http.createServer(app);
  io = new Server(server, {
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

export const getIO = () => {
  if (!io) {
    throw new Error('Socket.io not initialized!');
  }
  return io;
};
*/