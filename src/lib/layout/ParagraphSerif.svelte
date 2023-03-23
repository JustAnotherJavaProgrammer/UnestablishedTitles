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
                Unestablished Titles is a free service, and it probably always will be. But I used the free software and media created by others before me. This project wouldn't
                have been possible without them. So, you might want to <a href="/legal/credits">check out the credits</a>, and thank them for their effort.
            </p>
            <p>
                You might also wish to actually contribute to protecting the Irish woodlands. According to a quick Google search and their Wikipedia article, you can do so by
                donating to the <a href="https://www.nativewoodlandtrust.ie/" target="_blank">Native Woodland Trust</a>.
            </p>
            <p>
                If you want to support me financially, you can do so by making a one-time donation via Ko-fi. But that's really not necessary. As a student, I don't have any
                running costs for operating this website, and I would just use the money for myself. You'll get nothing in return. Not even get that fuzzy feeling in your
                stomach, when you know that you've done something good like helping a person in need or donating to charity. Still, if you wish to spend your money that way, I'm
                not here to stop you. <a href="https://ko-fi.com/justanotherjavaprogrammer" target="_blank">Tip via Ko-fi.</a>
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
