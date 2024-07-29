import React from "react";
import VideoCall from "./VideoCall";

const VideoCallPage = () => {
  const roomId = "123456"; // Genera esto dinámicamente o recíbelo como prop

  return (
    <div>
      <h1>Video Call</h1>
      <VideoCall roomId={roomId} />
    </div>
  );
};

export default VideoCallPage;

//dependencias para instalar

//npm install express socket.io mongoose
//npm install socket.io-client peerjs
