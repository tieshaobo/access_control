<template>
    <div class="left_nav">
        <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
		@select="handleSelect"
        background-color="rgba(16, 141, 233, 1)"
        text-color="#fff"
		:default-active="defaultActive"
		:default-openeds="defaultOpens"
        active-text-color="#ffd04b">
			<el-submenu v-for="(item,index) in list" :index='`${index}`' :key="index">
                <template slot="title">
					<i class="el-icon-location"></i>
					<span>{{item.name}}</span>
                </template>
				<template v-if="item.children&&item.children.length>0">
					<el-menu-item-group >
						<router-link v-for="(child,i) in item.children" :key="`${index}-${i}`" :to="child.path">
							<el-menu-item  :index="`${index}-${i}`">{{child.name}}</el-menu-item>
						</router-link>
					</el-menu-item-group>
				</template>        
            </el-submenu>
            <!-- <el-submenu index="1" >
                <template slot="title">
					<i class="el-icon-location"></i>
					<span>导航一</span>
                </template>
                <el-menu-item-group>
                	<el-menu-item index="1-1">选项1</el-menu-item>
                	<el-menu-item index="1-2">选项2</el-menu-item>        
                	<el-menu-item index="1-3">选项3</el-menu-item>
                	<el-menu-item index="1-4">选项4</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
			<el-submenu index="2">
                <template slot="title">
					<i class="el-icon-menu"></i>
                	<span slot="title">导航二</span>
                </template>
                <el-menu-item-group>
                	<el-menu-item index="2-1">选项1</el-menu-item>
                	<el-menu-item index="2-2">选项2</el-menu-item>        
                	<el-menu-item index="2-3">选项3</el-menu-item>
                	<el-menu-item index="2-4">选项4</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
			<el-submenu index="3">
                <template slot="title">
					<i class="el-icon-menu"></i>
                	<span slot="title">导航二</span>
                </template>
                <el-menu-item-group>
                	<el-menu-item index="2-1">选项1</el-menu-item>
                	<el-menu-item index="2-2">选项2</el-menu-item>        
                	<el-menu-item index="2-3">选项3</el-menu-item>
                	<el-menu-item index="2-4">选项4</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
			<el-submenu index="4">
                <template slot="title">
					<i class="el-icon-menu"></i>
                	<span slot="title">导航二</span>
                </template>
                <el-menu-item-group>
                	<el-menu-item index="2-1">选项1</el-menu-item>
                	<el-menu-item index="2-2">选项2</el-menu-item>        
                	<el-menu-item index="2-3">选项3</el-menu-item>
                	<el-menu-item index="2-4">选项4</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
			<el-submenu index="5">
                <template slot="title">
					<i class="el-icon-menu"></i>
                	<span slot="title">导航二</span>
                </template>
                <el-menu-item-group>
                	<el-menu-item index="2-1">选项1</el-menu-item>
                	<el-menu-item index="2-2">选项2</el-menu-item>        
                	<el-menu-item index="2-3">选项3</el-menu-item>
                	<el-menu-item index="2-4">选项4</el-menu-item>
                </el-menu-item-group>
            </el-submenu> -->
        </el-menu>
    </div>
</template>
<script>
export default {
	name:'leftNav',
	props:{
		list:{
			type:Array,
			default:()=>[],
			required:true
		}
	},
    data(){
        return {
			defaultOpens:[0],
			defaultActive:'0-0',
			active:'',
			defaultList:[
				{
					name:"门禁报表",
					path:'',
					children:[
						{
							name:"大屏实时统计",
							path:'/system/doorControl/about'
						},
						{
							name:"大屏实时统计",
							path:'/system/doorControl/'
						},
						{
							name:"大屏实时统计",
							path:'/system/doorControl/about'
						},
						{
							name:"大屏实时统计",
							path:'/system/doorControl/'
						},
						{
							name:"大屏实时统计",
							path:'/system/doorControl/about'
						}
					]
				},
				{
					name:'门禁控制',
					path:'',
					children:[
						{
							name:"大屏实时统计",
							path:''
						},
						{
							name:"大屏实时统计",
							path:''
						},
						{
							name:"大屏实时统计",
							path:''
						},
						{
							name:"大屏实时统计",
							path:''
						},
						{
							name:"大屏实时统计",
							path:''
						}
					]
				}
			]
        }
	},
	mounted(){
		this.$emit('getActive',this.defaultActive)
	},
	methods: {
      	handleOpen(key, keyPath) {
        	// console.log(key, keyPath);
      	},
      	handleClose(key, keyPath) {
        	// console.log(key, keyPath);
		},
		handleSelect(key, keyPath) {
			this.$emit('getActive',key)
			// console.log(key, keyPath);
		}
    }
}
</script>
<style lang="scss" scoped>
    .left_nav {
        width:100%;
		height:100%;
		background-color:rgba(16, 141, 233, 1);
		overflow-x:hidden;
		/deep/.el-menu-vertical-demo {
			width:100%;
			.el-submenu__title,
			.el-menu-item-group__title {
				text-align:left;
			}
			.el-menu-item-group__title {
				padding:0;
			}
		}
		
    }
</style>