"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import HoursMinutesMillisecondsInput from "./timeComponent";

export default function CaptionsComponent() {
  const [captions, setCaptions] = useState({});
  const [inputValue, setInputValue] = useState("");

  function addSubtitlesToVideo() {
    console.log("adding subs");
  }

  const search = () => {
    addSubtitlesToVideo();
  };

  const addCaption = ({ data }) => {
    setCaptions(() => data);
  };
  useEffect(() => console.log(captions, "data in parent"), [captions]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={{ border: "1px solid black" }}>
        <h1>Captions</h1>
        <HoursMinutesMillisecondsInput handleCaption={addCaption} />
      </div>
    </main>
  );
}
