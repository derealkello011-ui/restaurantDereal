
export const dummyData: string[] = [
    'Action', 'Family', 'Dereal',
    'Puzzle', 'Adventure', 'Racing',
    'Education'
] as const;

export type Category = typeof dummyData[ number ];

export interface FeatureData {
    id: number,
    title: string,
    image: string,
    downloads: string,
    stars: number,
    category: Category[]
}

export const dummyFeatureData: FeatureData[] = [
    {
        id: 1,
        title: 'Chris Bae',
        image: '',
        downloads: '200k',
        stars: 4,
        category: ['Action', 'Adventure'],
    },
    {
        id: 2,
        title: 'Maria Surfer',
        image: '',
        downloads: '5M',
        stars: 8,
        category: ['Adventure', 'Action']
    },
    {
        id: 3,
        title: 'Free Fire',
        image: '',
        downloads: '100M',
        stars: 6,
        category: ['Action', 'Dereal']
    },
    {
        id: 4,
        title: 'Tikka Episode',
        image: '',
        downloads: '20k',
        stars: 4,
        category: ['Education', 'Family']
    },
    {
        id: 5,
        title: 'Prospa Ubuntu',
        image: '',
        downloads: '1M',
        stars: 8,
        category: ['Puzzle', 'Family']
    },
    {
        id: 6,
        title: 'Tiktok Araba',
        image: '',
        downloads: '20M',
        stars: 9,
        category: ['Dereal', 'Adventure', 'Family']
    },
    {
        id: 7,
        title: 'Nkyi Restaurant Management',
        image: '',
        downloads: '200k',
        stars: 6,
        category: ['Family', 'Education']
    },
    {
        id: 8,
        title: 'Bags Racer',
        image: '',
        downloads: '40k',
        stars: 5,
        category: ['Racing', 'Adventure']
    }

]