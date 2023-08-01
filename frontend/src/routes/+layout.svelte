<script>
	import '../app.postcss';
	import '../styles/styles.scss';
	import Header from '../components//Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	main {
		margin-top: 60px;
	}
</style>