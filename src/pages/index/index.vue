<template>
  <view class="container min-h-screen w-full text-white bg-black">
    <!-- 顶部 Banner -->
    <view class="banner relative h-[260rpx]">
      <wd-swiper
        :list="swiperList"
        autoplay
        v-model:current="current"
        :indicator="{ type: 'dots-bar' }"
      ></wd-swiper>
      <!-- banner-bg 和 banner-img 需要用内联样式或者额外类名处理背景图等，或者用Tailwind自定义 -->
      <!-- 这里示例写法： -->
      <!-- 如果banner-bg是图片背景，可以用div覆盖，或者用内联style -->
    </view>

    <!-- 三大功能按钮 -->
    <view class="main-features flex gap-[20rpx] p-2.5">
      <wd-img
        :width="350"
        :height="168"
        src="https://cyt-digital.oss-cn-beijing.aliyuncs.com/static/home/icon-clip.png"
      />
      <view class="flex flex-wrap justify-between">
        <wd-img
          :width="200"
          :height="80"
          src="https://cyt-digital.oss-cn-beijing.aliyuncs.com/static/home/icon-figure.png"
        />
        <wd-img
          class="mt-2"
          :width="200"
          :height="80"
          src="https://cyt-digital.oss-cn-beijing.aliyuncs.com/static/home/icon-sound.png"
        />
      </view>
    </view>

    <!-- 图标菜单 -->
    <wd-grid bg-color="rgba(0, 0, 0, 0.02)">
      <wd-grid-item
        v-for="item in 5"
        :key="item"
        icon="https://cyt-static.oss-cn-beijing.aliyuncs.com/digital_human/homeicon14.png"
        text="团队频道"
      />
    </wd-grid>

    <!-- 我的数字人 -->
    <view class="section px-2.5 mt-10">
      <view class="section-header flex justify-between mb-5 text-[28rpx]">
        <text>我的数字人 0</text>
        <text class="more text-[24rpx] text-gray-500">全部 &gt;</text>
      </view>
      <scroll-view scroll-x>
        <view class="flex w-full">
          <view
            class="avatar-card flex items-center w-[50vw] min-w-[27vw] h-[161px] mr-5 text-center rounded-[20rpx] bg-[url('https://cyt-static.oss-cn-beijing.aliyuncs.com/digital_human/add-image-item-bg.png')] bg-no-repeat bg-cover"
            v-for="item in 5"
            :key="item"
          >
            <view class="w-full">
              <view class="text-xl">+</view>
              <view class="text-[0.7rem]">定制数字人</view>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>

    <!-- 我的作品 -->
    <view class="section px-2.5 mt-10">
      <view class="section-header flex justify-between mb-5 text-[28rpx]">
        <text>我的作品 0</text>
        <text class="more text-[24rpx] text-gray-500">全部 &gt;</text>
      </view>
      <view class="empty-work mt-7 text-gray-400 text-center">
        <view class="video-icon mb-5 text-[64rpx]">🎞</view>
        <text>视频创作保存在这里，去创作吧～</text>
      </view>
    </view>

    <!-- 样片案例 -->
    <view class="section px-2.5 mt-10">
      <view class="section-header flex justify-between mb-5 text-[28rpx]">
        <text>样片案例 0</text>
        <text class="more text-[24rpx] text-gray-500">全部 &gt;</text>
      </view>
      <view class="empty-work mt-7 text-gray-400 text-center">
        <view class="video-icon mb-5 text-[64rpx]">📝</view>
        <text>任务保存在这里，去完成吧～</text>
      </view>
    </view>

    <!-- 新手教程 -->
    <view class="section px-2.5 mt-10">
      <view class="section-header flex justify-between mb-5 text-[28rpx]">
        <text>新手教程</text>
        <text class="more text-[24rpx] text-gray-500">全部 &gt;</text>
      </view>
      <scroll-view scroll-x>
        <view class="flex w-full">
          <wd-img
            class="card-news min-w-[45vw] mr-5"
            :width="200"
            :height="100"
            :src="item"
            v-for="(item, index) in swiperList1"
            :key="index"
          />
        </view>
      </scroll-view>
    </view>

    <!-- AI智能体 -->
    <view class="section px-2.5 mt-10">
      <view class="section-header flex justify-between mb-5 text-[28rpx]">
        <text>AI智能体</text>
        <text class="more text-[24rpx] text-gray-500">全部 &gt;</text>
      </view>
      <view class="grid grid-cols-2 gap-2">
        <view
          class="itemai flex items-center w-[98%] p-2 bg-[#1e1f24] box-border"
          v-for="item in 10"
          :key="item"
        >
          <image
            class="item_img flex-shrink-0 w-9 h-9 rounded-full"
            src="https://img11.360buyimg.com/imagetools/jfs/t1/143248/37/5695/265818/5f3a8546E98d998a4/745897ca9c9e474b.jpg"
            width="40"
            height="40"
            alt="joy"
          />
          <view class="ml-2">
            <view
              class="tit1 w-[100px] overflow-hidden font-[PingFang_SC] text-md font-bold whitespace-nowrap text-ellipsis"
            >
              智催评营销1111
            </view>
            <view
              class="tit2 w-[100px] mt-[3px] overflow-hidden text-[12px] font-medium text-gray-400 whitespace-nowrap text-ellipsis"
            >
              高级版-快速吸粉 | 周期一年
            </view>
          </view>
        </view>
      </view>
    </view>
    <CustomTabBar :backgroundColor="'#000'" />
  </view>
</template>

<script lang="ts" setup>
import CustomTabBar from '@/layouts/CustomTabBar.vue'
const current = ref<number>(0)

const swiperList = ref([
  '/static/images/png/1.png',
  '/static/images/png/2.png',
  '/static/images/png/3.png',
])

const swiperList1 = ref([
  '/static/images/png/4.png',
  '/static/images/png/4.png',
  '/static/images/png/4.png',
])
</script>
<style lang="scss" scoped></style>
