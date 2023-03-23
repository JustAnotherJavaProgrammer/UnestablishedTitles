<script lang="ts">
export let placeholder: string = "Placeholder";
export let value: string = "";
</script>

<input type="text" {placeholder} size="30" bind:value>

<style lang="scss">
    @import "/src/styles.scss";

    input {
        @include font-text-serif;
        font-size: 1.25rem;
        box-sizing: border-box;
        padding: 0.625rem;
        border: 0.1rem solid;
        text-decoration: none;
        line-height: normal;

        &:focus {
            // border-color: $green;
            outline: 0.1rem solid $grey;
        }
    }
</style>