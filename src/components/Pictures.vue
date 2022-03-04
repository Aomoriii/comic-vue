<template>
    <el-row :gutter="10" id="tag">
        <el-col :xs="4" :sm="4" :md="4" :lg="3" :xl="1">
        </el-col>

        <el-col :xs="16" :sm="16" :md="16" :lg="18" :xl="22">

<!--            <div class="deit">-->
<!--                <div class="crumbs">-->
<!--                    <el-breadcrumb separator="/">-->
<!--                        <el-breadcrumb-item><i class="el-icon-date"></i> 数据管理</el-breadcrumb-item>-->
<!--                        <el-breadcrumb-item>用户列表</el-breadcrumb-item>-->
<!--                    </el-breadcrumb>-->
<!--                    <div class="cantainer">-->
<!--                        <el-table style="width: 100%;"-->
<!--                                  :data="userList.slice((currentPage-1)*pagesize,currentPage*pagesize)"-->
<!--                        >-->
<!--                            <el-table-column label="id" prop="id" width="180">-->
<!--                            </el-table-column>-->
<!--                            <el-table-column label="日期" prop="date" width="180">-->
<!--                            </el-table-column>-->
<!--                            <el-table-column label="用户姓名" prop="name" width="180">-->
<!--                            </el-table-column>-->
<!--                        </el-table>-->
<!--                        <el-pagination-->
<!--                                background-->
<!--                                @size-change="handleSizeChange"-->
<!--                                @current-change="handleCurrentChange"-->
<!--                                :current-page="currentPage"-->
<!--                                :page-sizes="[5, 10, 20, 40]"-->
<!--                                :page-size="pagesize"-->
<!--                                layout="total, sizes, prev, pager, next, jumper"-->
<!--                                :total="userList.length">-->
<!--                        </el-pagination>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->

            <el-card class="box-card" style="width: 100%;"
                     :data="userList.slice((currentPage-1)*pagesize,currentPage*pagesize)">
                    <el-image :src="date"/>


            </el-card>
                <el-pagination
                        background
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="[5, 10, 20, 40]"
                        :page-size="pagesize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="userList.length">
                </el-pagination>



        </el-col>

        <el-col :xs="4" :sm="4" :md="4" :lg="3" :xl="1">

        </el-col>
    </el-row>
</template>

<script>
export default {
    name: "Pictures",
    data(){
        return{
            currentPage: 1,
            pagesize: 5,
            userList: []
        }
    },
    created() {
        this.handleUserList()
    },
    methods: {
        // 初始页currentPage、初始每页数据数pagesize和数据data
        handleSizeChange: function(size) {
            this.pagesize = size
            console.log(this.pagesize)  //每页下拉显示数据
        },
        handleCurrentChange: function(currentPage) {
            this.currentPage = currentPage
            console.log(this.currentPage)  //点击第几页
        },
        handleUserList() {

            // let data = [
            //     {
            //         url: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
            //     },
            //     {
            //         url: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
            //     },
            //     {
            //         url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
            //     },
            //     {
            //         url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
            //     },
            // ]
            let data = [
                {
                    id:1,
                    date:"https://cover.yzkimage.com/cover/a8/f1/a8f14a15eaf89412e29742dc150e7ff9.jpeg-r0",
                    name:123,
                },
                {
                    id:2,
                    date:"2020-01-22 12:12:12",
                    name:123,
                },
                {
                    id:3,
                    date:"2020-01-22 12:12:12",
                    name:123,
                },
                {
                    id:4,
                    date:"2020-01-22 12:12:12",
                    name:123,
                },
                {
                    id:5,
                    date:"2020-01-22 12:12:12",
                    name:123,
                },
                {
                    id:6,
                    date:"2020-01-22 12:12:12",
                    name:123,
                },
                {
                    id:7,
                    date:"2020-01-22 12:12:12",
                    name:123,
                },
                {
                    id:8,
                    date:"2020-01-22 12:12:12",
                    name:123,
                },
                {
                    id:9,
                    date:"2020-01-22 12:12:12",
                    name:123,
                },
                {
                    id:10,
                    date:"2020-01-22 12:12:12",
                    name:123,
                },
            ]
            this.userList = data
        }
    }
}
</script>

<style scoped>
    .demo-image__lazy {
        height: 1400px;
        overflow-y: auto;
    }
    .demo-image__lazy .el-image {
        display: block;
        min-height: 200px;
        margin-bottom: 10px;
    }
    .demo-image__lazy .el-image:last-child {
        margin-bottom: 0;
    }
</style>