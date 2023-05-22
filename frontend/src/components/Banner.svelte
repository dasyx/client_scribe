<script>
	import Login from "./Login.svelte";
	export let background = 'url(chemin_vers_l_image)';
	export let bannerTitleH1 = '';
	export let bannerTitleH2 = '';
	export let height = 'smaller';
</script>

<section
	class="banner"
	class:small-height={height == 'smaller'}
	class:hight-height={height == 'larger'}
	style="--background: {background}"
>
	{#if bannerTitleH1}
		<h1>{bannerTitleH1}</h1>
	{:else}
		<h2>{bannerTitleH2}</h2>
		<Login />
	{/if}

</section>

<style>
	.banner {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%; /* Utilisation de 100% de la largeur de la page */
		background-image: var(--background);
		background-size: cover;
		color: #fff;
		overflow: hidden;
		&.small-height {
			min-height: 200px;
		}
		&.hight-height {
			min-height: 500px;
		}
	}

	/* .banner::before {
    	content: '';
    	position: absolute;
    	top: 0;
    	left: 0;
    	right: 0;
    	bottom: 0;
    	background-image: var(--background);
    	background-size: cover;
    	filter: blur(8px);
    	opacity: 0.8; 
	} */

	.banner h1 {
		font-size: 30px; /* Ajustez la taille de police selon vos besoins */
		text-align: center;
		position: relative;
		z-index: 1; /* Assurez-vous que le titre est au-dessus de l'arrière-plan flou */
	}

	.banner h2 {
		text-align: center;
		margin-bottom: 50px;
	}
</style>
