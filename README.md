# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Portfolio assistant

The assistant sends the current page text and visitor question to the Vercel
serverless endpoint in `api/chat.js`. The Groq key is used only by that
server-side function; never add it to a `VITE_*` variable.

1. Deploy this repository to Vercel. Keep the Vite build command as
   `npm run build` and the output directory as `dist`.
2. Add `GROQ_API_KEY` to the Vercel project's environment variables. You can
   optionally set `GROQ_MODEL`; the default is `openai/gpt-oss-20b`.
3. Set `PORTFOLIO_ORIGINS` to the allowed site origin:
   `https://prateek-rathod.github.io`
4. Set `VITE_ASSISTANT_API_URL` to the deployed endpoint URL, for example
   `https://your-vercel-project.vercel.app/api/chat`, in the environment used
   to build the GitHub Pages site. For local builds, copy `.env.example` to
   `.env.local` and replace the placeholder URL before running `npm run dev`
   or `npm run deploy`.

The Vercel endpoint and GitHub Pages frontend are deployed separately. Review
Groq's current rate limits before making the endpoint public.
