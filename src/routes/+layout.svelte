<script>
	import Header from './Header.svelte';
	import "../styles/styles.scss";
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
		<p class="test">Un texte pour test</p>
	</footer>
</div>

<style lang="scss">

	.test {
		color: $test;
	}
</style>
