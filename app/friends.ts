import type { FeedGroup } from '~/types/feed'
import { getGhAvatar } from './utils/img'

export default [{
    name: '网上邻居',
    desc: '哔——啵——电波通讯中，欢迎常来串门。',
    entries: [{
        author: '天翔TNXG',
        sitenick: '空间站',
        title: '天翔TNXGの空间站',
        desc: '明日尚未到来，希望凝于心上',
        link: 'https://tnxgmoe.com/',
        feed: 'https://tnxgmoe.com/feed',
        icon: 'https://tnxgmoe.com/favicon.png',
        avatar: 'https://api-space.tnxg.top/avatar?s=qq',
        archs: ['Mix Space', 'Cloudflare'],
        date: '2025-05-03',
        comment: '西北地区高中生，开源爱好者。',
    },{
        author: 'Redish101',
        title: 'Redish101 Blog',
        desc: '学生，人，活的',
        link: 'https://blog.redish101.top/',
        feed: 'https://blog.redish101.top/feed',
        icon: getGhAvatar('Redish101', { preset: 'icon' }),
        avatar: getGhAvatar('Redish101'),
        archs: ['Next.js', 'Vercel'],
        date: '2025-05-03',
        comment: '江湖人称数据库，初中生，博客开发中。',
    }, {
        author: '葱苓',
        sitenick: '语畔',
        title: '葱苓语畔',
        desc: 'Don\'t worry, be happy.',
        link: 'https://blog.ciraos.top/',
        feed: 'https://blog.ciraos.top/feed.xml',
        icon: 'https://blog.ciraos.top/avatar.avif',
        avatar: 'https://blog.ciraos.top/avatar.avif',
        archs: ['Next.js', '国内 CDN'],
        date: '2025-05-03',
        comment: '前端学习。',
    }, {
        author: '虫不知喔',
        title: '虫不知喔',
        desc: '若有韶月熹微，愿作流萤徂岁。',
        link: 'https://blog.ssyc.moe',
        feed: 'https://blog.ssyc.moe/rss.xml',
        icon: 'https://assets.ssyc.moe/favicon.ico',
        avatar: 'https://assets.ssyc.moe/favicon.ico',
        archs: ['Halo'],
        date: '2025-05-03',
        comment: '呆呆的',
    }
}] satisfies FeedGroup[]
