<script>
    import {
        Navbar,
        NavBrand,
        NavLi,
        NavUl,
        NavHamburger,
        Dropdown,
        DropdownItem,
        Chevron,
        DropdownDivider
    } from 'flowbite-svelte';
    import IoMdHome from 'svelte-icons/io/IoMdHome.svelte';
    import { goto } from '$app/navigation';
    import { supabase } from '$lib/supabaseClient';
	import { error } from '@sveltejs/kit';
	import { userLoggedIn } from '$lib/store.js';
	import { onMount } from 'svelte';


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

            if (error) {
                throw new Error(
                    `Erreur lors de la récupération des informations utilisateur: ${error}`
                );
            }
        } catch (err) {
            console.error(err);
        }
    });

    const redirectToSigninPage = () => {
        goto('/signin');
    };

    const redirectToAccount = () => {
        goto('/account');
    };

    const redirectToMainPage = () => {
        goto('/main');
    };

    async function handleSignOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
        console.error('Erreur lors de la déconnexion', error);
    } else {
		userLoggedIn.set(false);
        goto('/');
    }
}

</script>

<Navbar let:hidden let:toggle>
    <NavBrand href="/">
        <div style:width="30px">
            <IoMdHome />
        </div>
        <span class="whitespace-nowrap text-xl font-semibold dark:text-white pl-4 pt-1"> Scribe </span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
        <NavLi id="nav-menu1" class="cursor-pointer"><Chevron aligned>Navigation</Chevron></NavLi>
        <Dropdown triggeredBy="#nav-menu1" class="w-44 z-20">
            {#if $userLoggedIn == true}
            <DropdownItem on:click={redirectToAccount}>Mon compte</DropdownItem>
            <DropdownItem on:click={redirectToMainPage}>Tableau de bord</DropdownItem>
            {:else}
            <DropdownItem>S'inscrire</DropdownItem>
            {/if}
            <DropdownItem>Paramètres</DropdownItem>
            <DropdownDivider />
            {#if $userLoggedIn == true}
                <DropdownItem on:click={handleSignOut}>Se déconnecter</DropdownItem>
            {:else}
                <DropdownItem on:click={redirectToSigninPage}>Se connecter</DropdownItem>
            {/if}
        </Dropdown>
    </NavUl>
</Navbar>
