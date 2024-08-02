/*'use client';

import React, { useState, useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import Peer, { Instance } from 'simple-peer';

const VideoCall: React.FC = () => {
  const [myStream, setMyStream] = useState<MediaStream | null>(null);
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);
  const [callId, setCallId] = useState<string>('');
  const [socket, setSocket] = useState<Socket | null>(null);
  const [peer, setPeer] = useState<Instance | null>(null);
  const myVideo = useRef<HTMLVideoElement>(null);
  const remoteVideo = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const newSocket = io('http://localhost:3001');
    setSocket(newSocket);

    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        setMyStream(stream);
        if (myVideo.current) {
          myVideo.current.srcObject = stream;
        }
      })
      .catch(error => {
        console.error('Error accessing media devices:', error);
      });

    return () => {
      newSocket.disconnect();
      if (myStream) {
        myStream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on('signal', ({ signal }) => {
      if (peer) {
        peer.signal(signal);
      }
    });

    return () => {
      socket.off('signal');
    };
  }, [socket, peer]);

  const createPeer = (initiator: boolean) => {
    if (!myStream) return null;

    const newPeer = new Peer({ initiator, stream: myStream, trickle: false });

    newPeer.on('signal', (signal) => {
      if (socket) {
        socket.emit('signal', { roomId: callId, signal });
      }
    });

    newPeer.on('stream', (stream: MediaStream) => {
      setRemoteStream(stream);
      if (remoteVideo.current) {
        remoteVideo.current.srcObject = stream;
      }
    });

    newPeer.on('error', (error) => {
      console.error('Peer error:', error);
    });

    return newPeer;
  };

  const initiateCall = async () => {
    if (!myStream || !socket) return;

    try {
      const randomRoomId = Math.random().toString(36).substring(2, 15);
      const response = await fetch('http://localhost:3001/api/videocall/initiate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ roomId:randomRoomId})
      });
      const data = await response.json();
      setCallId(data.roomId);

      const newPeer = createPeer(true);
      if (newPeer) {
        setPeer(newPeer);
      }
    } catch (error) {
      console.error('Error initiating call:', error);
    }
  };
  const joinCall = async () => {
    if (!myStream || !socket || !callId) return;

    try {
      const randomParticipantId = Math.random().toString(36).substring(2, 15);
      const response = await fetch('http://localhost:3001/api/videocall/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ roomId: callId, participant: randomParticipantId })
      });
      await response.json();

      const newPeer = createPeer(false);
      if (newPeer) {
        setPeer(newPeer);
      }
    } catch (error) {
      console.error('Error joining call:', error);
    }
  };

  const endCall = async () => {
    if (peer) {
      peer.destroy();
    }
    if (socket) {
      socket.emit('end', { roomId: callId });
    }
    if (myStream) {
      myStream.getTracks().forEach(track => track.stop());
    }
    setMyStream(null);
    setRemoteStream(null);
    setCallId('');
    setPeer(null);

    try {
      await fetch('http://localhost:3001/api/videocall/end', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ roomId: callId })
      });
    } catch (error) {
      console.error('Error ending call:', error);
    }
  };

  return (
    <div>
      <video ref={myVideo} autoPlay muted playsInline />
      {remoteStream && <video ref={remoteVideo} autoPlay playsInline />}
      {!peer && <button onClick={initiateCall}>Iniciar llamada</button>}
      <input
        type="text"
        value={callId}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCallId(e.target.value)}
        placeholder="ID de la llamada"
      />
      {!peer && <button onClick={joinCall}>Unirse a la llamada</button>}
      {peer && <button onClick={endCall}>Finalizar llamada</button>}
    </div>
  );
};

export default VideoCall;
*/ //sin camara dividida 

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import Peer, { Instance } from 'simple-peer';

