<script lang="ts">
    import packInfo from "$lib/packs";

export let value: string|null;

const options = packInfo.map((pack) => pack.title).filter((title) => title !== null) as string[];
</script>

<select bind:value>
    <option value={null}>Choose a title</option>
    {#each options as option}
         <option value={option}>{option}</option>
    {/each}
</select>

<style lang="scss">
    @import "/src/styles.scss";

    select {
        // appearance: none;

        @include font-text-serif;
        font-size: 1.25rem;
        box-sizing: border-box;
        padding: 0.625rem;
        border: 0.1rem solid;
        text-decoration: none;
        line-height: normal;

        align-self: stretch;
        background-color: $white;

        &:hover, &:focus {
            background-color: $off-white;
        }

        &:focus {
            // border-color: $green;
            outline: 0.1rem solid $grey;
        }
    }
</style>