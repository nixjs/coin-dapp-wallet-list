export interface Dapp {
    name: string
    url: string
    description: string
    trusted?: boolean
    img: string
    category: Category
}

export type Category = 'Gambling' | 'Game' | 'Exchange' | 'DeFi' | 'Finance' | 'Social' | 'Marketplace' | 'Utilities' | 'Others'
