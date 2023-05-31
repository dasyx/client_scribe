<script>
	export let interLeft = "";
	export let interRight = "";
	import { goto } from '$app/navigation';

	const redirectToSignin = () => {
        goto('/signin');
    };
</script>


<section class="intersection">
	<span class="intersection__left">{interLeft}</span>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<span class="intersection__right" on:click={redirectToSignin}>{interRight}</span>
</section>

<style lang="scss">

	.intersection {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		padding: 20px 0;
	}

	.intersection span {
		cursor: pointer;
	}

</style>