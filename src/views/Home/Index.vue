<template>
   <div id="app">
     <!--当前用户：-->
     <!--{{$store.state.userinfo.user.username}}-->

     <el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <div class="top-text">
      <h1 class="title">管理系统</h1>
    </div>

    <el-menu :default-openeds="['1', '3']" router
             background-color="#545c64" text-color="#fff"
              active-text-color="#ffd04b" >
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group>
          <el-menu-item index="/userlist">选项1</el-menu-item>
          <el-menu-item index="/useradd">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>


    </el-menu>
  </el-aside>

       <!--右侧路由板块-->
  <el-container>
  <router-view></router-view>   <!--路由入口-->
  </el-container>
</el-container>
   </div>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-menu{
     border-right: 0px;
  }
  .el-aside {
    color: #333;
  }

  html,body, #app, .index{
     height: 100%;
  }
  .el-container {
    height: 100% !important;
  }
  .el-aside{
     background-color:#545c64 !important;
  }
.top-text {
   text-align:center;
   padding: 8px 0px;
   background-color: #333;
}
  .top-text .title{
    color:#fff;
    font-weight: bold;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(1).fill(item)
      }
    }
  };
</script>
