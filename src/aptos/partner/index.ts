import { Dapp } from '../../types'

export const Partner: (Dapp & { redirect: string })[] = [
    {
        name: 'SimpleSwap',
        url: 'https://simpleswap.io/',
        redirect: 'simpleswap',
        description:
            'SimpleSwap is a user-friendly and reliable service for cryptocurrency exchanges. Our platform is free from sign-up and supports more than 500 crypto and fiat currencies.',
        img: 'https://raw.githubusercontent.com/nixjs/coin-dapp-wallet-list/main/src/aptos/partner/assets/SimpleSwap.svg',
        category: 'Exchange',
    },
    {
        name: 'StealthEX',
        url: 'https://stealthex.io/',
        redirect: 'stealthex',
        description:
            'StealthEX is an instant cryptocurrency exchange for limitless swaps. Their service is free from registration and does not store user’s funds on the platform. StealthEX is the best place to buy cryptocurrency.',
        img: 'https://raw.githubusercontent.com/nixjs/coin-dapp-wallet-list/main/src/aptos/partner/assets/StealthEX.png',
        category: 'Exchange',
    },
]
