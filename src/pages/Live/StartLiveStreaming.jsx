// import React, { useEffect, useState } from 'react';
// import AgoraRTC from "agora-rtc-sdk";
// import { StartLiveStramingApi } from '../../api';
// // import Call from '../components/Call';











// function StartLiveStreaming() {
//     const [screenShare, setscreenShare] = useState(false);
//     const [videoShare, setvideoShare] = useState(true);
//     const [audioShare, setaudioShare] =useState(true);
    
//     var rtc = {
//         client: null,
//         joined: false,
//         published: false,
//         localStream: null,
//         remoteStreams: [],
//         params: {}
//     };
    
//     // Options for joining a channel
//     var option = {
//         appID: "b61c6409413c4d2fbb7f4288e47aa8d6",
//         channel: "naks",
//         uid: null,
//         token: "007eJxTYGBYFHMye9J0048d3cJZTvfn/0/a+enY51XsKv/O3Iy+67hFgSHJzDDZzMTA0sTQONkkxSgtKck8zcTIwiLVxDwx0SLF7PGZy8kNgYwMnuouTIwMEAjiszDkJWYXMzAAABk/IjU=",
//         key: '',
//         secret: ''
//     }



//     useEffect(() =>{
//         joinChannel("host");
//     },[])
//     const joinChannel =(role)  =>{
//         // Create a client
//     rtc.client = AgoraRTC.createClient({ mode: "live", codec: "h264" });
//         // Initialize the client
//         rtc.client.init(option.appID, function () {
//             console.log("init success");
    
//             // Join a channel
//             rtc.client.join(option.token ?
//                 option.token : null,
//                 option.channel, option.uid ? +option.uid : null, function (uid) {
//                     console.log("join channel: " + option.channel + " success, uid: " + uid);
//                     rtc.params.uid = uid;
//                     if (role === "host") {
//                         rtc.client.setClientRole("host");
//                         // Create a local stream
//                         rtc.localStream = AgoraRTC.createStream({
//                             streamID: rtc.params.uid,
//                             audio: true,
//                             video: true,
//                             screen: screenShare,
//                         })
    
//                         // Initialize the local stream
//                         rtc.localStream.init(function () {
//                             console.log("init local stream success");
//                             rtc.localStream.play("local_stream");
//                             rtc.client.publish(rtc.localStream, function (err) {
//                                 console.log("publish failed");
//                                 console.error(err);
//                             })
//                         }, function (err) {
//                             console.error("init local stream failed ", err);
//                         });
    
//                         rtc.client.on("connection-state-change", function (evt) {
//                             console.log("audience", evt)
//                         })
//                         const data={
//                             vendorid:sessionStorage.getItem('vid'),
//                             startedat:new Date(),
//                             islive:'true'
//                         }
//                         StartLiveStramingApi(data).then((res) => {
//                             console.log(res);
//                             console.log("Live stream started");

//                         })
    
//                     }
//                     // if (role === "audience") {
//                     //     rtc.client.on("connection-state-change", function (evt) {
//                     //         console.log("audience", evt)
//                     //     })
    
//                     //     rtc.client.on("stream-added", function (evt) {
//                     //         var remoteStream = evt.stream;
//                     //         var id = remoteStream.getId();
//                     //         if (id !== rtc.params.uid) {
//                     //             rtc.client.subscribe(remoteStream, function (err) {
//                     //                 console.log("stream subscribe failed", err);
//                     //             })
//                     //         }
//                     //         console.log('stream-added remote-uid: ', id);
//                     //     });
    
//                     //     rtc.client.on("stream-removed", function (evt) {
//                     //         var remoteStream = evt.stream;
//                     //         var id = remoteStream.getId();
//                     //         console.log('stream-removed remote-uid: ', id);
//                     //     });
    
//                     //     rtc.client.on("stream-subscribed", function (evt) {
//                     //         var remoteStream = evt.stream;
//                     //         var id = remoteStream.getId();
//                     //         remoteStream.play("remote_video_");
//                     //         console.log('stream-subscribed remote-uid: ', id);
//                     //     })
    
