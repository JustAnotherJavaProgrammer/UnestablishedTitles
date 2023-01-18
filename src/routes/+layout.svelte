<script>
    import "../app.postcss";
    import "@fontsource/old-standard-tt/400.css";
    import "@fontsource/bebas-neue/400.css";
    import "@fontsource/libre-baskerville/400.css";
    // import SaleBanner from "$lib/SaleBanner.svelte";
</script>

<head>
    <title>Unestablished Titles</title>
</head>
<!-- <SaleBanner /> -->
<slot />

<style global lang="scss">
    @import "/src/styles.scss";

    body {
        @include font-text-serif;
        padding: 0;
        margin: 0;
    }
</style>
