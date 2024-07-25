<script lang="ts" setup>
import { reactive,h, ref } from 'vue';
import { UserOutlined, LockOutlined, WechatOutlined, QqOutlined } from '@ant-design/icons-vue';
import { apiLogin } from '../../api/auth';
import { md5 } from '../../utils/common';
import useUserStore from '../../store/userStore';

const userStore = useUserStore()

interface FormState {
    username: string;
    password: string;
}

const formState = reactive<FormState>({
    username: '',
    password: '',
});

const onFinish = (values: any) => {
    lock.value = true;

    apiLogin({
        username: formState.username,
        password: md5(formState.password)
    })
        .then((data:any) => {
            userStore.setToken(data.data.token)
                .then(() => {
                    lock.value = false;
                    // TODO 跳转到首页
                    // router.push({ name: 'Home' });
                })
        });
};

const lock = ref(false);
</script>

<template>
    <div class="y-login">

        <div class="y-login__body">
            <a-card :bordered="false">
                <h1 class="text-center mb-10">Log in</h1>

                <a-form :model="formState" name="basic" :label-col="{ span: 0 }" :wrapper-col="{ span: 24 }"
                    autocomplete="off" @finish="onFinish" >
                    <a-form-item name="username" :rules="[{ required: true, message: '请输入用户名!' }]">

                        <a-input v-model:value="formState.username" size="large" placeholder="请输入用户名">
                            <template #prefix>
                                <UserOutlined class="site-form-item-icon" />
                            </template>
                        </a-input>
                    </a-form-item>

                    <a-form-item name="password" :rules="[{ required: true, message: '请输入密码!' }]">

                        <a-input-password v-model:value="formState.password" size="large" placeholder="请输入密码" autocomplete>
                            <template #prefix>
                                <LockOutlined class="site-form-item-icon" />
                            </template>
                        </a-input-password>
                    </a-form-item>


                    <a-form-item>
                        <a-button type="primary" :loading="lock" size="large" block html-type="submit">登 录</a-button>
                    </a-form-item>

                </a-form>

                <div class="mt-12"></div>
                <a-divider plain>其他登录方式</a-divider>
                <a-flex gap="middle" justify="center">
                    <a-button shape="circle" :icon="h(WechatOutlined)" />
                    <a-button shape="circle" :icon="h(QqOutlined)" />
                </a-flex>
            </a-card>
        </div>

        <div class="y-login__footer">
            <a-space>
                <a-tooltip title="本项目由 YAdmin 强力驱动">
                    <!-- TODO 开源地址 -->
                    <a href="" target="_blank">
                        Powered by YAdmin
                    </a>
                </a-tooltip>
            </a-space>
        </div>

    </div>

</template>

<style lang="scss" scoped>
@use './styles/login.scss' as *;
</style>