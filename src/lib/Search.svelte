<script lang="ts">
	import { onMount } from "svelte";
	import { slide } from "svelte/transition";
	import { quintInOut } from "svelte/easing";

	import strings from "../assets/strings.json";

	interface SearchEngineType {
		id: SearchEngine;
		url: string;
		icon: string;
	}

	enum SearchEngine {
		Baidu = "Baidu",
		Brave = "Brave",
		Bing = "Bing",
		DuckDuckGo = "DuckDuckGo",
		Ecosia = "Ecosia",
		Google = "Google",
		Yandex = "Yandex",
		Yahoo = "Yahoo",
		YahooJapan = "Yahoo Japan",
	}

	let language: string = window.navigator.language;

	let searchEngineMenuLaunched = false;

	let searchQuery: string;
	let searchEngineSelected: SearchEngine = SearchEngine.Google;

	let supportedLanguages: string[] = Object.keys(strings);

	let languageMatched: string = supportedLanguages.find((lang) => language.includes(lang)) || "en";

	const siteExpWithProtocol =
		/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
	const siteExpNoProtocol =
		/^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;

	const searchEnginesMap: Map<string, SearchEngineType> = new Map([
		[
			SearchEngine.Baidu,
			{
				id: SearchEngine.Baidu,
				url: "https://www.baidu.com/s?ie=utf-8&wd=",
				icon: "https://www.baidu.com/favicon.ico",
			},
		],
		[
			SearchEngine.Bing,
			{
				id: SearchEngine.Bing,
				url: "https://www.bing.com/search?q=yt",
				icon: "https://www.bing.com/favicon.ico",
			},
		],
		[
			SearchEngine.DuckDuckGo,
			{
				id: SearchEngine.DuckDuckGo,
				url: "https://duckduckgo.com/?q=",
				icon: "https://duckduckgo.com/assets/icons/meta/DDG-icon_256x256.png",
			},
		],
		[
			SearchEngine.Google,
			{
				id: SearchEngine.Google,
				url: "https://www.google.com/search?q=",
				icon: "https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png",
			},
		],
		[
			SearchEngine.Yandex,
			{
				id: SearchEngine.Yandex,
				url: "https://yandex.com/search/?text=",
				icon: "https://yastatic.net/s3/home-static/_/7c/7ccfee6f1e81b14c5bef535d1ad7b7e0.png",
			},
		],
		[
			SearchEngine.YahooJapan,
			{
				id: SearchEngine.YahooJapan,
				url: "https://search.yahoo.co.jp/search?p=",
				icon: "https://search.yahoo.co.jp/favicon.ico",
			},
		],
	]);

	function launchQuery(e: Event, query: string, searchEngine: SearchEngine) {
		e.preventDefault();
		if (searchQuery) {
			if (query.match(siteExpWithProtocol)) {
				window.location.href = query;
			} else if (query.match(siteExpNoProtocol)) {
				window.location.href = "https://" + query;
			} else {
				window.location.href =
					searchEnginesMap.get(searchEngine).url + query;
			}
		}
	}

	onMount(() => {
		document.getElementById("search-bar").focus();
		document
			.getElementById("search-bar-div")
			.addEventListener("submit", (e) => {
				launchQuery(e, searchQuery, searchEngineSelected);
			});
	});

	let searchBarPlaceholder: string = strings[languageMatched].searchBarPlaceholder
</script>

