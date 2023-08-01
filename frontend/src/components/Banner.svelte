<script>
	import Signup from "./Signup.svelte";
	export let background = 'url(chemin_vers_l_image)';
	export let bannerTitleH1 = '';
	export let bannerTitleH2 = '';
	export let height = '';
</script>

<section
	class="banner"
	class:small-height={height == 'smaller'}
	class:high-height={height == 'larger'}
	style="--background: {background}"
>
	{#if bannerTitleH1}
		<h1>{bannerTitleH1}</h1>
	{:else}
		<h2>{bannerTitleH2}</h2>
		<Signup />
	{/if}

</section>

<style>
	.banner {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%; 
		background-image: var(--background);
		background-size: cover;
		color: #fff;
		overflow: hidden;
		&.small-height {
			min-height: 20vh;
		}
		&.high-height {
			min-height: 50vh;
		}
	}

	.banner h1 {
		font-size: 1.5rem; 
		text-align: center;
		position: relative;
		z-index: 1; 
		padding: 0 10px;
	}

	.banner h2 {
		text-align: center;
		margin: 50px 0px;
	}
</style>
