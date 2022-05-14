<script>
    let time;

    function getTime() {
        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        
        h = checkTime(h);
        m = checkTime(m);
        time = `${h}:${m}`;

        setTimeout(getTime, 1000);
    }

    function checkTime(i) {
        if (i < 10) { i = "0" + i };
        return i;
    }

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
        filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, .44));
    }
</style>