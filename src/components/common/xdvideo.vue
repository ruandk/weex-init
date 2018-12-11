<template>
    <div class="xdvideo" :style="{height:content.videoH?content.videoH+'px':'380px'}">
        <video class="video" :style="{height:content.videoH?content.videoH+'px':'380px'}" :src="src" @pause="onpause" controls :play-status="playStatus" v-if="played"></video>
        <div @click="play" v-else>
            <image class="poster" :style="{height:content.videoH?content.videoH+'px':'380px'}" resize="cover" :src="thumbUrl"></image>
            <div class="btn" :style="{top:content.videoH?(content.videoH-120)/2+'px':'130px'}">
                <image class="icon" resize="cover" src="http://2ngtmbzh-sand.droibaascdn.com/droi/2ngtmbzhOt-_TzNYFP8lt-ZJmH-iqVCGlQA_dfwe/995929396332204032/995929396332204032.png"></image>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default() {
        return {};
      }
    },
    src: {
      type: String
    },
    thumbUrl: {
      type: String
    }
  },
  data() {
    return {
      played: false
    };
  },
  computed: {
    playStatus() {
      if (this.played) {
        return 'play';
      }
      return 'pause';
    }
  },
  methods: {
    play() {
      this.played = true;
    },
    onpause() {
      // this.played = false
    }
  }
};
</script>

<style scoped>
    .xdvideo {
        width: 750px;
        /*height: 380px;*/
    }

    .poster {
        position: absolute;
        left: 0;
        top: 0;
        width: 750px;
        /*height: 380px;*/
    }

    .btn {
        position: absolute;
        left: 315px;
        /*top: 130px;*/
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 120px;
        border-radius: 60px;
        background-color: rgba(0, 0, 0, 0.4);
    }

    .icon {
        margin-left: 20px;
        width: 64px;
        height: 64px;
    }

    .video {
        width: 750px;
        /*height: 380px;*/
    }
</style>
