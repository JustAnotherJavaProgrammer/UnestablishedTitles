<script>
    import { building } from "$app/environment";
    import Header from "$lib/Header.svelte";
    import HeadingSerif from "$lib/HeadingSerif.svelte";
    import HotizontalDivider from "$lib/HotizontalDivider.svelte";
    import Italics from "$lib/Italics.svelte";
    import Navbar from "$lib/Navbar.svelte";
    import PackPreview from "$lib/PackPreview.svelte";
    import ParagraphSerif from "$lib/ParagraphSerif.svelte";
    import SiteColumn from "$lib/SiteColumn.svelte";
    import WideColumn from "$lib/WideColumn.svelte";

    import IrishMenPack from "$lib/assets/img/pack_thumbnails/patrick-metzdorf-xyQnsGRmeNQ-unsplash.jpg";
    // @ts-ignore
    import IrishMenPack_srcset from "$lib/assets/img/pack_thumbnails/patrick-metzdorf-xyQnsGRmeNQ-unsplash.jpg?w=500;900;1200&webp&srcset";
    import IrishWomenPack from "$lib/assets/img/pack_thumbnails/aldo-de-la-paz-d6u2_u02FIo-unsplash.jpg";
    // @ts-ignore
    import IrishWomenPack_srcset from "$lib/assets/img/pack_thumbnails/aldo-de-la-paz-d6u2_u02FIo-unsplash.jpg?w=500;900;1200&webp&srcset";
    import IrishCouplePack from "$lib/assets/img/pack_thumbnails/ainars-djatlevskis-gJQLVTyQfgQ-unsplash.jpg";
    // @ts-ignore
    import IrishCouplePack_srcset from "$lib/assets/img/pack_thumbnails/ainars-djatlevskis-gJQLVTyQfgQ-unsplash.jpg?w=500;900;1200&webp&srcset";
    import EnglishNobilityManPack from "$lib/assets/img/pack_thumbnails/yaopey-yong-flmPTUCjkto-unsplash.jpg";
    // @ts-ignore
    import EnglishNobilityManPack_srcset from "$lib/assets/img/pack_thumbnails/yaopey-yong-flmPTUCjkto-unsplash.jpg?w=500;900;1200&webp&srcset";
    import EnglishNobilityWomanPack from "$lib/assets/img/pack_thumbnails/neil-cartwright---kJ_2yCBPw-unsplash.jpg";
    // @ts-ignore
    import EnglishNobilityWomanPack_srcset from "$lib/assets/img/pack_thumbnails/neil-cartwright---kJ_2yCBPw-unsplash.jpg?w=500;900;1200&webp&srcset";
    import EnglishNobilityCouplePack from "$lib/assets/img/pack_thumbnails/52064110244_977f657bbb_o.jpg";
    // @ts-ignore
    import EnglishNobilityCouplePack_srcset from "$lib/assets/img/pack_thumbnails/52064110244_977f657bbb_o.jpg?w=500;900;1200&webp&srcset";
    import MasterPack from "$lib/assets/img/pack_thumbnails/adam-kring-uqCMurxrzZc-unsplash.jpg";
    // @ts-ignore
    import MasterPack_srcset from "$lib/assets/img/pack_thumbnails/adam-kring-uqCMurxrzZc-unsplash.jpg?w=500;900;1200&webp&srcset";
    import MistressPack from "$lib/assets/img/pack_thumbnails/nick-fewings-xqlkl3AT7PU-unsplash.jpg";
    // @ts-ignore
    import MistressPack_srcset from "$lib/assets/img/pack_thumbnails/nick-fewings-xqlkl3AT7PU-unsplash.jpg?w=500;900;1200&webp&srcset";
    import MasterCouplePack from "$lib/assets/img/pack_thumbnails/bruno-martins-GkZvxVsHYWw-unsplash.jpg";
    // @ts-ignore
    import MasterCouplePack_srcset from "$lib/assets/img/pack_thumbnails/bruno-martins-GkZvxVsHYWw-unsplash.jpg?w=500;900;1200&webp&srcset";
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
    <!-- links with zoom-in images to the individual title packs -->
    <WideColumn>
        <PackPreview src={IrishMenPack} srcset={IrishMenPack_srcset} alt="Giant's Causeway">
            <svelte:fragment slot="name">Lordship Pack</svelte:fragment>
        </PackPreview>
    </WideColumn>
    <WideColumn>
        <PackPreview src={IrishWomenPack} srcset={IrishWomenPack_srcset} alt="Castle On The Hill">
            <svelte:fragment slot="name">Ladyship Pack</svelte:fragment>
        </PackPreview>
    </WideColumn>
    <WideColumn>
        <PackPreview src={IrishCouplePack} srcset={IrishCouplePack_srcset} alt="Donegal, Ireland">
            <svelte:fragment slot="name">Couple Title Pack (Lord/Lady)</svelte:fragment>
        </PackPreview>
    </WideColumn>

    <WideColumn>
        <PackPreview src={EnglishNobilityManPack} srcset={EnglishNobilityManPack_srcset} alt="Westminister Palace in the evening">
            <svelte:fragment slot="name">Sir Title Pack</svelte:fragment>
        </PackPreview>
    </WideColumn>
    <WideColumn>
        <PackPreview src={EnglishNobilityWomanPack} srcset={EnglishNobilityWomanPack_srcset} alt="Buckingham Palace">
            <svelte:fragment slot="name">Dame Title Pack</svelte:fragment>
        </PackPreview>
    </WideColumn>
    <WideColumn>
        <PackPreview src={EnglishNobilityCouplePack} srcset={EnglishNobilityCouplePack_srcset} alt="The Queen's Speech 2022">
            <svelte:fragment slot="name">Couple Title Pack (Sir/Dame)</svelte:fragment>
            <svelte:fragment slot="tagline">Photo: Copyright House of Lords 2022 / Photography by Annabel Moeller</svelte:fragment>
        </PackPreview>
    </WideColumn>

    <WideColumn>
        <PackPreview src={MasterPack} srcset={MasterPack_srcset} alt="A plantation house in South Carolina">
            <svelte:fragment slot="name">Master Pack</svelte:fragment>
        </PackPreview>
    </WideColumn>
    <WideColumn>
        <PackPreview src={MistressPack} srcset={MistressPack_srcset} alt="Crichel House, Dorset, from across the lake, in the wonderful Dorset countryside.">
            <svelte:fragment slot="name">Mistress Pack</svelte:fragment>
        </PackPreview>
    </WideColumn>
    <WideColumn>
        <PackPreview src={MasterCouplePack} srcset={MasterCouplePack} alt="Kynance Mews, London, UK">
            <svelte:fragment slot="name">Couple Title Pack (Master/Mistress)</svelte:fragment>
        </PackPreview>
    </WideColumn>

    <ParagraphSerif>
        <svelte:fragment slot="title">Each pack contains:</svelte:fragment>
        One automatically generated certificate of your preferred form of address, in the form of a printable PDF file. Nothing less, nothing more.
        <br />
        The intention of these packs is to provide a fun, novelty product for those who want to get something a little different for themselves, friends or family, all while simultaneously
        not feeling the need to pretend to protect woodlands in Ireland.
    </ParagraphSerif>

    <ParagraphSerif>
        <svelte:fragment slot="title">Testimonials</svelte:fragment>
        <Italics>*Please note that images below may be illustrative only and text may be fictitious</Italics>
    </ParagraphSerif>
    <!-- TODO: Testimonials -->
</SiteColumn>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<a href="https://www.gov.ie/en/publication/57d2a-forestry-facts-and-news/#forestry-facts-and-news">Facts about forests</a>
