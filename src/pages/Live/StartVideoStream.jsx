import React from 'react'
import AgoraRTC,{
    MicrophoneAudioTrackInitConfig,
    CameraVideoTrackInitConfig
  } from 'agora-rtc-sdk-ng';
import { useEffect } from 'react';
import { useState } from 'react';
import MediaPlayer from './MediaPlayer';


// async function JoinChnnael(){
//           await agoraEngine.join(options.appId, options.channel, options.token, options.uid);
//           showMessage("Joined channel: " + options.channel);
//           // Create a local audio track from the microphone audio.
//           channelParameters.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
//           // Publish the local audio track in the channel.
//           await agoraEngine.publish(channelParameters.localAudioTrack);
//           console.log("Publish success!");
// }





function NewVideoCall() {
  const [ismuted, setismuted] = useState(true);
  const [ishold, setishold] = useState(false);
  const [LocalAudioTrack, setLocalAudioTrack]= useState("");
  const [LocalVidioTrack, setLocalVideoTrack]= useState("");
  const [remoteVideoTrack, setremoteVideoTrack] = useState("");
  const [remoteAudioTrack, setremoteAudioTrack] = useState("");
  const agoraEngine = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
  let options = 
{
    // Pass your App ID here.
    appId: 'b61c6409413c4d2fbb7f4288e47aa8d6',
    // Set the channel name.
    channel: "naks",
    // Pass your temp token here.
    token: "007eJxTYGBYFHMye9J0048d3cJZTvfn/0/a+enY51XsKv/O3Iy+67hFgSHJzDDZzMTA0sTQONkkxSgtKck8zcTIwiLVxDwx0SLF7PGZy8kNgYwMnuouTIwMEAjiszDkJWYXMzAAABk/IjU=",
    // Set the user ID.
    uid: "89",
};
// var ismuted = true;

let channelParameters =
{
  // A variable to hold a local audio track.
  localAudioTrack: null,
  localVideoTrack:null,
  // A variable to hold a remote audio track.
  remoteAudioTrack: null,
  remoteVideoTrack:null,
    // A variable to hold the remote user id.
  remoteUid: null,
};



useEffect(()=>{
  startBasicCall();
});



const onHostJoin =async(role) =>{
  if(role === "host"){
    await agoraEngine.join(options.appId, options.channel, options.token, options.uid);
    channelParameters.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
    channelParameters.localVideoTrack = await AgoraRTC.createCameraVideoTrack();
    await agoraEngine.publish([channelParameters.localAudioTrack, channelParameters.localVideoTrack]);
    setLocalAudioTrack(channelParameters.localAudioTrack);
    setLocalVideoTrack(channelParameters.localVideoTrack);
    if(ismuted === false){
      channelParameters.localAudioTrack.setEnabled(false);
      setismuted(true);
    }
    else{
      channelParameters.localAudioTrack.setEnabled(true);
      setismuted(false);
    }
  }
}


const onLeave = async(role) =>{
  if(role ==="host"){
    await agoraEngine.leave();
    window.location.reload();
  }

}
  async function startBasicCall()
{
  // Create an instance of the Agora Engine
  
  
  // Listen for the "user-published" event to retrieve an AgoraRTCRemoteUser object.
  agoraEngine.on("user-published", async (user, mediaType) =>
  {
    // Subscribe to the remote user when the SDK triggers the "user-published" event.
    await agoraEngine.subscribe(user, mediaType);
    console.log("subscribe success");
    if(mediaType == "video"){
        channelParameters.remoteVideoTrack = user.videoTrack;
        channelParameters.remoteAudioTrack= user.audioTrack;
        channelParameters.remoteUid = user.uid.toString();
        setremoteAudioTrack(channelParameters.remoteAudioTrack);
        setremoteVideoTrack(channelParameters.remoteVideoTrack);

    }

    // Subscribe and play the remote audio track.
    // if (mediaType == "audio")
    // {
    //   channelParameters.remoteUid=user.uid;
    //   // Get the RemoteAudioTrack object from the AgoraRTCRemoteUser object.
    //   channelParameters.remoteAudioTrack = user.audioTrack;
    //   // Play the remote audio track. 
    //   channelParameters.remoteAudioTrack.play();
    //   showMessage("Remote user connected: " + user.uid);
    // }

    // Listen for the "user-unpublished" event.
    agoraEngine.on("user-unpublished", user =>
    {
      console.log(user.uid + "has left the channel");
      showMessage("Remote user has left the channel");
    });
  });

  
      // Join a channel.
    //   await agoraEngine.join(options.appId, options.channel, options.token, options.uid);
    //   showMessage("Joined channel: " + options.channel);
    //   // Create a local audio track from the microphone audio.
    //   channelParameters.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
    //   channelParameters.localVideoTrack = await AgoraRTC.createCameraVideoTrack();
    //   if(ismuted === false){
    //     channelParameters.localAudioTrack.setEnabled(false);
    //     setismuted(true);
    //   }else{
    //     channelParameters.localAudioTrack.setEnabled(true);
    //     setismuted(false);
    //   }
    // //   setLocalAudioTrack(channelParameters.localAudioTrack);
    // //   setLocalVideoTrack(channelParameters.localVideoTrack);
      
    // // const [microphoneTrack, cameraTrack] = await AgoraRTC.createMicrophoneAndCameraTracks();

    //   // Publish the local audio track in the channel.
    //   await agoraEngine.publish([channelParameters.localAudioTrack, channelParameters.localVideoTrack]);
    //   console.log("Publish success!");
    
    
    // // Listen to the Leave button click event.
    
  
}
function showMessage(text){
  document.getElementById("message").textContent = text;
}


  async function endBasicCall(){
    // channelParameters.localAudioTrack.pau;
    // channelParameters.localAudioTrack.
        // Leave the channel
        await agoraEngine.leave();
        console.log("You left the channel");
            console.log("end call");
  }
//   const muteCall =() =>{
//     if(ismuted){
//       setismuted(false);
//       channelParameters.localAudioTrack.setenab
//         LocalAudioTrack.stop();
//       setLocalAudioTrack(true);
//     }
//     else{
//       setismuted(true);
//       channelParameters.localAudioTrack.setEnabled(true);
//     }
//     console.log(ismuted);
//     console.log("Call Muted");
//   }
//   const holdCall =() =>{
//     if(ismuted){
//       setishold(true);
//       // channelParameters.remoteAudioTrack.setEnabled(true);
//       channelParameters.localAudioTrack.setEnabled(true)
//     }
//     else{
//       setishold(false);
//       // channelParameters.remoteAudioTrack.
//       channelParameters.localAudioTrack.setEnabled(false);
//     }
//     console.log(ishold);
//     console.log("Call Hold");
//   }
  return (
    <div>
          <div className="content-body">
                  <div className="container-fluid">
          <div class="row">
        <div>
            <button onClick={() => onHostJoin("host")} type="button" id="join">Join</button> <br /> <br />
            <button type="button" onClick={() => onLeave("host")} id="leave">Leave</button> <br /> <br />
            <button onClick={() => setismuted(!ismuted)}>{ ismuted == true ? "Mute" : "Unmute"}</button>
            <br /> <br />
            <button onClick={() => setishold(!ishold)}>{ ishold == true ? "Hold" : "IsHold"}</button>
        </div>
    </div>
    <MediaPlayer
            videoTrack={LocalVidioTrack}
            audioTrack={LocalAudioTrack}
          ></MediaPlayer>

<br />

<MediaPlayer
            videoTrack={remoteVideoTrack}
            audioTrack={remoteAudioTrack}
          ></MediaPlayer>
    
    <div id="message"></div>

    </div>
    </div>
    </div>
  )
}

export default NewVideoCall