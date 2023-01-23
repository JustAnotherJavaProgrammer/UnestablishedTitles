<script lang="ts">
    import { building } from "$app/environment";
    const currentYear = new Date().getFullYear();

    export let src: string;
    export let srcset: string|undefined = undefined;
    export let alt: string;
</script>

<section>
    <!-- TODO: make this a link -->
    <h2><slot name="name">Title Pack</slot></h2>
    <div>
        <slot name="tagline">Most Useless Gift {!building ? `of ${currentYear}` : "ever"} <span>🤣</span></slot>
    </div>
    <img src={src} srcset={srcset} alt={alt}>
</section>

<style lang="scss">
    @import "/src/styles.scss";

    section {
        flex: 1;
        padding: 2em;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        font-style: italic;
        color: white;
        @include font-text-serif;

        & > * {
            z-index: 2;
        }
    }

    h2 {
        margin: 0;
        padding: 0;
        font-size: 2.5rem;
        font-weight: 400;
    }

    div {
        margin: 0;
        padding: 0;
        font-size: 1rem;
    }

    span {
        font-style: normal;
    }

    img {
        position: absolute;
        height: 100%;
        width: 100%;
        object-fit: cover;
        z-index: 1;
        // top: 0;
        // left: 0;
        // right: 0;
        // bottom: 0;
        // object-fit: cover;
        object-position: center;
        // overflow: hidden;
        // position: absolute;
    }
</style>
