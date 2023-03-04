import IrishMenPack from "$lib/assets/img/pack_thumbnails/patrick-metzdorf-xyQnsGRmeNQ-unsplash.jpg";
// @ts-ignore
import IrishMenPack_srcset from "$lib/assets/img/pack_thumbnails/patrick-metzdorf-xyQnsGRmeNQ-unsplash.jpg?w=50;100;200;300;400;500;900;1200;2000&withoutEnlargement&webp;avif;jpg;png&srcset";
import IrishWomenPack from "$lib/assets/img/pack_thumbnails/aldo-de-la-paz-d6u2_u02FIo-unsplash.jpg";
// @ts-ignore
import IrishWomenPack_srcset from "$lib/assets/img/pack_thumbnails/aldo-de-la-paz-d6u2_u02FIo-unsplash.jpg?w=50;100;200;300;400;500;900;1200;2000&withoutEnlargement&webp;avif;jpg;png&srcset";
import IrishCouplePack from "$lib/assets/img/pack_thumbnails/ainars-djatlevskis-gJQLVTyQfgQ-unsplash.jpg";
// @ts-ignore
import IrishCouplePack_srcset from "$lib/assets/img/pack_thumbnails/ainars-djatlevskis-gJQLVTyQfgQ-unsplash.jpg?w=50;100;200;300;400;500;900;1200;2000&withoutEnlargement&webp;avif;jpg;png&srcset";
import EnglishNobilityManPack from "$lib/assets/img/pack_thumbnails/yaopey-yong-flmPTUCjkto-unsplash.jpg";
// @ts-ignore
import EnglishNobilityManPack_srcset from "$lib/assets/img/pack_thumbnails/yaopey-yong-flmPTUCjkto-unsplash.jpg?w=50;100;200;300;400;500;900;1200;2000&withoutEnlargement&webp;avif;jpg;png&srcset";
import EnglishNobilityWomanPack from "$lib/assets/img/pack_thumbnails/neil-cartwright---kJ_2yCBPw-unsplash.jpg";
// @ts-ignore
import EnglishNobilityWomanPack_srcset from "$lib/assets/img/pack_thumbnails/neil-cartwright---kJ_2yCBPw-unsplash.jpg?w=50;100;200;300;400;500;900;1200;2000&withoutEnlargement&webp;avif;jpg;png&srcset";
import EnglishNobilityCouplePack from "$lib/assets/img/pack_thumbnails/52064110244_977f657bbb_o.jpg";
// @ts-ignore
import EnglishNobilityCouplePack_srcset from "$lib/assets/img/pack_thumbnails/52064110244_977f657bbb_o.jpg?w=50;100;200;300;400;500;900;1200;2000&withoutEnlargement&webp;avif;jpg;png&srcset";
import MasterPack from "$lib/assets/img/pack_thumbnails/adam-kring-uqCMurxrzZc-unsplash.jpg";
// @ts-ignore
import MasterPack_srcset from "$lib/assets/img/pack_thumbnails/adam-kring-uqCMurxrzZc-unsplash.jpg?w=50;100;200;300;400;500;900;1200;2000&withoutEnlargement&webp;avif;jpg;png&srcset";
import MistressPack from "$lib/assets/img/pack_thumbnails/nick-fewings-xqlkl3AT7PU-unsplash.jpg";
// @ts-ignore
import MistressPack_srcset from "$lib/assets/img/pack_thumbnails/nick-fewings-xqlkl3AT7PU-unsplash.jpg?w=50;100;200;300;400;500;900;1200;2000&withoutEnlargement&webp;avif;jpg;png&srcset";
import MasterCouplePack from "$lib/assets/img/pack_thumbnails/bruno-martins-GkZvxVsHYWw-unsplash.jpg";
// @ts-ignore
import MasterCouplePack_srcset from "$lib/assets/img/pack_thumbnails/bruno-martins-GkZvxVsHYWw-unsplash.jpg?w=50;100;200;300;400;500;900;1200;2000&withoutEnlargement&webp;avif;jpg;png&srcset";

import CustomCouplePack from "$lib/assets/img/pack_thumbnails/jay-gomez-9Yi5rOiVCPU-unsplash.jpg";
// @ts-ignore
import CustomCouplePack_srcset from "$lib/assets/img/pack_thumbnails/jay-gomez-9Yi5rOiVCPU-unsplash.jpg?w=50;100;200;300;400;500;900;1200;2000&withoutEnlargement&webp;avif;jpg;png&srcset";

export type PackInfo = {
    name: string;
    previewImage: {
        src: string;
        srcset: string;
        alt: string;
    };
    tagline?: string;
    generatorHref: string;
};

const packInfo: ReadonlyArray<PackInfo> = [
    {
        name: "Lordship Pack",
        previewImage: {
            src: IrishMenPack,
            srcset: IrishMenPack_srcset,
            alt: "Giant's Causeway"
        },
        generatorHref: "/generator?title=lord"
    },
    {
        name: "Ladyship Pack",
        previewImage: {
            src: IrishWomenPack,
            srcset: IrishWomenPack_srcset,
            alt: "Castle On The Hill"
        },
        generatorHref: "/generator?title=lady"
    },
    {
        name: "Couple Title Pack (Lord/Lady)",
        previewImage: {
            src: IrishCouplePack,
            srcset: IrishCouplePack_srcset,
            alt: "Donegal, Ireland"
        },
        generatorHref: "/generator?title=irishcouple"
    },
    {
        name: "Sir Title Pack",
        previewImage: {
            src: EnglishNobilityManPack,
            srcset: EnglishNobilityManPack_srcset,
            alt: "Westminister Palace in the evening"
        },
        generatorHref: "/generator?title=sir"
    },
    {
        name: "Dame Title Pack",
        previewImage: {
            src: EnglishNobilityWomanPack,
            srcset: EnglishNobilityWomanPack_srcset,
            alt: "Buckingham Palace"
        },
        generatorHref: "/generator?title=dame"
    },
    {
        name: "Couple Title Pack (Sir/Dame)",
        previewImage: {
            src: EnglishNobilityCouplePack,
            srcset: EnglishNobilityCouplePack_srcset,
            alt: "The Queen's Speech 2022"
        },
        generatorHref: "/generator?title=englishcouple",
        tagline: "Photo: Copyright House of Lords 2022 / Photography by Annabel Moeller"
    },
    {
        name: "Master Pack",
        previewImage: {
            src: MasterPack,
            srcset: MasterPack_srcset,
            alt: "A plantation house in South Carolina"
        },
        generatorHref: "/generator?title=master"
    },
    {
        name: "Mistress Pack",
        previewImage: {
            src: MistressPack,
            srcset: MistressPack_srcset,
            alt: "Crichel House, Dorset, from across the lake, in the wonderful Dorset countryside."
        },
        generatorHref: "/generator?title=mistress"
    },
    {
        name: "Couple Title Pack (Master/Mistress)",
        previewImage: {
            src: MasterCouplePack,
            srcset: MasterCouplePack_srcset,
            alt: "Kynance Mews, London, UK"
        },
        generatorHref: "/generator?title=mmcouple"
    },
    {
        name: "Couple Title Pack (Custom)",
        previewImage: {
            src: CustomCouplePack,
            srcset: CustomCouplePack_srcset,
            alt: "Carsington Water, United Kingdom"
        },
        generatorHref: "/generator?title=couple",
        tagline: "Every couple is special, so why not combine the titles of your choice to express how you feel for each other?"
    }
];
export default packInfo;