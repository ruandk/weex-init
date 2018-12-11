<template>
  <div class="wrap">
    <text class="text">Page me</text>
    <text class="text">I'm {{info.name}}</text>
    <text class="btn" @click="back">Back</text>
  </div>
</template>

<script>
import stream from '@/assets/js/stream';
import utils from '@/assets/js/utils';
// import getBaseURL from '@/assets/js/getBaseURL';

const navigator = weex.requireModule('navigator');

export default {
  data() {
    return {
      info: {}
    };
  },
  methods: {
    back() {
      navigator.pop({ animated: 'true' });
    }
  },
  created() {
    let user = utils.getUrlParam('user');
    stream.get('users', user, data => {
      this.info = data;
    });
    stream.get('users', data => {
      console.log(data);
    });
  }
};
</script>

<style scoped>
.wrap {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  justify-content: space-around;
  align-items: center;
}
.text {
  font-size: 42px;
}
.btn {
  width: 200px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  font-size: 24px;
  color: #ffffff;
  background-color: #ff3366;
  border-radius: 40px;
}
</style>
