<script>
	import Banner from '../components/Banner.svelte';
	import Intersection from '../components/Intersection.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>


<Banner 
	background="url(../../src/images/wave_bg.webp)" 
	titleH1="Scribe : Gérez vos factures et devis en toute simplicité"
/>

<Intersection />

<Banner 
	background="url(../../src/images/dawn-sky-bg.webp)" 
	titleH2="Espace se connecter"
/>