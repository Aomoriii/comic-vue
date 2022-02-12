<template>

    <el-row :gutter="10">
        <el-col :xs="4" :sm="4" :md="4" :lg="3" :xl="1">
        </el-col>
        <el-col :xs="16" :sm="16" :md="16" :lg="18" :xl="22">
            <div class="grid-content bg-purple">
                <el-row >
<!--                    <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">-->
<!--&lt;!&ndash;                        <div class="grid-content bg-purple-light">&ndash;&gt;-->
<!--&lt;!&ndash;                            <img class="logo" src="https://hyaki.fun/usr/themes/Akina/images/logo.png">&ndash;&gt;-->
<!--&lt;!&ndash;                        </div>&ndash;&gt;-->
<!--                    </el-col>-->
                    <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10">
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
<!--                            <button class="btn" >-->
<!--                                <i class="el-icon-search"></i>-->
<!--                            </button>-->
                            <el-button id="search-button" type="danger">◯</el-button>
                        </div>
                    </el-col>


                    <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
                        <!--                        <div class="grid-content bg-purple-light">-->
                        <!--                            <img class="logo" src="https://hyaki.fun/usr/themes/Akina/images/logo.png">-->
                        <!--                        </div>-->
                    </el-col>
                </el-row>
            </div>
        </el-col>
        <el-col :xs="4" :sm="4" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>

</template>

<script >

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
    /*@media screen and (min-width: 1200px) {*/
    /*    .btn {*/
    /*        float: left;*/
    /*        width: 50px;*/
    /*        margin-top: 10px;*/
    /*        background-color: #ECA23E;*/
    /*        border-top-right-radius: 30px;*/
    /*        border-bottom-right-radius: 30px;*/
    /*        height: 40px;*/
    /*        border: none;*/
    /*    }*/
    /*}*/
    /*@media screen and (max-width: 800px) {*/
    /*    .btn {*/
    /*        float: left;*/
    /*        width: 38px;*/
    /*        margin-top: 10px;*/
    /*        background-color: #ECA23E;*/
    /*        border-top-right-radius: 10px;*/
    /*        border-bottom-right-radius: 10px;*/
    /*        height: 40px;*/
    /*        border: none;*/
    /*    }*/
    /*}*/

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

</style>
