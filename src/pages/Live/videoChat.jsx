// import React, { useEffect, useState } from 'react'
// import AgoraRTC from 'agora-rtc-sdk-ng';
// import VideoPlayer from './VideoPlayer';
// const APP_ID = "b61c6409413c4d2fbb7f4288e47aa8d6";
//           const TOKEN = "007eJxTYBBbvzBkw9Rv5YVzPAPaL/9eMP1mfdujbxP3m31w/LJttWGYAkOSmWGymYmBpYmhcbJJilFaUpJ5momRhUWqiXliokWK2b7np5IbAhkZmHL2MDEyQCCIz8KQl5hdzMAAAGTiI0Q=";
//           const CHANNEL = "naks";


//           const client = AgoraRTC.createClient({
//                     mode:'rtc',
//                     codec:'vp8'
//           });
// export default function VideoChat() {
          
//           const [users, setUsers] = useState([]);
//           const [localTracks, setlocalTracks] =useState([]);
//           const handleUserLeft =(user)=>{
//                     setUsers((previousUsers) => previousUsers.filter((u)  => u.uid !== user.uid))
//           }
//           const handleUserJoined = async (user, mediaType) =>{
//                     await client.subscribe(user, mediaType);
//                     if(mediaType === 'video'){
//                               setUsers((previousUsers) => [...previousUsers, user]);
//                     }
//                     if(mediaType === 'audio'){

//                     }
//           }


//           useEffect(()=>{
//                     client.on('user-published', handleUserJoined);
//                     client.on('user-left', handleUserLeft);
//                     client.join(APP_ID, CHANNEL, TOKEN, null)
//                     .then((uid) =>
//                               Promise.all([AgoraRTC.createMicrophoneAndCameraTracks(), uid])
//                     ).then(([tracks, uid]) => {
//                               const [audiotrack, videotrack]= tracks;
//                               localTracks(tracks);
//                               setUsers((previousUsers) => [...previousUsers, {
//                                         uid, audiotrack, videotrack
//                               }]) ;
//                               client.publish(tracks);
//                     });
//                     return () => {
//                               for (let localTrack of localTracks){
//                                         localTrack.stop();
//                                         localTrack.close();
//                               }
//                               client.off('user-published', handleUserJoined);
//                               client.off('user-left', handleUserLeft);
//                               // client.unpublish(tracks).then(()=> client.leave())
//                     };
//           }, []);


//           const [joined, setJoined] = useState(false);
//   return (
//     <div style={{marginTop:"100px", marginBottom:"100px"}}>VideoChat

//           {
//                     !joined  ? <button onClick={() => setJoined(true)}>Join Room</button> :
                    
                    
//                     <div>
//                               {
//                                         users.map((user) => (
//                                                   <VideoPlayer key={user.uid} user={user}/>
//                                         ))
//                               }

//                     </div>
//           }
//     </div>
    


//   )
// }


import AgoraRTC from "agora-rtc-sdk-ng"
import React, { useEffect } from 'react'
import { useState } from "react";

let options =
{
    // Pass your App ID here.
    appId: 'b61c6409413c4d2fbb7f4288e47aa8d6',
    // Set the channel name.
    channel: 'naks',
    // Pass your temp token here.
    token: '007eJxTYOiruqrP+3Wni+TUV1W/2O9rH1adl5YU3P7wgvrhkw8vZlxRYEgyM0w2MzGwNDE0TjZJMUpLSjJPMzGysEg1MU9MtEgxeyZxLbkhkJHBxPopMyMDBIL4LAx5idnFDAwA4gQhjw==',
    // Set the user ID.
    uid: 0,
};

let channelParameters =
{
    // A variable to hold a local audio track.
    localAudioTrack: null,
    // A variable to hold a local video track.
    localVideoTrack: null,
    // A variable to hold a remote audio track.
    remoteAudioTrack: null,
    // A variable to hold a remote video track.
    remoteVideoTrack: null,
    screenTrack :null,
    // A variable to hold the remote user id.s
    remoteUid: null,
};








