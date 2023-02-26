<script lang="ts">
    export let nogap: boolean = false;
</script>

<main class:nogap><slot /></main>

<style lang="scss">
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding: 1rem;
        gap: 5rem;

        &.nogap {
            gap: 0;
        }
    }
</style>
