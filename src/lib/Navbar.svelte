<script lang="ts">
    import wreathIcon from "$lib/assets/img/Greek_Roman_Laurel_wreath_with_branches_vector.svg";
    export let black: boolean = false;
</script>

<nav class:black>
    <div id="container">
        <a id="rootlink" href="/">
            <img id="icon" src={wreathIcon} alt="A laurel wreath with branches" />
            <span id="title">Unestablished Titles</span>
        </a>
        <div id="subpages">
            <a href="/">Home</a>
            <a href="/">Get now</a>
            <a href="/">Everyday sale</a>
        </div>
    </div>
</nav>

<style>
    .black a,
    .black {
        color: black;
    }

    nav {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding-top: 1rem;
        font-family: "Bebas Neue", sans-serif;
        letter-spacing: 0.075rem;
        text-transform: uppercase;
        width: 100%;
        max-width: 1050px;
    }

    #container {
        flex: 1;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    #subpages {
        flex: 1;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        margin-left: 1rem;
        font-size: 1.175rem;
        letter-spacing: 0.075em;
        gap: 2rem;
    }

    a {
        color: white;
        text-decoration: none;
        text-transform: uppercase;
    }

    #rootlink {
        font-family: "Old Standard TT", serif;
        letter-spacing: normal;
        font-size: 1.375rem;
        vertical-align: bottom;
    }

    .black #icon {
        filter: brightness(0);
    }

    #icon {
        height: 2rem;
        width: 2rem;
        object-fit: contain;
        object-position: center;
        vertical-align: bottom;
    }
</style>
