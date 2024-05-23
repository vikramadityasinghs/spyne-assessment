import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function VideoComponent({ videoUrl, captions }: any) {
  const [captionsSrc, setCaptionsSrc] = useState(captions);
  const [showWaitScreen, setShowWaitScreen] = useState(false);

  useEffect(() => {
    setCaptionsSrc(captions);
    setShowWaitScreen(true);
    const timer = setTimeout(() => {
      setShowWaitScreen(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [captions]);

  return (
    <>
      <div>
        {showWaitScreen ? (
          <div className="fw-600">cooking up captions</div>
        ) : captionsSrc ? (
          <div className="fw-600">Captions: {captions}</div>
        ) : (
          <div className="fw-600" style={{ borderBottom: "1px solid black" }}>
            Generate Video Captions with precision
          </div>
        )}
      </div>
      <ReactPlayer
        className={"mainVideoContainer"}
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
