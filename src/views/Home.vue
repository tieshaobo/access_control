<template>
<div>
  <tag-div :id="1">
    gaidfhasdfasdfnadfadfksdafjos
  </tag-div>
  <HelloWorld /> 
</div>
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import tagDiv from "@/views/About.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    tagDiv
  }
};
</script>

<style lang="scss" scoped>
</style>
