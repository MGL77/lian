<template>
  <div>
    <router-view />
    <tabbar />
  </div>
</template>
<script>
import tabbar from "@/components/Tabbar.vue";
export default {
  components: {
    tabbar,
  },
};
</script>
<style lang="less">
</style>