# Lo que tu videojuego favorito dice de ti

### (What your favorite video game says about you)

![Lo que tu videojuego favorito dice de ti.](https://loquetuvideojuegofavoritodicedeti.pablozafra.dev//media/result2.jpg)

This project is a web application that takes your favorite video game as input and generates a short, humorous quote describing you, leveraging AI capabilities. It combines video game data retrieval with AI-powered text generation.

## Stack

This is a [Next.js](https://nextjs.org/) project that uses the following technologies:

- [React.js](https://react.dev/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

---

## Server

This project interacts with external APIs to fetch data and generate content:

- It uses the [IGDB API](https://www.igdb.com/api) to retrieve video game data. To access this API, a **Twitch Authentication Token** is required. You can find more information on how to obtain one in the [Twitch Developer Documentation on Authentication](https://dev.twitch.tv/docs/authentication/#user-access-tokens).
- It leverages [Google AI for Developers](https://ai.google.dev/) (specifically the Gemini API) to generate the humorous user descriptions. A **Gemini API Key** must be provided for this functionality. Refer to the [Gemini API documentation](https://ai.google.dev/gemini-api/docs) for details.
- A custom **Next Public API Key** must be also provided to allow users to fetch your API Routes.

**Configuration:**
To run the project, you need to configure these API keys as environment variables.
Please copy the `.env.template` file to `.env` in the root of your project and populate it with your respective keys.

```
# .env example
TWITCH_CLIENT_ID=your_twitch_client_id
TWITCH_CLIENT_SECRET=your_twitch_client_secret
GEMINI_API_KEY=your_gemini_api_key
NEXT_PUBLIC_API_KEY=your_custom_public_api_key
```

## Development

The Next dev server starts your app in development mode, rebuilding assets on file changes. To start the Next dev server:

```
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!

## Vercel CI/CD

This website is automatically deployed and hosted on [Vercel](https://vercel.com/), leveraging its seamless continuous integration and instantaneous publishing capabilities.

## To do

- English version
- Add tests
- Improve performance
