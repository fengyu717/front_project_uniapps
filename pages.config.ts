import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  globalStyle: {
    navigationStyle: 'default',
    navigationBarTitleText: 'uniapp',
    navigationBarBackgroundColor: '#fff',
    navigationBarTextStyle: 'black',
    backgroundColor: '#f03',
  },
  easycom: {
    autoscan: true,
    custom: {
      '^wd-(.*)': 'wot-design-uni/components/wd-$1/wd-$1.vue',
      '^(?!z-paging-refresh|z-paging-load-more)z-paging(.*)':
        'z-paging/components/z-paging$1/z-paging$1.vue',
    },
  },
  tabBar: {
    color: '#999999',
    selectedColor: '#6777fd',
    backgroundColor: '#fff',
    borderStyle: 'black',
    height: '0px',
    fontSize: '10px',
    iconWidth: '24px',
    spacing: '3px',
    list: [
      {
        // iconPath: 'https://h5ren.duanshipin.com/static/images/tab-home-1.png',
        // selectedIconPath: 'https://h5ren.duanshipin.com/static/images/tab-home-2.png',
        pagePath: 'pages/index/index',
        text: '',
      },
      {
        // iconPath: 'https://h5ren.duanshipin.com/static/images/tab-icon.png',
        // selectedIconPath: 'https://h5ren.duanshipin.com/static/images/tab-icon.png',
        pagePath: 'pages/task/task',
        text: '',
      },
      {
        // iconPath: 'https://h5ren.duanshipin.com/static/images/tab-user-1.png',
        // selectedIconPath: 'https://h5ren.duanshipin.com/static/images/tab-user-2.png',
        pagePath: 'pages/user/user',
        text: '',
      },
    ],
  },
})
