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
                <div class="name" :title="userName">{{userName}}</div>
                <div class="icon_down"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'topNav',
    data(){
        return {
            clickIndex:-1,
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
                    path:'/system/usersControl',
                    name:'人员管理'
                },
                {
                    path:'/system/carControl',
                    name:'车库管理'
                },
                {
                    path:'/system/machineControl',
                    name:'机房管理'
                },
                {
                    path:'/system/safetyControl',
                    name:'综合安防'
                },
                {
                    path:'/system/energyControl',
                    name:'能耗管理'
                },
                {
                    path:'/system/consumeControl',
                    name:'消费管理'
                },
                {
                    path:'/system/systemControl',
                    name:'系统管理'
                }
            ]
        }
    },
    computed:{
        userName(){
            debugger
            return this.$store.state.userInfo.userName
        }
    },
    mounted(){
        this.links.forEach((item,index)=>{
            if(this.$route.path.includes(item.path)) {
                this.clickIndex = index;
            }
        })
        console.log(this.$route.path)

    },
    methods:{
        navClick(index){
            this.clickIndex = index;
        },
        getUserInfo() {

        }
    }
}
</script>
<style lang="scss" scoped>
.header {
    height:80px;
    // padding:0 20px;
    display:flex;
    padding:0 160px 0 160px;
    background: #108EE9;
    justify-content: space-between;
    .logo {
        height:40px;
        width:272px;
        margin:20px 0 20px 0;
        background:url('../../assets/img/logo.png') center center no-repeat;
        background-size:contain;
        vertical-align: middle;
    }
    .nav {
        width:840px;
        height:100%;
        &>ul {
            height:100%;
            font-family:Microsoft YaHei;
            font-weight:400;
            display:flex;
            justify-content: space-around;

            a {
                // color:#fff;
            }
            li {
                padding:10px 0px; 
                font-size:14px;
                line-height:60px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(136,199,244,1);
           
            }
            li:hover,.active {
                // background:red;
                color:#FFF;  
            }

        }
    }
    .deal {
        width:160px;
        display:flex;
        color:#fff;
        justify-content: space-around;
        .help {
            height:80px;
            line-height:80px;
            padding-right:5px;
            .el-button {
                color:#fff;
            }
        }
        .login {
            width:100px;
            display:flex;
            height:28px;
            padding:26px 5px;
            justify-content: flex-start;
            line-height:28px;
            .photo {
                width:28px;
                height:28px;
                .el-avatar {
                    width:100%;
                    height:100%;
                }
            }
            .name {
                margin-left:10px;
                // width:90px;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
                text-align: left;
                font-size:14px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(255,255,255,1);
            }
            .icon_down{
                width:6px;
                height:4px;
                background:url("../../assets/img/down.png") center center no-repeat;
                margin: 12px 0 0 10px;
            }
        }
    }
}  
</style>