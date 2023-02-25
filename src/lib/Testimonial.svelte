<script lang="ts">
    import {onMount} from "svelte";
    export let src: string|null = null;
    export let srcset: string|null = null;
    export let alt: string|null = null;
    export let imgBottom: boolean = false;

    let textWrapperCopy: HTMLSpanElement|null = null;
    let slotWrapper: HTMLSpanElement|null = null;

    onMount(() => {
        if(textWrapperCopy == null || slotWrapper == null)
            return;
        textWrapperCopy.innerHTML = slotWrapper.innerHTML;
    });
</script>

<div class="root-element">
    {#if src != null}
    <div class="p-clone">
        <div class="img-container">
            <img {src} {srcset} {alt} class:img-bottom={imgBottom}/>
        </div>
        <span class="text-wrapper twc" hidden aria-hidden="true" bind:this={textWrapperCopy}></span>
    </div>
    {/if}
    <p>
        <span class="text-wrapper" bind:this={slotWrapper}>
        <slot>This is a testimonial.</slot>
        </span>
    </p>
</div>

<style lang="scss">
    @import "/src/styles.scss";

    div.root-element {
        @include font-text-sans;
        background-color: $off-white;
        font-size: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: stretch;
        border-radius: 0.75rem;
        overflow: hidden;

        @media screen and (min-width: $breakpoint-md) {
            flex-direction: row;
        }
    }

    .img-container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
    }

    img {
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
    }

    img.img-bottom {
        object-position: center 80%;
    }

    p, .p-clone {
        flex: 1;
        padding: 2.75rem 2.5rem;
        text-align: center;
        margin-block: 0;
    }

    .p-clone {
        position: relative;
    }

    .text-wrapper {
        display: inline-block;
        max-width: 525px;
    }

    .twc {
        visibility: hidden;
    }
</style>