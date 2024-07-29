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

// import { Server } from "socket.io";

// export function initializeServer(app) {
//   const httpServer = app.listen(3001, () => {
//     console.log("Server running on port 3001");
//   });

//   const io = new Server(httpServer, {
//     cors: {
//       origin: "*",
//       methods: ["GET", "POST"],
//     },
//   });

//   io.on("connection", (socket) => {
//     console.log("A user connected");

//     socket.on("disconnect", () => {
//       console.log("A user disconnected");
//     });
//   });
// }
