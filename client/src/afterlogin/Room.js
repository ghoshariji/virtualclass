import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const { roomID } = useParams();

    let myMeeting = async (element) => {
      const appID = 136829177;
      const serverSecret = "2a79946d5013a62e0b9b433626fda909";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomID,
        Date.now().toString(),
        "Arijit"
      );
      const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
          container: element,
          sharedLinks: [
            {
              name: "Copy Link",
              url: `https://elearn-class.vercel.app/join-room/${roomID}`,
            },
          ],
          scenario: {
            mode: ZegoUIKitPrebuilt.OneONoneCall,
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
