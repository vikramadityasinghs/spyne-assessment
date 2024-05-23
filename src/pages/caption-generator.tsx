"use client";
import React, { useState } from "react";
import CaptionsComponent from "../../common/layout/captionsComponent/captionsComponent";
import VideoComponent from "../../common/layout/videoComponent/videoComponent";
export default function Home() {
  const [videoUrl, SetVideoUrl] = useState("");
  const [subtitlesUrl, setSubtitlesUrl] = useState("");

  return (
    <main className="mainContainer">
      <div className="bodyContainer">
        <div className="captionsContainer">
          <CaptionsComponent setCaption={setSubtitlesUrl} />
        </div>
      </div>
      <div className="inputWrapper">
        <div className="inputContainer">
          <div className="inputDiv" style={{}}>
            <h2>Video Address</h2>
            <input
              style={{ width: "100%" }}
              type="text"
              onChange={(e) => SetVideoUrl(e.target.value)}
              value={videoUrl}
              placeholder="add Video address here"
            />
          </div>
        </div>
        <div className="videoContainer">
          <VideoComponent captions={subtitlesUrl} videoUrl={videoUrl} />
        </div>
      </div>
    </main>
  );
}

// const getVideoMetadata = async (videoUrl) => {
//   try {
//     const response = await fetch(videoUrl, { method: "HEAD" }); // Send a HEAD request to fetch only the headers

//     // Calculate the duration based on the content length and typical bitrates (assuming video is encoded in a common format)
//     console.log(response, "response in function");
//   } catch (error) {
//     console.error("Error fetching video metadata:", error);
//     return null;
//   }
// };
// const handleButtonClick = async () => {
// console.log("buttonClicked");
// try {
//   const videoMetadata = await getVideoMetadata(videoUrl);
//   // setMetadata(videoMetadata);
//   // setError(null);
//   console.log(videoMetadata, "video meta data console");
// } catch (error) {
//   // setMetadata(null);
//   // setError(error.message);
//   console.log("error", error);
// }
// };
