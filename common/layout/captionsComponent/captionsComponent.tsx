import { useState } from "react";
import HoursMinutesMillisecondsInput from "../timeComponent/timeComponent";
import { generateWebVTT } from "../../../src/utils/subtitles";
import styles from "./captionsComponent.module.scss";
export default function CaptionsComponent({ setCaption }: any) {
  const [captions, setCaptions] = useState({});

  const addCaption = ({ ...data }) => {
    setCaptions(() => data);
    writeSubtitlesToFile(data);
  };
  async function sendData() {
    const data = "/subtitles.vtt";
    setCaption(data);
  }

  async function writeSubtitlesToFile(captions: any) {
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
    <div className={styles.hoursComponentWrapper}>
      <HoursMinutesMillisecondsInput handleCaption={addCaption} />
    </div>
  );
}
