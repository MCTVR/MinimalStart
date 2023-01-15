<script lang="ts">
	import Digit from "./Digit.svelte";
	import { blur } from "svelte/transition";
	import { quintInOut } from "svelte/easing";

	let time: string;
	let date: string;

	const getCurrentTimeString = () => {
		let locales = Intl.DateTimeFormat().resolvedOptions();
		time = new Date().toLocaleTimeString(locales.locale, {
			timeZone: locales.timeZone,
			hour12: locales.hour12 ? locales.hour12 : false,
			hour: "numeric",
			minute: "numeric",
		});
		date = new Date().toLocaleDateString(locales.locale, {
			timeZone: locales.timeZone,
			year: "numeric",
			month: "short",
			day: "numeric",
			weekday: "short",
		});
		setTimeout(getCurrentTimeString, 1000);
	};

	getCurrentTimeString();
</script>

<div id="clock">
	<div id="clock-digits-container">
		<h2 id="clock-date">{date}</h2>
		{#if time !== undefined}
			<h1
				id="clock-digits"
				transition:blur={{ duration: 200, easing: quintInOut }}
			>
				{#key time}
					{#each Object.entries(time) as [_, char], i}
						{#if i === time.length - 1}
							<Digit num={char} {i} />
						{:else}
							<Digit num={char} i={undefined} />
						{/if}
					{/each}
				{/key}
			</h1>
		{/if}
	</div>
</div>

<style>
	#clock-digits-container {
		margin-top: 6em;
		margin-bottom: 4.5em;
	}
	#clock-date {
		font-size: 1.5rem;
		color: #fdfdfd99;
		user-select: none;
		font-weight: 300;
		font-variant: small-caps;
		margin-bottom: -3pt;
		height: 1.5rem;
		filter: drop-shadow(0 0 0.5rem rgba(30, 30, 30, 0.5));
	}
	#clock-digits {
		font-size: 5.5rem;
		user-select: none;
		font-weight: 400;
		margin: 0;
		height: 5.5rem;
		filter: drop-shadow(0 0 0.5rem rgba(30, 30, 30, 0.5));
	}
</style>
