<script lang="ts">
    // import { onMount } from "svelte";
    import HeadingSerif from "./HeadingSerif.svelte";
    let content: HTMLParagraphElement;
</script>

<section>
    <HeadingSerif><slot name="title">This is the title of your paragraph</slot></HeadingSerif>
    <div bind:this={content}>
        <slot>
            <p>
                This is the content of your paragraph.<br />
                Serif text goes here.
            </p>
        </slot>
    </div>
</section>

<style lang="scss">
    @import "/src/styles.scss";

    section {
        @include font-text-serif;
        padding: 0;
        margin: 0;
        max-width: clamp(370px, 66.66vw, 680px);
        text-align: center;
    }

    div {
        line-height: 1.75rem;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.7rem;
    }
</style>
