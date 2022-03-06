<template>

    <el-row :gutter="10">
        <el-col :xs="4" :sm="4" :md="4" :lg="3" :xl="1">
        </el-col>
        <el-col :xs="16" :sm="16" :md="16" :lg="18" :xl="22">
            <div class="grid-content bg-purple">
                <el-row >

                    <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
                        <div class="grid-content bg-purple-light">
                            <img class="logo" src="https://hyaki.fun/usr/themes/Akina/images/logo.png">
                        </div>
                    </el-col>
                    <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="7">
                        <div class="grid-content bg-purple-light">
                            <el-breadcrumb class="menu" separator="|" >
                                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                                <!--                                <el-breadcrumb-item @click="goToDetail">首页</el-breadcrumb-item>-->
                                <el-breadcrumb-item :to="{ path: '/category' }">分类</el-breadcrumb-item>
                                <el-breadcrumb-item>关于</el-breadcrumb-item>
                            </el-breadcrumb>
                        </div>
                    </el-col>
                    <el-col :xs="7" :sm="7" :md="7" :lg="7" :xl="6">
                        <div class="grid-content bg-purple-light">
                            <el-input class="search-input" placeholder="请输入内容">
                            </el-input>
                        </div>
                    </el-col>
                    <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="2">
                        <div class="grid-content bg-purple-light">
                            <el-button id="search-button" type="danger">◯</el-button>
                        </div>
                    </el-col>


                    <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                        <el-dropdown id="drop">
                            <span class="el-dropdown-link">
                              <el-avatar id="avatar"
                                         src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                              ></el-avatar>
                            </span>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item>个人中心</el-dropdown-item>
                                    <el-dropdown-item>设置</el-dropdown-item>
                                    <el-dropdown-item>退出登录</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>




                    </el-col>
                </el-row>
            </div>
        </el-col>

        <el-col :xs="4" :sm="4" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>

</template>

<script >

export default {
    name: "Header",
    setup() {
        const errorHandler = () => true

        return {
            errorHandler,


        }

    },
    data() {
        return {

        }
    }
}
</script>

<style  >
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
        text-align: center;
    }
    .bg-purple {
        /*background: #d3dce6;*/
    }
    .bg-purple-light {
        /*background: #e5e9f2;*/
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .logo {
        width: 80px;
        height: 60px;
        max-width: 100%;
        max-height: 100%;
        float: left;
        background-size: contain;
        /*display:flex;*/
        justify-content: right;
        /*align-items: center;*/
    }

    .search-input {
        margin-top: 10px;
    }
    #search-button {
        margin-top: 10px;
        float: left;
        width: 50%;
    }
    #search-button span{
        text-align: center;
    }

    .menu {
        margin-top: 20px;
        margin-right: 30px;
        /*float: right;*/

    }
    .common-layout
    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
    .tag p {
        width: 50px;
        height: 20px;
        font-size: large;
    }
  #avatar {
      margin-top: 10px;
      float: right;
  }
    #drop {
        float: right!important;
        margin-top: 10px;
        width: 30%;
    }


</style>
