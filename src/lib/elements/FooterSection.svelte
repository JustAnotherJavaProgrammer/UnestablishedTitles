<script context="module" lang="ts">
    export type LinkProps = {
        text: string;
        href: string;
    };
</script>

<script lang="ts">
    export let links: LinkProps[] = [];
</script>

<section>
    {#if $$slots.title}
        <h1><slot name="title" /></h1>
    {/if}
    <slot name="before" />
    {#each links as item}
        <a href={item.href}>{item.text}</a>
    {/each}
    <slot name="after" />
</section>

<style lang="scss">
    @import "/src/styles.scss";

    section {
        // flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 0.25rem;
        & > * {
            display: block;
        }
    }

    h1 {
        font-size: 1.5rem;
        font-weight: 600;
        margin: 0;
        padding: 0;
        // padding-block-end: 0.25rem;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
</style>