function VideoChat() {

  const [localvideoPlayerTracks, setlocalvideoPlayerTracks] = useState('');
  const [remotevideoPlayerTracks, setremotevideoPlayerTracks] = useState('');
  const [localaudioPlayerTrack, setlocalaudioPlayerTracks] = useState('');
  const [muteAudio, setmuteAudio] = useState(false);
  const [muteVideo, setmuteVideo] = useState(false);
  const [screenSharing, setscreenSharing] = useState(false);
 
  const agoraEngine = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
  const remotePlayerContainer = document.createElement("div");
// Dynamically create a container in the form of a DIV element to play the local video track.
const localPlayerContainer = document.createElement('div');
// Specify the ID of the DIV container. You can use the uid of the local user.
localPlayerContainer.id = options.uid;
// Set the textContent property of the local video container to the local user id.
localPlayerContainer.textContent = "Local user " + options.uid;
// Set the local video container size.
localPlayerContainer.style.width = "640px";
localPlayerContainer.style.height = "480px";
localPlayerContainer.style.padding = "15px 5px 5px 5px";
// Set the remote video container size.
remotePlayerContainer.style.width = "640px";
remotePlayerContainer.style.height = "480px";
remotePlayerContainer.style.padding = "15px 5px 5px 5px";
  async function startBasicCall()
{
// Create an instance of the Agora Engine


// Dynamically create a container in the form of a DIV element to play the remote video track.

// Listen for the "user-published" event to retrieve a AgoraRTCRemoteUser object.
agoraEngine.on("user-published", async (user, mediaType) =>
{
// Subscribe to the remote user when the SDK triggers the "user-published" event.
await agoraEngine.subscribe(user, mediaType);
console.log("subscribe success");
// Subscribe and play the remote video in the container If the remote user publishes a video track.
if (mediaType == "video")
{
    // Retrieve the remote video track.
    channelParameters.remoteVideoTrack = user.videoTrack;
    // Retrieve the remote audio track.
    channelParameters.remoteAudioTrack = user.audioTrack;
    // Save the remote user id for reuse.
    channelParameters.remoteUid = user.uid.toString();
    // Specify the ID of the DIV container. You can use the uid of the remote user.
    remotePlayerContainer.id = user.uid.toString();
    channelParameters.remoteUid = user.uid.toString();
    remotePlayerContainer.textContent = "Remote user " + user.uid.toString();
    // Append the remote container to the page body.
    document.body.append(remotePlayerContainer);
    // Play the remote video track.
    channelParameters.remoteVideoTrack.play(remotePlayerContainer);
}
// Subscribe and play the remote audio track If the remote user publishes the audio track only.
if (mediaType == "audio")
{
    // Get the RemoteAudioTrack object in the AgoraRTCRemoteUser object.
    channelParameters.remoteAudioTrack = user.audioTrack;
    // Play the remote audio track. No need to pass any DOM element.
    channelParameters.remoteAudioTrack.play();
}
// Listen for the "user-unpublished" event.
agoraEngine.on("user-unpublished", user =>
{
    console.log(user.uid+ "has left the channel");
});
    });

  
  }

  async function joinChannl1(){
    
      // Join a channel.
      await agoraEngine.join(options.appId, options.channel, options.token, options.uid);
      // Create a local audio track from the audio sampled by a microphone.
      channelParameters.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
      // Create a local video track from the video captured by a camera.
      channelParameters.localVideoTrack = await AgoraRTC.createCameraVideoTrack();
      // Append the local video container to the page body.
      document.body.append(localPlayerContainer);
      // Publish the local audio and video tracks in the channel.
      await agoraEngine.publish([channelParameters.localAudioTrack, channelParameters.localVideoTrack]);
      setlocalvideoPlayerTracks(channelParameters.localVideoTrack);
      setlocalaudioPlayerTracks(channelParameters.localAudioTrack);
      // Play the local video track.
      channelParameters.localVideoTrack.play(localPlayerContainer);
      console.log("publish success!");
  }
  async function leaveChannel1(){
    channelParameters.localAudioTrack.close();
        channelParameters.localVideoTrack.close();
        // Remove the containers you created for the local video and remote video.
        removeVideoDiv(remotePlayerContainer.id);
        removeVideoDiv(localPlayerContainer.id);
        // Leave the channel
        await agoraEngine.leave();
        console.log("You left the channel");
        // Refresh the page for reuse
        window.location.reload();
  }
  function removeVideoDiv(elementId)
{
    console.log("Removing "+ elementId+"Div");
    let Div = document.getElementById(elementId);
    if (Div)
    {
        Div.remove();
    }
};

async function muteAudioChannel(event){
    console.log(event);
    if(event === false){
        console.log("hii");
        channelParameters.localAudioTrack.setEnabled(false);
        setmuteAudio(true);
    }
    else{
        channelParameters.localAudioTrack.setEnabled(true);
        setmuteAudio(false);
    }
}


async function muteVideoChannel(event){
    console.log(event);
    if(event === false){
        console.log("hii");
        channelParameters.localVideoTrack.setEnabled(false);
        setmuteVideo(true);
    }
    else{
        channelParameters.localVideoTrack.setEnabled(true);
        setmuteVideo(false);
    }
}

async function ScreenSharingChannel(event){
    
    if(event === false){
        channelParameters.screenTrack = await AgoraRTC.createScreenVideoTrack();
        channelParameters.localVideoTrack.stop();
        await agoraEngine.unpublish(channelParameters.localVideoTrack);
        await agoraEngine.publish(channelParameters.screenTrack);
        channelParameters.screenTrack.play(localPlayerContainer);
        setscreenSharing(true);
    }
    else{
        channelParameters.screenTrack.stop();
        await agoraEngine.unpublish(channelParameters.screenTrack);
        await agoraEngine.publish(channelParameters.localVideoTrack);
        channelParameters.localVideoTrack.play(localPlayerContainer);
        setscreenSharing(false);
    }
}
  

  useEffect(() => {
    startBasicCall();
  }, [])
  return (
    <div className="vh-100  ">
      <div class="row">
            <div>
                <button type="button" onClick={()=>joinChannl1()} id="join">Join</button>
                <button type="button" onClick={() => leaveChannel1()} id="leave">Leave</button>
                <button type="button" onClick={()=> muteAudioChannel(muteAudio)} >Mute Audio</button> 
                <button type="button" onClick={()=> muteVideoChannel(muteVideo)} >Mute Video</button> 
                <button type="button" onClick={() => ScreenSharingChannel(screenSharing)}>Share Screen</button>
            </div>
        </div>
        {/* <MediaPlayer videoTrack={localvideoPlayerTracks}
            audioTrack={LocalAudioTrack}></MediaPlayer> */}
    </div>
  )
}

export default VideoChat