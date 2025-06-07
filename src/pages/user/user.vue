<route lang="json5">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '',
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view class="my-page">
    <h1>我的页面</h1>
    <!-- 这里可以添加更多页面元素 -->
    <CustomTabBar :backgroundColor="'#fff'" />
  </view>
</template>

<script setup>
import CustomTabBar from '@/layouts/CustomTabBar.vue'
// 这里可以添加 setup 中的逻辑
</script>

<style scoped>
.my-page {
  text-align: center;
}
</style>
