
const pwaManifest = {
    name: 'Ionic Svelte',
    short_name: 'Ionic Svelte Demo',
    description: 'Coolness in Vite Svelte and Ionic',
    theme_color: '#ffffff',
    icons: [
        {
            "src": "/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable any"
        },
        {
            "src": "/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable any"
        }
    ]
}

// Let's ignore this one 
const workbox = {
    // mode: 'development',
    navigateFallback: '/',
    // vite and SvelteKit are not aligned: pwa plugin will use /\.[a-f0-9]{8}\./ by default: #164 optimize workbox work
    dontCacheBustURLsMatching: /-[a-f0-9]{8}\./,
    globDirectory: './build/',
    globPatterns: ['robots.txt', '**/*.{js,css,html,ico,png,svg,webmanifest}'],
    globIgnores: ['**/sw*', '**/workbox-*'],
    manifestTransforms: [async (entries) => {
        // manifest.webmanifest is added always by pwa plugin, so we remove it.
        // EXCLUDE from the sw precache sw and workbox-*
        const manifest = entries.filter(({ url }) =>
            url !== 'manifest.webmanifest' && url !== 'sw.js' && !url.startsWith('workbox-')
        ).map((e) => {
            let url = e.url
            if (url && url.endsWith('.html')) {
                if (url.startsWith('/'))
                    url = url.slice(1)

                if (url === 'index.html')
                    e.url = '/'
                else if (url.endsWith('index.html'))
                    e.url = `/${url.substring(0, url.lastIndexOf('/'))}`
                else if (url.endsWith('.html'))
                    e.url = `/${url.substring(0, url.length - '.html'.length)}`

            }

            return e
        })

        return { manifest }
    }]
}

const pwaConfiguration = {
    srcDir: './build',
    outDir: './build',
    // outDir: './.svelte-kit/output/client',
    //  includeManifestIcons: false,
    includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png', 'assets/*'],
    base: '/',
    scope: '/',
    manifest: pwaManifest
}

export { pwaConfiguration }
