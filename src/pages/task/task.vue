<route lang="json5">
{
  style: {
    navigationBarTitleText: '',
    navigationStyle: 'custom',
  },
}
</route>
<template>
  <view class="narrator-page">
    <!-- 这里可以添加讲述人页面的具体内容 -->
    <view class="narrator-content">
      <wd-tabs v-model="tab" lineHeight="0" auto-line-width>
        <template v-for="item in tabList" :key="item">
          <wd-tab :title="`${item}`">
            <view class="content"></view>
          </wd-tab>
        </template>
      </wd-tabs>
    </view>

    <CustomTabBar :backgroundColor="'#000'" />
  </view>
</template>

<script setup>
import CustomTabBar from '@/layouts/CustomTabBar.vue'
const tabList = ['作品', '形象', '声音']
const tabLists = ['我的', '收藏', '关注', '粉丝', '设置']
const tab = ref(0)
const tab1 = ref(0)
// 这里可以添加 setup 函数内的逻辑，目前暂时为空
</script>

<style scoped>
.narrator-page {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  color: #fff;
  text-align: center;
  background: #000;
  .narrator-content {
    width: 50%;
    margin: 0 auto;
  }
}
</style>
