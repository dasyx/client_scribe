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
    import { onMount } from 'svelte';
	import { error } from '@sveltejs/kit';
	import { userLoggedIn } from '$lib/store.js';


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

    const redirectToMainPage = () => {
        goto('/signin');
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
            <DropdownItem>S'inscrire</DropdownItem>
            {#if $userLoggedIn === true}
                <DropdownItem on:click={handleSignOut}>Se déconnecter</DropdownItem>
            {:else}
                <DropdownItem on:click={redirectToMainPage}>Se connecter</DropdownItem>
            {/if}
            <DropdownDivider />
            <DropdownItem>Tableau de bord</DropdownItem>
        </Dropdown>
    </NavUl>
</Navbar>
