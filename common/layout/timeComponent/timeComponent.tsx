import { todo } from "node:test";
import React, { useState } from "react";
import styles from "./timeComponent.module.scss";
const HoursMinutesMillisecondsInput = ({ handleCaption }: any) => {
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
  const handleChange = (
    timeType: string | any,
    field: any,
    value: number | any
  ) => {
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
    setCaptionEntries((prevEntries): any => [
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
  const handleDeleteEntry = (index: number) => {
    setCaptionEntries((prevEntries) =>
      prevEntries.filter((_, i) => i !== index)
    );
  };
  const handleClick = () => {
    handleCaption(captionEntries);
  };
  return (
    <>
      <div className={styles.captionWrapper}>
        <div className={styles.captionMainDiv}>
          <div className={styles.timeWrapper}>
            <div className={styles.timeContainer}>
              <h3>Start Time</h3>
              <div className={styles.timeInput}>
                <input
                  type="range"
                  min={0}
                  max={60}
                  value={startTime.hours}
                  onChange={(e) =>
                    handleChange("start", "hours", e.target.value)
                  }
                  placeholder="Hours"
                />
                <input
                  type="number"
                  min={0}
                  max={60}
                  value={startTime.hours}
                  onChange={(e) =>
                    handleChange("start", "hours", e.target.value)
                  }
                  placeholder="Hours"
                />
                <span>Hh</span>
              </div>
              <div className={styles.timeInput}>
                <input
                  type="range"
                  min={0}
                  max={59}
                  value={startTime.minutes}
                  onChange={(e) =>
                    handleChange("start", "minutes", e.target.value)
                  }
                  placeholder="Minutes"
                />
                <input
                  type="number"
                  min={0}
                  max={59}
                  value={startTime.minutes}
                  onChange={(e) =>
                    handleChange("start", "minutes", e.target.value)
                  }
                  placeholder="Minutes"
                />
                <span>Mm</span>
              </div>
              <div className={styles.timeInput}>
                <input
                  type="range"
                  min={0}
                  max={59}
                  value={startTime.seconds}
                  onChange={(e) =>
                    handleChange("start", "seconds", e.target.value)
                  }
                  placeholder="Seconds"
                />
                <input
                  type="number"
                  min={0}
                  max={59}
                  value={startTime.seconds}
                  onChange={(e) =>
                    handleChange("start", "seconds", e.target.value)
                  }
                  placeholder="Seconds"
                />
                <span>Ss</span>
              </div>
              <div className={styles.timeInput}>
                <input
                  type="range"
                  min={0}
                  max={999}
                  value={startTime.milliseconds}
                  onChange={(e) =>
                    handleChange("start", "milliseconds", e.target.value)
                  }
                  placeholder="Milliseconds"
                />
                <input
                  type="number"
                  min={0}
                  max={999}
                  value={startTime.milliseconds}
                  onChange={(e) =>
                    handleChange("start", "milliseconds", e.target.value)
                  }
                  placeholder="Milliseconds"
                />
                <span>sss</span>
              </div>
            </div>
            <div className={styles.timeContainer}>
              <h3>End Time</h3>
              <div className={styles.timeInput}>
                <input
                  type="range"
                  min={0}
                  max={60}
                  value={endTime.hours}
                  onChange={(e) => handleChange("end", "hours", e.target.value)}
                  placeholder="Hours"
                />
                <input
                  type="number"
                  min={0}
                  max={60}
                  value={endTime.hours}
                  onChange={(e) => handleChange("end", "hours", e.target.value)}
                  placeholder="Hours"
                />
                <span>Hh</span>
              </div>
              <div className={styles.timeInput}>
                <input
                  type="range"
                  min={0}
                  max={59}
                  value={endTime.minutes}
                  onChange={(e) =>
                    handleChange("end", "minutes", e.target.value)
                  }
                  placeholder="Minutes"
                />
                <input
                  type="number"
                  min={0}
                  max={59}
                  value={endTime.minutes}
                  onChange={(e) =>
                    handleChange("end", "minutes", e.target.value)
                  }
                  placeholder="Minutes"
                />
                <span>Mm</span>
              </div>
              <div className={styles.timeInput}>
                <input
                  type="range"
                  min={0}
                  max={59}
                  value={endTime.seconds}
                  onChange={(e) =>
                    handleChange("end", "seconds", e.target.value)
                  }
                  placeholder="Seconds"
                />
                <input
                  type="number"
                  min={0}
                  max={59}
                  value={endTime.seconds}
                  onChange={(e) =>
                    handleChange("end", "seconds", e.target.value)
                  }
                  placeholder="Seconds"
                />
                <span>Ss</span>
              </div>
              <div className={styles.timeInput}>
                <input
                  type="range"
                  min={0}
                  max={999}
                  value={endTime.milliseconds}
                  onChange={(e) =>
                    handleChange("end", "milliseconds", e.target.value)
                  }
                  placeholder="Milliseconds"
                />
                <input
                  type="number"
                  min={0}
                  max={999}
                  value={endTime.milliseconds}
                  onChange={(e) =>
                    handleChange("end", "milliseconds", e.target.value)
                  }
                  placeholder="Milliseconds"
                />
                <span>sss</span>
              </div>
            </div>
          </div>
          <div className={styles.captionContainer}>
            <textarea
              value={caption}
              className={styles.inputField}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Caption"
            />
          </div>
          <div className={styles.addButtonWrapper}>
            <button onClick={handleAddTimeEntry} className={styles.addEntryBtn}>
              Add Timestamp
            </button>
          </div>
        </div>
      </div>

      {captionEntries && (
        <div className={styles.container}>
          {captionEntries.map((entry: any, index) => (
            <div className={styles.entryContainer} key={index}>
              <div className={styles.textContainer}>
                <p>
                  Start Time: {entry.start.hours}h:{entry.start.minutes}m:
                  {entry.start.seconds}s:{entry.start.milliseconds}ms
                </p>
                <p>
                  End Time: {entry.end.hours}h:{entry.end.minutes}m:
                  {entry.end.seconds}s:{entry.end.milliseconds}ms
                </p>
                <p>Caption: {entry.caption}</p>
              </div>
              <div className={styles.buttonContainer}>
                <button
                  className={styles.rmEntryBtn}
                  onClick={() => handleDeleteEntry(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {captionEntries.length ? (
        <button className={styles.generateButton} onClick={handleClick}>
          Generate Captions!
        </button>
      ) : (
        <button
          style={{ opacity: "0.7" }}
          disabled
          className={styles.generateButton}
        >
          Enter Timespamps!
        </button>
      )}
      {/* <button className={styles.generateButton} onClick={handleClick}>
        Generate Captions!
      </button> */}
    </>
  );
};

export default HoursMinutesMillisecondsInput;

// todo
// componentise each slider for time retrival
