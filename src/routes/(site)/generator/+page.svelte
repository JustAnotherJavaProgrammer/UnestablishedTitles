<script>
    import MetaInfo from "$lib/elements/MetaInfo.svelte";
    import HeadingSerif from "$lib/layout/HeadingSerif.svelte";
</script>

<MetaInfo title="Generator" description="Generate your certificate now. It's completely free!" />

<HeadingSerif>Generate your certificate</HeadingSerif>
<noscript>
    <div class="noscript">
        Please enable JavaScript in your browser. For more information, please visit <a href="/faq">the FAQ</a>.
    </div>
</noscript>
Coming soon...

<style lang="scss">
    @import "/src/styles.scss";

    .noscript {
        padding: 1rem;
        margin: 1rem;
        display: inline-block;
        background-color: $red;
        color: $white;
        a {
            color: $white;
        }
    }
</style>
