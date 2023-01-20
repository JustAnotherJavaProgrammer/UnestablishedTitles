<script lang="ts">
    import { onMount } from "svelte";
    let content: HTMLParagraphElement;

    onMount(() => {
        for (const lineBreak of [...content.getElementsByTagName("br")]) {
            lineBreak.after(document.createElement("br"));
        }
    });
</script>

<section>
    <h1><slot name="title">This is the title of your paragraph</slot></h1>
    <p bind:this={content}>
        <slot>Serif text can be placed here. This is a very unique opportunity to create your own content.</slot>
    </p>
</section>

<style lang="scss">
    @import "/src/styles.scss";

    section {
        @include font-text-serif;
        padding: 0;
        margin: 1em;
        max-width: 680px;
        text-align: center;
    }

    p {
        line-height: 1.75em;
    }

    h1 {
        @include font-heading-serif;
        font-size: 2em;
    }
</style>
