<script lang="ts">
	import { onMount } from 'svelte';
	import Menu from '$lib/components/Menu.svelte';
	//	import { pwaStatusStream, type PWAStatus } from '$lib/pwa';
	//@ts-ignore
	import { pwaInfo } from 'virtual:pwa-info';

	import { prefetch } from '$app/navigation';

	// this gives error -
	import { setupIonicSvelte } from '$lib/ionic/svelte';

	onMount(async () => {
		if (pwaInfo) {
			//@ts-ignore
			const { registerSW } = await import('virtual:pwa-register');
			console.log('SDADASD', registerSW);
			registerSW({
				immediate: true,
				//@ts-ignore
				onRegistered(r) {
					// uncomment following code if you want check for updates
					// r && setInterval(() => {
					//    console.log('Checking for sw update')
					//    r.update()
					// }, 20000 /* 20s for testing purposes */)
					console.log(`SW Registered: ${r}`);
				},
				//@ts-ignore
				onRegisterError(error) {
					console.log('SW registration error', error);
				}
			});
		}
	});

	setupIonicSvelte();

	/* Theme variables */
	import '../theme/variables.css';

	// speed up the loading of this route
	//	prefetch('/components/tabs/[tab]');

	/*
	pwaStatusStream.subscribe((status: PWAStatus) => {
		console.log('PWA status', status);

		if (status.updateFunction) {
			console.log('PWA updating itself in 4 secs......');
			setTimeout(() => {
				status.updateFunction();
			}, 4000);
		}
	});
    */
</script>

<ion-app>
	<ion-split-pane content-id="main">
		<Menu />
		<div class="ion-page" id="main">
			<slot />
		</div>
	</ion-split-pane>
</ion-app>
