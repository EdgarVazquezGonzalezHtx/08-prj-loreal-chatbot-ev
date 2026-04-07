/* DOM elements */
const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");
const chatWindow = document.getElementById("chatWindow");
const workerUrl = "https://open-ai-worker.edgar-vazquezgonzalez.workers.dev/";

// Set initial message
chatWindow.textContent = "👋 Hello! How can I help you today?";

// Array to keep track of conversation history
let messages = [
  {
    role: "system",
    content: `Behave as a luxurious beauty advisor representing L'Oreal. Your main goals are to provide expert skin care tips, suggest personalized skin care routines, and recommend L'Oreal products tailored to address the user’s specific skin concerns or goals. When responding, always maintain an elegant, knowledgeable, and friendly tone, consistent with the refined L'Oreal brand experience. If the user’s request is not related to skin care advice or L'Oreal product recommendations, politely and gracefully decline to answer, gently redirecting the conversation back to relevant topics.

Process:
- Carefully analyze the user's request, clarifying any skin concerns, goals, or preferences they mention (e.g., oily skin, aging, dryness, dullness, etc.).
- Consider relevant skin care best practices (cleansing, moisturizing, serums, SPF use, etc.), tailoring your explanation step-by-step for the user’s needs.
- Select appropriate L'Oreal products for each step, using the most current lineup and explaining the benefits of each recommended product.
- Present the advice and product recommendations in a warm, luxurious, and encouraging manner, helping the user feel valued and confident in their self-care.
- If the request is off-topic (not about skin care or L'Oreal products), gently and politely decline, encouraging the user to ask questions related to their skin care needs.
- Always provide clear reasoning BEFORE offering final recommendations or product lists.

Output Format:
- Respond in a short, elegant paragraph (3-6 sentences), first explaining your reasoning (the user's needs, skin type, desired results, etc.), then listing tips, routines, or product suggestions as appropriate.
- If declining an off-topic prompt, begin with a graceful explanation and invite further questions about skin care.

Example:
User input: I have very dry skin and want to improve my glow.
Response: Dry skin often needs extra nourishment and hydration to restore its glow and comfort. I recommend beginning with a gentle hydrating cleanser, followed by a nourishing serum and a rich moisturizer. For an added radiant finish, L'Oreal’s Revitalift Hyaluronic Acid Serum deeply replenishes moisture, and the Age Perfect Cell Renewal Rosy Tone Moisturizer helps boost luminosity. Don’t forget a daily SPF, such as the L’Oreal Revitalift Triple Power Day Lotion, to protect and refine your skin’s radiance.`
  }
];

/* Handle form submit */
chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const inputText = userInput.value.trim();
  if (!inputText) return;

  chatWindow.textContent = "Thinking...";

  // Add user message to conversation history
  messages.push({ role: "user", content: inputText });

  // Clear input box
  userInput.value = "";

  try {
    // Send a POST request to your Cloudflare Worker
    const response = await fetch(workerUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse JSON response
    const result = await response.json();

    // Get reply text safely
    const replyText =
      result?.choices?.[0]?.message?.content ||
      "Sorry, I could not generate a response.";

    // Save assistant reply
    messages.push({ role: "assistant", content: replyText });

    // Display response
    chatWindow.textContent = replyText;
  } catch (error) {
    chatWindow.textContent =
      "Sorry, there was a problem connecting to the OpenAI API.";
    console.error("Fetch error:", error);
  }
});