const VideoCall: React.FC = () => {
  const [myStream, setMyStream] = useState<MediaStream | null>(null);
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);
  const [callId, setCallId] = useState<string>('');
  const [socket, setSocket] = useState<Socket | null>(null);
  const [peer, setPeer] = useState<Instance | null>(null);
  const [isJoined, setIsJoined] = useState<boolean>(false);
  const myVideo = useRef<HTMLVideoElement>(null);
  const remoteVideo = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const newSocket = io('http://localhost:3001');
    setSocket(newSocket);

    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        setMyStream(stream);
        if (myVideo.current) {
          myVideo.current.srcObject = stream;
        }
      })
      .catch(error => {
        console.error('Error accessing media devices:', error);
      });

    return () => {
      newSocket.disconnect();
      if (myStream) {
        myStream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on('signal', ({ signal }) => {
      if (peer) {
        peer.signal(signal);
      }
    });

    return () => {
      socket.off('signal');
    };
  }, [socket, peer]);

  const createPeer = (initiator: boolean) => {
    if (!myStream) return null;

    const newPeer = new Peer({ initiator, stream: myStream, trickle: false });

    newPeer.on('signal', (signal) => {
      if (socket) {
        socket.emit('signal', { roomId: callId, signal });
      }
    });

    newPeer.on('stream', (stream: MediaStream) => {
      setRemoteStream(stream);
      if (remoteVideo.current) {
        remoteVideo.current.srcObject = stream;
      }
    });

    newPeer.on('error', (error) => {
      console.error('Peer error:', error);
    });

    return newPeer;
  };

  const initiateCall = async () => {
    if (!myStream || !socket) return;

    try {
      const randomRoomId = Math.random().toString(36).substring(2, 15);
      const response = await fetch('http://localhost:3001/api/videocall/initiate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ roomId: randomRoomId })
      });
      const data = await response.json();
      setCallId(data.roomId);

      const newPeer = createPeer(true);
      if (newPeer) {
        setPeer(newPeer);
      }
    } catch (error) {
      console.error('Error initiating call:', error);
    }
  };

  const joinCall = async () => {
    if (!myStream || !socket || !callId) return;

    try {
      const randomParticipantId = Math.random().toString(36).substring(2, 15);
      const response = await fetch('http://localhost:3001/api/videocall/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ roomId: callId, participant: randomParticipantId })
      });
      await response.json();

      const newPeer = createPeer(false);
      if (newPeer) {
        setPeer(newPeer);
      }
      setIsJoined(true);
    } catch (error) {
      console.error('Error joining call:', error);
    }
  };

  const endCall = async () => {
    if (peer) {
      peer.destroy();
    }
    if (socket) {
      socket.emit('end', { roomId: callId });
    }
    if (myStream) {
      myStream.getTracks().forEach(track => track.stop());
    }
    setMyStream(null);
    setRemoteStream(null);
    setCallId('');
    setPeer(null);
    setIsJoined(false);

    try {
      await fetch('http://localhost:3001/api/videocall/end', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ roomId: callId })
      });
    } catch (error) {
      console.error('Error ending call:', error);
    }
  };

  return (
    <div className={`video-container ${isJoined ? 'split-screen' : ''}`}>
      <div className="video-wrapper">
        <video ref={myVideo} autoPlay muted playsInline className="video my-video" />
        <p>Mi cámara</p>
      </div>
      {remoteStream && (
        <div className="video-wrapper">
          <video ref={remoteVideo} autoPlay playsInline className="video remote-video" />
          <p>Cámara remota</p>
        </div>
      )}
      <div className="controls">
        {!peer && <button onClick={initiateCall}>Iniciar llamada</button>}
        <input
          type="text"
          value={callId}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCallId(e.target.value)}
          placeholder="ID de la llamada"
        />
        {!peer && <button onClick={joinCall}>Unirse a la llamada</button>}
        {peer && <button onClick={endCall}>Finalizar llamada</button>}
      </div>

      <style jsx>{`
        .video-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .split-screen {
          flex-direction: row;
          justify-content: space-around;
        }

        .video-wrapper {
          text-align: center;
          margin: 10px;
        }

        .video {
          width: 100%;
          max-width: 400px;
          height: auto;
          border: 2px solid #333;
          border-radius: 8px;
        }

        .controls {
          margin-top: 20px;
        }

        button, input {
          margin: 5px;
          padding: 10px;
        }
      `}</style>
    </div>
  );
};

export default VideoCall;
