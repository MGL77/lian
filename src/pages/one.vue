<template>
  <div>
    <Banner />
    <KanJia />
    <boss />
  </div>
</template>
<script>
import boss from "@/pages/Boss.vue";
import Banner from "@/components/banner.vue";
import KanJia from "@/components/kanjia.vue";
export default {
  components: {
    boss,
    Banner,
    KanJia,
  },
};
</script>
<style lang="less">
</style>