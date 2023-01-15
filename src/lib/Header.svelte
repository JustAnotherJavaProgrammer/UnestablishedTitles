<script lang="ts">
    import headerBckg from "$lib/assets/img/lisa-fecker-msTSnSajSiY-unsplash.jpg";
</script>

<header style={`background-image: url("${headerBckg}");`}>
    <img src={headerBckg} alt="An Irish forest" />
    <div id="container">
        <slot name="navbar" />
        <section id="titles">
            <p><slot name="hero" /></p>
            <h1><slot name="title" /></h1>
            <p><slot name="subtitle" /></p>
        </section>
    </div>
</header>

<style>
    header {
        height: 100vh;
        width: 100%;
        color: white;
    }

    #container {
        position: relative;
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
        font-size: 4em;
        margin: 0;
    }

    p {
        margin: 1em;
        font-size: 1.75em;
        font-family: "Bebas Neue", sans-serif;
        letter-spacing: 0.075em;
        text-transform: uppercase;
    }

    img {
        position: absolute;
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: bottom;
    }
</style>
