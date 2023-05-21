<script>
	import '../app.postcss';
	import Header from '../components//Header.svelte';
	import Footer from '../components/Footer.svelte';
	import '../styles/styles.scss';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>
