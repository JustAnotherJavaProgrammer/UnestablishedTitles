<script lang="ts">
    import { building } from "$app/environment";
    const currentYear = new Date().getFullYear();

    export let href: string = "#";
    export let src: string;
    export let srcset: string | undefined = undefined;
    export let alt: string;
</script>

<a class="wrapper" href={href}>
    <section>
        <h2><slot name="name">Title Pack</slot></h2>
        <div class="description">
            <slot name="tagline">Most Useless Gift {!building ? `of ${currentYear}` : "ever"} <span>🤣</span></slot>
        </div>
    </section>
    <div class="img-container">
        <img {src} {srcset} {alt} loading="lazy"/>
    </div>
</a>

<style lang="scss">
    @import "/src/styles.scss";

    .wrapper {
        text-decoration: none;
        position: relative;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
        width: 100%;
        & * {
            pointer-events: none;
        }

        & img {
            transition: transform 0.75s ease-in-out;
            transform: scale(1);
        }

        &:hover {
            & > section {
                background-color: rgba(0, 0, 0, 0.2);
            }

            & img {
                transform: scale(1.1);
            }
        }
    }

    section {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        font-style: italic;
        color: white;
        overflow: hidden;
        max-height: fit-content;
        @include font-text-serif;
        background-color: rgba(0, 0, 0, 0.1);
        z-index: 2;
        transition: background-color 0.5s ease-in-out;
        box-sizing: border-box;
        min-width: 100%;
        min-height: 100%;

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

    div.description {
        margin: 0;
        padding: 0;
        font-size: 1rem;
    }

    span {
        font-style: normal;
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
</style>
