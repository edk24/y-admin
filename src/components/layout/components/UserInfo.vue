<script lang="ts" setup>

</script>

<template>
    <div>
        <a-popover placement="bottomRight">
            <template #content>
                <p>Content</p>
                <p>Content</p>
            </template>
            <template #title>
                欢迎您，admin
            </template>

            <a-button type="text" size="small">
                <template #icon>
                    <a-avatar class="mr-1 -mt-[2px]" :size="14" icon="a" />
                </template>
                <span>admin</span>
            </a-button>
        </a-popover>

    </div>
</template>

<style lang="scss">

</style>