<template>
    <div class="header">
        <div class="logo">
            <!-- <img src="../../assets/img/zgt_logo.png" alt="logo"> -->
        </div>
        <div class="nav">
            <ul>
                <router-link v-for="(link,index) in links" :to="link.path" :Key="link.path">
                    <li :class="[index==clickIndex?'active':'']" @click="navClick(index)">
                        {{link.name}}
                    </li> 
                </router-link>             
            </ul>
        </div>
        <div class="deal">
            <div class="help">
                <el-button type="text" icon="el-icon-question">搜索</el-button>
            </div>
            <div class="login">
                <div class="photo">
                    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                </div>               
                <div class="name">name</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'topNav',
    data(){
        return {
            clickIndex:0,
            links:[
                {
                    path:'/system/leaderDrive',
                    name:'领导驾驶舱'
                },
                {
                    path:'/system/doorControl',
                    name:'门禁管理'
                },
                {
                    path:'/',
                    name:'人员管理'
                },
                {
                    path:'/',
                    name:'车库管理'
                },
                {
                    path:'/',
                    name:'机房管理'
                },
                {
                    path:'/',
                    name:'综合安防'
                },
                {
                    path:'/',
                    name:'能耗管理'
                },
                {
                    path:'/',
                    name:'消费管理'
                },
                {
                    path:'/',
                    name:'系统管理'
                }
            ]
        }
    },
    methods:{
        navClick(index){
            this.clickIndex = index;
        }
    }
}
</script>
<style lang="scss" scoped>
.header {
    height:60px;
    // padding:0 20px;
    display:flex;
    background: rgba(24, 144, 255, 1);
    justify-content: space-between;
    .logo {
        height:100%;
        width:200px;
        background:url('../../assets/img/zgt_logo.png') center center no-repeat;
        background-size:contain;
        vertical-align: middle;
    }
    .nav {
        width:auto;
        height:100%;
        &>ul {
            height:100%;
            line-height:40px;
            display:flex;
            justify-content: flex-start;
            a {
                color:#fff;
            }
            li {
                padding:10px;
                color:#434343; 
                font-size:16px;
                font-weight: bold;            
            }
            li:hover,.active {
                // background:red;
                color:#FFF;  
            }

        }
    }
    .deal {
        width:200px;
        display:flex;
        color:#fff;
        justify-content: space-around;
        .help {
            height:60px;
            line-height:60px;
            .el-button {
                color:#fff;
            }
        }
        .login {
            width:120px;
            display:flex;
            height:40px;
            padding:10px;
            justify-content: flex-start;
            line-height:40px;
            .photo {
                width:40px;
                height:40px;
            }
            .name {
                margin-left:10px;
                width:90px;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
        }
    }
}  
</style>