"use client";
import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import Peer from "peerjs";

const VideoCall = ({ roomId }) => {
  const [peers, setPeers] = useState({});
  const socketRef = useRef();
  const userVideoRef = useRef();
  const peersRef = useRef({});

  useEffect(() => {
    socketRef.current = io("http://localhost:3001/api/videocall/join");
    const peer = new Peer(undefined, {
      host: "/",
      port: "3001",
    });

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        userVideoRef.current.srcObject = stream;

        peer.on("open", (userId) => {
          socketRef.current.emit("join-room", roomId, userId);
        });

        socketRef.current.on("user-connected", (userId) => {
          connectToNewUser(userId, stream);
        });

        peer.on("call", (call) => {
          call.answer(stream);
          const video = document.createElement("video");
          call.on("stream", (userVideoStream) => {
            addVideoStream(video, userVideoStream);
          });
        });
      });

    const connectToNewUser = (userId, stream) => {
      const call = peer.call(userId, stream);
      const video = document.createElement("video");
      call.on("stream", (userVideoStream) => {
        addVideoStream(video, userVideoStream);
      });
      call.on("close", () => {
        video.remove();
      });

      peersRef.current[userId] = call;
      setPeers((prevPeers) => ({
        ...prevPeers,
        [userId]: call,
      }));
    };

    const addVideoStream = (video, stream) => {
      video.srcObject = stream;
      video.addEventListener("loadedmetadata", () => {
        video.play();
      });
      document.getElementById("video-grid").append(video);
    };

    return () => {
      socketRef.current.disconnect();
      Object.values(peersRef.current).forEach((call) => call.close());
    };
  }, [roomId]);

  return (
    <div>
      <video playsInline muted ref={userVideoRef} autoPlay />
      <div id="video-grid"></div>
    </div>
  );
};

export default VideoCall;
