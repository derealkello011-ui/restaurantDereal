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
        category: ['Action', 'Adventure'],
    },
    {
        id: 2,
        title: 'Maria Surfer',
        image: images[3], // mariaSurfer
        downloads: '5M',
        stars: 5,
        category: ['Adventure', 'Action']
    },
    {
        id: 3,
        title: 'Free Fire',
        image: images[2], // hacking
        downloads: '100M',
        stars: 6,
        category: ['Action', 'Dereal']
    },
    {
        id: 4,
        title: 'Tikka Episode',
        image: images[1], // jsCourse
        downloads: '20k',
        stars: 4,
        category: ['Education', 'Family']
    },
    {
        id: 5,
        title: 'Prospa Ubuntu',
        image: images[5], // android
        downloads: '1M',
        stars: 3,
        category: ['Puzzle', 'Family']
    },
    {
        id: 6,
        title: 'Tiktok Araba',
        image: images[4], // mariaSurfer2
        downloads: '20M',
        stars: 5,
        category: ['Dereal', 'Adventure', 'Family']
    },
    {
        id: 7,
        title: 'Nkyi Restaurant Management',
        image: images[6], // chrisBaeDemo
        downloads: '200k',
        stars: 6,
        category: ['Family', 'Education']
    },
    {
        id: 8,
        title: 'Bags Racer',
        image: images[0], // chrisBae (reused - no dedicated image yet)
        downloads: '40k',
        stars: 5,
        category: ['Racing', 'Adventure']
    }

]

export const games: FeatureDataProps[] = [
    {
        id: 1,
        title: 'Adidas',
        image: adidas,
        downloads: '10M',
        stars: 4,
        category: ['All']
    },
    {
        id: 2,
        title: 'Araba',
        image: araba,
        downloads: '500k',
        stars: 5,
        category: ['Dereal', 'Education']
    },
    {
        id: 3,
        title: 'Battle Games',
        image: battleGames,
        downloads: '50M',
        stars: 4,
        category: ['Action']
    },
    {
        id: 4,
        title: 'Bloodstrike',
        image: bloodstrike,
        downloads: '80M',
        stars: 4,
        category: ['Action']
    },
    {
        id: 5,
        title: 'Cartoon Network',
        image: cn,
        downloads: '20M',
        stars: 4,
        category: ['Family']
    },
    {
        id: 6,
        title: 'Dereal Code',
        image: derealCode,
        downloads: '10k',
        stars: 5,
        category: ['Dereal', 'Education']
    },
    {
        id: 7,
        title: 'Dereal Finite',
        image: derealFinite,
        downloads: '5k',
        stars: 4,
        category: ['Dereal']
    },
    {
        id: 8,
        title: 'Dereal Night',
        image: derealNight,
        downloads: '8k',
        stars: 5,
        category: ['Dereal']
    },
    {
        id: 9,
        title: 'Google Drive',
        image: drive,
        downloads: '1B',
        stars: 4,
        category: ['Education']
    },
    {
        id: 10,
        title: 'EA Sports',
        image: eaSports,
        downloads: '100M',
        stars: 4,
        category: ['Action', 'Racing']
    },
    {
        id: 11,
        title: 'Faith',
        image: faith,
        downloads: '2M',
        stars: 3,
        category: ['Family']
    },
    {
        id: 12,
        title: 'Fortnite',
        image: fortnite,
        downloads: '500M',
        stars: 5,
        category: ['Action', 'Adventure']
    },
    {
        id: 13,
        title: 'Free Fire',
        image: freeFire,
        downloads: '1B',
        stars: 4,
        category: ['Action']
    },
    {
        id: 14,
        title: 'God of War',
        image: godOfWar,
        downloads: '10M',
        stars: 5,
        category: ['Action', 'Adventure']
    },
    {
        id: 15,
        title: 'GTA V',
        image: gtaV,
        downloads: '100M',
        stars: 5,
        category: ['Action', 'Adventure']
    },
    {
        id: 16,
        title: 'GTA Vice City',
        image: gtaVC,
        downloads: '50M',
        stars: 5,
        category: ['Action', 'Adventure']
    },
    {
        id: 17,
        title: 'GTA VI',
        image: gtaVI,
        downloads: '20M',
        stars: 5,
        category: ['Action', 'Adventure']
    },
    {
        id: 18,
        title: 'League of Legends',
        image: leagueLegends,
        downloads: '150M',
        stars: 4,
        category: ['Action', 'Puzzle']
    },
    {
        id: 19,
        title: 'Minecraft',
        image: mineCraft,
        downloads: '300M',
        stars: 5,
        category: ['Puzzle', 'Family', 'Education']
    },
    {
        id: 20,
        title: 'Mortal Kombat',
        image: mk4,
        downloads: '50M',
        stars: 4,
        category: ['Action']
    },
    {
        id: 21,
        title: 'Modern Combat',
        image: modernCombat,
        downloads: '80M',
        stars: 4,
        category: ['Action']
    },
    {
        id: 22,
        title: 'Moodle',
        image: moodle,
        downloads: '5M',
        stars: 3,
        category: ['Education']
    },
    {
        id: 23,
        title: 'MS Word',
        image: msWord,
        downloads: '1B',
        stars: 4,
        category: ['Education']
    },
    {
        id: 24,
        title: 'PUBG',
        image: pubg,
        downloads: '600M',
        stars: 4,
        category: ['Action', 'Adventure']
    },
    {
        id: 25,
        title: 'Red Dead Redemption 2',
        image: redDead,
        downloads: '20M',
        stars: 5,
        category: ['Action', 'Adventure']
    },
    {
        id: 26,
        title: 'Rockstar Games Launcher',
        image: rockstar,
        downloads: '30M',
        stars: 4,
        category: ['Action']
    },
    {
        id: 27,
        title: 'Smoker',
        image: smoker,
        downloads: '1M',
        stars: 3,
        category: ['Puzzle', 'Education']
    }
]