<script>
    import HotizontalDivider from "$lib/elements/HotizontalDivider.svelte";
    import MetaInfo from "$lib/elements/MetaInfo.svelte";
    import HeadingSerif from "$lib/layout/HeadingSerif.svelte";
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
        <p>This page is built with <a href="https://svelte.dev">Svelte</a> and <a href="https://kit.svelte.dev">SvelteKit</a>. You can find a list of all contributors on
        <a href="https://github.com/sveltejs/svelte/graphs/contributors">GitHub (Svelte)</a>
        <a href="https://github.com/sveltejs/kit/graphs/contributors">(SvelteKit)</a>.</p>
        <p>I also used <a href="https://mdsvex.pngwn.io/">mdsvex</a>, <a href="https://www.npmjs.com/package/vite-imagetools">vite-imagetools</a>,
        <a href="https://sass-lang.com/">Sass</a> and <a href="https://postcss.org/">PostCSS</a>.</p>
    </ParagraphSerif>

    <ParagraphSerif>
        <svelte:fragment slot="title">The Font Designers</svelte:fragment>
        <p>This site uses some beautiful fonts from <a href="https://fonts.google.com/">Google Fonts</a> via <a href="https://fontsource.org/">Fontsource</a>.<br />
        That's why I'd also like to thank the designers behind these fonts:</p>
        <ul>
            <li>
                <a href="https://fonts.google.com/specimen/Old+Standard+TT">Old Standard TT</a> by Alexey Kryukov
            </li>
            <li>
                <a href="https://fonts.google.com/specimen/Crimson+Text">Crimson Text</a> by Sebastian Kosch
            </li>
            <li>
                <a href="https://fonts.google.com/specimen/Bebas+Neue">Bebas Neue</a> by Ryoichi Tsunekawa
            </li>
            <li>
                <a href="https://fonts.google.com/specimen/Roboto">Roboto</a> by Christian Robertson
            </li>
            <li>
                <a href="https://fonts.google.com/specimen/UnifrakturCook">UnifrakturCook</a> by j. 'mach' wust
            </li>
        </ul>
    </ParagraphSerif>

    <ParagraphSerif>
        <svelte:fragment slot="title">The Photographers</svelte:fragment>
        <p>This site wouldn't be what it is without all the beautiful pictures from <a href="https://unsplash.com/">Unsplash</a>.</p>
        <p>I'd like to thank the photographers behind these pictures:</p>
        <ul>
            <li>
                <a href="https://unsplash.com/photos/msTSnSajSiY">Lisa Fecker</a>
            </li>
            <li>
                <a href="https://unsplash.com/photos/mQTTDA_kY_8">Jp Valery</a>
            </li>
            <li>
                <a href="https://unsplash.com/photos/uqCMurxrzZc">Adam Kring</a>
            </li>
            <li>
                <a href="https://unsplash.com/photos/gJQLVTyQfgQ">Ainars Djatlevskis</a>
            </li>
            <li>
                <a href="https://unsplash.com/photos/d6u2_u02FIo">Aldo De La Paz</a>
            </li>
            <li>
                <a href="https://unsplash.com/photos/GkZvxVsHYWw">Bruno Martins</a>
            </li>
            <li>
                <a href="https://unsplash.com/photos/9Yi5rOiVCPU">Jay Gomez</a>
            </li>
            <li>
                <a href="https://unsplash.com/photos/--kJ_2yCBPw">Neil Cartwright</a>
            </li>
            <li>
                <a href="https://unsplash.com/photos/xqlkl3AT7PU">Nick Fewings</a>
            </li>
            <li>
                <a href="https://unsplash.com/photos/xyQnsGRmeNQ">Patrick Metzdorf</a>
            </li>
            <li>
                <a href="https://unsplash.com/photos/flmPTUCjkto">Yaopey Yong</a>
            </li>
            <li>
                <a href="https://unsplash.com/photos/gMJ3tFOLvnA">Nicole Geri</a>
            </li>
        </ul>
        <br />
        <p>I also used some media from <a href="https://commons.wikimedia.org/">Wikimedia Commons</a>:</p>
        <ul>
            <li>
                Greek Roman Laurel wreath with branches vector.svg by <a href="https://commons.wikimedia.org/wiki/User:Dchmelik">Dchmelik</a> - Own work,
                <a href="http://creativecommons.org/publicdomain/zero/1.0/deed.en" title="Creative Commons Zero, Public Domain Dedication">CC0</a>,
                <a href="https://commons.wikimedia.org/w/index.php?curid=68009697">Link</a>
            </li>
        </ul>
        <p>And a photo from the Queens speech in 2022: <a href="https://flic.kr/p/2njJb6b">Copyright House of Lords 2022 / Photography by Annabel Moeller</a></p>
    </ParagraphSerif>
    <ParagraphSerif>
        <svelte:fragment slot="title">Coolors</svelte:fragment>
        <p>I have protanomaly, a form of color blindness. That's why I used <a href="https://coolors.co/">Coolors</a> by <a href="https://fabrizio.io/">Fabrizio Bianchi</a>
        to find a color palette that is also aesthetically pleasing to people with regular color vision.</p>
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
