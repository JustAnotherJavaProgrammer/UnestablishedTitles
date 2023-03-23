<script lang="ts">
    import TextInput from "$lib/elements/TextInput.svelte";
    import TitleSelect from "./TitleSelect.svelte";

    export let legend = "Title holder";

    export let title: string|null = null;
    export let name = "";
</script>

<fieldset>
    <legend>{legend}</legend>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>
        <span>Title</span>
        <TitleSelect bind:value={title}/>
    </label>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>
        <span>Name</span>
        <TextInput placeholder="Your Name" bind:value={name} />
    </label>
</fieldset>

<style lang="scss">
    @import "/src/styles.scss";

    fieldset {
        legend {
            @include fieldset-legend;
        }

        @include fieldset;

        label {
            display: contents;
        }
    }
</style>
