import { GoogleGenAI } from "@google/genai";

// Fix: Adhere to the coding guidelines by using `process.env.API_KEY`.
// This change aligns with the requirement to obtain the API key exclusively from
// `process.env.API_KEY` and assumes it is pre-configured and accessible.
// This also resolves the original TypeScript error "Property 'env' does not exist on type 'ImportMeta'".
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export const getAiExplanation = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0.5,
        topP: 0.95,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Sorry, I couldn't fetch an explanation at this time. Please check the console for more details.";
  }
};
