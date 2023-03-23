<script lang="ts">
    export let noExtraSpace: boolean = false;
</script>

<h1 class:noExtraSpace ><slot /></h1>

<style lang="scss">
    @import "/src/styles.scss";
    h1 {
        @include font-heading-serif;
        font-size: 2rem;
        max-width: clamp(370px, 66.66vw, 680px)
    }

    :global(h1) {
        font-weight: 700;
    }

    h1.noExtraSpace {
        padding: 0;
        margin: 0;
    }
</style>