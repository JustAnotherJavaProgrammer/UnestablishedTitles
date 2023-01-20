<script>
    import { building } from "$app/environment";
    import Header from "$lib/Header.svelte";
    import Italics from "$lib/Italics.svelte";
    import Navbar from "$lib/Navbar.svelte";
    import ParagraphSerif from "$lib/ParagraphSerif.svelte";
    import SiteColumn from "$lib/SiteColumn.svelte";
</script>

<Header>
    <svelte:fragment slot="navbar"><Navbar /></svelte:fragment>
    <svelte:fragment slot="hero">You may wish to save the Irish woodlands</svelte:fragment>
    <svelte:fragment slot="title">Call Yourself a Lord Today</svelte:fragment>
    <svelte:fragment slot="subtitle"
        >(An absolutely useless gift
        {#if !building} in {new Date().getFullYear()}{/if})</svelte:fragment
    >
</Header>
<SiteColumn>
    <ParagraphSerif>
        <svelte:fragment slot="title">Lordship & Ladyship Title Packs</svelte:fragment>
        Purchase a personal Lordship or Ladyship title pack without dedicated land in Ireland.
        <br />
        Our Title packs are based on a historic Scottish land ownership custom, where Landowners were have been long referred to as "Lairds", the Scottish term for "Lord", with the
        female equivalent being "Lady".
        <br />
        <Italics>Later on, many Scots immigrated to Ireland, bringing with them their traditions and customs.</Italics>
        <br />
        Every Lordship or Ladyship pack contributes to the amount of time spent thinking about the protection and preservation of Irish woodlands. As the intention is for the land
        to be reforested, we ask that all interested parties bear this in mind.
    </ParagraphSerif>
</SiteColumn>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<a href="https://www.gov.ie/en/publication/57d2a-forestry-facts-and-news/#forestry-facts-and-news">Facts about forests</a>
