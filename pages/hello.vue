<template>
  <div>
    <div class="banner">
      <div class="slider">
        <img class="obj-fit" src="~/assets/91K6lrulf.jpeg" alt="" srcset="" />
        <img
          class="obj-fit"
          src="~/assets/IMG_20190830_125556.jpg"
          alt=""
          srcset=""
        />
        <img
          class="obj-fit"
          src="~/assets/mmexport1535426952659.jpg"
          alt=""
          srcset=""
        />
      </div>
    </div>

    <van-swipe :autoplay="1500" class="banner">
      <!-- <van-swipe-item v-for="(image, index) in images" :key="index">
        <img  class="obj-fit" v-lazy="image" />
      </van-swipe-item> -->
      <van-swipe-item>
        <img class="obj-fit" src="~/assets/91K6lrulf.jpeg" alt="" srcset="" />
      </van-swipe-item>
      <van-swipe-item>
        <img
          class="obj-fit"
          src="~/assets/IMG_20190830_125556.jpg"
          alt=""
          srcset=""
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          class="obj-fit"
          src="~/assets/mmexport1535426952659.jpg"
          alt=""
          srcset=""
        />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  export default {
    head() {},
    name: 'hello',

    data() {
      return {
        images: []
      }
    },

    methods: {}
  }
</script>

<style scoped lang="scss">
  .banner {
    overflow: hidden;
    height: 56.25vw;
    .slider {
      width: auto;
      height: 100%;
      display: flex;
    }
  }

  .obj-fit {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
