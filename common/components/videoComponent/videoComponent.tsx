import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function VideoComponent({ videoUrl, captions }: any) {
  const [captionsSrc, setCaptionsSrc] = useState(captions);
  useEffect(() => {
    setCaptionsSrc(captions);
  }, [captions]);
  return (
    <>
      <ReactPlayer
        key={captionsSrc}
        url={videoUrl}
        controls
        config={{
          file: {
            attributes: {
              crossOrigin: "anonymous",
            },
            tracks: [
              {
                kind: "subtitles",
                src: captionsSrc,
                srcLang: "en",
                default: true,
                label: "English",
              },
            ],
          },
        }}
      />
    </>
  );
}
