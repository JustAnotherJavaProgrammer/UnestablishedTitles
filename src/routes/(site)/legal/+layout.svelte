<script lang="ts">
    import WideColumn from "$lib/layout/WideColumn.svelte";
</script>

<WideColumn>
    <div class="container">
        <slot />
    </div>
</WideColumn>

<style lang="scss">
    @import "/src/styles.scss";
    
    // div.container {
    //     margin-top: 1rem;
    // }
</style>
