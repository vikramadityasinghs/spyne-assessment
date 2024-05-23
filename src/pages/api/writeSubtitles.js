import fs from "fs";
import { generateWebVTT } from "../../utils/subtitles";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { captions } = req.body;
    const webVTTContent = generateWebVTT(captions);
    fs.writeFile("public/subtitles.vtt", webVTTContent, (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to write subtitles to file" });
        return;
      }
      res
        .status(200)
        .json({ message: "Subtitles written to file successfully" });
    });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
