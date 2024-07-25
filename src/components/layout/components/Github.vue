<script lang="ts" setup>
import {GithubOutlined } from '@ant-design/icons-vue';
</script>

<template>
    <a-popover placement="bottomRight">
        <template #content>
            <a-space>
                <a-button size="small">别烦我</a-button>
                <a-button type="primary" size="small" href="http://www.baidu.com" target="_blank">这就去</a-button>
            </a-space>
        </template>
        <template #title>
            开源不易，给个鼓励，加个 ⭐️ 吧！
        </template>


        <a-button type="text" size="small">
            <template #icon>
                <GithubOutlined />
            </template>
            <span>658</span>
        </a-button>

    </a-popover>
</template>