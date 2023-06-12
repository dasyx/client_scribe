<script>
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabaseClient';

	let user = "";
	let email = '';
	// @ts-ignore
	let id = user.id;

	onMount(async () => {
		try {
			const {
				data: { user }
			} = await supabase.auth.getUser();

			// @ts-ignore
			email = user.email;
			// @ts-ignore
			id = user.id;

			// @ts-ignore
			console.log(user.email);
			// @ts-ignore
			console.log(user.id);

			if (user) {
				const { data, error } = await supabase.from('Utilisateurs').select('*').eq('id', user.id);

				if (error) {
					throw new Error(
						`Erreur lors de la récupération des informations utilisateur: ${error.message}`
					);
				}
			}
		} catch (err) {
			console.error(err);
		}
	});
</script>

<!-- Autres éléments de votre composant -->

<p>L'email de l'utilisateur est : {email}</p>