//                     //     rtc.client.on("stream-unsubscribed", function (evt) {
//                     //         var remoteStream = evt.stream;
//                     //         var id = remoteStream.getId();
//                     //         remoteStream.pause("remote_video_");
//                     //         console.log('stream-unsubscribed remote-uid: ', id);
//                     //     })
//                     // }
//                 }, function (err) {
//                     console.error("client join failed", err)
//                 })
    
//         }, (err) => {
//             console.error(err);
//         });
//     }
//     const leaveEventHost= () => {
//         rtc.client.leave( function (err) {
//             console.log("publish failed");
//             console.error(err);
//         })
//         rtc.client.leave(function (ev) {
//             console.log(ev)
//         })
//         window.location.reload();
//     }
    
//     // const leaveEventAudience =() => {
//     //     rtc.client.leave(function () {
//     //         console.log("client leaves channel");
//     //         //……
//     //     }, function (err) {
//     //         console.log("client leave failed ", err);
//     //         //error handling
//     //     })
//     // }
//     return (
//         <div>
//             <button onClick={() => joinChannel('host')}>Join Channel as Host</button>
//             {/* <button onClick={() => joinChannel('audience')}>Join Channel as Audience</button> */}
//             <button onClick={() => leaveEventHost('host')}>Leave Event Host</button>
//             <button onClick={()=> setscreenShare(!screenShare)}>{screenShare? "Stop Screen": "Share Screen"}</button>
//             <button onClick={()=> setvideoShare(!videoShare)}>{videoShare ? "Stop Video": "startvideo"}</button>
//             <button onClick={()=> setaudioShare(!audioShare)}>{audioShare ? "Stop Audio" :"Start Audio"}</button>
//             {/* <button onClick={() => leaveEventAudience('audience')}>Leave Event Audience</button> */}
//             <div id="local_stream" className="local_stream" style={{ width: "400px", height: "400px" }}></div>
//             {/* <div
//                 id="remote_video_" className='remote_video_'
//                 style={{ width: "400px", height: "400px" }}
//             /> */}
//         </div>
//     );
// }

// export default StartLiveStreaming;










import React, { useEffect } from 'react'
import AgoraRTC from "agora-rtc-sdk-ng"

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
    role:''
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
    // A variable to hold the remote user id.s
    remoteUid: null,
};
function StartLiveStreaming() {
    const agoraEngine = AgoraRTC.createClient({ mode: "live", codec: "vp8" });
    // Dynamically create a container in the form of a DIV element to play the remote video track.
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



    useEffect(() => {
        startBasicCall();
    }, [])
    async function startBasicCall(){
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

    async function joinChannel(){
        options.role = 'host';
        await agoraEngine.join(options.appId, options.channel, options.token, options.uid);
            // Create a local audio track from the audio sampled by a microphone.
            channelParameters.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
            // Create a local video track from the video captured by a camera.
            channelParameters.localVideoTrack = await AgoraRTC.createCameraVideoTrack();
            // Append the local video container to the page body.
            document.body.append(localPlayerContainer);

            // Publish the local audio and video track if the user joins as a host.
            await agoraEngine.setClientRole(options.role);
                // Publish the local audio and video tracks in the channel.
                await agoraEngine.publish([channelParameters.localAudioTrack, channelParameters.localVideoTrack]);
                // Play the local video track.
                // channelParameters.remoteVideoTrack.stop();
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

    async function joinChannelAsAudience(){
        options.role = 'audience';
        await agoraEngine.setClientRole(options.role);
        //    publish local tracks to set the user role as audience.
                // await agoraEngine.unpublish([channelParameters.localAudioTrack,channelParameters.localVideoTrack]);
                // Stop playing the local video track
                // channelParameters.localVideoTrack.stop();
                if(channelParameters.remoteVideoTrack!=null)
                {
                    // Play the remote video stream, if the remote user has joined the channel.
                    channelParameters.remoteVideoTrack.play(remotePlayerContainer);
                }
            //  Call the method to set the role as Audience.
            

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
  return (
    <div>
      <div class="row">
            <div>
                
                <button type="button" onClick={() => joinChannel()} id="join">Join</button>
                <button type="button" onClick={() => leaveChannel1()}id="leave">Leave</button>
                <button type="button" id="join">Join as Audience</button>
                <button type="button" onClick={() => joinChannelAsAudience()}id="leave">Leave as Audence</button>
            </div>
        </div>
    </div>
  )
}

export default StartLiveStreaming
