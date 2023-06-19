<script>
	import { onMount } from 'svelte';
	import { userLoggedIn } from '$lib/store.js';
	import { goto } from '$app/navigation';
	import { supabase } from '$lib/supabaseClient';

	let email = '';

	onMount(async () => {
		try {
			const {
				data: { user }
			} = await supabase.auth.getUser();

			if (user) {
				$userLoggedIn = true;
				// Utiliser l'ID ou l'identifiant unique de l'utilisateur pour effectuer une requête SELECT
				const email = user.email;

				supabase
					.from('Utilisateurs')
					.select('prenom')
					.eq('email', email)
					.then((response) => {
						if (response.error) {
							console.error(response.error);
						} else {
							const utilisateurs = response.data;
							if (utilisateurs.length > 0) {
								const utilisateur = utilisateurs[0];
								const result = utilisateur.prenom;
								console.log(result);

								// Insérer le prénom dans le paragraphe du HTML
								const prenomElement = document.getElementById('prenom-utilisateur');
								// @ts-ignore
								prenomElement.textContent = 'Bonjour ' + result + ' !';
							} else {
								console.error('Aucun utilisateur trouvé');
							}
						}
					})
					// @ts-ignore
					.catch((error) => {
						console.error(error);
					});
			} else {
				$userLoggedIn = false;
				console.error('Aucun utilisateur connecté');
			}

			// @ts-ignore
			email = user.email;

			// @ts-ignore
			console.log(user.email);
		} catch (err) {
			console.error(err);
		}
	});

	const redirectToSigninPage = () => {
		goto('/signin');
	};
</script>

{#if $userLoggedIn}
	<div class="connected-msg">
		<p id="prenom-utilisateur" />
		<p>Votre adresse email est : {email}</p>
	</div>
{:else}
	<div class="non-connected-msg">
		<p>Vous n'êtes pas connecté</p>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-missing-attribute -->
		<p>Veuillez vous <a on:click={redirectToSigninPage}>connecter</a> pour continuer</p>
	</div>
{/if}

<style>
    .non-connected-msg a {
        color: blue;
        cursor: pointer;
    }
</style>
