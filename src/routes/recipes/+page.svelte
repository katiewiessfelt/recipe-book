<script lang="ts">
	import { register } from 'swiper/element/bundle';
	import 'swiper/css';
	import Fa from 'svelte-fa';
	import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

	// Register Swiper custom elements
	register();

	let { data } = $props();
	let hovered = $state(false);
</script>

<div id="recipes" class="grid grid-cols-12 gap-4">
	<div class="col-span-1"></div>
	<div class="col-span-10">
		<div class="p-3 tag-title">
			<a class="flex items-center text-xl" href=""
				>All <Fa class="px-3" icon={faArrowRight} /></a
			>
		</div>
		<swiper-container class="w-auto" space-between="20" slides-per-view="8" loop="true" navigation="true">
			{#each data.tsRecipes as item}
				<swiper-slide
					class="bg-center bg-no-repeat bg-cover
						  d-flex justify-center items-center
						  h-auto w-auto aspect-square"
					style:background-image="url({item.src})"
				>
					<div class="opacity-0 slide-content w-full h-full text-center d-flex content-center">
						<span class="slide-title">{item.title.toLowerCase()}</span>
					</div>
				</swiper-slide>
			{/each}
		</swiper-container>
	</div>
	<div class="col-span-1"></div>
</div>

<style lang="less">
	swiper-slide {
		border: 1px solid @brown;
		box-shadow: 8px 5px 5px rgba(0, 0, 0, 0.5);
		&:hover .slide-content {
			opacity: 1;
			background-color: fade(@gray, 50%);
		}
	}
	.tag-title, Fa {
		color: @gray;
	}
	.tag-title {
		font-family: @font-notable;
	}
	.slide-title {
		color: @cream;
		font-family: @font-rocksalt;
	}
	swiper-container {
		max-height: auto;
		--swiper-navigation-color: @yellow;
		&::part(button-prev),
		&::part(button-next) {
			filter: drop-shadow(2px 2px 4px fade(@gray, 100%));
		}
		.swiper-wrapper {
			margin: 0 3rem;
		}
	}
	.slide-content {
		transition: opacity 0.3s;
	}
</style>
