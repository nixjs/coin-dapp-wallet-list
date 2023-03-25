import { Dapp } from "../../types";

export const Partner: (Dapp & { redirect: string })[] = [
  {
    name: "SimpleSwap",
    url: "https://simpleswap.io/",
    redirect: "simpleswap",
    description:
      "SimpleSwap is a user-friendly and reliable service for cryptocurrency exchanges. Our platform is free from sign-up and supports more than 500 crypto and fiat currencies.",
    img: "https://raw.githubusercontent.com/nixjs/coin-dapp-wallet-list/main/src/aptos/partner/assets/SimpleSwap.svg",
    category: "Exchange",
  },
  {
    name: "StealthEX",
    url: "https://stealthex.io/",
    redirect: "stealthex",
    description:
      "StealthEX is an instant cryptocurrency exchange for limitless swaps. Our service is free from registration and does not store user’s funds on the platform. StealthEX is the best place to buy cryptocurrency. 700+ coins and tokens are available for quick and easy exchanges. Data privacy and security is a top priority for StealthEX, so all the swaps are non-custodial, and forever will be.",
    img: "https://raw.githubusercontent.com/nixjs/coin-dapp-wallet-list/main/src/aptos/partner/assets/StealthEX.png",
    category: "Exchange",
  },
  {
    name: "Exolix",
    url: "https://exolix.com/",
    redirect: "exolix",
    description:
      "Best instantly cryptocurrency coin exchange. Lowest fees and best rates for BTC, ETH, ADA, XRP and 400+ more coins. Swap crypto with Exolix exchange platform.",
    img: "https://raw.githubusercontent.com/nixjs/coin-dapp-wallet-list/main/src/aptos/partner/assets/Exolix.png",
    category: "Exchange",
  },
];
