<script>
    import SaleBanner from "$lib/elements/SaleBanner.svelte";
    import Navbar from "$lib/elements/Navbar.svelte";
    import SiteColumn from "$lib/layout/SiteColumn.svelte";
</script>

<SaleBanner />
<div class="top">
    <Navbar black />
</div>
<SiteColumn nogap>
    <slot />
</SiteColumn>

<style lang="scss">
    @import "/src/styles.scss";

    div.top {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>
