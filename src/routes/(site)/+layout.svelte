<script>
    import HotizontalDivider from "$lib/elements/HotizontalDivider.svelte";
import Navbar from "$lib/elements/Navbar.svelte";
    import SiteColumn from "$lib/layout/SiteColumn.svelte";
    import WideColumn from "$lib/layout/WideColumn.svelte";
</script>

<div class="top">
    <Navbar black/>
</div>
<SiteColumn nogap>
    <WideColumn>
        <div class="container">
            <slot />
        </div>
    </WideColumn>
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

    // div.container {
    //     margin-top: 1rem;
    // }
</style>
