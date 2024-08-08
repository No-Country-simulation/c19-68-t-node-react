'use client';

import React, { useState, useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import Peer, { Instance, SignalData } from 'simple-peer';

interface SignalPayload {
  id: string;
  signal: SignalData;
}

interface UserJoinedPayload {
  id: string;
  stream: MediaStream;
}

interface UserLeftPayload {
  id: string;
}

interface PeerWithId {
  id: string;
  peer: Instance;
}

const VideoCall: React.FC = () => {
  const [myStream, setMyStream] = useState<MediaStream | null>(null);
  const [remoteStreams, setRemoteStreams] = useState<MediaStream[]>([]);
  const [callId, setCallId] = useState<string>('');
  const [socket, setSocket] = useState<Socket | null>(null);
  const [peers, setPeers] = useState<PeerWithId[]>([]);
  const [isJoined, setIsJoined] = useState<boolean>(false);
  const myVideo = useRef<HTMLVideoElement>(null);
  const remoteVideos = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const newSocket = io('http://localhost:4001');
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

    socket.on('signal', ({ id, signal }: SignalPayload) => {
      const peer = peers.find(p => p.id === id)?.peer;
      if (peer) {
        peer.signal(signal);
      }
    });

    socket.on('user-joined', ({ id, stream }: UserJoinedPayload) => {
      const newPeer = createPeer(false, id, stream);
      if (newPeer) {
        setPeers(prevPeers => [...prevPeers, { id, peer: newPeer }]);
        setRemoteStreams(prevStreams => [...prevStreams, stream]);
      }
    });

    socket.on('user-left', ({ id }: UserLeftPayload) => {
      const updatedPeers = peers.filter(p => p.id !== id);
      setPeers(updatedPeers);
      setRemoteStreams(prevStreams => prevStreams.filter((_, index) => index !== updatedPeers.length));
    });

    return () => {
      socket.off('signal');
      socket.off('user-joined');
      socket.off('user-left');
    };
  }, [socket, peers]);

  const createPeer = (initiator: boolean, id?: string, stream?: MediaStream): Instance | null => {
    if (!myStream) return null;

    const newPeer = new Peer({ initiator, stream: myStream, trickle: false });

    newPeer.on('signal', (signal: SignalData) => {
      if (socket) {
        socket.emit('signal', { id, signal });
      }
    });

    newPeer.on('stream', (stream: MediaStream) => {
      setRemoteStreams(prevStreams => [...prevStreams, stream]);
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
      const response = await fetch('http://localhost:4001/api/videocall/initiate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ roomId: randomRoomId })
      });
      const data = await response.json();
      setCallId(data.roomId);

      const newPeer = createPeer(true);
      if (newPeer) {
        setPeers(prevPeers => [...prevPeers, { id: data.roomId, peer: newPeer }]);
      }
    } catch (error) {
      console.error('Error initiating call:', error);
    }
  };

  const joinCall = async () => {
    if (!myStream || !socket || !callId) return;

    try {
      const randomParticipantId = Math.random().toString(36).substring(2, 15);
      const response = await fetch('http://localhost:4001/api/videocall/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ roomId: callId, participantId: randomParticipantId })
      });
      const data = await response.json();
      const { stream } = data;
      const newPeer = createPeer(false, randomParticipantId, stream);
      if (newPeer) {
        setPeers(prevPeers => [...prevPeers, { id: randomParticipantId, peer: newPeer }]);
        setRemoteStreams(prevStreams => [...prevStreams, stream]);
      }
      setIsJoined(true);
    } catch (error) {
      console.error('Error joining call:', error);
    }
  };

  const joinCreatedCall = async () => {
    if (!myStream || !socket || !callId) return;

    try {
      const response = await fetch('http://localhost:4001/api/videocall/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ roomId: callId, participantId: callId })
      });
      const data = await response.json();
      const { stream } = data;
      const newPeer = createPeer(false, callId, stream);
      if (newPeer) {
        setPeers(prevPeers => [...prevPeers, { id: callId, peer: newPeer }]);
        setRemoteStreams(prevStreams => [...prevStreams, stream]);
      }
      setIsJoined(true);
    } catch (error) {
      console.error('Error joining created call:', error);
    }
  };

  const endCall = async () => {
    peers.forEach(({ peer }) => peer.destroy());
    if (socket) {
      socket.emit('end', { roomId: callId });
    }
    if (myStream) {
      myStream.getTracks().forEach(track => track.stop());
    }
    setMyStream(null);
    setRemoteStreams([]);
    setCallId('');
    setPeers([]);
    setIsJoined(false);

    try {
      await fetch(`http://localhost:4001/api/videocall/end/${callId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
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
      {remoteStreams.map((stream, index) => (
        <div key={index} className="video-wrapper">
          <video
            ref={(el) => {
              if (el) {
                remoteVideos.current[index] = el;
              }
            }}
            autoPlay
            playsInline
            className="video remote-video"
            style={{ width: '100%', height: '100%' }}
          />
          <p>Cámara remota {index + 1}</p>
        </div>
      ))}
      <div className="controls">
        {peers.length === 0 && <button onClick={initiateCall}>Iniciar llamada</button>}
        <input
          type="text"
          value={callId}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCallId(e.target.value)}
          placeholder="ID de la llamada"
        />
        {peers.length === 0 && <button onClick={joinCall}>Unirse a la llamada</button>}
        {peers.length > 0 && !isJoined && <button onClick={joinCreatedCall}>Unirme a mi llamada</button>}
        {peers.length > 0 && <button onClick={endCall}>Finalizar llamada</button>}
      </div>
      <style jsx>{`
        .video-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .split-screen {
          justify-content: space-around;
        }

        .video-wrapper {
          margin: 10px;
          text-align: center;
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
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        button, input {
          margin: 5px;
          padding: 10px;
          font-size: 16px;
          width: 100%;
          max-width: 200px;
        }
      `}</style>
    </div>
  );
};

export default VideoCall;




