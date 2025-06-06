<route lang="json5" type="home">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '1123123123',
    navigationStyle: '',
  },
}
</route>

<template>
  <view :style="{ marginTop: safeAreaInsets?.top + 'px' }">
    <view class="">2323123131</view>

    <button @click="toggleTheme">切换主题，当前模式：{{ theme }}</button>
    <wd-button>主要按钮</wd-button>
    <wd-tabbar
      fixed
      v-model="tabbar"
      shape="round"
      active-color="#ee0a24"
      inactive-color="#7d7e80"
      bordered
      safeAreaInsetBottom
      placeholder
    >
      <wd-tabbar-item :value="2" is-dot title="首页" icon="home"></wd-tabbar-item>
      <wd-tabbar-item title="分类" icon="cart"></wd-tabbar-item>
      <wd-tabbar-item title="我的" icon="user"></wd-tabbar-item>
      <wd-tabbar-item title="相册" icon="photo"></wd-tabbar-item>
      <wd-tabbar-item title="客服" icon="chat"></wd-tabbar-item>
    </wd-tabbar>
  </view>
</template>

<script lang="ts" setup>
import { piniaUseStore, piniaUseStoreRefs } from '@/store'
import { ref } from 'vue'

const { theme } = piniaUseStoreRefs()
const { toggleTheme } = piniaUseStore()

const { safeAreaInsets } = uni.getSystemInfoSync()

const tabbar = ref(1)

onLoad(() => {})
</script>

<style lang="scss">
.test {
  color: $uni-bg-color;
}
</style>
