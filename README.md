# Portfolio Backend – Express + OpenAI API

Backend service powering my personal portfolio with AI chat, projects API, and certifications API.  
Built using **Node.js (ESM)**, **Express**, and **OpenAI**.

🌐 **Live API Base URL:** https://portfolio-backend-xbxf.onrender.com

---

## 🚀 Features

### 🧠 AI Chatbot API
- Uses OpenAI Chat Completions (gpt-4o-mini)
- AI persona of “Som Kumar Pawar”
- Responds intelligently to questions about skills, projects, etc.

### 📁 Projects API  
Serves structured JSON of all my projects.

### 🏅 Certifications API  
Serves education/certification data.

### 🌐 CORS Enabled  
Allows secure communication with the frontend deployed on Vercel.

---

## 🛠 Tech Stack

- Node.js 22 (ES Modules)
- Express.js
- OpenAI API
- Dotenv for environment variables
- Deployed on Render

---

## 📁 API Routes

### **GET /**  
Health check endpoint  
`"TC Portfolio Backend Running 🚀"`

### **POST /api/chat**  
Request:
{
"messages": [
{ "role": "user", "content": "Tell me about Som's skills" }
]
}

makefile
Copy code

Response:
{
"reply": { "role": "assistant", "content": "..." }
}

yaml
Copy code

### **GET /api/projects**  
Returns project list.

### **GET /api/certifications**  
Returns certifications list.

---

## ⚙️ Environment Variables

Create a `.env` file:

OPENAI_API_KEY=sk-xxxx
PORT=5000

yaml
Copy code

(Do NOT commit this file.)

---

## ▶️ Running Locally

npm install
npm start

yaml
Copy code

Backend runs at:  
**http://localhost:5000**

---

## 📦 Deployment
Deployed on Render (Free Tier).

---

## 👤 Author  
**Som Kumar Pawar**  
Full Stack Developer • Java • MERN • AI
