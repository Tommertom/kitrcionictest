<script>
  import SourceButton from "./SourceButton.svelte";
</script>

<svelte:head>
  <title>Ionic Companion - Tabs Explain</title>
</svelte:head>

<ion-header translucent="true">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-title>Explanation</ion-title>
    <ion-buttons slot="end">
      <SourceButton name="tabs" />
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen class="ion-padding">
  <h1>Explanation of TABS</h1>
  <p>So, ionic tabs are working pretty ok.</p>
  <p>
    There are now two non-blocking issues: you have to use IonTabs component to render tab
    interface. This seems doable, but not according to Ionic docs.
  </p>
  <p>
    Second issue is that the selected-tab property does not work out-of-the box. A workaround is
    implemented which requires an Ionic update. So out of control for me.
  </p>
</ion-content>
