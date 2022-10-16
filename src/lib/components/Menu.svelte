<script lang="ts">
	import { goto } from '$app/navigation';
	import { menuController, modalController, registerMenu } from '$lib/ionic/svelte';
	import * as allIonicIcons from 'ionicons/icons';
	//	import { pwaBeforeInstallPrompt, canInstall } from '$lib/pwa';
	import { onMount } from 'svelte';
	import IOSInstall from '$lib/components/IOSInstall.svelte';
	import { isPlatform } from '@ionic/core';

	let hideMenu = true; // a hack because the menu shows before the splash (in Chrome on Windows)

	export let side = 'start';

	const getRandomColor = () => {
		const items = [
			'secondary',
			'primary',
			'danger',
			'warning',
			'dark',
			'medium',
			'success',
			'tertiary'
		];
		return items[Math.floor(Math.random() * items.length)];
	};

	// this is unfortunately needed in order to have the menuController API function properly
	onMount(() => {
		registerMenu('mainmenu');
	});

	function capitalizeFirstLetter(text: string) {
		return text.charAt(0).toUpperCase() + text.slice(1);
	}

	const componentList = [
		'Accordion',
		'Actionsheet',
		'Alert',
		'Animations',
		'Avatar',
		'Badge',
		'Breadcrumb',
		'Button',
		'Card',
		'Checkbox',
		'Chip',
		'Controllers',
		'Datetime',
		'Fab',
		'Gesture',
		'Grid',
		'Icon',
		'Infinitescroll',
		'Inputs',
		'Item',
		'List',
		'Loading',
		'Modal',
		'Nav',
		'Note',
		'Page',
		'Picker',
		'Platform',
		'Popover',
		'ProgressBar',
		'Radio',
		'Range',
		'Refresher',
		'Reorder',
		'Searchbar',
		'Segment',
		'Select',
		'Skeleton',
		'Slides',
		'Spinner',
		'Splash',
		'SvelteAnimate',
		'SvelteSpring',
		'SvelteTransition',
		'SvelteTweened',
		'Tabs',
		'Text',
		'Thumbnails',
		'Toast',
		'Toggle',
		'Toolbar'
	];
	let menuItems: Array<{ url: string; label: string; icon: any }> = componentList.map(
		(componentName) => {
			const url =
				componentName !== 'Tabs' ? `/components/${componentName}` : `/components/tabs/[tab]`;
			return {
				url,
				label: componentName,
				icon: allIonicIcons['home']
			};
		}
	);
	/*
	.traverse('/components')
		.children.map((route) => {
			let url = route.path;

			const label = capitalizeFirstLetter(route.name);
			if (label === 'Tabs') url = '/components/tabs/[tab]';

			return {
				url,
				label,
				icon: allIonicIcons['home']
			};
		});
*/
	// Randomize the icons
	const icons = Object.keys(allIonicIcons);
	menuItems.map((menuItem) => {
		const iconForMenu = icons[Math.floor(Math.random() * icons.length)];
		menuItem.icon = allIonicIcons[iconForMenu];
	});
	menuItems = [...menuItems];

	const closeAndNavigate = async (url) => {
		console.log('Navigate url', url);
		console.log('Test', url);
		goto(url);

		menuController.close('mainmenu');
	};

	// hack because of visibility of menu in Chrome/Windows
	setTimeout(() => {
		hideMenu = false;
	}, 100);

	let iosInstall = isPlatform('ios') && !isPlatform('pwa');

	const showIOSinstall = async () => {
		const modal = await modalController.create({
			component: IOSInstall,
			componentProps: {},
			showBackdrop: true,
			backdropDismiss: false
		});

		modal.onDidDismiss().then((value) => {
			console.log('Dismissed the modal', value);
			if (value.role === 'backdrop') console.log('Backdrop clicked');
		});

		await modal.present();
	};
</script>

<ion-menu {side} content-id="main" menu-id="mainmenu" class:menuhide={hideMenu}>
	{#if menuItems.length > 0}
		<ion-header>
			<ion-toolbar translucent="true">
				<ion-title>Menu</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content>
			<ion-list>
				{#each menuItems as menuItem, i}
					<ion-item
						on:click={() => {
							closeAndNavigate(menuItem.url);
						}}
					>
						<ion-icon icon={menuItem.icon} slot="start" color={getRandomColor()} />
						<ion-label>{menuItem.label}</ion-label>
					</ion-item>
				{/each}

				<ion-item />
				{#if iosInstall}
					<ion-item on:click={showIOSinstall}>
						<ion-icon icon={allIonicIcons['download']} slot="start" />
						<ion-label>Install this app as PWA</ion-label>
					</ion-item>
					<ion-item />
				{/if}

				<ion-item
					on:click={() => {
						window.open('https://github.com/Tommertom/svelte-ionic-app', '_blank');
					}}
				>
					<ion-icon icon={allIonicIcons['star']} slot="start" />
					<ion-label>Go to GitHub for this app</ion-label>
				</ion-item>
				<ion-item
					on:click={() => {
						window.open(
							'https://forum.ionicframework.com/t/ionicsvelte-all-of-ionics-ui-in-one-svelte-app',
							'_blank'
						);
					}}
				>
					<ion-icon icon={allIonicIcons['star']} slot="start" />
					<ion-label>Go to Ionic Forum</ion-label>
				</ion-item>
			</ion-list>
		</ion-content>
	{/if}
</ion-menu>

<style>
	ion-item {
		cursor: pointer;
	}

	.menuhide {
		display: none;
	}
</style>
