<template>
  <div class="banner">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item) in banner" :key="item.id">
        <img :src="item.picUrl" alt />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banner: [],
    };
  },
  async created() {
    let D = await this.axios.get("https://api.it120.cc/small4/banner/list");
    this.banner = D.data.data;
    console.log(this.banner);
  },
};
</script>

<style lang="less">
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  //   background-color: #39a9ed;
}
.banner {
  img {
    width: 4rem;
  }
}
</style>