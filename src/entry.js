/* global Vue */

import xdvideo from '@/components/common/xdvideo.vue';

/* weex initialized here, please do not move this line */

// 注册组件
// Vue.component('xdvideo', xdvideo);
weex.registerComponent('xdvideo', xdvideo);

// 注册模块
weex.registerModule('xdevent', {
  // 触发 globalEvent.addEventListener
  fireNativeGlobalEvent(e, obj, callback) {
    console.log(e);
    console.log(obj);
    callback();
  },
  // 为安卓添加物理返回监听
  addBackEventListener(callback) {
    callback();
  },
  // 为安卓删除物理返回监听
  removeBackEventListener() {
    console.log('删除物理返回监听');
  }
});

const router = require('./router');
const App = require('@/index.vue');
/* eslint-disable no-new */
new Vue(Vue.util.extend({ el: '#root', router }, App));
router.push('/');
