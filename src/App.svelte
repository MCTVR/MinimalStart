<script>
	import SearchComp from './lib/SearchComp.svelte';
	import Clock from './lib/Clock.svelte';

</script>

<div id="app">
	<bg></bg>
	<Clock />
	<SearchComp />
</div>

<style>
	:global(body) {
		overflow: hidden;
		margin: 0;
		padding: 0;
	}

	:global(*) {
		font-family: "SF Pro", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	:global(img, svg) {
		user-select: none;
	}

	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100vh;
		width: 100vw;
		background-color: transparent;
	}

	:global(bg) {
		position: fixed;
		z-index: -1;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('/icons/HK.webp');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
	}

</style>