<script lang="ts" setup>
import { VueElement, h, reactive } from 'vue';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { ItemType } from 'ant-design-vue';

function getItem(
    label: VueElement | string,
    key: string,
    icon?: any,
    children?: ItemType[],
    type?: 'group',
): ItemType {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as ItemType;
}

const items: ItemType[] = reactive([
    getItem('Navigation Two', 'sub2', () => h(AppstoreOutlined)),
    getItem('Navigation Three', 'sub42', () => h(SettingOutlined)),
    getItem('Navigation Three', 'sub44', () => h(SettingOutlined)),
    getItem('Navigation Three', 'sub43', () => h(SettingOutlined)),
    getItem('Navigation Three', 'sub46', () => h(SettingOutlined)),

]);

const state = reactive({
    rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
    openKeys: ['sub1'],
    selectedKeys: [],
});
const onOpenChange = (openKeys: string[]) => {
    const latestOpenKey = openKeys.find(key => state.openKeys.indexOf(key) === -1);
    if (state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        state.openKeys = openKeys;
    } else {
        state.openKeys = latestOpenKey ? [latestOpenKey] : [];
    }
};
</script>

<template>
    <div class="flex gap-3">
        <div class="w-[160px]">
            <a-menu class="w-full" v-model:selectedKeys="state.selectedKeys" style="width: 256px" mode="inline"
                :open-keys="state.openKeys" :items="items" @openChange="onOpenChange"></a-menu>
        </div>

        <!-- <div class="flex-1 bg-white rounded-xl p-2  bg-op-50"> -->
        <!-- <div v-for="i in 1000">aaa</div> -->
        <!-- </div> -->
        <div class="flex-1">
            <a-card :bordered="false">
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </a-card>
        </div>

    </div>
</template>

<style lang="scss">
.ant-menu {
    width: 100% !important;
    background-color: transparent !important;
    border-inline-end: 0 !important;
    color: var(--text-color) !important;

    &-item {
        margin-bottom: 0.5rem !important;
        color: var(--text-color) !important;

        &:hover {
            color: var(--primary-color) !important;
            background-color: transparent !important;
        }
    }

    .ant-menu-item-selected {
        border-radius: .375rem;
        background: var(--primary-color-opacity-1) !important;
        color: var(--primary-color) !important;
        transition: all .3 ease;
    }
}
</style>