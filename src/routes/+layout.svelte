<script lang="ts">
	//	import { setupIonicSvelte } from ../lib/ionic/svelte';
	// import Menu from '$components/Menu.svelte';
	//	import { pwaStatusStream, type PWAStatus } from '$lib/pwa';

	import { prefetch } from '$app/navigation';

	// this gives error -
	import { setupIonicSvelte } from '$lib/ionic/svelte';

	//	setupIonicSvelte();

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
		<div class="ion-page" id="main">
			<slot />
		</div>
	</ion-split-pane>
</ion-app>
