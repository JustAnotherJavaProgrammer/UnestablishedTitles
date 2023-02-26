<script>
    import WideColumn from "../layout/WideColumn.svelte";
    import FooterSection from "./FooterSection.svelte";
</script>

<footer>
    <div class="content-column">
        <FooterSection
            links={[
                { text: "Imprint", href: "/legal/imprint" },
                { text: "Privacy Policy", href: "/legal/privacypolicy" },
                { text: "Impressum", href: "/legal/impressum" },
                { text: "Datenschutzerklärung", href: "/legal/datenschutzerklaerung" },
            ]}><svelte:fragment slot="title">Legal</svelte:fragment></FooterSection
        >
    </div>
</footer>

<style lang="scss">
    @import "/src/styles.scss";

    footer {
        @include font-text-serif;
        background-color: $green;
        color: $white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: start;
    }

    .content-column {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        max-width: $max-content-width;
        width: 100%;
        padding: 1rem;
        box-sizing: border-box;

        @media screen and (min-width: $breakpoint-md) {
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
            gap: 1rem;
        }
    }
</style>
