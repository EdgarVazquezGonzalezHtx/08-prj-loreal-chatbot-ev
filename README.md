# Project 8: L'Oréal Chatbot

A sleek, AI-powered skincare assistant that provides personalized routines and product recommendations using L’Oréal brands only. 
Built with a simple front-end interface and powered by an openAI API through a Cloudflare Worker.

---

## ✨ Features

- 💬 Chat-based skincare assistant  
- 🧴 Personalized skincare routines  
- 💎 L’Oréal-only product recommendations  
- 🚫 Graceful refusal of unrelated topics  
- ⏳ Animated “thinking” indicator for better UX  
- 🎨 Clean, modern UI with polished styling  

---
## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Cloudflare Worker  
- **API:** OpenAI API  

---

## 🚀 How It Works

1. User enters a skincare-related question  
2. Message is sent to a Cloudflare Worker  
3. Worker forwards request to OpenAI API  
4. AI responds with skincare advice + L’Oréal product recommendations  
5. Response is displayed in the chat UI  

---

## Future Improvements
* Chat history UI (instead of replacing messages)
* User skin-type selection
* Saved routines

---

## What I Learned

* How to integrate a frontend application with an AI backend using API calls
* Structuring and maintaining conversation history for contextual responses
* Designing effective system prompts to control tone, behavior, and output quality
* Improving user experience through UI polish, animations, and responsiveness
* Debugging asynchronous JavaScript (fetch requests, JSON parsing, error handling)
* Connecting a frontend to a deployed backend service using Cloudflare Workers

---

## Challenges Solved

* UI breaking due to DOM selection bugs: Resolved mismatched element IDs (chatWindow vs chat-window)
* Asynchronous timing issues: Ensured the “thinking” animation appears and disappears at the correct time
* Frontend ↔ backend debugging: Used console logging and  inspection tool to trace issues 