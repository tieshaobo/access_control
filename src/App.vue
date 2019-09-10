<template>
  <div id="app">
      <router-view />
  </div>
</template>
<script>
export default {
  name:'App',
}
</script>
<style lang="scss">
@import "./style/reset.scss";
html,body {
  height:100%;
  width:100%;
  min-width:1300px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
  overflow:hidden;
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-shrink: 1;
  /deep/.el-container .el-header{
    padding:0;
    height:80px;
  }
}
.content {
  flex-grow:1;
  overflow:hidden;
  // overflow:auto;
  // height:100%;
  // margin-top:60px;
}


</style>
