<template>
  <view class="tab-bar" :style="{ backgroundColor }">
    <view
      v-for="item in tabList"
      :key="item.pagePath"
      class="tab-item"
      :class="{ active: item.pagePath === currentPath }"
      @tap="switchTab(item.pagePath)"
    >
      <image :src="item.pagePath === currentPath ? item.selectedIconPath : item.iconPath" />
      <text>{{ item.text }}</text>
    </view>
  </view>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  backgroundColor: { type: String, default: '#ffffff' },
})

// 定义 tabBar 配置
const tabList = ref([
  {
    iconPath: 'https://h5ren.duanshipin.com/static/images/tab-home-1.png',
    selectedIconPath: 'https://h5ren.duanshipin.com/static/images/tab-home-2.png',
    pagePath: '/pages/index/index',
    text: '首页',
  },
  {
    iconPath: 'https://h5ren.duanshipin.com/static/images/tab-icon.png',
    selectedIconPath: 'https://h5ren.duanshipin.com/static/images/tab-icon.png',
    pagePath: '/pages/task/task',
    text: '讲述人',
  },
  {
    iconPath: 'https://h5ren.duanshipin.com/static/images/tab-user-1.png',
    selectedIconPath: 'https://h5ren.duanshipin.com/static/images/tab-user-2.png',
    pagePath: '/pages/user/user',
    text: '我的',
  },
])

// 当前路径高亮
const route = useRoute()
const currentPath = computed(() => route.path)

function switchTab(path) {
  if (path !== currentPath.value) {
    uni.switchTab({ url: path })
  }
}
</script>

<style scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 50px;
  padding-bottom: env(safe-area-inset-bottom);
  /* border-top: 1px solid #eee; */
}
.tab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 10px;
  color: #666;
}
.tab-item image {
  width: 24px;
  height: 24px;
}
.tab-item.active {
  color: #6777fd;
}
</style>
