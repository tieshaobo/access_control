<template>
    <el-container class="content">
        <el-aside width="200px">
            <left-nav></left-nav>
        </el-aside>
        <el-main>
            <v-content>
                <router-view></router-view>
            </v-content>            
        </el-main>
    </el-container>    
</template>
<script>
import leftNav from "@/components/leftNav.vue";
import vContent from '@/components/content'
export default {
    name:'doorControl',
    components:{
        vContent,
        leftNav
    },
    data(){
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
.content {
    height: $content-height;
    overflow:hidden;
    /deep/ .el-main {
        padding:20px 0 0 20px;
        background:#fff;
    }
} 
</style>