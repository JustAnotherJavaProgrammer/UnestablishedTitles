<script lang="ts">
    export let type: "button" | "submit" | "reset" | "a" = "button";
    export let color: "red" | "green" | "blue" = "red";
    export let href = "/";
</script>

{#if type == "a"}
    <a class="button {color}" {href}>
        <slot />
    </a>
{:else if type == "submit"}
    <label class="button {color}"><input type="submit" /><slot /></label>
{:else if type == "reset"}
    <input type="reset" class="button {color}" />
{:else}
    <button class="button {color}" type="button" on:click>
        <slot />
    </button>
{/if}

<style lang="scss">
    @import "/src/styles.scss";

    input[type="submit"] {
        display: none;
    }

    label {
        display: inline-block;
        // cursor: pointer;
    }

    label, a, button, input {
        @include button;

        &.red {
            border-color: $red;
            background-color: $red;
            color: $white;
            &:hover {
                background-color: $white;
                color: $red;
            }
        }
        &.green {
            @include button-green;
        }
        &.blue {
            border-color: $blue;
            background-color: $blue;
            color: $white;
            &:hover {
                background-color: $white;
                color: $blue;
            }
        }
        
    }

    :global(a) {
        color: $blue;
    }
</style>