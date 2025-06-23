import { GoogleGenAI } from "@google/genai";

interface QuoteRequestType {
  name: string;
  summary: string;
}

const apiKey = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: apiKey });

export const getQuote = async (request: QuoteRequestType) => {
  const { name, summary } = request;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Respóndeme solo: Hey!",
  });
  console.log(response.text);
  return response.text;
};
