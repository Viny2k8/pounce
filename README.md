# Studio Pounce

A React and Vite website for Studio Pounce.

## Run locally

**Prerequisite:** Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

To check the production build locally:

```sh
npm run build
npm run preview
```

## Deploy to Vercel

Import this repository into Vercel and deploy. The included `vercel.json` configures the Vite production build, publishes the `dist` directory, and routes requests to the app entry point for client-side navigation.

The project does not currently require environment variables or server-side functions.
