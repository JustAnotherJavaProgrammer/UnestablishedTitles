<script lang="ts">
    import headerBckg from "$lib/assets/img/lisa-fecker-msTSnSajSiY-unsplash.jpg";
    // @ts-ignore
    import headerBckg_srcset from "$lib/assets/img/lisa-fecker-msTSnSajSiY-unsplash.jpg?w=50;100;200;300;400;500;900;1200;2000;3962&withoutEnlargement&webp;avif;jpg;png&srcset";

    export let src = headerBckg;
    export let srcset = headerBckg_srcset;
</script>

<header style={`background-image: url("${headerBckg}");`}>
    <img {src} {srcset} alt="An Irish forest" class:nonstandard={src !== headerBckg}/>
    <div id="container">
        <slot name="navbar" />
        <section id="titles">
            <p><slot name="hero" /></p>
            <h1><slot name="title" /></h1>
            <p><slot name="subtitle" /></p>
        </section>
    </div>
</header>

<style lang="scss">
    @import "/src/styles.scss";

    header {
        min-height: min(100svh, 100vh);
        height: min(100svh, 100vh);
        width: 100%;
        color: white;
        @include font-heading-serif;
    }

    #container {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.1);
    }

    #titles {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    h1 {
        font-size: 4rem;
        margin: 0;
    }

    p {
        margin: 1rem;
        font-size: 1.75rem;
        @include font-display-sans;
        letter-spacing: 0.075rem;
        text-transform: uppercase;
    }

    img {
        position: absolute;
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: bottom;
    }

    img.nonstandard {
        object-position: center;
    }
</style>
