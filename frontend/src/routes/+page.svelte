<script>
import wave_bg from '../lib/images/wave_bg.webp';
import dawn_bg from '../lib/images/dawn-sky-bg.webp';
import Banner from '../components/Banner.svelte';
import Intersection from '../components/Intersection.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Banner
  background={`url(${wave_bg})`}
  bannerTitleH1="Scribe : Gérez vos factures et devis en toute simplicité"
  height="smaller"
/>

<!-- <Intersection interLeft="Inscription" interRight="Déjà inscrit ?" /> -->

<Banner
background={`url(${dawn_bg})`}
	bannerTitleH2="Veuillez remplir le formulaire ci-dessous."
	height="larger"
/>
