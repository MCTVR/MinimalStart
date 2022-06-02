<script>
    import { onMount } from "svelte";

    import { fade } from "svelte/transition";

    export let imgURL = "icons/HK.webp";

</script>

<div id="bg">
    {#if imgURL}
        <img transition:fade src={imgURL} alt="" />
    {/if}
</div>


<style>
    #bg {
        position: fixed;
		z-index: -1;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
    }
    #bg img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>