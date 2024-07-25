<script setup lang="ts">
import { UploadFile } from 'ant-design-vue';
import enUS from 'ant-design-vue/es/locale/en_US';
import zhCN from 'ant-design-vue/es/locale/zh_CN';

const fileList: UploadFile[] = [
  {
    uid: '-1',
    name: 'image.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    uid: '-2',
    percent: 50,
    name: 'image.png',
    status: 'uploading',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    uid: '-3',
    name: 'image.png',
    status: 'error',
  },
];

function getPopupContainer(_el:Element, dialogContext:any) {
  if (dialogContext) {
    return dialogContext.getDialogWrap();
  } else {
    return document.body;
  }
}
</script>

<template>
  <a-app>
    <a-config-provider :getPopupContainer="getPopupContainer" :locale="zhCN">
      <router-view v-slot="{ Component }">
        <transition>
          <component :is="Component" />
        </transition>
      </router-view>
    </a-config-provider>
  </a-app>
</template>


<style >
:root {
  --text-color: #000a1aad;
  --primary-color: #3056e3;
  --primary-color-opacity-1: rgba(48, 86, 227, 0.1);
  --layout-background-color: hsla(216, 100%, 96%, 1);
    --layout-background: radial-gradient(at 13% 5%, hsla(214, 100%, 37%, 0.29) 0px, transparent 50%), radial-gradient(at 100% 100%, hsla(254, 66%, 56%, 0.11) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(355, 100%, 93%, 0) 0px, transparent 50%), radial-gradient(at 61% 52%, hsla(227, 64%, 46%, 0.05) 0px, transparent 50%), radial-gradient(at 88% 12%, hsla(227, 70%, 49%, 0.1) 0px, transparent 50%), radial-gradient(at 100% 37%, hsla(254, 68%, 56%, 0) 0px, transparent 50%);
}
body {
  
}
</style>