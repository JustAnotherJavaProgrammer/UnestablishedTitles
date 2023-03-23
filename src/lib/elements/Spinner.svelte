<div class="spinner" />

<style lang="scss">
    @import "/src/styles.scss";

    $color-a: $blue;
    $color-b: $green;
    $color-c: $blue;
    $color-d: $green;
    $color-special: $red;

    .spinner {
        align-self: center;
        border: 1.5rem solid $color-a;
        border-top-color: $color-b;
        border-right-color: $color-c;
        border-bottom-color: $color-d;
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
        border-style: solid;
        animation: spin 10s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
    }

    .spinner::before {
        content: "";
        position: absolute;
        border: 2rem solid $color-a;
        border-top-color: $color-b;
        border-right-color: $color-c;
        border-bottom-color: $color-d;
        top: 15%;
        left: 15%;
        right: 15%;
        bottom: 15%;
        border-radius: 50%;
        border-style: solid;
        animation: spin 5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite reverse;
    }

    .spinner::after {
        content: "";
        background-color: $color-special;
        position: absolute;
        border-radius: 50%;
        width: 1.5rem;
        height: 1.5rem;
        left: 4.25rem;
        top: 4.25rem;
        /* transform: translate(0, 4.25rem); */
        animation: translated-spin 15s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite reverse;
    }

    @keyframes translated-spin {
        from {
            transform: rotate(0deg) translate(0, 4.25rem);
        }

        to {
            transform: rotate(360deg) translate(0, 4.25rem);
        }
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }
</style>
