<script>
    import { supabase } from "$lib/supabaseClient";
    import { v4 as uuidv4 } from 'uuid';
    import { onMount } from 'svelte';

    let email = '';
    let password = '';
    let confirmPassword = '';
    /**
	 * @type {HTMLParagraphElement}
	 */
    let formMsg;
    let formMsgText = '';
    /**
	 * @param {{ preventDefault: () => void; }} event
	 */
    async function handleSubmit(event) {
        event.preventDefault();
        const uuid = uuidv4();

        try {
            await createUser(email, password);
            // Enregistrement des données utilisateur dans la base de données
            const { error: insertError } = await supabase
                .from('Utilisateurs')
                .insert({
                    id: uuid,
                    email: email,
                    cree_le: new Date().toISOString()
                });
            if (insertError) {
                console.error(insertError.message);
            } else {
                console.log('Utilisateur enregistré !')
            }
        } catch (error) {
            // @ts-ignore
            console.error(error.message);
        }
    }

    /**
	 * @param {string} email
	 * @param {string} password
	 */
    async function createUser(email, password) {
        console.log("email : ", email);
        console.log("password : ", password);

        const { data: userExists, error } = await supabase
            .from('Utilisateurs')
            .select('id')
            .eq('email', email)
            .maybeSingle()

        if (error) throw error

        if (userExists) {
            /* l'instruction suivante sera affichée seulement dans la console */
            /* throw new Error('Un utilisateur existe déjà avec cet e-mail') */
            /* la suivante sera affichée dans la page */
            formMsgText = "Utilisateur déjà dans la base de données"
        } else {
            // @ts-ignore
            const { user, error } = await supabase.auth.signUp({ email, password })
            if (error) throw error

            return user
        }
    }

    onMount(() => {
    // Vous pouvez accéder aux propriétés et méthodes de l'élément ici
    // @ts-ignore
    console.log(formMsgText); // Affiche la valeur de l'input
    })
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

    <div class="form-group">
        <label class="form-label" for="confirmPassword">Confirmer le mot de passe:</label>
        <input
            class="form-input"
            type="password"
            id="confirmPassword"
            placeholder="Répétez votre mot de passe"
            bind:value={confirmPassword}
            required
        />
    </div>
    <button class="form-button" type="submit">Envoyer</button>
    <!--message d'alerte selon gestion formulaire-->
    <p bind:this={formMsg} id="form-msg">{formMsgText}</p>
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