<div id="search-component-wrapper">
	<div id="search-component">
		<form id="search-bar-div">
			<input
				id="search-bar"
				type="text"
				bind:value={searchQuery}
				placeholder={searchBarPlaceholder.replace(
					"#SearchEngine#",
					searchEngineSelected
				)}
			/>
		</form>
		<button
			id="search-button"
			on:mouseleave={() => {
				searchEngineMenuLaunched = false;
			}}
		>
			<div
				id="chosen-searchEngine"
				on:keydown={() => {}}
				on:click={() => {
					searchEngineMenuLaunched = !searchEngineMenuLaunched;
				}}
			>
				{#if searchEngineMenuLaunched}
					<div
						id="searchEngine-menu"
						transition:slide={{ duration: 200, easing: quintInOut }}
					>
						{#each Array.from(searchEnginesMap.keys()) as searchEngine}
							{#if searchEngine !== searchEngineSelected}
								<img
									class="searchEngine-menu-icon"
									id="{searchEngine}-menu-icon"
									src={searchEnginesMap.get(searchEngine)
										.icon}
									on:click={() => {
										searchEngineSelected = searchEnginesMap.get(
											searchEngine
										).id;
									}}
								/>
							{/if}
						{/each}
						<svg
							viewBox="0 0 256 256"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
						>
							<g>
								<path
									fill="#000"
									fill-rule="evenodd"
									stroke="none"
									d="M 53.03854 20.218155 C 44.010872 11.190491 29.373848 11.190491 20.34618 20.218155 L 20.34618 20.218155 C 11.318512 29.245834 11.318512 43.882858 20.34618 52.910522 L 202.632889 235.197235 C 211.660553 244.224884 226.297577 244.224899 235.325241 235.19722 L 235.325241 235.19722 C 244.352905 226.169556 244.352905 211.532532 235.325256 202.504883 Z"
								/>
								<path
									fill="#000"
									fill-rule="evenodd"
									stroke="none"
									d="M 20.674755 202.958267 C 11.647087 211.985931 11.647086 226.622955 20.674755 235.650635 L 20.674755 235.650635 C 29.702423 244.678299 44.339447 244.678299 53.367115 235.650635 L 235.653824 53.363907 C 244.681488 44.336258 244.681488 29.699234 235.653824 20.67157 L 235.653824 20.67157 C 226.626144 11.64389 211.98912 11.643906 202.961472 20.671555 Z"
								/>
							</g>
						</svg>
					</div>
				{/if}

				<img
					class="searchEngine-icon"
					id={`${searchEngineSelected}-icon`}
					src={searchEnginesMap.get(searchEngineSelected).icon}
					alt={searchEngineSelected}
				/>
			</div>

			<svg
				on:click={(e) => {
					launchQuery(e, searchQuery, searchEngineSelected);
				}}
				id="search-icon"
				viewBox="0 0 24 24"
			>
				<g>
					<path
						d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
					/>
				</g>
			</svg>
		</button>
	</div>
</div>

<style>
	#choose-bg {
		position: fixed;
		cursor: pointer;
		bottom: 0;
		right: 0;
	}

	#choose-bg img {
		position: fixed;
		cursor: pointer;
		bottom: 0;
		right: 0;
		width: 40px;
		height: 40px;
		outline: none;
		border: 0;
		margin: 22px;
	}

	#choose-bg input {
		position: fixed;
		cursor: pointer;
		bottom: 0;
		right: 0;
		width: 40px;
		height: 40px;
		outline: none;
		border: 0;
		margin: 22px;
		opacity: 0;
	}

	#search-bar {
		color: #000;
	}

	#searchBar::placeholder {
		user-select: none;
	}

	#searchEngine-menu {
		z-index: 10;
		visibility: visible;
		position: absolute;
		display: grid;
		grid-template-rows: 1fr 1fr 1fr;
		background-color: #fff;
		gap: 10px;
		padding: 10px;
		margin-bottom: 74px;
		margin-left: -3px;
		transition: all 0.3s ease-in-out;
		border-radius: 25px 25px 25px 22px;
	}

	.searchEngine-menu-icon {
		width: 24px;
	}

	#chosen-searchEngine {
		visibility: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 -2px 0 0;
		padding: 0;
		width: 0;
		opacity: 0;
		height: 0;
		transition: all 0.3s ease-in-out;
	}

	#Yandex-icon,
	#Yandex-menu-icon {
		border-radius: 50%;
	}

	.searchEngine-icon {
		width: 25px;
		aspect-ratio: 1;
		transition: all 0.3s;
	}

	#search-button:hover #chosen-searchEngine {
		visibility: visible;
		opacity: 1;
		width: 30px;
		height: 100%;
	}

	#search-component-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 42rem;
		padding: 10px;
		flex-direction: row;
	}

	#search-component {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 100%;
		box-shadow: 0px 0px 12px rgba(30, 30, 30, 0.6);
		background-color: #ffffff30;
		border-radius: 50px;
		transition: 0.3s;
	}

	#search-component:hover,
	#search-component:focus-within {
		background-color: #fff;
	}

	#search-bar-div {
		width: inherit;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#search-bar {
		text-indent: 0.5rem;
		width: inherit;
		height: inherit;
		border: none;
		outline: none;
		background: none;
		padding: 0.52rem;
		font-size: 1.4rem;
		font-weight: 400;
		font-size: 1.3rem;
	}

	#search-button {
		outline: none;
		border: none;
		z-index: 1;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		height: calc(100% - 6px);
		aspect-ratio: 1;
		border-radius: 25px;
		margin-right: 3px;
		background-color: transparent;
		cursor: pointer;
		transition: all 0.3s ease-in-out;
	}

	#search-button:hover {
		background-color: #0064ef;
		aspect-ratio: 1 / 0.46;
		border-radius: 25px;
	}

	#search-button:hover #search-icon {
		fill: #fafafa !important;
	}

	#search-component:hover #search-icon {
		fill: #000;
	}

	#search-component:focus-within #search-icon {
		fill: #000;
	}

	#search-icon {
		height: calc(100% - 6px);
		aspect-ratio: 1;
		fill: #fafafa;
		transition: all 0.3s ease-in-out;
	}
</style>
