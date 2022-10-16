# Integration steps Kit RC 1.0 and Ionic

Start a new SvelteKit project
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
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false
		})
```

- By default no ssr, so now it is a full SPA
```
// src/routes/+layout.ts
export const ssr = false;
```

- integration Ionic:
- npm i @ionic/core 
- copy ionic/svelte code into lib
- add integration in +layout.svelte, putting the import in onMount
- run npx svelte-migrate routes
- modifications needed in various imports (lib path change)
- IonPage routify change to pagehook in svelte
- Menu needs to have static list of components - no generated list (todo)
- Created slug navigation, using +page.ts and load function 

- PWA stuff:
- install Vite PWA, and config in vite.config.ts
- Copy stuff in index.html, related to PWA
- 	<link rel="manifest" href="/manifest.webmanifest">
- Config manifest
