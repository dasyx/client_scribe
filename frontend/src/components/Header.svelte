<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Dropdown, DropdownItem, Chevron, DropdownDivider } from 'flowbite-svelte';
	import IoMdHome from 'svelte-icons/io/IoMdHome.svelte'
  </script>
  
  <Navbar let:hidden let:toggle>
	<NavBrand href="/">
	  <span class="logo">
		<IoMdHome />
	  </span>
	  <a href="/">Home</a>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
	  <NavLi id="nav-menu1" class="cursor-pointer"><Chevron aligned>Dropdown</Chevron></NavLi>
	  <NavLi href="/services">Services</NavLi>
	  <NavLi href="/pricing">Pricing</NavLi>
	  <NavLi href="/contact">Contact</NavLi>
	  <Dropdown triggeredBy="#nav-menu1" class="w-44 z-20">
		<DropdownItem>Dashboard</DropdownItem>
		<DropdownItem>Settings</DropdownItem>
		<DropdownItem>Earnings</DropdownItem>
		<DropdownDivider />
		<DropdownItem>Sign out</DropdownItem>
	  </Dropdown>
	</NavUl>
  </Navbar>

  <style>
	.logo {
		width: 30px;
	}
  </style>