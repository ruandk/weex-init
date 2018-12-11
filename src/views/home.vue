<template>
  <div class="wrap">
    <text class="text" @click="test">Page home</text>
    <xdvideo
      src="http://ypktmbzh.droibaascdn.com/droi/ypktmbzhiZH_jzNsRNkLHqjZCMNYRI4dlQAcl7EC/998527197310410752/bd58e60bf1ec6cf2d743b49136c8.mp4"
      thumbUrl="http://ypktmbzh.droibaascdn.com/droi/ypktmbzhiZH_jzNsRNkLHqjZCMNYRI4dlQAcl7EC/998843895796207616/a052569139e1da56bf474f5641ef.png"
    ></xdvideo>
    <text class="btn" @click="jump">Jump</text>
  </div>
</template>

<script>
const xdevent = weex.requireModule('xdevent');

export default {
  methods: {
    test() {
      console.log(xdevent);
      xdevent.removeBackEventListener();
    },
    jump() {
      this.$router.push({ path: '/me', query: { user: 'ruandk' } });
    }
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
