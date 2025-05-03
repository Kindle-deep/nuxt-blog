import type { FeedGroup } from '~/types/feed'
import { getGhAvatar } from './utils/img'

export default [{
    name: '漫游',
    desc: '网上冲浪时发现的精彩内容与常读订阅，与君共享。',
    entries: [{
        author: 'Tony He',
        desc: 'Just A Poor Lifesinger',
        feed: 'https://lipeng.ac/feed',
        link: 'https://lipeng.ac/',
        icon: 'https://lipeng.ac/favicon.ico',
        avatar: 'https://lipeng.ac/favicon.ico',
        archs: ['Web3', '播客'],
        date: '2024-02-01',
    }],
}] satisfies FeedGroup[]
