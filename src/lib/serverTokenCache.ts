import { getTwitchAppAccessToken } from "./twitchAuth";

// utils/serverTokenCache.js
let cachedToken: { accessToken: string; expiresIn: number } | null = null;
let tokenExpiry = 0;

export async function getValidTwitchAccessToken() {
  //   console.log("getValidTwitchAccessToken()");
  const currentTime = Date.now();

  // Si tenemos un token cacheado y no ha expirado
  if (cachedToken?.expiresIn && tokenExpiry > currentTime) {
    // console.log("Usando token de Twitch cacheado en memoria del servidor.");
    return cachedToken;
  }

  // Si no hay token o ha expirado, obtenemos uno nuevo
  //   console.log("Obteniendo nuevo token de Twitch para cachear...");
  try {
    const tokenData = await getTwitchAppAccessToken();
    cachedToken = tokenData;
    tokenExpiry = currentTime + tokenData.expiresIn * 1000 - 60 * 1000;
    // console.log("Nuevo token de Twitch cacheado. ", cachedToken);
    return cachedToken;
  } catch (error) {
    console.error("Error al obtener o cachear el token de Twitch:", error);
    throw error;
  }
}
