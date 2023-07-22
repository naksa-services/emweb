import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react'
import StartLiveStreaming from '../pages/Live/StartLiveStreaming';
import NewVideoCall from '../pages/Live/StartVideoStream';
import StartVideoStream from '../pages/Live/StartVideoStream';
import LiveVideoStreaming from './VideoChatWithUser';

export default function VideoPlayer() {
  return (
    
    <div>VideoPlayer

          <NewVideoCall/>
    </div>
  )
}