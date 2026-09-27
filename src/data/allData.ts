import {
    adidas, araba, battleGames, bloodstrike, cn,
    derealCode, derealFinite, derealNight, drive,
    eaSports, faith, fortnite, freeFire, godOfWar,
    gtaV, gtaVC, gtaVI,
    images,
    leagueLegends, mineCraft,
    mk4, modernCombat, moodle, msWord, pubg,
    redDead, rockstar, smoker,
} from "@/utils/assets";
import { ImageSourcePropType } from "react-native";

// images order from assets.ts:
// [0] chrisBae, [1] jsCourse, [2] hacking, [3] mariaSurfer,
// [4] mariaSurfer2, [5] android, [6] chrisBaeDemo

export const dummyData: string[] = [
    'All', 'Action', 'Family', 'Dereal',
    'Puzzle', 'Adventure', 'Racing',
    'Education'
] as const;

export type Category = typeof dummyData[ number ];

export interface FeatureDataProps {
    id: number,
    title: string,
    image: ImageSourcePropType,
    downloads: string,
    stars: number,
    category: Category[]
}

export const dummyFeatureData: FeatureDataProps[] = [
    {
        id: 1,
        title: 'Chris Bae',
        image: images[0], // chrisBae
        downloads: '200k',
        stars: 4,
        category: ['All', 'Action', 'Adventure'],
    },
    {
        id: 2,
        title: 'Maria Surfer',
        image: images[3], // mariaSurfer
        downloads: '5M',
        stars: 5,
        category: ['All', 'Adventure', 'Action']
    },
    {
        id: 3,
        title: 'Free Fire',
        image: images[2], // hacking
        downloads: '100M',
        stars: 6,
        category: ['All', 'Action', 'Dereal']
    },
    {
        id: 4,
        title: 'Tikka Episode',
        image: images[1], // jsCourse
        downloads: '20k',
        stars: 4,
        category: ['All', 'Education', 'Family']
    },
    {
        id: 5,
        title: 'Prospa Ubuntu',
        image: images[5], // android
        downloads: '1M',
        stars: 3,
        category: ['All', 'Puzzle', 'Family']
    },
    {
        id: 6,
        title: 'Tiktok Araba',
        image: images[4], // mariaSurfer2
        downloads: '20M',
        stars: 5,
        category: ['All', 'Dereal', 'Adventure', 'Family']
    },
    {
        id: 7,
        title: 'Nkyi Restaurant Management',
        image: images[6], // chrisBaeDemo
        downloads: '200k',
        stars: 6,
        category: ['All', 'Family', 'Education']
    },
    {
        id: 8,
        title: 'Bags Racer',
        image: images[0], // chrisBae (reused - no dedicated image yet)
        downloads: '40k',
        stars: 5,
        category: ['All', 'Racing', 'Adventure']
    }

]

export const games: FeatureDataProps[] = [
    {
        id: 1,
        title: 'Adidas War',
        image: adidas,
        downloads: '10M',
        stars: 4,
        category: ['All', 'Adventure']
    },
    {
        id: 2,
        title: 'Araba Constitutional Assistant',
        image: araba,
        downloads: '500k',
        stars: 5,
        category: ['All', 'Dereal', 'Education']
    },
    {
        id: 3,
        title: 'OG Battle Games',
        image: battleGames,
        downloads: '50M',
        stars: 4,
        category: ['All', 'Action']
    },
    {
        id: 4,
        title: 'Bloodstrike',
        image: bloodstrike,
        downloads: '80M',
        stars: 4,
        category: ['All', 'Action']
    },
    {
        id: 5,
        title: 'Cartoon Network',
        image: cn,
        downloads: '20M',
        stars: 4,
        category: ['All', 'Family']
    },
    {
        id: 6,
        title: 'Dereal Code',
        image: derealCode,
        downloads: '10k',
        stars: 5,
        category: ['All', 'Dereal', 'Education']
    },
    {
        id: 7,
        title: 'Dereal Finite',
        image: derealFinite,
        downloads: '5k',
        stars: 4,
        category: ['All', 'Dereal']
    },
    {
        id: 8,
        title: 'Dereal Night',
        image: derealNight,
        downloads: '8k',
        stars: 5,
        category: ['All', 'Dereal']
    },
    {
        id: 9,
        title: 'Google Drive',
        image: drive,
        downloads: '1B',
        stars: 4,
        category: ['All', 'Education']
    },
    {
        id: 10,
        title: 'EA Sports',
        image: eaSports,
        downloads: '100M',
        stars: 4,
        category: ['All', 'Action', 'Racing']
    },
    {
        id: 11,
        title: 'Faith Uzumaki',
        image: faith,
        downloads: '2M',
        stars: 3,
        category: ['All', 'Family']
    },
    {
        id: 12,
        title: 'Fortnite',
        image: fortnite,
        downloads: '500M',
        stars: 5,
        category: ['All', 'Action', 'Adventure']
    },
    {
        id: 13,
        title: 'Free Fire',
        image: freeFire,
        downloads: '1B',
        stars: 4,
        category: ['All', 'Action']
    },
    {
        id: 14,
        title: 'God of War',
        image: godOfWar,
        downloads: '10M',
        stars: 5,
        category: ['All', 'Action', 'Adventure']
    },
    {
        id: 15,
        title: 'GTA V',
        image: gtaV,
        downloads: '100M',
        stars: 5,
        category: ['All', 'Action', 'Adventure']
    },
    {
        id: 16,
        title: 'GTA Vice City',
        image: gtaVC,
        downloads: '50M',
        stars: 5,
        category: ['All', 'Action', 'Adventure']
    },
    {
        id: 17,
        title: 'GTA VI',
        image: gtaVI,
        downloads: '20M',
        stars: 5,
        category: ['All', 'Action', 'Adventure']
    },
    {
        id: 18,
        title: 'League of Legends',
        image: leagueLegends,
        downloads: '150M',
        stars: 4,
        category: ['All', 'Action', 'Puzzle']
    },
    {
        id: 19,
        title: 'Minecraft',
        image: mineCraft,
        downloads: '300M',
        stars: 5,
        category: ['All', 'Puzzle', 'Family', 'Education']
    },
    {
        id: 20,
        title: 'Mortal Kombat',
        image: mk4,
        downloads: '50M',
        stars: 4,
        category: ['All', 'Action']
    },
    {
        id: 21,
        title: 'Modern Combat',
        image: modernCombat,
        downloads: '80M',
        stars: 4,
        category: ['All', 'Action']
    },
    {
        id: 22,
        title: 'Moodle',
        image: moodle,
        downloads: '5M',
        stars: 3,
        category: ['All', 'Education']
    },
    {
        id: 23,
        title: 'MS Word',
        image: msWord,
        downloads: '1B',
        stars: 4,
        category: ['All', 'Education']
    },
    {
        id: 24,
        title: 'PUBG',
        image: pubg,
        downloads: '600M',
        stars: 4,
        category: ['All', 'Action', 'Adventure']
    },
    {
        id: 25,
        title: 'Red Dead Redemption 2',
        image: redDead,
        downloads: '20M',
        stars: 5,
        category: ['All', 'Action', 'Adventure']
    },
    {
        id: 26,
        title: 'Rockstar Games Launcher',
        image: rockstar,
        downloads: '30M',
        stars: 4,
        category: ['All', 'Action']
    },
    {
        id: 27,
        title: 'Smoker',
        image: smoker,
        downloads: '1M',
        stars: 3,
        category: ['All', 'Puzzle', 'Education']
    }
]