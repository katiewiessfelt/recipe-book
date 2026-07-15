<!-- Navbar.svelte -->
<script lang="ts">
	import { page } from '$app/state';
	// State for mobile menu toggle
	let isOpen = $state(false);

	// Navigation data array
	const links = [
		{ name: 'Home', href: '/' },
		{ name: 'Recipes', href: '/recipes' },
	];

	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<nav class="navbar" class:menu-open={isOpen}>
	<div class="nav-container">
		<!-- Hamburger Icon for Mobile -->
		<button class="menu-toggle" onclick={toggleMenu} aria-label="Toggle navigation">
			{#each Array.from({ length: 3 }) as _}
				<span class="bar" class:open={isOpen}></span>
			{/each}
		</button>

		<!-- Navigation Links -->
		<ul class="nav-links" class:active={isOpen}>
			{#each links as link, index}
				{#if index != 0}
					<span class="text-2xl divider">|</span>
				{/if}
				<li>
					<a class="text-2xl" href={link.href} class:active={page.url.pathname === link.href}>{link.name}</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style lang="less">
	.navbar {
		color: @brown;
		padding: 2rem;
		position: sticky;
		top: 0;
		z-index: 1000;
		background-color: fade(@cream, 90%);
		box-shadow: 8px 5px 5px rgba(0, 0, 0, 0.5);
		font-family: @font-notable;
		&.menu-open {
			box-shadow: none;
		}
	}

	.nav-container {
		margin: 0 auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.brand {
		font-size: 1.5rem;
		font-weight: bold;
		color: @cream;
		text-decoration: none;
	}

	.nav-links {
		display: flex;
		list-style: none;
		gap: 1.5rem;
		margin: 0;
		padding: 0;
		a {
			color: @brown;
			text-decoration: none;
			transition: color 0.2s;
			padding: 0.5em;
			border-radius: 15px;
			&:hover {
				background-color: @green;
			}
			&.active {
				text-decoration: underline;
			}
		}
	}

	.menu-toggle {
		display: none;
		flex-direction: column;
		gap: 5px;
		background: none;
		border: none;
		cursor: pointer;
	}

	.bar {
		width: 25px;
		height: 3px;
		background-color: @brown;
		transition: all 0.3s ease;
	}

	/* Mobile Responsive Styles */
	@media (max-width: 768px) {
		.divider {
			display: none;
		}
		.menu-toggle {
			display: flex;
		}

		.nav-links {
			display: none;
			flex-direction: column;
			position: absolute;
			top: 100%;
			left: 0;
			width: 100%;
			background-color: fade(@cream, 90%);
			padding: 1rem 0;
			align-items: center;
			gap: 1rem;
			&.active {
				display: flex;
				box-shadow: 8px 5px 5px rgba(0, 0, 0, 0.5);
			}
		}

		/* Simple hamburger transformation */
		.bar.open {
            &:nth-child(1) {
		    	transform: translateY(8px) rotate(45deg);
		    }
            &:nth-child(2) {
                opacity: 0;
            }
            &:nth-child(3) {
                transform: translateY(-8px) rotate(-45deg);
            }
	    }
    }
</style>
