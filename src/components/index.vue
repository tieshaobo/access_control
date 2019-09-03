<template>
    <el-container class="content">
        <el-aside width="200px">
            <left-nav :list="navList" @getActive="getActive"></left-nav>
        </el-aside>
        <el-main>
            <template v-if="breadcrumbList.length>0">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item v-for="(item,index) in breadcrumbList" :key="index" :to="{ path: item.path }">{{item.name}}</el-breadcrumb-item>              
                </el-breadcrumb>
            </template>           
            <router-view></router-view>
        </el-main>
    </el-container>    
</template>
<script>
import leftNav from "@/components/leftNav.vue";
// import vContent from '@/components/content'
export default {
    name:'doorControl',
    components:{
        // vContent,
        leftNav
    },
    props:{
        navList:{
            type:Array,
			default:()=>[],
			required:true
        }
    },
    data(){
        return {
            breadcrumbList:[]
        }
    },
    methods:{
        getActive(active){//active 是 "0-0"的格式
            this.breadcrumbList = [];
            let arr = active.split("-");
            this.breadcrumbList.push({
                name:this.navList[arr[0]].name,
                path:this.navList[arr[0]].path
            })
            if(this.navList[arr[0]].children&&this.navList[arr[0]].children.length>0){
                this.breadcrumbList.push({
                    name:this.navList[arr[0]].children[arr[1]].name,
                    path:this.navList[arr[0]].children[arr[1]].path
                })
            }           
        }
    }
}
</script>
<style lang="scss" scoped>
.content {
    height: $content-height;
    overflow:hidden;
    /deep/.el-main {
        padding:30px 20px 30px 20px;
        background:#fff;
        position:relative;
        .el-breadcrumb {
            position:fixed;
            top:60px;
            background:#fff;
            width:calc(100% - 240px);
            height:30px;
            line-height:30px;
        }
    }
} 
</style>