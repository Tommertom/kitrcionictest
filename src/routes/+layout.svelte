<script lang="ts">
	import Menu from '$lib/components/Menu.svelte';
	import { pwaStatusStream, type PWAStatus } from '$lib/services/pwa';

	// this gives error -
	import { setupIonicSvelte } from '$ionic/svelte';

	/* Theme variables */
	import '../theme/variables.css';

	setupIonicSvelte();

	pwaStatusStream.subscribe((status: PWAStatus) => {
		console.log('PWA status', status);

		if (status.updateFunction) {
			console.log('PWA updating itself in 4 secs......');
			setTimeout(() => {
				status.updateFunction();
			}, 4000);
		}
	});
</script>

<ion-app>
	<ion-split-pane content-id="main">
		<Menu />
		<div class="ion-page" id="main">
			<slot />
		</div>
	</ion-split-pane>
</ion-app>
