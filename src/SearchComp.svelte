<script>
    import { scale, fly, fade } from 'svelte/transition';
    import { quintInOut } from 'svelte/easing';
    //import { writable } from 'svelte/store';
    let searchEngineChosen = "Google";
    let searchEngineMenuLaunched = false;

    let searchVal;

    const searchEngineList = [
        {name: "DuckDuckGo", query: "https://duckduckgo.com/?q="},
        {name: "Google", query: "https://www.google.com/search?q="},
        {name: "Baidu", query: "https://www.baidu.com/s?ie=utf-8&wd="},
    ];

</script>

<div id="search-component-wrapper">
    <div id="search-component">
        <div id="search-bar-div">
            <input bind:value={searchVal} id="search-bar" type="text" placeholder={`Search with ${searchEngineChosen}`} />
        </div>
        <div id="search-button" on:mouseleave={() => { searchEngineMenuLaunched = false; }}>
            <div id="chosen-searchEngine" on:click={() => { searchEngineMenuLaunched = !searchEngineMenuLaunched; }}>
                
                {#if searchEngineMenuLaunched}
                    <div id="searchEngine-menu" in:scale="{{ start: .5, duration: 200, easing: quintInOut }}" out:fly="{{ y: 10, duration: 200, easing: quintInOut }}">
                        {#each searchEngineList as searchEngine}
                            {#if searchEngine.name !== searchEngineChosen}
                                <img class="searchEngine-menu-icon" src="/icons/{searchEngine.name}.png" id="{searchEngine.name}-menu-icon" on:click={() => { searchEngineChosen = searchEngine.name; }} alt="{searchEngine.name}" />
                            {/if}
                        {/each}
                        <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g>
                                <path fill="#000" fill-rule="evenodd" stroke="none" d="M 53.03854 20.218155 C 44.010872 11.190491 29.373848 11.190491 20.34618 20.218155 L 20.34618 20.218155 C 11.318512 29.245834 11.318512 43.882858 20.34618 52.910522 L 202.632889 235.197235 C 211.660553 244.224884 226.297577 244.224899 235.325241 235.19722 L 235.325241 235.19722 C 244.352905 226.169556 244.352905 211.532532 235.325256 202.504883 Z"/>
                                <path fill="#000" fill-rule="evenodd" stroke="none" d="M 20.674755 202.958267 C 11.647087 211.985931 11.647086 226.622955 20.674755 235.650635 L 20.674755 235.650635 C 29.702423 244.678299 44.339447 244.678299 53.367115 235.650635 L 235.653824 53.363907 C 244.681488 44.336258 244.681488 29.699234 235.653824 20.67157 L 235.653824 20.67157 C 226.626144 11.64389 211.98912 11.643906 202.961472 20.671555 Z"/>
                            </g>
                        </svg>
                    </div>
                {/if}

                {#if searchEngineChosen === "Google"}
                    <img class="searchEngine-icon" id="Google-icon" src="/icons/Google.png" alt="Google" />
                {:else if searchEngineChosen === "DuckDuckGo"}
                    <img class="searchEngine-icon" id="DuckDuckGo-icon" src="/icons/DuckDuckGo.png" alt="DuckDuckGo" />
                {:else if searchEngineChosen === "Baidu"}
                    <img class="searchEngine-icon" id="Baidu-icon" src="/icons/Baidu.png" alt="Baidu" />
                {:else}
                    <img class="searchEngine-icon" id="Google-icon" src="/icons/Google.png" alt="Google" />
                {/if}
            </div>
            <svg on:click="{() => { if (typeof searchVal !== "undefined") { let query = searchEngineList[searchEngineList.findIndex(x => x.name == searchEngineChosen)].query; window.location.href = query + searchVal; }}}" id="search-icon" viewBox="0 0 24 24">
                <g>
                    <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                </g>
            </svg>
        </div>
    </div>
</div>

<svelte:window on:keydown="{(event) => { if (event.key === "Enter" && typeof searchVal !== "undefined") { event.preventDefault(); let query = searchEngineList[searchEngineList.findIndex(x => x.name == searchEngineChosen)].query; window.location.href = query + searchVal;}}}" />

<style>
    #searchEngine-menu {
        z-index: 10;
        visibility: visible;
        position: absolute;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 10px;
        padding: 10px;
        background-color: #fff;
        margin-bottom: 74px;
        margin-left: -3px;
        transition: all .3s ease-in-out;
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
        transition: all .3s ease-in-out;
    }

    #Baidu-menu-icon {
        width: 23px;
        filter: brightness(0) saturate(1) invert(28%) sepia(52%) saturate(2955%) hue-rotate(232deg) brightness(74%) contrast(153%);
    }

    #Baidu-icon {
        width: 23px;
    }

    #Google-icon {
        width: 26px;
    }

    .searchEngine-icon {
        width: 100%;
        aspect-ratio: 1;
        transition: all .3s;
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
        /* background-color: aqua; */
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
        box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.3);
        background-color: #fff;
        border-radius: 50px;
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
        padding: .52rem;
        font-size: 1.4rem;
        font-weight: 400;
    }

    #search-button {
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
        transition: all .3s ease-in-out;
    }

    #search-button:hover {
        background-color: #0064ef;
        aspect-ratio: 1 / .46;
        border-radius: 25px;
    }

    #search-button:hover #search-icon {
        fill: #fff;
    }

    #search-icon {
        height: calc(100% - 6px);
        aspect-ratio: 1;
        fill: #000;
        transition: all .3s ease-in-out;
    }

</style>