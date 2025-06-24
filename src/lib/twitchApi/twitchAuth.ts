export async function getTwitchAppAccessToken() {
  // console.log("getTwitchAppAccessToken()");
  const CLIENT_ID = process.env.TWITCH_CLIENT_ID;
  const CLIENT_SECRET = process.env.TWITCH_CLIENT_SECRET;

  if (!CLIENT_ID || !CLIENT_SECRET) {
    console.error(
      "TWITCH_CLIENT_ID o TWITCH_CLIENT_SECRET no están definidos."
    );
    throw new Error(
      "Credenciales de Twitch no configuradas en el servidor. Revisa tu archivo .env.local y las variables en Vercel."
    );
  }

  try {
    const response = await fetch("https://id.twitch.tv/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`,
      cache: "no-store", // No almacenar en caché, ya que el token puede expirar
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error al obtener token de Twitch:", errorData);
      throw new Error(
        `Error al obtener token de Twitch: ${response.status} ${
          response.statusText
        } - ${errorData.message || ""}`
      );
    }

    const data = await response.json();
    return { accessToken: data.access_token, expiresIn: data.expires_in };
  } catch (error) {
    console.error("Fallo al obtener el token de acceso de Twitch:", error);
    throw error;
  }
}
