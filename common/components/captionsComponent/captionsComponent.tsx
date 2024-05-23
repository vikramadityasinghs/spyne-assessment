import { useState } from "react";
import HoursMinutesMillisecondsInput from "./timeComponent";
import { generateWebVTT } from "../../../src/utils/subtitles";
export default function CaptionsComponent({ setCaption }) {
  const [captions, setCaptions] = useState({});

  const addCaption = ({ ...data }) => {
    setCaptions(() => data);
    writeSubtitlesToFile(data);
  };
  async function sendData() {
    const data = "/subtitles.vtt";
    setCaption(data);
  }

  async function writeSubtitlesToFile(captions) {
    try {
      const response = await fetch("/api/writeSubtitles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ captions }),
      });
      if (!response.ok) {
        throw new Error("Failed to write subtitles to file");
      }
      const data = await response.json();
      console.log(data.message);
      await sendData();
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={{ border: "1px solid black" }}>
        <HoursMinutesMillisecondsInput handleCaption={addCaption} />
      </div>
    </main>
  );
}
