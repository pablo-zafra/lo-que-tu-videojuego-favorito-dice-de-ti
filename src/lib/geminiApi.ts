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
    contents: `Dado el videojuego ${name} con la siguiente descripción: ${summary}, genera una frase corta y divertida en español (máximo 25 palabras) que me describa teniendo en cuenta que es mi videojuego favorito. Puedes usar el conocimiento que ya tengas previamente sobre el videojuego. Ejemplo para el juego "Elden Ring": "Seguramente tienes una paciencia infinita y disfrutas de ser humillado repetidamente por un jefe.". Respóndeme solo con la frase en español, sin comillas.`,
  });
  console.log("Quote generated. Response: ", response);
  return response.text;
};
