<script>
// @ts-nocheck

	import { supabase } from '$lib/supabaseClient';
	import { goto } from '$app/navigation';
	import { userLoggedIn } from '$lib/store.js';

	let email = '';
	let password = '';
	let formMsg;
	let formMsgText = '';

	/**
	 * @param {{ preventDefault: () => void; }} event
	 */
	async function handleSubmit(event) {
		event.preventDefault();
		// Connecter l'utilisateur avec SignIn de Supabase
		// @ts-ignore
		const { data, error } = await supabase.auth.signInWithPassword({
			// @ts-ignore
			email: email,
			// @ts-ignore
			password: password
		});

		if (error) {
			alert(error.message); // Afficher une alerte si une erreur se produit
		} else {
			userLoggedIn.set(true);
			goto('/main'); // Rediriger l'utilisateur vers la page de profil
		}
	}
</script>

<!-- Votre formulaire avec la logique de gestion de submit associée -->
<form on:submit|preventDefault={handleSubmit}>
	<div class="form-group">
		<label class="form-label" for="email">Adresse email:</label>
		<input
			class="form-input"
			type="email"
			id="email"
			placeholder="Entrez votre adresse email"
			bind:value={email}
			required
		/>
	</div>

	<div class="form-group">
		<label class="form-label" for="password">Mot de passe:</label>
		<input
			class="form-input"
			type="password"
			id="password"
			placeholder="Entrez votre mot de passe"
			bind:value={password}
			required
		/>
	</div>

	<button class="form-button" type="submit">Envoyer</button>
	<!--message d'alerte selon gestion formulaire-->
	<p bind:this={formMsg} id="form-msg">{formMsgText}</p>
</form>

<style>

	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 70%;
		margin: 0 auto;
		margin-top: 50px;
		padding: 20px;
		border-radius: 5px;
		background: linear-gradient(to bottom, #0F2E3D, #22556D, #36978D, #4EB8AD, #65D9CD, #7DFAED);

	}
	.form-group {
		margin-bottom: 1rem;
	}

	.form-label {
		font-weight: bold;
		color: #fff;
	}

	.form-input {
		width: 280px;
		padding: 0.5rem;
		font-size: 1rem;
		border-radius: 4px;
		border: 1px solid #ccc;
		box-sizing: border-box;
	}

	.form-button {
		margin-top: 20px;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		border-radius: 4px;
		background-color: #0F2E3D;
		color: #fff;
		border: none;
		cursor: pointer;
	}

	.form-group input {
		color: #000;
	}

	label[for="email"],
	label[for="password"] {
		padding: 0.5rem 0;
	}


	/* Flexbox styles */
	.form-group {
		display: flex;
		flex-direction: column;
	}

	@media (min-width: 576px) {
		/* Small devices (phones) */

		form {
			width: 60%;
		}

		.form-label {
			margin-bottom: 0;
			margin-right: 1rem;
		}

		.form-input {
			flex-grow: 1;
		}
	}

	@media (min-width: 768px) {
		/* Medium devices (tablets) */
		form {
			width: 45%;
		}
		.form-input {
			width: 300px;
		}
	}

	@media (min-width: 992px) {
		/* Large devices (desktops) */
		.form-input {
			width: 350px;
		}
	}
</style>
