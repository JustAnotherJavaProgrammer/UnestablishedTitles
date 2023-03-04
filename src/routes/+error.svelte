<script lang="ts">
    import { page } from "$app/stores";
    import ParagraphSerif from "$lib/layout/ParagraphSerif.svelte";
    import Navbar from "$lib/elements/Navbar.svelte";
    import SiteColumn from "$lib/layout/SiteColumn.svelte";
    import Button from "$lib/elements/Button.svelte";
</script>

<div class="top">
    <Navbar black />
</div>
<SiteColumn nogap>
    <ParagraphSerif>
        <svelte:fragment slot="title">{$page.status} &ndash {$page.error?.message ?? "That's an error"}</svelte:fragment>
        This is not the page you are looking for.<br />
        <Button type="a" href="/" color="green">Return to the homepage</Button>
    </ParagraphSerif>
</SiteColumn>

<style lang="scss">
    @import "/src/styles.scss";

    // a {
    //     font-weight: bold;
    //     color: $green;
    // }

    div.top {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>
