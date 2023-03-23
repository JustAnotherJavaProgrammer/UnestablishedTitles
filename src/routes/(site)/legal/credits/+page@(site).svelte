<script>
    import HotizontalDivider from "$lib/elements/HotizontalDivider.svelte";
    import MetaInfo from "$lib/elements/MetaInfo.svelte";
    import HeadingSerif from "$lib/layout/HeadingSerif.svelte";
    import Italics from "$lib/layout/Italics.svelte";
    import ParagraphSerif from "$lib/layout/ParagraphSerif.svelte";
    import SiteColumn from "$lib/layout/SiteColumn.svelte";
</script>

<MetaInfo title="Credits" description="A thank you to the people making this site possible." />

<HeadingSerif>Credits</HeadingSerif>
<ParagraphSerif>
    <svelte:fragment slot="title">Thank you!</svelte:fragment>
    <p>This project wouldn't have been possible without the people making their work available on the Internet for free. On this page, I'd like to thank some of you.</p>
</ParagraphSerif>
<HotizontalDivider />
<SiteColumn>
    <ParagraphSerif>
        <svelte:fragment slot="title">Svelte and SvelteKit Contributors</svelte:fragment>
        <p>
            This page is built with <a href="https://svelte.dev" target="_blank">Svelte</a> and <a href="https://kit.svelte.dev" target="_blank">SvelteKit</a>. You can find a
            list of all contributors on
            <a href="https://github.com/sveltejs/svelte/graphs/contributors" target="_blank">GitHub (Svelte)</a>
            <a href="https://github.com/sveltejs/kit/graphs/contributors" target="_blank">(SvelteKit)</a>.
        </p>
        <p>
            I also used <a href="https://mdsvex.pngwn.io/" target="_blank">mdsvex</a>,
            <a href="https://www.npmjs.com/package/vite-imagetools" target="_blank">vite-imagetools</a>,
            <a href="https://sass-lang.com/" target="_blank">Sass</a> and <a href="https://postcss.org/" target="_blank">PostCSS</a>.
        </p>
    </ParagraphSerif>

    <ParagraphSerif>
        <svelte:fragment slot="title">The Font Designers</svelte:fragment>
        <p>
            This site uses some beautiful fonts from <a href="https://fonts.google.com/" target="_blank">Google Fonts</a> via
            <a href="https://fontsource.org/" target="_blank">Fontsource</a>.<br />
            That's why I'd also like to thank the designers behind these fonts:
        </p>
        <ul>
            <li>
                <a href="https://fonts.google.com/specimen/Old+Standard+TT" target="_blank">Old Standard TT</a> by Alexey Kryukov
            </li>
            <li>
                <a href="https://fonts.google.com/specimen/Crimson+Text" target="_blank">Crimson Text</a> by Sebastian Kosch
            </li>
            <li>
                <a href="https://fonts.google.com/specimen/Bebas+Neue" target="_blank">Bebas Neue</a> by Ryoichi Tsunekawa
            </li>
            <li>
                <a href="https://fonts.google.com/specimen/Roboto" target="_blank">Roboto</a> by Christian Robertson
            </li>
            <li>
                <a href="https://fonts.google.com/specimen/UnifrakturCook" target="_blank">UnifrakturCook</a> by j. 'mach' wust
            </li>
        </ul>
    </ParagraphSerif>

    <ParagraphSerif>
        <svelte:fragment slot="title">PDF-LIB Contributors</svelte:fragment>
        <p>
            PDFs on this site are generated with <a href="https://pdf-lib.js.org/" target="_blank">pdf-lib</a>.<br />
            Since that's the main feature of this site, I'd like to thank the people behind this project. It would have been a lot harder without you.<br />
            You can find a list of all contributors on <a href="https://github.com/Hopding/pdf-lib/graphs/contributors" target="_blank">GitHub</a>.
        </p>
    </ParagraphSerif>

    <ParagraphSerif>
        <svelte:fragment slot="title">The Photographers</svelte:fragment>
        <p>This site wouldn't be what it is without all the beautiful pictures from <a href="https://unsplash.com/" target="_blank">Unsplash</a>.</p>
        <p>I'd like to thank the photographers behind these pictures:</p>
        <ul>
            <li>
                <a href="https://unsplash.com/photos/msTSnSajSiY" target="_blank">Lisa Fecker</a>
            </li>
            <li>
                <a href="https://unsplash.com/photos/mQTTDA_kY_8" target="_blank">Jp Valery</a>
            </li>
            <li>
                <a href="https://unsplash.com/photos/uqCMurxrzZc" target="_blank">Adam Kring</a>
            </li>
            <li>
                <a href="https://unsplash.com/photos/gJQLVTyQfgQ" target="_blank">Ainars Djatlevskis</a>
            </li>
            <li>
                <a href="https://unsplash.com/photos/d6u2_u02FIo" target="_blank">Aldo De La Paz</a>
            </li>
            <li>
                <a href="https://unsplash.com/photos/GkZvxVsHYWw" target="_blank">Bruno Martins</a>
            </li>
            <li>
                <a href="https://unsplash.com/photos/9Yi5rOiVCPU" target="_blank">Jay Gomez</a>
            </li>
            <li>
                <a href="https://unsplash.com/photos/--kJ_2yCBPw" target="_blank">Neil Cartwright</a>
            </li>
            <li>
                <a href="https://unsplash.com/photos/xqlkl3AT7PU" target="_blank">Nick Fewings</a>
            </li>
            <li>
                <a href="https://unsplash.com/photos/xyQnsGRmeNQ" target="_blank">Patrick Metzdorf</a>
            </li>
            <li>
                <a href="https://unsplash.com/photos/flmPTUCjkto" target="_blank">Yaopey Yong</a>
            </li>
            <li>
                <a href="https://unsplash.com/photos/gMJ3tFOLvnA" target="_blank">Nicole Geri</a>
            </li>
            <li>
                <a href="https://unsplash.com/photos/3gifzboyZk0" target="_blank">Kiwihug</a>
            </li>
        </ul>
        <br />
        <p>I also used some media from <a href="https://commons.wikimedia.org/" target="_blank">Wikimedia Commons</a>:</p>
        <ul>
            <li>
                Greek Roman Laurel wreath with branches vector.svg by <a href="https://commons.wikimedia.org/wiki/User:Dchmelik" target="_blank">Dchmelik</a> - Own work,
                <a href="http://creativecommons.org/publicdomain/zero/1.0/deed.en" title="Creative Commons Zero, Public Domain Dedication" target="_blank">CC0</a>,
                <a href="https://commons.wikimedia.org/w/index.php?curid=68009697" target="_blank">Link</a>
            </li>
            <li>
                Coat of arms of Germany.svg by <a href="https://www.wikidata.org/wiki/Q1730157" target="_blank">Karl-Tobias Schwab</a> - Own work based on: Bekanntmachung über
                die farbige Darstellung des Bundeswappens. Vom 4. Juli 1952. In: Bundesanzeiger Nr. 169 vom 02. September 1952., Public Domain,
                <a href="https://commons.wikimedia.org/w/index.php?curid=640691" target="_blank">Link</a><br />
                (The silhouette in the coat of arms on the certificate is based on that)
            </li>
            <li>
                Four-leaf clover.svg by <a href="https://openclipart.org/artist/Firkin" target="_blank">Firkin - Openclipart</a>,
                <a href="http://creativecommons.org/publicdomain/zero/1.0/deed.en" title="Creative Commons Zero, Public Domain Dedication" target="_blank">CC0</a>,
                <a href="https://commons.wikimedia.org/w/index.php?curid=88923308" target="_blank">Link</a>
            </li>
            <li>
                Invisible Pink Unicorn.png by <a href="https://en.wikipedia.org/wiki/User:Bingo_pajama_bee" target="_blank">Bingo pajama bee</a> - Own work, Public Domain,
                <a href="https://commons.wikimedia.org/w/index.php?curid=71103" target="_blank">Link</a>
            </li>
        </ul>
        <p>And a photo from the Queens speech in 2022: <a href="https://flic.kr/p/2njJb6b" target="_blank">Copyright House of Lords 2022 / Photography by Annabel Moeller</a></p>
    </ParagraphSerif>
    <ParagraphSerif>
        <svelte:fragment slot="title">Coolors</svelte:fragment>
        <p>
            I have protanomaly, a form of color blindness. That's why I used <a href="https://coolors.co/" target="_blank">Coolors</a> by
            <a href="https://fabrizio.io/" target="_blank">Fabrizio Bianchi</a>
            to find a color palette that is also aesthetically pleasing to people with regular color vision.
        </p>
    </ParagraphSerif>
</SiteColumn>

<style lang="scss">
    @import "/src/styles.scss";
    a {
        color: $green;
    }

    ul {
        text-align: left;
    }
</style>
