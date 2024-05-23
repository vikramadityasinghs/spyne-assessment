import React, { useState } from "react";

const HoursMinutesMillisecondsInput = ({ handleCaption }) => {
  const [captionEntries, setCaptionEntries] = useState([]);
  const [startTime, setStartTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });
  const [endTime, setEndTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });
  const [caption, setCaption] = useState("");
  const handleChange = (timeType, field, value) => {
    if (timeType === "start") {
      setStartTime((prevTime) => ({
        ...prevTime,
        [field]: parseInt(value, 10),
      }));
    } else {
      setEndTime((prevTime) => ({
        ...prevTime,
        [field]: parseInt(value, 10),
      }));
    }
  };
  const handleAddTimeEntry = () => {
    setCaptionEntries((prevEntries) => [
      ...prevEntries,
      {
        start: { ...startTime },
        end: { ...endTime },
        caption: caption,
      },
    ]);
    setCaption("");
    setStartTime({
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    });
    setEndTime({
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    });
  };

  const handleDeleteEntry = (index) => {
    setCaptionEntries((prevEntries) =>
      prevEntries.filter((_, i) => i !== index)
    );
  };

  const handleClick = () => {
    handleCaption(captionEntries);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3>Start Time</h3>
          <div>
            <input
              type="range"
              min={0}
              max={24}
              value={startTime.hours}
              onChange={(e) => handleChange("start", "hours", e.target.value)}
              placeholder="Hours"
            />
            <input
              type="number"
              min={0}
              max={24}
              value={startTime.hours}
              onChange={(e) => handleChange("start", "hours", e.target.value)}
              placeholder="Hours"
            />
          </div>
          <div>
            <input
              type="range"
              min={0}
              max={60}
              value={startTime.minutes}
              onChange={(e) => handleChange("start", "minutes", e.target.value)}
              placeholder="Minutes"
            />
            <input
              type="number"
              min={0}
              max={60}
              value={startTime.minutes}
              onChange={(e) => handleChange("start", "minutes", e.target.value)}
              placeholder="Minutes"
            />
          </div>
          <div>
            <input
              type="range"
              min={0}
              max={60}
              value={startTime.seconds}
              onChange={(e) => handleChange("start", "seconds", e.target.value)}
              placeholder="Seconds"
            />
            <input
              type="number"
              min={0}
              max={60}
              value={startTime.seconds}
              onChange={(e) => handleChange("start", "seconds", e.target.value)}
              placeholder="Seconds"
            />
          </div>
          <div>
            <input
              type="range"
              min={0}
              max={1000}
              value={startTime.milliseconds}
              onChange={(e) =>
                handleChange("start", "milliseconds", e.target.value)
              }
              placeholder="Milliseconds"
            />
            <input
              type="number"
              min={0}
              max={1000}
              value={startTime.milliseconds}
              onChange={(e) =>
                handleChange("start", "milliseconds", e.target.value)
              }
              placeholder="Milliseconds"
            />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3>End Time</h3>
          <div>
            <input
              type="range"
              min={0}
              max={24}
              value={endTime.hours}
              onChange={(e) => handleChange("end", "hours", e.target.value)}
              placeholder="Hours"
            />
            <input
              type="number"
              min={0}
              max={24}
              value={endTime.hours}
              onChange={(e) => handleChange("end", "hours", e.target.value)}
              placeholder="Hours"
            />
          </div>
          <div>
            <input
              type="range"
              min={0}
              max={60}
              value={endTime.minutes}
              onChange={(e) => handleChange("end", "minutes", e.target.value)}
              placeholder="Minutes"
            />
            <input
              type="number"
              min={0}
              max={60}
              value={endTime.minutes}
              onChange={(e) => handleChange("end", "minutes", e.target.value)}
              placeholder="Minutes"
            />
          </div>
          <div>
            <input
              type="range"
              min={0}
              max={60}
              value={endTime.seconds}
              onChange={(e) => handleChange("end", "seconds", e.target.value)}
              placeholder="Seconds"
            />
            <input
              type="number"
              min={0}
              max={60}
              value={endTime.seconds}
              onChange={(e) => handleChange("end", "seconds", e.target.value)}
              placeholder="Seconds"
            />
          </div>
          <div>
            <input
              type="range"
              min={0}
              max={1000}
              value={endTime.milliseconds}
              onChange={(e) =>
                handleChange("end", "milliseconds", e.target.value)
              }
              placeholder="Milliseconds"
            />
            <input
              type="number"
              min={0}
              max={1000}
              value={endTime.milliseconds}
              onChange={(e) =>
                handleChange("end", "milliseconds", e.target.value)
              }
              placeholder="Milliseconds"
            />
          </div>
        </div>
        <div>
          <input
            type="text"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Caption"
          />
        </div>
        <button
          onClick={handleAddTimeEntry}
          style={{ backgroundColor: "lightgreen" }}
        >
          Add Time Entry
        </button>
      </div>
      <div>
        {captionEntries.map((entry, index) => (
          <div key={index}>
            <p>
              Start Time: {entry.start.hours}h:{entry.start.minutes}m:
              {entry.start.seconds}s:{entry.start.milliseconds}ms
            </p>
            <p>
              End Time: {entry.end.hours}h:{entry.end.minutes}m:
              {entry.end.seconds}s:{entry.end.milliseconds}ms
            </p>
            <p>Caption: {entry.caption}</p>
            <button onClick={() => handleDeleteEntry(index)}>Delete</button>
          </div>
        ))}
      </div>
      <button onClick={handleClick} style={{ backgroundColor: "yellow" }}>
        Send Data to Parent
      </button>
    </>
  );
};

export default HoursMinutesMillisecondsInput;
