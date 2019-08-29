<template>
  <!-- <div class="home" style="height:100%;">
      <div class="left">
        <left-nav></left-nav>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
  </div> -->
  <HelloWorld />
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss" scoped>
</style>
