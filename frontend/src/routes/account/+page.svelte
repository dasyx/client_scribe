<script>
	import { supabase } from '$lib/supabaseClient';
	import { user } from '$lib/store';

	let email = '';
	let password = '';
	let confirmPassword = '';
	// @ts-ignore
	let firstName = '';
	let lastName = '';
	/**
	 * @type {HTMLParagraphElement}
	 */

	/**
	 * @param {{ preventDefault: () => void; }} event
	 */
	async function handleSubmit(event) {
		event.preventDefault();

		try {
			await updateUser(email, lastName, firstName);

			// vérifie si l'utilisateur existe déjà

			/* const { data: users, error } = await supabase
				.from('Utilisateurs')
				.select('id')
				.eq('email', email);

			if (error) {
				console.error(error);
				return;
			}

			if (users.length > 0) {
				// L'utilisateur existe déjà
				alert('Cet e-mail est déjà utilisé. Veuillez en saisir un autre.');
				return;
			} */

			const { error: insertError } = await supabase
				.from('Utilisateurs')
				.update({
					email: email,
					nom: lastName,
					prenom: firstName
				})
				.eq('email', email);
			if (insertError) {
				console.error(insertError.message);
			} else {
				console.log('Utilisateur modifié !');
			}
		} catch (error) {
			// @ts-ignore
			console.error(error.message);
		}
	}

	/**
	 * @param {string} email
	 * @param {string} nom
	 * @param {any} prenom
	 */
	async function updateUser(email, nom, prenom) {
		console.log('nom : ', nom);
		console.log('prenom : ', prenom);

		const { error } = await supabase
			.from('Utilisateurs')
			.update({ nom, prenom })
			.eq('email', email);
		if (error) throw error;
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
		/>
	</div>

	<div class="form-group">
		<label class="form-label" for="confirmPassword">Confirmer le mot de passe:</label>
		<input
			class="form-input"
			type="password"
			id="confirmPassword"
			placeholder="Répétez votre mot de passe"
			bind:value={confirmPassword}
		/>
	</div>

	<div class="form-group">
		<label class="form-label" for="firstName">Prénom:</label>
		<input
			class="form-input"
			type="text"
			id="firstName"
			placeholder="Entrez votre prénom"
			bind:value={firstName}
		/>
	</div>

	<div class="form-group">
		<label class="form-label" for="lastName">Nom:</label>
		<input
			class="form-input"
			type="text"
			id="lastName"
			placeholder="Entrez votre nom"
			bind:value={lastName}
		/>
	</div>
	<button class="form-button" type="submit">Envoyer</button>
	<!--message d'alerte selon gestion formulaire-->
	<!-- <p bind:this={formMsg} id="form-msg">{formMsgText}</p> -->
</form>

<style>
	.form-group {
		margin-bottom: 1rem;
	}

	.form-label {
		font-weight: bold;
		margin-bottom: 0.5rem;
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
		padding: 0.5rem 1rem;
		font-size: 1rem;
		border-radius: 4px;
		background-color: #007bff;
		color: #fff;
		border: none;
		cursor: pointer;
	}

	.form-group input {
		color: #000;
	}

	/* Flexbox styles */
	.form-group {
		display: flex;
		flex-direction: column;
	}

	@media (min-width: 576px) {
		/* Small devices (phones) */

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
		.form-input {
			width: 400px;
		}
	}

	@media (min-width: 992px) {
		/* Large devices (desktops) */
		.form-input {
			width: 400px;
		}
	}
</style>
