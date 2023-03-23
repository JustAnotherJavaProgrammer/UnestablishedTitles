<script lang="ts">
    export let packSize: 1|2 = 1;
</script>

<fieldset>
    <legend>Type of pack</legend>
    <label>
        <input type="radio" name="packSize" value={1} bind:group={packSize} />
        <span>Single Pack</span>
    </label>
    <label>
        <input type="radio" name="packSize" value={2} bind:group={packSize} />
        <span>Couple Pack</span>
    </label>
</fieldset>

<style lang="scss">
    @import "/src/styles.scss";
    fieldset {
        legend {
            @include fieldset-legend;
        }

        @include fieldset;
        flex-direction: row;
        justify-content: space-around;

        label {
        //     display: contents;
            font-size: 1.25rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.125rem;
            @include font-text-serif;
        }
    }
</style>
