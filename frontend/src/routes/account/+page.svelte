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
	let prenom = '';

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
			id = user.uuid;

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
	/* async function deleteAccount() {
		try {
			const { error } = await supabase.auth.deleteUser('d27ae5d7-b996-4aaa-9cfa-9fb51238dd3c');
			if (error) throw error;
			alert('Votre compte a été supprimé');
		} catch (error) {
			alert(error.error_description || error.message);
		}
	} */
</script>

<div class="profile_title">
	<h1>Espace personnel</h1>
	<p>Vous pouvez modifier vos informations personnelles ici.</p>
</div>

<main class="profile_main">
	<form on:submit|preventDefault={handleSubmit} class="form_profile">
		<!-- <div class="form-group">
			<label class="form-label" for="password">Mot de passe:</label>
			<input
				class="form-input"
				type="password"
				id="password"
				placeholder="Entrez votre mot de passe"
				bind:value={password}
			/>
		</div> -->

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
		<!-- <button on:click={deleteAccount} class="form-button-del" type="submit">Supprimer le compte</button> -->
		<!--message d'alerte selon gestion formulaire-->
		<!-- <p bind:this={formMsg} id="form-msg">{formMsgText}</p> -->
	</form>
</main>

<style>
	.profile_title {
		text-align: center;
		margin-top: 20px;
	}

	.profile_title h1 {
		margin: 0 0 20px;

	}

	.profile_main {
		justify-content: center;
		align-items: center;
		margin-top: 20px;
		background: linear-gradient(to bottom, #0e2b3b, #193f57, #2a5472, #3b6990, #4d7fb1);
	}

	form {
		display: flex;
		flex-direction: column;
		margin: 50px 10px;
		padding: 2.4rem 3rem 3rem 3rem;
		border: 1px solid black;
		border-radius: 3px;
		background-color: #fff;
		box-shadow: #0e2b3b 0px 0px 10px 0px;
	}

	.form-group {
		display: flex;
		margin-bottom: 1rem;
	}

	.form-label {
		font-weight: bold;
		margin-bottom: 0.5rem;
		color: #363434;
		width: 100px;
	}

	.form-input {
		padding: 0.5rem;
		font-size: 1rem;
		border-radius: 4px;
		border: 1px solid #ccc;
		box-sizing: border-box;
	}

	.form-button {
		margin-top: 50px;
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

	.form-group input {
		color: #000;
	}

	/* Flexbox styles */
	.form-group {
		display: flex;
		flex-direction: column;
	}

	@media (min-width: 567px) {
		/* Medium devices (tablets) */
		.profile_title {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-top: 20px;
		}
		.profile_title h1 {
			margin: 0 0 20px 40px;
			text-align: left;
		}
		form {
			min-width: 50%;
		}
		.form-group {
			display: flex;
			align-items: center;
			flex-direction: row;
		}
		.form-label {
			margin-bottom: 0;
			margin-right: 1rem;
			flex-basis: 100px;
		}
		.form-input {
			flex-grow: 1;
			width: 400px;
		}
	}

</style>
