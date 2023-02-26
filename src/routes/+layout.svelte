<script>
    // import "../styles.scss";
    import "../app.postcss";
    import "@fontsource/old-standard-tt/400.css";
    import "@fontsource/bebas-neue/400.css";
    import "@fontsource/crimson-text/400.css";
    import "@fontsource/crimson-text/600.css";
    import "@fontsource/almendra/400.css";
    import "@fontsource/roboto/400.css";
    import Footer from "$lib/elements/Footer.svelte";
    // import SaleBanner from "$lib/SaleBanner.svelte";
</script>

<svelte:head>
    <title>Unestablished Titles</title>
</svelte:head>
<!-- <SaleBanner href="/"/> -->
<slot />
<div class="filler" />
<Footer />

<style lang="scss">
    @import "/src/styles.scss";

    .filler {
        padding: 0;
        margin: 0;
        border: none;
        flex: 1;
    }

    :global(html) {
        scroll-behavior: smooth;
        height: 100%;
        // min-width: 100%;
    }

    :global(body) {
        @include font-text-serif;
        padding: 0;
        margin: 0;
        scroll-behavior: smooth;
        height: 100%;
        // min-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: stretch;
        gap: 0;
    }
</style>
