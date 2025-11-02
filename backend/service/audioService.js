import { execSync } from "child_process";
import fs from "fs";
import path from "path";

// ✅ Full paths
const FFMPEG = "D:/ffmg-video/ffmpeg-8.0-full_build/ffmpeg-8.0-full_build/bin/ffmpeg.exe";
const WHISPER = "C:/Users/soura/AppData/Local/Programs/Python/Python312/Scripts/whisper.exe";

export const transcribeAudio = async (filePath) => {
  try {
    // Ensure ffmpeg directory is available to Whisper
    process.env.PATH = `D:\\ffmg-video\\ffmpeg-8.0-full_build\\ffmpeg-8.0-full_build\\bin;${process.env.PATH}`;

    const wavFile = filePath.replace(path.extname(filePath), ".wav");
    const outDir = path.dirname(wavFile);

    console.log("🎧 Converting file to WAV...");
    execSync(`"${FFMPEG}" -y -loglevel quiet -i "${filePath}" -ar 16000 -ac 1 "${wavFile}"`);

    console.log("🧠 Running Whisper transcription...");
    execSync(
      `"${WHISPER}" "${wavFile}" --model small --language en --output_format txt --output_dir "${outDir}"`,
      { stdio: "inherit" }
    );

    const txtFile = path.join(outDir, path.basename(wavFile, ".wav") + ".txt");

    if (!fs.existsSync(txtFile)) {
      throw new Error("❌ Transcription file not found! Whisper failed to generate output.");
    }

    const transcript = fs.readFileSync(txtFile, "utf-8").trim();

    console.log("✅ Transcription completed successfully!");
    console.log("--------------------------------------");
    console.log(transcript);
    console.log("--------------------------------------");

   
    try {
      fs.unlinkSync(filePath);
      fs.unlinkSync(wavFile);
    } catch (cleanupErr) {
      console.warn("⚠️ Cleanup warning:", cleanupErr.message);
    }

    return { transcript };

  } catch (error) {
    console.error("🚨 Error during transcription:", error.message);
    throw error;
  }
};
