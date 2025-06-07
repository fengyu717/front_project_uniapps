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
    <view class="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <view class="h-[88rpx] flex items-center pl-4">
        <!-- 返回按钮 -->
        <wd-icon name="thin-arrow-left" size="20px" @click="handleBack"></wd-icon>
        <!-- 标题 -->
        <text class="ml-2 text-lg font-medium"></text>
      </view>
    </view>
    <!-- 这里可以添加更多页面元素 -->
    <view class="flex flex-col h-screen">
      <!-- 添加数字人 -->
      <view
        class="relative bg-[url('https://cyt-static.oss-cn-beijing.aliyuncs.com/digital_human/newclipbg.png')] bg-auto bg-center text-white text-center pt-10"
      >
        <view
          :class="[
            'mx-auto flex flex-col items-center justify-center rounded-xl border border-dashed border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300',
            enlarged ? 'scale-105 w-65 h-120' : 'w-35 h-60',
          ]"
        >
          <image
            class="mx-auto w-30 h-30"
            src="https://cyt-static.oss-cn-beijing.aliyuncs.com/digital_human/clip-head.png"
            mode="scaleToFill"
          />
          <view>添加数字人</view>
        </view>
        <view class="absolute w-[90vw] bottom-0 flex justify-between items-center px-5">
          <view type="primary" @click="show = true">
            <image
              class="w-5 h-5 mx-auto"
              src="https://cyt-static.oss-cn-beijing.aliyuncs.com/digital_human/szr.png"
              mode="scaleToFill"
            />
            <text v-if="!enlarged">数字人</text>
          </view>
          <view type="primary" @click="enlarged = !enlarged">
            <image
              class="w-5 h-5 mx-auto"
              src="https://cyt-static.oss-cn-beijing.aliyuncs.com/digital_human/allscreen.png"
              mode="scaleToFill"
            />
          </view>
        </view>
      </view>

      <view class="mx-3 flex items-center justify-around mt-5 font-semibold relative">
        <view
          v-for="(item, index) in list"
          :key="index"
          class="w-50 text-center cursor-pointer relative"
          :class="index === activeIndex ? 'bg-[#202126] py-3 ' : 'py-3'"
          @click="activeIndex = index"
        >
          <view class="flex flex-col items-center justify-center">
            <text class="text-white text-sm">
              {{ item }}
            </text>

            <!-- 绝对定位的短线，不占空间 -->
            <image
              v-if="index === activeIndex"
              class="w-6 h-0.5 absolute bottom-0 left-1/2 -translate-x-1/2"
              src="https://cyt-static.oss-cn-beijing.aliyuncs.com/digital_human/clip-line.png"
              mode="scaleToFill"
            />
          </view>
        </view>
      </view>

      <!-- 文案驱动 -->
      <view class="mx-3 bg-[#202126] pt-5" v-if="activeIndex === 0">
        <view class="flex items-center justify-between px-5">
          <text class="text-[#7c7c7f] font-semibold">请选择数字人音色</text>
          <text>选择音色</text>
        </view>

        <view>
          <wd-textarea
            v-model="value"
            size="large"
            placeholderStyle="color: #7c7c7f"
            custom-class="bg-transparent mt-5"
            placeholder="请输入或粘贴您的文案，或随机生成"
          />
          <view class="text-right text-[24rpx] mt-2">共 {{ value.length }} 字</view>
          <view class="flex items-center justify-between px-3 mt-5 pb-5">
            <!-- 左侧标签列表 -->
            <view class="flex space-x-4">
              <view
                v-model="activeIndex1"
                v-for="(item, index) in typeList"
                :key="index"
                class="flex items-center text-[24rpx] cursor-pointer"
                :class="activeIndex1.name === item.name ? 'text-[#92ffd5]' : 'text-white'"
                @click="activeIndex1 = item"
              >
                <image class="w-4 h-4 mr-1" :src="item.icon" mode="scaleToFill" />
                {{ item.name }}
              </view>
            </view>

            <!-- 右侧清空按钮 -->
            <view class="text-[24rpx] text-gray-300 active:opacity-70" @click="handleClear">
              清空
            </view>
          </view>
        </view>
      </view>

      <!-- 音频驱动 -->
      <view v-else class="flex flex-col mt-1">
        <view
          class="mx-5 my-1 py-2 h-12 bg-[url('https://cyt-static.oss-cn-beijing.aliyuncs.com/digital_human/clipicon7.png')] bg-cover bg-no-repeat bg-center rounded-xl"
          v-for="item in 3"
          :key="item"
        >
          <view class="p-3">
            <image
              class="w-6 h-6 px-2"
              src="https://cyt-static.oss-cn-beijing.aliyuncs.com/digital_human/clipicon9.png"
              mode="scaleToFill"
            />
            点击录制音频
          </view>
        </view>
      </view>
      <!-- 公用 -->
      <view class="mx-3 mt-5">
        <wd-grid :column="5">
          <wd-grid-item :icon="item.icon" :text="item.name" v-for="item in type" :key="item" />
        </wd-grid>
      </view>
      <!-- 按钮 -->
      <view class="mt-5 px-6 text-[30rpx] font-bold">
        <view class="flex justify-center items-center space-x-4">
          <view
            v-if="activeIndex == 0"
            class="w-28 h-14 rounded-lg text-white text-center leading-[3.5rem] bg-no-repeat bg-cover bg-center"
            style="background-image: var(--clip-play-bg)"
          >
            <image
              class="w-8 h-8"
              src="https://cyt-static.oss-cn-beijing.aliyuncs.com/digital_human/audio-play.png"
              mode="scaleToFill"
            />
            试听
          </view>
          <view
            class="flex-1 w-56 h-14 rounded-lg text-black text-center leading-[3.5rem] bg-no-repeat bg-cover bg-center"
            style="background-image: var(--clip-add-bg)"
          >
            <image
              class="w-4 h-4"
              src="https://cyt-static.oss-cn-beijing.aliyuncs.com/digital_human/clipicon6.png"
              mode="scaleToFill"
            />
            立即生成
          </view>
        </view>
      </view>

      <wd-action-sheet v-model="show" title="标题" @close="close">
        <view class="P-20">内容</view>
      </wd-action-sheet>
    </view>
  </view>
