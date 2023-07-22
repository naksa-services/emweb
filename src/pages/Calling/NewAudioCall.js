import React from 'react'
import AgoraRTC from 'agora-rtc-sdk-ng';
import { useEffect } from 'react';
import { useState } from 'react';


// async function JoinChnnael(){
//           await agoraEngine.join(options.appId, options.channel, options.token, options.uid);
//           showMessage("Joined channel: " + options.channel);
//           // Create a local audio track from the microphone audio.
//           channelParameters.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
//           // Publish the local audio track in the channel.
//           await agoraEngine.publish(channelParameters.localAudioTrack);
//           console.log("Publish success!");
// }





function NewAudioCall(data) {
  const [ismuted, setismuted] = useState(true);
  const [ishold, setishold] = useState(false);
  const agoraEngine = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
  let options = 
{
    // Pass your App ID here.
    appId: 'b61c6409413c4d2fbb7f4288e47aa8d6',
    // Set the channel name.
    channel: data.channel,
    // Pass your temp token here.
    token: data.token,
    // Set the user ID.
    uid: data.uid,
};
// var ismuted = true;

let channelParameters =
{
  // A variable to hold a local audio track.
  localAudioTrack: null,
  // A variable to hold a remote audio track.
  remoteAudioTrack: null,
    // A variable to hold the remote user id.
  remoteUid: null,
};
  async function startBasicCall()
{
  // Create an instance of the Agora Engine
  
  
  // Listen for the "user-published" event to retrieve an AgoraRTCRemoteUser object.
  agoraEngine.on("user-published", async (user, mediaType) =>
  {
    // Subscribe to the remote user when the SDK triggers the "user-published" event.
    await agoraEngine.subscribe(user, mediaType);
    console.log("subscribe success");

    // Subscribe and play the remote audio track.
    if (mediaType == "audio")
    {
      channelParameters.remoteUid=user.uid;
      // Get the RemoteAudioTrack object from the AgoraRTCRemoteUser object.
      channelParameters.remoteAudioTrack = user.audioTrack;
      // Play the remote audio track. 
      channelParameters.remoteAudioTrack.play();
      showMessage("Remote user connected: " + user.uid);
    }

    // Listen for the "user-unpublished" event.
    agoraEngine.on("user-unpublished", user =>
    {
      console.log(user.uid + "has left the channel");
      showMessage("Remote user has left the channel");
    });
  });

  
      // Join a channel.
      await agoraEngine.join(options.appId, options.channel, options.token, options.uid);
      showMessage("Joined channel: " + options.channel);
      // Create a local audio track from the microphone audio.
      channelParameters.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
      // Publish the local audio track in the channel.
      await agoraEngine.publish(channelParameters.localAudioTrack);
      console.log("Publish success!");
    
    
    // Listen to the Leave button click event.
    
  
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
  const muteCall =() =>{
    if(ismuted){
      setismuted(false);
      channelParameters.localAudioTrack.setEnabled(false)
    }
    else{
      setismuted(true);
      channelParameters.localAudioTrack.setEnabled(true);
    }
    console.log(ismuted);
    console.log("Call Muted");
  }
  const holdCall =() =>{
    if(ismuted){
      setishold(true);
      // channelParameters.remoteAudioTrack.setEnabled(true);
      channelParameters.localAudioTrack.setEnabled(true)
    }
    else{
      setishold(false);
      // channelParameters.remoteAudioTrack.
      channelParameters.localAudioTrack.setEnabled(false);
    }
    console.log(ishold);
    console.log("Call Hold");
  }
  return (
    <div>
          <div className="content-body">
                  <div className="container-fluid">
                  <div class="row">
        <div>
            <button onClick={() => startBasicCall()} type="button" id="join">Join</button> <br /> <br />
            <button type="button" onClick={() => endBasicCall()} id="leave">Leave</button> <br /> <br />
            <button onClick={() => muteCall()}>{ ismuted == true ? "Mute" : "Unmute"}</button>
            <br /> <br />
            <button onClick={() => holdCall()}>{ ishold == true ? "Hold" : "IsHold"}</button>
        </div>
    </div>
    
    <div id="message"></div>
    </div>
    </div>
    </div>
  )
}

export default NewAudioCall