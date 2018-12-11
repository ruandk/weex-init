<template>
  <div class="wrap">
    <text class="text">Page me</text>
    <text class="text">I'm {{info.name}}</text>
    <text class="btn" @click="back">Back</text>
  </div>
</template>

<script>
import stream from '@/assets/js/stream';

export default {
  data() {
    return {
      user: this.$route.query.user,
      info: {}
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  },
  created() {
    stream.get('users', this.user, data => {
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
