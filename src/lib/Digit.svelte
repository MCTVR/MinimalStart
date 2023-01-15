<script lang="ts">
	import { blur } from "svelte/transition";

	export let num: string;
	export let i: number;
</script>

{#if num && i}
	<span style="" in:blur={{ duration: 100, delay: 200 + i * 80 }}>
		{num}
	</span>
{:else}
	<span>{num}</span>
{/if}
