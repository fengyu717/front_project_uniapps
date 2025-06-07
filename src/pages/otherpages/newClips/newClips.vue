<route lang="json5">
{
  style: {
    navigationBarTitleText: '',
    navigationStyle: 'custom',
    backgroundColor: '#000',
  },
}
</route>

<template>
  <view class="min-h-screen w-full text-white bg-black overflow-auto">
    <!-- 透明背景导航栏 -->
    <!-- 自定义导航栏 -->
    <view class="fixed top-0 left-0 right-0 z-50 bg-black">
      <view class="h-[88rpx] flex items-center pl-4">
        <!-- 返回按钮 -->
        <wd-icon name="thin-arrow-left" size="20px" @click="handleBack"></wd-icon>
        <!-- 标题 -->
        <text class="ml-2 text-lg font-medium"></text>
      </view>
    </view>
    <!-- 这里可以添加更多页面元素 -->
    <view class="flex flex-col h-screen mt-10"></view>
  </view>
</template>

<script setup>
// 这里可以添加 setup 中的逻辑
const handleBack = () => {
  uni.navigateTo({ url: '/pages/otherpages/creationDirectory/creationDirectory' }) // 返回上一页
}
</script>

<style lang="scss"></style>
