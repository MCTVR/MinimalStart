<script>
	export let imgURL = "./icons/HK.avif";
</script>

<div id="bg">
	<img id="bg-img" src={imgURL} alt="HK" />
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
	#bg-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
