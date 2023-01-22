<script>
    import { building } from "$app/environment";
    import Header from "$lib/Header.svelte";
    import HeadingSerif from "$lib/HeadingSerif.svelte";
    import HotizontalDivider from "$lib/HotizontalDivider.svelte";
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
        Purchase a personal Lordship or Ladyship Title Pack without dedicated land in Ireland.
        <br />
        These Title Packs are based on a historic Scottish land ownership custom, where Landowners have been long referred to as "Lairds", the Scottish term for "Lord", with the
        female equivalent being "Lady".
        <br />
        <Italics>Later on, many Scots immigrated to Ireland, bringing with them their traditions and customs.</Italics>
        <br />
        Every Lordship or Ladyship title pack contributes to the amount of time spent thinking about the protection and preservation of Irish woodlands. As the intention is for the
        land to be reforested, we ask that all interested parties bear this in mind.
    </ParagraphSerif>
    <ParagraphSerif>
        <svelte:fragment slot="title">Sir & Dame Title Packs</svelte:fragment>
        Get called "Sir" or "Dame" with this Title Pack without the hassle of obtaining a knighthood.
        <br />
        These Title Packs are based on an English custom, where people with a higher social status have been long addressed as "Sir", with the female equivalent of the title of "Sir"
        being "Dame".
        <br />
        <Italics>*This pack includes a certificate of your preferred form of address. You may choose to title yourself with the title of Sir or Dame.</Italics>
        <br />
        Every Sir or Dame title pack contributes to the confusion about the legality of this scheme. As the intention is for this uncertainty to not be resolved, we ask that all
        interested parties keep this in mind.
    </ParagraphSerif>
    <ParagraphSerif>
        <svelte:fragment slot="title">Master & Mistress Title Packs</svelte:fragment>
        Purchase a personal Master or Mistress Title Pack even without English citizenship.
        <br />
        These Title Packs are based on a historic English land custom of respect, where respectable men referred to each other as "Masters", the forerunner of modern "Mister", with
        the female equivalent being "Mistress".
        <br />
        <Italics>We do not quite understand why this is the most popular of our Title Packs, but we will gladly take your money.</Italics>
        <br />
        Every Master or Mistress title pack should contribute to the respectful treatment of human beings. Since the intention is for civility to be upheld, we ask that all interested
        parties bear this in mind.
    </ParagraphSerif>
    <ParagraphSerif>
        <svelte:fragment slot="title">Available Title Packs</svelte:fragment>
        <HotizontalDivider />
    </ParagraphSerif>
</SiteColumn>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<a href="https://www.gov.ie/en/publication/57d2a-forestry-facts-and-news/#forestry-facts-and-news">Facts about forests</a>
