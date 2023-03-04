<script lang="ts">
    import MetaInfo from "$lib/elements/MetaInfo.svelte";
    import HeadingSerif from "$lib/layout/HeadingSerif.svelte";
    import ParagraphSerif from "$lib/layout/ParagraphSerif.svelte";
    import SiteColumn from "$lib/layout/SiteColumn.svelte";


</script>

<MetaInfo title="FAQ" description="You might have some questions about Unestablished Titles. Here, we try to answer them." />

<HeadingSerif>Frequently Asked Questions</HeadingSerif>
<SiteColumn>
    <ParagraphSerif>
        <svelte:fragment slot="title">Is this a scam?</svelte:fragment>
        <p>No. How can it be a scam if it's free?</p>
    </ParagraphSerif>

    <ParagraphSerif>
        <svelte:fragment slot="title">Why can't I generate any certificates?</svelte:fragment>
        <p>For one, that feature isn't available yet.</p>
        <p>But also, you need to have JavaScript enabled in your browser. This is because the certificates are generated on your device, not on a server.
        JavaScript is the technology that makes this possible.</p>
    </ParagraphSerif>
</SiteColumn>