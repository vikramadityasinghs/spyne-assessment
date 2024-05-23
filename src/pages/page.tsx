"use client";

import React, { useState } from "react";
import CaptionsComponent from "../../common/components/captionsComponent/captionsComponent";
import VideoComponent from "../../common/components/videoComponent/videoComponent";
export default function Home() {
  const [videoUrl, SetVideoUrl] = useState("");
  const [subtitlesUrl, setSubtitlesUrl] = useState("");

  return (
    <main className="">
      <div className="inputContainer">
        <input
          type="text"
          onChange={(e) => SetVideoUrl(e.target.value)}
          value={videoUrl}
        />
      </div>
      <VideoComponent captions={subtitlesUrl} videoUrl={videoUrl} />
      <CaptionsComponent setCaption={setSubtitlesUrl} />
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
