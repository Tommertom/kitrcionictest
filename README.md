# Integration steps Kit RC 1.0 and Ionic

Start the project
```
npm create svelte@latest my-app
cd my-app
npm install
```

## make it SPA
- npm i -D @sveltejs/adapter-static
- import adapter from '@sveltejs/adapter-static' in svelte.config.js
- npm remove @sveltejs/adapter-auto

- Configure adapter static: https://github.com/sveltejs/kit/tree/master/packages/adapter-static
```
adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: '200.html', // I wonder if this is necessary if your rewrite rules are set accordingly in hosting
			precompress: false
		})
```

- By default no ssr
```
// src/routes/+layout.js
export const ssr = false;
```

- integration Ionic
- npm i @ionic/core 
- copy ionic/svelte code into lib
- add integration in +layout.svelte, putting the import in onMount
- run npx svelte-migrate routes
- modifications needed in various imports (lib path change)
- IonPage routify change to pagehook in svelte
- Menu needs to have static list of components - no generated list (todo)
- Created slug navigation 

- PWA stuff
- install Vite PWA
- Copy stuff in index.html
- 	<link rel="manifest" href="/manifest.webmanifest">
- Config manifest

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
