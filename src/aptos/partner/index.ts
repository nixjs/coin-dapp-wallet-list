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
            'StealthEX is an instant cryptocurrency exchange for limitless swaps. Our service is free from registration and does not store user’s funds on the platform. StealthEX is the best place to buy cryptocurrency. 700+ coins and tokens are available for quick and easy exchanges. Data privacy and security is a top priority for StealthEX, so all the swaps are non-custodial, and forever will be.',
        img: 'https://raw.githubusercontent.com/nixjs/coin-dapp-wallet-list/main/src/aptos/partner/assets/StealthEX.png',
        category: 'Exchange',
    },
    {
        name: 'Exolix',
        url: 'https://exolix.com/',
        redirect: 'exolix',
        description: `Operating since 2018, Exolix (https://exolix.com/) offers instant and secure crypto exchange service with no KYC and registration, as the platform is committed to ensuring the highest level of security and reliability in its services. Exolix specializes in automatic round-the-clock processing of transactions and provides best rates on the market. Exolix supports more than 400 assets, providing a diverse range of options for exchange. The platform also leaves it up to you whether to exchange with fixed or floating rates – proceed with your own strategy for controlling over your assets. With Exolix service, you can exchange cryptocurrency in just a few minutes at the most favorable rates, without hidden commissions and additional fees.`,
        img: 'https://raw.githubusercontent.com/nixjs/coin-dapp-wallet-list/main/src/aptos/partner/assets/Exolix.png',
        category: 'Exchange',
    },
]
