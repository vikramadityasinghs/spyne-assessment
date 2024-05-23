export function generateWebVTT(captions) {
  let vttContent = "WEBVTT\n\n";
  for (const key in captions) {
    if (captions.hasOwnProperty(key)) {
      const caption = captions[key];
      const start = formatTime(caption.start);
      const end = formatTime(caption.end);
      vttContent += `${start} --> ${end}\n${caption.caption}\n\n`;
    }
  }
  return vttContent;
}
function formatTime(time) {
  const { hours, minutes, seconds, milliseconds } = time;
  return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}.${padZero(
    milliseconds,
    3
  )}`;
}

function padZero(num, size = 2) {
  let str = String(num);
  while (str.length < size) {
    str = "0" + str;
  }
  return str;
}
