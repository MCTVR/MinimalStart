<script>
	let time;

	const getTimezone = () => {
		const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
		return timezone;
	};

	const getLocale = () => {
		const locale = Intl.DateTimeFormat().resolvedOptions().locale;
		return locale;
	};

	const getTime = () => {
		const nowTime = new Date().toLocaleTimeString(getLocale(), {
			timeZone: getTimezone(),
			hour12: false,
			hour: "2-digit",
			minute: "2-digit",
		});
		time = nowTime;
		setTimeout(getTime, 1000);
	};

	getTime();
</script>

<div id="clock">
	<h1 id="clock-digits">{time}</h1>
</div>

<style>
	#clock {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100vw;
		user-select: none;
	}

	#clock #clock-digits {
		margin: 0;
		padding: 18% 4rem 4rem 3rem;
		font-size: 5rem;
		color: #fdfdfd;
		filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.44));
	}
</style>
