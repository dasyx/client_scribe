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

	let userLoggedIn = false;
</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<div style:width="30px">
			<IoMdHome  />
		</div>
		<span class="whitespace-nowrap text-xl font-semibold dark:text-white pl-4 pt-1"> Scribe </span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<!-- <NavLi href="/services">Services</NavLi>
		<NavLi href="/contact">Contact</NavLi> -->
		<NavLi id="nav-menu1" class="cursor-pointer"><Chevron aligned>Navigation</Chevron></NavLi>
		<Dropdown triggeredBy="#nav-menu1" class="w-44 z-20">
			<DropdownItem>S'inscrire</DropdownItem>
			{#if userLoggedIn}
			  <DropdownItem>Se déconnecter</DropdownItem>
			{:else}
			  <DropdownItem>Se connecter</DropdownItem>
			{/if}
			<DropdownDivider />
			<DropdownItem>Tableau de bord</DropdownItem>
		  </Dropdown>
		  
	</NavUl>
</Navbar>