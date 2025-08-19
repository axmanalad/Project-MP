import type { Game } from "../types";

export const games: Game[] = [
  { 
    id: 101, 
    name: "genshin-impact",
    title: "Genshin Impact", 
    author: "miHoYo",
    releaseDate: "2020-09-28", 
    imageUrl: "https://cdn1.epicgames.com/offer/879b0d8776ab46a59a129983ba78f0ce/genshintall_1200x1600-4a5697be3925e8cb1f59725a9830cafc",
    bgImageURL: "https://webstatic.hoyoverse.com/upload/op-public/2022/02/09/ed2254c48c92ded2ef674f31ac03d03e_6731728942134874166.jpeg",
    websiteUrl: "https://genshin.hoyoverse.com/en/home",
    isAvailable: true
  },
  {
    id: 102,
    name: "honkai-star-rail",
    title: "Honkai Star Rail",
    author: "miHoYo",
    releaseDate: "2023-04-26",
    imageUrl: "https://cdn1.epicgames.com/spt-assets/6f3979ff608f42e286c83507a69b27f5/honkai-star-rail-v3a6b.jpg",
    bgImageURL: "https://webstatic.hoyoverse.com/upload/op-public/2022/02/08/eb228c7d178a684934d3cbb9189e5fb0_8364089112069254680.jpeg",
    websiteUrl: "https://hsr.hoyoverse.com/en-us/home",
    isAvailable: false
  },
  {
    id: 103,
    name: 'wuthering-waves',
    title: "Wuthering Waves",
    author: "Kuro Games",
    releaseDate: "2024-05-23",
    imageUrl: "https://cdn1.epicgames.com/spt-assets/c1586295960b46f88bbfeec32c199e0e/wuthering-waves-uw6vy.jpg",
    bgImageURL: "/src/assets/wuwa-bg.jpg",
    websiteUrl: "https://wutheringwaves.kurogames.com/en/main",
    isAvailable: false
  },
];
