<script lang="ts" setup>
import UserInfo from './components/UserInfo.vue'
import Github from './components/Github.vue'
import Logo from './components/Logo.vue'
</script>

<template>
    <div class="y-layout">
        <header class="y-layout__header">
            <div class="flex flex-1 items-center gap-6">

                <Logo />
                
                <div class="y-menu">
                    <div class="y-menu__item" :class="{active: i==1}" v-for="i in 4">
                        <a href="">测试 {{ i }}</a>
                    </div>
            </div>
    </div>
    <div class="flex items-center">
        <Github />
        <UserInfo />
    </div>

    </header>
    <div class="y-layout__container">
        <transition name="fade-transform" mode="out-in">
            <router-view />
        </transition>
    </div>
    </div>
</template>

<style lang="scss">
@use './style/index.scss' as *;
</style>
