<script>
	export let interLeft = "";
	export let interRight = "";
</script>


<section class="intersection">
	<a href="#" class="intersection__left">{interLeft}</a>
	<a href="#" class="intersection__right">{interRight}</a>
</section>

<style lang="scss">

	.intersection {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		padding: 20px 0;
	}

</style>