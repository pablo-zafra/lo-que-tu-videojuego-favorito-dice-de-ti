import { getTwitchAppAccessToken } from "@/lib";

let cachedToken: { accessToken: string; expiresIn: number } | null = null;
let tokenExpiry = 0;

export async function getTwitchAccessToken() {
  console.log("getTwitchAccessToken(), cachedToken:", cachedToken);
  const currentTime = Date.now();

  // Si tenemos un token cacheado y no ha expirado
  if (cachedToken?.expiresIn && tokenExpiry > currentTime) {
    console.log("Usando token de Twitch cacheado en memoria del servidor.");
    return cachedToken;
  } else {
    console.log("Token caducado o nulo, renovando...");
  }

  const newToken = await renewTwitchAccessToken();
  cachedToken = newToken;
  return cachedToken;
}

export async function renewTwitchAccessToken() {
  const currentTime = Date.now();
  console.log("Obteniendo nuevo token de Twitch para cachear...");
  try {
    const tokenData = await getTwitchAppAccessToken();
    console.log("Token obtenido de Twitch:", tokenData);
    cachedToken = tokenData;
    tokenExpiry = currentTime + tokenData.expiresIn * 1000 - 60 * 1000;
    // console.log("Nuevo token de Twitch cacheado. ", cachedToken);
    return cachedToken;
  } catch (error) {
    console.error("Error al obtener o cachear el token de Twitch:", error);
    throw error;
  }
}
