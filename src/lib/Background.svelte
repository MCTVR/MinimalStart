<script>
	import HK from "../assets/HK.avif";
</script>

<div id="bg">
	<img id="bg-img" loading="lazy" decoding="sync" src={HK} alt="HK" />
</div>

<style>
	#bg {
		position: fixed;
		z-index: -1;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
	}
	#bg-img {
		width: 100vw;
		height: 100vh;
		object-fit: cover;
	}
</style>
