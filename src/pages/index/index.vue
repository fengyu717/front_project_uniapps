<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '首页',
  },
}
</route>
<template>
  <view class="overflow-hidden pt-2 px-4" :style="{ marginTop: safeAreaInsets?.top + 'px' }">
    <view class="mt-12">
      <image src="/static/tabbar/home.png" alt="" class="w-28 h-28 block mx-auto" />
    </view>
    <view class="text-center text-4xl main-title-color mt-4">首页</view>
    <view class="text-center text-2xl mt-2 mb-8">欢迎</view>

    <view class="text-justify max-w-100 m-auto text-4 indent mb-2 justify-center flex">
      {{ description }}
    </view>
    <view class="text-center mt-8">
      当前平台是：
      <wd-icon name="add-circle" class="text-green"></wd-icon>
      <wd-icon name="add-circle"></wd-icon>
      <view class="i-carbon-user-avatar text-red" />
      <text class="text-green-500">{{ PLATFORM.platform }}</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { TestEnum } from '@/typings'
import PLATFORM from '@/utils/platform'

defineOptions({
  name: 'Home',
})

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
const author = ref('菲鸽')
const description = ref('这是首页示例代码')
// 测试 uni API 自动引入
onLoad(() => {
  console.log(author)
  console.log(TestEnum.A)
})
</script>

<style>
.main-title-color {
  color: #d14328;
}
</style>
