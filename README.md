# 🎬 Video to Text Converter — Powered by Whisper AI

Convert your **video or audio files into text** using **OpenAI Whisper**, **Node.js**, **React**, and **FFmpeg**.  
This full-stack application demonstrates how to build a **real-world AI-powered transcription system** with a **modern, responsive UI** and **fast backend processing**.

---

## 🚀 Key Features

✅ Upload any audio or video file  
✅ Automatic speech-to-text conversion using **Whisper AI**  
✅ **FFmpeg integration** for multi-format compatibility  
✅ Real-time transcription feedback with progress status  
✅ Download results as a `.txt` file  
✅ Clean, modern **React + Tailwind CSS** UI  
✅ Full **Node.js + Express.js** backend using **Multer** for file handling  
✅ Supports formats: `.mp3`, `.wav`, `.mp4`, `.mkv`, `.mov`

---

# 🧠 Tech Stack

| Layer | Technologies Used |
|-------|-------------------|
| **Frontend** | React.js, Tailwind CSS |
| **Backend** | Node.js, Express.js, Multer |
| **AI Engine** | OpenAI Whisper (Python) |
| **Media Processing** | FFmpeg |
| **Languages** | JavaScript, Python |

---

## ⚙️ Setup Instructions

---

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/video-to-text-converter.git
cd video-to-text-converter
```
---

### 2️⃣ Backend Setup


Move into the backend folder:
```bash
cd backend
npm install
```
---
Create a .env file:
```bash
PORT=4000
```
---
Run the backend server:
```bash
node index.js
```
---
✅ Server will start at http://localhost:4000
---
### 3️⃣ Install Python & Whisper AI
---
Ensure Python 3.8+ is installed, then install Whisper globally:
```
pip install openai-whisper
```

### 4️⃣ Install FFmpeg
---
Download FFmpeg from the Official FFmpeg Builds
.
Extract and add the bin folder path to your system’s Environment Variables.

Verify installation:
```
ffmpeg --version
```
### 5️⃣ Frontend Setup
---
In another terminal:
```
cd frontend
npm install
npm run dev
```

Open your browser at:
👉 http://localhost:5173
---


# 🧩 How It Works
---
🎧 User uploads an audio/video file.

📨 File is sent to the backend using Multer.

🧰 FFmpeg converts the file to .wav format (if needed).

🧠 Whisper AI transcribes the speech into text.

📤 The backend sends the transcript back to the React frontend.

📝 User can view, copy, or download the generated transcript.

---
### 🪄 App Preview

 # Flow:
```
🎬 Upload → ⚙️ Process → 📜 View → 💾 Download
```
# Frontend UI Highlights:

✨ Glassmorphism interface with dark mode

⏳ Progress indicator during transcription

📋 Copy & 💾 Download options for transcript

# 🧑‍💻 Learning Outcomes

File upload handling using Multer

Integrating OpenAI Whisper with Node.js

Converting & preprocessing media using FFmpeg

Building a responsive React + Tailwind CSS interface

Creating a complete AI-powered full-stack application

 # 📂 Project Structure
 ```
Video-to-Text-Converter/
├── backend/
│   ├── index.js
│   ├── audioService.js
│   ├── uploads/
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── UploadFile.jsx
│   │   └── App.jsx
│   ├── public/
│   └── tailwind.config.js
│
└── README.md
```

# 🧰 Example Command (Manual Whisper Test)

You can test Whisper directly in the terminal:

whisper "E:/AI-Project/Text-Converter/backend/uploads/sample.wav" --model small --language en --output_format txt --output_dir "E:/AI-Project/Text-Converter/backend/uploads"

# ❤️ Credits

Developed by Souradip
✨ Powered by OpenAI Whisper, Node.js, and React
