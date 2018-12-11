import Vue from 'vue';
import weex from 'weex-vue-render';

import xdvideo from '@/components/common/xdvideo.vue';

import getBaseURL from '@/assets/js/getBaseURL';

const navigator = weex.requireModule('navigator');

weex.init(Vue);

// 注册组件
// Vue.component('xdvideo', xdvideo);
weex.registerComponent('xdvideo', xdvideo);

// 注册模块
weex.registerModule('xdnavigator', {
  push(obj, callback) {
    navigator.push(obj, callback);
  },
  pop(obj, callback) {
    navigator.pop(obj, callback);
  },
  popToMain() {
    let url = getBaseURL('home');
    navigator.push({ url: url, animated: 'true' });
  },
  openSettings() {
    console.log('open settings');
  },
  openAlipay(str) {
    console.log(str);
  },
  openWeixinPay(url) {
    console.log(url);
  },
  refresh() {
    console.log('refresh');
  }
});
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
