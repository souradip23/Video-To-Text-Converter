import React, { useState } from "react";
import axios from "axios";
import { Upload, Loader2, FileText, Download, Copy } from "lucide-react";

const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [transcript, setTranscript] = useState("");

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file first!");
    setLoading(true);
    setTranscript("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:4000/api/upload", formData);
      setTranscript(res.data.transcript);
    } catch (err) {
      alert("Upload failed. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([transcript], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "transcript.txt";
    link.click();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(transcript);
    alert("Transcript copied to clipboard!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-100 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500 p-6">
      
      {/* --- Project Header --- */}
      <header className="mb-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-transparent bg-clip-text drop-shadow-md animate-pulse">
          🎬 Video to Text Converter
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm sm:text-base">
          Convert your audio or video files into accurate text transcripts effortlessly.
        </p>
      </header>

      {/* --- Upload Card --- */}

      <div className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg border border-white/30 dark:border-gray-700 shadow-2xl rounded-2xl p-8 w-full max-w-lg transition-transform hover:scale-[1.02]">
        
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-700 dark:text-blue-300 flex items-center justify-center gap-2">
          <Upload className="w-6 h-6" /> Upload & Transcribe
        </h2>


        {/* --- Upload Box --- */}
        <label
          htmlFor="file"
          className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-blue-400 dark:border-blue-600 rounded-xl cursor-pointer bg-blue-50 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 transition"
        >
          {file ? (
            <>
              <FileText className="w-10 h-10 text-blue-500 mb-2" />
              <p className="text-sm text-gray-800 dark:text-gray-200">{file.name}</p>
            </>
          ) : (
            <>
              <Upload className="w-10 h-10 text-blue-400 mb-2" />
              <p className="text-sm text-gray-600 dark:text-gray-300">Click or drag & drop file here</p>
              <p className="text-xs text-gray-400 dark:text-gray-400">(Supports audio & video)</p>
            </>
          )}
          <input
            type="file"
            accept="audio/*,video/*"
            id="file"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>

        {/* --- Upload Button --- */}
        <button
          onClick={handleUpload}
          disabled={loading}
          className={`mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold rounded-xl transition ${
            loading
              ? "bg-gray-400 dark:bg-gray-600 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
          }`}
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" /> Processing...
            </>
          ) : (
            "Upload & Transcribe"
          )}
        </button>

        {/* --- Loading Indicator --- */}
        {loading && (
          <div className="mt-4 flex justify-center">
            <div className="w-10 h-10 border-4 border-blue-400 dark:border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* --- Transcript Display --- */}
        {transcript && (
          <div className="mt-8 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-inner transition">
            <h3 className="font-semibold text-lg mb-3 text-blue-700 dark:text-blue-300 flex items-center gap-2">
              <FileText className="w-5 h-5" /> Transcript
            </h3>

            <pre className="whitespace-pre-wrap text-sm text-gray-800 dark:text-gray-100 max-h-80 overflow-y-auto bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
              {transcript}
            </pre>

            <div className="flex justify-end mt-4 gap-3">
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
              >
                <Copy className="w-4 h-4" /> Copy
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
              >
                <Download className="w-4 h-4" /> Download
              </button>
            </div>
          </div>
        )}
      </div>

      {/* --- Footer --- */}
      <footer className="mt-10 text-gray-500 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} Video to Text Converter | Made with ❤️ by Souradip
      </footer>
    </div>
  );
};

export default UploadFile;
