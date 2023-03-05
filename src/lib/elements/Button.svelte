<script lang="ts">
    export let type: "button" | "submit" | "reset" | "a" = "button";
    export let color: "red" | "green" | "blue" = "red";
    export let href = "/";
    export let id: string = "";
</script>

{#if type == "a"}
    <a class="button {color}" {href}>
        <slot />
    </a>
{:else if type == "submit"}
    <input type="submit" {id} /><label for={id} class="button {color}"><slot /></label>
{:else if type == "reset"}
    <input type="reset" class="button {color}" />
{:else}
    <button class="button {color}" type="button">
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
        cursor: pointer;
    }

    label, a, button, input {
        @include font-text-serif;
        box-sizing: border-box;
        padding: 0.625rem;
        border: 0.2rem solid;
        text-decoration: none;
        transition: background-color 0.1s, color 0.1s;
        line-height: normal;

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
            border-color: $green;
            background-color: $green;
            color: $white;
            &:hover {
                background-color: $white;
                color: $green;
            }
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