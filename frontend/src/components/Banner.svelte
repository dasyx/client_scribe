<script>
	export let background = 'url(chemin_vers_l_image)';
	export let titleH1 = '';
	export let titleH2 = '';
</script>

<section class="banner" style="--background: {background}">
	{#if titleH1}
	<h1>{titleH1}</h1>
	{:else}
	<h2>{titleH2}</h2>
	{/if}
</section>

<style>
	.banner {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 200px;
		width: 100%; /* Utilisation de 100% de la largeur de la page */
		background-image: var(--background);
		background-size: cover;
		color: #fff;
		overflow: hidden;
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

	h1 {
		font-size: 30px; /* Ajustez la taille de police selon vos besoins */
		text-align: center;
		position: relative;
		z-index: 1; /* Assurez-vous que le titre est au-dessus de l'arrière-plan flou */
	}
</style>
