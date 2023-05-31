<script>
	import { onMount } from 'svelte';
  import { supabase } from '$lib/supabaseClient';

	let email = '';

	onMount(async () => {
		try {
			const {
				data: { user }
			} = await supabase.auth.getUser();

			// @ts-ignore
			email = user.email;

			// @ts-ignore
			console.log(user.email)

			if (user) {
				const { data, error } = await supabase
					.from('Utilisateurs')
					.select('*')
					.eq('email', user.email);

				if (error) {
					throw new Error(`Erreur lors de la récupération des informations utilisateur: ${error.message}`);
				}
			}
		} catch (err) {
			console.error(err);
		}
	});
</script>

<!-- Autres éléments de votre composant -->

<p>L'email de l'utilisateur est : {email}</p>

