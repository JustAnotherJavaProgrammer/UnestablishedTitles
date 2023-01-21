<script lang="ts">
    import { building } from "$app/environment";
    export let href: string;

    const currentYear = new Date().getFullYear();
</script>

<a href={href}>
    ${!building ? currentYear : "Everyday"} Sale. Up to <slot>&infin;%</slot> OFF + FREE grift!
    <i>Claim your offer!</i>
    (Most Useless Gift {!building ? `of ${currentYear}` : "ever"} 🤣)
</a>

<style lang="scss">
    @use "sass:color";
    @import "/src/styles.scss";
    a {
        display: block;
        background-color: $red;
        color: white;
        position: sticky;
        top: 0;
        z-index: 100;
        font-weight: bold;
        padding: 0.5em;
        text-align: center;
        text-decoration: none;
    }

    a:hover {
        color: rgba(white, 0.9)
    }

    i {
        font-style: normal;
        text-decoration: underline;
    }
</style>