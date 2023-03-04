<script>
    import { building } from "$app/environment";
    import Header from "$lib/elements/Header.svelte";
    import Navbar from "$lib/elements/Navbar.svelte";

    import heroImage from "$lib/assets/img/jp-valery-mQTTDA_kY_8-unsplash.jpg";
    // @ts-ignore
    import heroImage_srcset from "$lib/assets/img/jp-valery-mQTTDA_kY_8-unsplash.jpg?w=50;100;200;300;400;500;900;1200;2000&withoutEnlargement&webp;avif;jpg;png&srcset";
    import SiteColumn from "$lib/layout/SiteColumn.svelte";
    import Button from "$lib/elements/Button.svelte";
    import ParagraphSerif from "$lib/layout/ParagraphSerif.svelte";
    import MetaInfo from "$lib/elements/MetaInfo.svelte";

    const year = new Date().getFullYear();
</script>

<MetaInfo title="Everyday Sale" description="Everyday Sale. Up to &infin;% OFF + FREE grift!"/>

<Header src={heroImage} srcset={heroImage_srcset}>
    <svelte:fragment slot="navbar"><div class="navbar-container"><Navbar black /></div></svelte:fragment>
    <svelte:fragment slot="hero">There is a sale going on!</svelte:fragment>
    <svelte:fragment slot="title">{building ? "Everyday" : year} Sale</svelte:fragment>
    <svelte:fragment slot="subtitle">All title packs are free, for an unlimited time only!</svelte:fragment>
</Header>
<SiteColumn>
    <ParagraphSerif>
        <svelte:fragment slot="title">How does this work?</svelte:fragment>
        <p>Simply click on the button below to choose your preferred form of address (title pack) and generate your free certificate.</p>
        <p>You can repeat this process as often as you wish.</p>
        <Button type="a" href="/packs" color="red">Choose a title pack</Button>
    </ParagraphSerif>
</SiteColumn>

<style lang="scss">
    @import "/src/styles.scss";
    
    .navbar-container {
        width: 100%;
        padding-bottom: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: $white;
    }
</style>
