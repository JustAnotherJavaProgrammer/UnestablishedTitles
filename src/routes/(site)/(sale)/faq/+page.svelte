<script lang="ts">
    import MetaInfo from "$lib/elements/MetaInfo.svelte";
    import HeadingSerif from "$lib/layout/HeadingSerif.svelte";
    import Italics from "$lib/layout/Italics.svelte";
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
        <svelte:fragment slot="title">What happens to my data when I generate a certificate?</svelte:fragment>
        <p>
            Nothing. Your data is not stored anywhere or sent over the Internet.<br>
            All certificates are generated locally on your machine and in your browser. Even your browser stores that data only as long as you keep the tab open. Once you close
            the tab, your data is gone.
        </p>
    </ParagraphSerif>

    <ParagraphSerif>
        <svelte:fragment slot="title">Why do you need my name?</svelte:fragment>
        <p>
            We don't need your name. We just want it. We want to know who you are. We want to know what you're doing. We want to know what you're thinking. We want to know
            everything about you. We want to know everything about everyone. We want to know everything about everything. We want to know everything. We want to know. We want.<br>
            <Italics>Just kidding. GitHub Copilot generated that paragraph. Wait, does it want MY name?</Italics>
        </p>
    </ParagraphSerif>

    <ParagraphSerif>
        <svelte:fragment slot="title">Why can't I generate any certificates?</svelte:fragment>
        <p>
            You need to have JavaScript enabled in your browser. This is because the certificates are generated on your device, not on a server. JavaScript is the technology
            that makes this possible. <a href="https://www.enable-javascript.com/" target="_blank">Learn how to enable JavaScript in your browser</a>
        </p>
        <p>
            If you still can't generate certificates, you might be running an outdated browser. Please consider updating your browser to the latest version. If you're using
            Internet Explorer, don't! Not even Microsoft supports it anymore. If you don't know what browser to use, we recommend <a
                href="https://www.mozilla.org/firefox/new/"
                target="_blank">Mozilla Firefox</a
            >, a modern, fast and privacy-friendly web browser.<br />
            Firefox is one of the few browsers that aren't Chromium-based and therefore heavily reliant on Google. If you use a browser like Chrome, Edge, Opera, you're basically
            using Google Chrome (with a different skin) and supporting Google's monopoly over the browser market. Sadly, Safari, like Internet Explorer, is not a better alternative,
            as Apple refuses to implement some new browser capabilities in their software, presumably to protect their App Store ecosystem.<br />
            <Italics>So, fight the monopoly, use Firefox!</Italics>
        </p>
    </ParagraphSerif>
</SiteColumn>
