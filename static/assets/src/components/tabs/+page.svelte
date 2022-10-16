<script lang="ts">
	import IonTab from '$ionic/svelte/components/IonTabs.svelte';

	import Controllers from '../../Controllers/+page.svelte';
	import Music from '$lib/components/Music.svelte';
	import TabsExplain from '$lib/components/TabsExplain.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	console.log('Receiving slug data in [tab]', data);
	const tab = data.tab;
	const myTabs = [
		{
			label: 'Explain',
			icon: 'pin',
			tab: 'explain',
			component: TabsExplain
		},
		{ label: 'Controllers', icon: 'videocam', tab: 'controllers', component: Controllers },
		{ label: 'Blabla', icon: 'musicalNote', tab: 'blabla', component: Music }
	];

	console.log('Tabs', tab, myTabs);

	const logStuff = (event) => {
		console.log('>', event?.detail?.tab, event?.type);
	};
</script>

<IonTab
	slot="bottom"
	tabs={myTabs}
	selected={tab}
	ionTabsWillChange={logStuff}
	ionNavWillLoad={logStuff}
	ionTabsDidChange={logStuff}
/>
