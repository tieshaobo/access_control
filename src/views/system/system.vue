<template>
    <el-container>
        <el-header style="height: 80px;">
            <v-header></v-header>
        </el-header>
        <div class="main">
            <router-view />  
        </div>          
    </el-container>
</template>
<script>
import vHeader from '@/views/layout/header'
export default {
    name:"system",
    components:{
        vHeader
    }
}
</script>
<style lang="scss" scoped>
   .el-header {
       height:80px;
   }
   .main{
       width:100%;
       height:$content-height;
       overflow:auto;
   }
</style>