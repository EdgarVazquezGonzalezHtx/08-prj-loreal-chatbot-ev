# Project 8: L'Oréal Chatbot

L’Oréal is exploring the power of AI, and your job is to showcase what's possible. Your task is to build a chatbot that helps users discover and understand L’Oréal’s extensive range of products—makeup, skincare, haircare, and fragrances—as well as provide personalized routines and recommendations.

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