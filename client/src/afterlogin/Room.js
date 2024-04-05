import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const { roomID } = useParams();
  const myMeeting = async (element) => {
    const appID = 1576775279;
    const serverSecret = "c05100dfaab1cb3c9ce2569158a1b350";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "Arijit ghsoh"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy Link",
          url: `http://localhost:3000/joinroom/${roomID}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
    });
  };
  return (
    <div>
      <div ref={myMeeting} />
    </div>
  );
};

export default Room;
