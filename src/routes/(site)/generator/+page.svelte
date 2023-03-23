<script lang="ts">
    import { page } from "$app/stores";
    import MetaInfo from "$lib/elements/MetaInfo.svelte";
    import Spinner from "$lib/elements/Spinner.svelte";
    import { generatePdf } from "$lib/generator/generationHelper";
    import PackSizeChooser from "$lib/generator/PackSizeChooser.svelte";
    import TitleSelectionGroup from "$lib/generator/TitleSelectionGroup.svelte";
    import HeadingSerif from "$lib/layout/HeadingSerif.svelte";
    import packInfo from "$lib/packs";

    function triggerGeneration(): Promise<Uint8Array> {
        if (title1 == null || title1.trim().length < 1) throw new Error("Please select a title for the certificate.");
        if (name1 == null || name1.trim().length < 1) throw new Error("Please enter a name for the certificate.");
        if (packSize === 1) {
            return generatePdf(title1.trim(), name1.trim());
        }
        if (title2 == null || title2.trim().length < 1) throw new Error("Please select a title for the certificate.");
        if (name2 == null || name2.trim().length < 1) throw new Error("Please enter a name for the certificate.");
        return generatePdf([title1.trim(), title2.trim()], [name1.trim(), name2.trim()]);
    }

    async function onGenerate(e: MouseEvent) {
        errorMsg = null;
        // console.log("Generate");
        generationInProgress = true;
        let pdf: Uint8Array;
        try {
            errorMsg = null;
            const generationResult = triggerGeneration();
            try {
                pdf = await generationResult;
            } catch (e: Error | any) {
                errorMsg = "There was an error during generation. We are sorry for that.";
                console.error(e);
                generationInProgress = false;
                return;
            }
        } catch (e: Error | any) {
            errorMsg = e?.message ?? (e as string);
            console.error(e);
            generationInProgress = false;
            return;
        }
        // console.log("Done");
        generationInProgress = false;
        pdfResult = pdf;
    }

    function downloadPdf() {
        if (pdfResult == null) throw new Error("No PDF to download.");
        const link = document.createElement("a");
        link.href = URL.createObjectURL(new Blob([pdfResult], { type: "application/pdf" }));
        // Make the certificates really unique :-)
        link.download = `certificate-${Math.floor(Math.random() * 100000)}.pdf`;
        link.click();
        URL.revokeObjectURL(link.href);
    }

    let packSize: 1 | 2 = 1;

    let title1: string | null = null;
    let name1: string = "";
    let title2: string | null = null;
    let name2: string = "";
    // Apply URL parameters
    if ($page.url.searchParams.has("title")) {
        const pckParam = $page.url.searchParams.get("title");
        const prefillPack = packInfo.find((pack) => pack.formInfo.titleParam === pckParam);
        if (prefillPack != null) {
            packSize = prefillPack.formInfo.packSize;
            if (prefillPack.formInfo.title1 != null) title1 = prefillPack.formInfo.title1;
            if (prefillPack.formInfo.title2 != null) title2 = prefillPack.formInfo.title2;
        }
    }

    let errorMsg: string | null = null;
    let generationInProgress = false;
    let pdfResult: Uint8Array | null = null;
</script>

<MetaInfo title="Generator" description="Generate your certificate now. It's completely free!" />

<HeadingSerif>Generate your certificate</HeadingSerif>
<div class="outer">
    <noscript>
        <div class="noscript">
            Please enable JavaScript in your browser. For more information, please visit <a href="/faq">the FAQ</a>.
        </div>
    </noscript>
    <form>
        <PackSizeChooser bind:packSize />
        <TitleSelectionGroup legend={packSize === 1 ? "Options" : "Partner 1"} bind:title={title1} bind:name={name1} />
        <div class="partner-container" class:visible={packSize === 2}>
            <TitleSelectionGroup legend="Partner 2" bind:title={title2} bind:name={name2} />
        </div>
        <button type="button" on:click={onGenerate} disabled={generationInProgress}>Generate certificate</button>
        {#if errorMsg !== null}
            <div class="error-box">
                {errorMsg}
            </div>
        {/if}
    </form>
    {#if generationInProgress}
        <Spinner />
        <div class="message">Hold on, while our hand-crafted algorithm is generating your certificate...</div>
    {/if}
    {#if pdfResult !== null}
        <div class="message">
            Thank you for trusting Unestablished Titles!<br />
            You can download your certificate by clicking on the button below.
        </div>
        <button type="button" on:click={downloadPdf}>Download certificate</button>
    {/if}
</div>

<style lang="scss">
    @import "/src/styles.scss";
    .outer {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 0.5rem;
    }

    .noscript {
        padding: 1rem;
        margin: 1rem;
        display: inline-block;
        background-color: $red;
        color: $white;
        a {
            color: $white;
        }
    }

    .partner-container {
        display: none;
        &.visible {
            display: contents;
        }
    }

    button {
        @include button;
        @include button-green;
        font-size: 1.25rem;
    }

    button:disabled {
        background-color: $grey;
        cursor: wait;
        &:hover {
            color: $white;
        }
    }

    .error-box {
        border: 0.5rem solid $red;
        padding: 1rem;
        @include font-text-serif;
    }

    .message {
        @include font-text-serif;
        font-size: 1.25rem;
        text-align: center;
        align-self: center;
    }
</style>
