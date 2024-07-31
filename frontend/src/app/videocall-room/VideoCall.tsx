/*

'use client';

import React, { useEffect, useRef, useState } from 'react';
import io, { Socket } from 'socket.io-client';
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
    const newSocket = io('http://localhost:3001/api/videocall/initiate');
    setSocket(newSocket);

    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        setMyStream(stream);
        if (myVideo.current) {
          myVideo.current.srcObject = stream;
        }
      });

    return () => {
      newSocket.close();
    };
  }, []);

  const initiateCall = () => {
    if (!myStream || !socket) return;

    const newPeer = new Peer({ initiator: true, stream: myStream }) as Instance;
    setPeer(newPeer);

    newPeer.on('signal', (data: any) => {
      socket.emit('initiate', { signal: data });
    });

    newPeer.on('stream', (stream: MediaStream) => {
      setRemoteStream(stream);
      if (remoteVideo.current) {
        remoteVideo.current.srcObject = stream;
      }
    });

    socket.on('call-initiated', ({ callId }: { callId: string }) => {
      setCallId(callId);
    });
  };

  const joinCall = () => {
    if (!myStream || !socket) return;

    const newPeer = new Peer({ initiator: false, stream: myStream }) as Instance;
    setPeer(newPeer);

    newPeer.on('signal', (data: any) => {
      socket.emit('join', { callId, signal: data });
    });

    newPeer.on('stream', (stream: MediaStream) => {
      setRemoteStream(stream);
      if (remoteVideo.current) {
        remoteVideo.current.srcObject = stream;
      }
    });

    socket.on('call-joined', ({ signal }: { signal: any }) => {
      newPeer.signal(signal);
    });
  };

  const endCall = () => {
    if (peer) {
      peer.destroy();
    }
    if (socket) {
      socket.emit('end', { callId });
    }
    setRemoteStream(null);
    setCallId('');
  };

  return (
    <div>
      <video ref={myVideo} autoPlay muted playsInline />
      <video ref={remoteVideo} autoPlay playsInline />
      <button onClick={initiateCall}>Iniciar llamada</button>
      <input
        type="text"
        value={callId}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCallId(e.target.value)}
        placeholder="ID de la llamada"
      />
      <button onClick={joinCall}>Unirse a la llamada</button>
      <button onClick={endCall}>Finalizar llamada</button>
    </div>
  );
};

export default VideoCall;

*/

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
      });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const initiateCall = async () => {
    if (!myStream || !socket) return;

    try {
      const response = await fetch('http://localhost:3001/api/videocall/initiate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ roomId: 'someUniqueRoomId' })
      });
      const data = await response.json();
      setCallId(data.roomId);

      const newPeer = new Peer({ initiator: true, stream: myStream });
      setPeer(newPeer);

      newPeer.on('signal', (signal) => {
        socket.emit('signal', { roomId: data.roomId, signal });
      });

      newPeer.on('stream', (stream: MediaStream) => {
        setRemoteStream(stream);
        if (remoteVideo.current) {
          remoteVideo.current.srcObject = stream;
        }
      });

      socket.on('signal', ({ signal }) => {
        newPeer.signal(signal);
      });
    } catch (error) {
      console.error('Error initiating call:', error);
    }
  };

  const joinCall = async () => {
    if (!myStream || !socket || !callId) return;

    try {
      const response = await fetch('http://localhost:3001/api/videocall/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ roomId: callId, participant: 'someParticipantId' })
      });
      await response.json();

      const newPeer = new Peer({ initiator: false, stream: myStream });
      setPeer(newPeer);

      newPeer.on('signal', (signal) => {
        socket.emit('signal', { roomId: callId, signal });
      });

      newPeer.on('stream', (stream: MediaStream) => {
        setRemoteStream(stream);
        if (remoteVideo.current) {
          remoteVideo.current.srcObject = stream;
        }
      });

      socket.on('signal', ({ signal }) => {
        newPeer.signal(signal);
      });
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
      <video ref={remoteVideo} autoPlay playsInline />
      <button onClick={initiateCall}>Iniciar llamada</button>
      <input
        type="text"
        value={callId}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCallId(e.target.value)}
        placeholder="ID de la llamada"
      />
      <button onClick={joinCall}>Unirse a la llamada</button>
      <button onClick={endCall}>Finalizar llamada</button>
    </div>
  );
};

export default VideoCall;


