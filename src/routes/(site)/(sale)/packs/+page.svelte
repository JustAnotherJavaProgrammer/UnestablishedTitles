<script lang="ts">
    import HotizontalDivider from "$lib/elements/HotizontalDivider.svelte";
    import MetaInfo from "$lib/elements/MetaInfo.svelte";
    import PackPreview from "$lib/elements/PackPreview.svelte";
    import GapReducer from "$lib/layout/GapReducer.svelte";
    import GapReducerSmall from "$lib/layout/GapReducerSmall.svelte";
    import HeadingSerif from "$lib/layout/HeadingSerif.svelte";
    import SiteColumn from "$lib/layout/SiteColumn.svelte";
    import WideColumn from "$lib/layout/WideColumn.svelte";

    import packs from "$lib/packs";
</script>

<MetaInfo title="Title Packs" description="Choose from our wide variety of title packs!" />
<HeadingSerif>Catalogue</HeadingSerif>
<WideColumn>
    <section class="pack-grid">
        {#each packs as pack}
            {#if pack.tagline === undefined}
                <PackPreview src={pack.previewImage.src} srcset={pack.previewImage.srcset} alt={pack.previewImage.alt}>
                    <svelte:fragment slot="name">{pack.name}</svelte:fragment>
                </PackPreview>
            {:else}
                <PackPreview src={pack.previewImage.src} srcset={pack.previewImage.srcset} alt={pack.previewImage.alt}>
                    <svelte:fragment slot="name">{pack.name}</svelte:fragment>
                    <svelte:fragment slot="tagline">{pack.tagline}</svelte:fragment>
                </PackPreview>
            {/if}
        {/each}
    </section>
</WideColumn>

<style lang="scss">
    @import "/src/styles.scss";

    section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: 1fr;
        grid-auto-flow: row;
        gap: 1rem;
        @media screen and (min-width: $breakpoint-md) {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }

    @media screen and (max-width: ($breakpoint-md - 1px)) {
        :global(section.pack-grid > :nth-child(3n)) {
            grid-column: span 2;
        }
    }
</style>
