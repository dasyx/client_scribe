<script>
	import { supabase } from '$lib/supabaseClient';
	import { goto } from '$app/navigation';
	import { v4 } from 'uuid';

	let email = '';
	let password = '';
	let formMsg;
	let formMsgText = '';
	let uuid = v4();

	/**
	 * @param {{ preventDefault: () => void; }} event
	 */
	async function handleSubmit(event) {
		event.preventDefault();

		// Vérification si les mots de passe correspondent
		/* if (password !== confirmPassword) {
			formMsgText = 'Les mots de passe ne correspondent pas.';
			return;
		} */

		try {
			await createUser(email, password);


			// Enregistrement des données utilisateur dans la base de données
			const { error: insertError } = await supabase.from('Utilisateurs').insert({
				// @ts-ignore
				id: uuid,
				email: email,
				cree_le: new Date().toISOString()
			});

			if (insertError) {
				console.error(insertError.message);
			} else {
				console.log('Utilisateur enregistré !');
				goto('/main');
			}
		} catch (error) {
			// @ts-ignore
			console.error(error.message);
			// @ts-ignore
			formMsgText = error.message;
		}
	}

	/**
	 * @param {string} email
	 * @param {string} password
	 */
	async function createUser(email, password) {
		console.log('email : ', email);
		console.log('password : ', password);

		const { data: userExists, error } = await supabase
			.from('Utilisateurs')
			.select('id')
			.eq('email', email)
			.maybeSingle();

		if (error) throw error;

		if (userExists) {
			formMsgText = 'Utilisateur déjà dans la base de données.';
			throw new Error(formMsgText);
		} else {
			// @ts-ignore
			const { user, error } = await supabase.auth.signUp({ email, password });
			if (error) throw error;
			return user;
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

<style lang="scss">

form {
	@include form-display;
	margin-bottom: 200px;
	margin-top: 30px;
}

.form-group {
	display: flex;
	flex-direction: column;
	margin-bottom: 1rem;
}

.form-label {
	font-weight: bold;
	margin-bottom: 0.8rem;
}

.form-input {
	width: 100%; /* Changer la largeur en 100% pour qu'elle s'adapte à la taille de son conteneur */
	font-size: 1rem;
	border-radius: 4px;
	border: 1px solid #ccc;
	box-sizing: border-box;
	margin-bottom: 0.8rem;
}

.form-button {
	margin-top: 2rem;
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


@media (min-width: 576px) {
	/* Small devices (phones) */
	.form-input {
		width: 380px;
	}
}

@media (min-width: 768px) {
	/* Medium devices (tablets) */
	form {
		max-width: 600px; /* Définir une largeur maximale pour éviter que le formulaire ne devienne trop large */
	}
	.form-input {
		width: 400px;
	}
}

@media (min-width: 992px) {
	/* Large devices (desktops) */
	form {
		max-width: 800px; /* Définir une largeur maximale pour éviter que le formulaire ne devienne trop large */
	}
	.form-input {
		width: 400px;
	}
}
</style>
