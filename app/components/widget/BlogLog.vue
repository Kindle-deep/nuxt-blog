<script setup lang="ts">
const appConfig = useAppConfig()
const timeEstablished = appConfig.timeEstablished

const blogLog = [
    { date: '2025-05-03', content: '博客迁移至Nuxt Content' },
    { date: `2021-9-1`, content: '第一次搭建博客' },
]
</script>

<template>
    <h3 class="widget-title">
        更新日志
    </h3>
    <!-- TODO: 优化时间线样式 -->
    <div class="widget-card">
        <ul>
            <li v-for="(item, index) in blogLog" :key="index">
                <small>{{ item.date }}</small><br>
                {{ item.content }}
            </li>
        </ul>
    </div>
</template>
