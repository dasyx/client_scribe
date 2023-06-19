<script>
	// @ts-nocheck
	import { supabase } from '$lib/supabaseClient';
	import { userLoggedIn } from '$lib/store.js';
	import { onMount } from 'svelte';
	//import { v4 } from 'uuid';

	let email = '';
	let password = '';
	let firstName = '';
	let lastName = '';
	let id = '';

	onMount(async () => {
		try {
			const {
				data: { user }
			} = await supabase.auth.getUser();

			if (user) {
                $userLoggedIn = true;
            } else {
                $userLoggedIn = false;
            }

			email = user.email;
			id = user.id;

			console.log(user.email);
			console.log(user.id);

			//display an object with all user data
			console.log('user', user);

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

	/**
	 * @param {{ preventDefault: () => void; }} event
	 */
	async function handleSubmit(event) {
		event.preventDefault();
		//const uuid = v4();

		try {
			const { error: updateError } = await supabase
				.from('Utilisateurs')
				.update({
					prenom: firstName,
					nom: lastName,
					email: email
				})
				.eq('email', email);

			if (updateError) {
				console.error(updateError.message);
			} else {
				console.log('Utilisateur modifié !');
			}
		} catch (error) {
			// @ts-ignore
			console.error(error.message);
		}
	}
	async function deleteAccount() {
		try {
			const { error } = await supabase.auth.deleteUser('d27ae5d7-b996-4aaa-9cfa-9fb51238dd3c');
			if (error) throw error;
			alert('Votre compte a été supprimé');
		} catch (error) {
			alert(error.error_description || error.message);
		}
	}
</script>

<!-- Votre formulaire avec la logique de gestion de submit associée -->
<form on:submit|preventDefault={handleSubmit}>
	<!-- <div class="form-group">
		<label class="form-label" for="currentEmail">Adresse email actuelle:</label>
		<input
			class="form-input"
			type="email"
			id="currentEmail"
			placeholder="Entrez votre adresse email"
			bind:value={email}
		/>
	</div>

	<div class="form-group">
		<label class="form-label" for="newEmail">Nouvelle adresse email:</label>
		<input
			class="form-input"
			type="email"
			id="newEmail"
			placeholder="Entrez votre adresse email"
			bind:value={newEmail}
		/>
	</div> -->

	<div class="form-group">
		<label class="form-label" for="newEmail">Adresse email:</label>
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
	<button class="form-button" type="submit">Mettre à jour les informations</button>
	<button on:click={deleteAccount} class="form-button-del" type="submit">Supprimer le compte</button
	>
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

	.form-button,
	.form-button-del {
		padding: 0.5rem 1rem;
		font-size: 1rem;
		border-radius: 4px;
		color: #fff;
		border: none;
		cursor: pointer;
	}

	.form-button {
		background-color: #007bff;
	}
	.form-button-del {
		background-color: #ff0000;
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