</template>

<script setup>
// 这里可以添加 setup 中的逻辑
const handleBack = () => {
  uni.navigateTo({ url: '/pages/otherpages/creationDirectory/creationDirectory' }) // 返回上一页
}
const show = ref(false)
const enlarged = ref(false)
const activeIndex = ref(0)
const activeIndex1 = ref({ name: 'AI文案' })
const list = ['文案驱动', '音频驱动']
const type = [
  {
    name: '模板',
    icon: 'https://cyt-static.oss-cn-beijing.aliyuncs.com/digital_human/tempicon.png',
  },
  {
    name: '标题',
    icon: 'https://cyt-static.oss-cn-beijing.aliyuncs.com/digital_human/zt.png',
  },
  {
    name: '字幕',
    icon: 'https://cyt-static.oss-cn-beijing.aliyuncs.com/digital_human/clipicon3.png',
  },
  {
    name: '配图',
    icon: 'https://cyt-static.oss-cn-beijing.aliyuncs.com/digital_human/icon-source-material.png',
  },
  {
    name: '音乐',
    icon: 'https://cyt-static.oss-cn-beijing.aliyuncs.com/digital_human/clipicon5.png',
  },
]
const typeList = [
  {
    name: 'AI文案',
    icon: 'https://cyt-static.oss-cn-beijing.aliyuncs.com/digital_human/clipicon1.png',
  },
  {
    name: '提取文案',
    icon: 'https://cyt-static.oss-cn-beijing.aliyuncs.com/digital_human/clipicon2.png',
  },
  {
    name: '翻译',
    icon: 'https://cyt-static.oss-cn-beijing.aliyuncs.com/digital_human/translate.png',
  },
]
const value = ref('')
const close = () => {
  console.log('关闭')
}
const handleClear = () => {
  value.value = ''
}
</script>

<style lang="scss"></style>
