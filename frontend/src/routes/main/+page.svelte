<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { userLoggedIn } from '$lib/store.js';
	import { supabase } from '$lib/supabaseClient';

	let email = '';
	let prenom = '';

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
								prenomElement.textContent = "Le prénom de l'utilisateur est " + result;
							} else {
								console.error('Aucun utilisateur trouvé');
							}
						}
					})
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
</script>

<!-- Autres éléments de votre composant -->

<main class="home-main">
	<p id="prenom-utilisateur"></p>
</main>
