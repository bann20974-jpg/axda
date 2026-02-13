import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("API Key not found in environment variables");
      return null;
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
};

export const sendMessageToGemini = async (message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  const client = getClient();
  if (!client) {
    throw new Error("API Key is missing. Chat functionality is unavailable.");
  }

  try {
    const model = 'gemini-3-flash-preview';
    
    // Convert generic history structure to Gemini Chat history format if needed, 
    // but for simple single-turn or maintained context, we can use the chat API.
    const chat = client.chats.create({
      model: model,
      history: history,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    throw error;
  }
};
