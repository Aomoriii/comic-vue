<template>
    <el-row :gutter="10" id="tag">
        <el-col :xs="4" :sm="4" :md="4" :lg="3" :xl="1">
        </el-col>

        <el-col :xs="16" :sm="16" :md="16" :lg="18" :xl="22">


            <el-table :data="userList.slice((currentPage-1)*pagesize,currentPage*pagesize)">
                <el-table-column prop="url" align="center">
                    <template #default="scope">
                            <el-image :src="scope.row.url"/>
                    </template>
                </el-table-column>
            </el-table>
                <!--   翻页  -->
                <el-pagination
                        background
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :page-sizes="[100]"
                        :current-page="currentPage"
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
            pagesize: 1,
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
            //每页下拉显示数据
            console.log(this.pagesize)
        },
        handleCurrentChange: function(currentPage) {
            this.currentPage = currentPage
            //点击第几页
            console.log(this.currentPage)
        },
        handleUserList() {
            // 临时数据
            let src = [
                {
                    url: "https://dogemanga.com/images/pages/y7_SkEBa.jpg",
                },
                {
                    url: 'https://dogemanga.com/images/pages/VQg0-dBo.jpg',
                },
                {
                    url: 'https://dogemanga.com/images/pages/WuGXbDqy.jpg',
                },
                {
                    url: 'https://dogemanga.com/images/pages/Wj6GqGVT.jpg',
                },
                {
                    url: 'https://dogemanga.com/images/pages/dmCyJZok.jpg',
                },
                {
                    url: 'https://dogemanga.com/images/pages/IT9KJUgd.jpg',
                },
                {
                    url: 'https://dogemanga.com/images/pages/9yzSSFBb.jpg',
                },
                {
                    url: 'https://dogemanga.com/images/pages/a5n9jCXQ.jpg',
                },
            ]
            this.userList = src
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
    .el-table--enable-row-hover .el-table__body tr:hover>td {
        background-color: #f4f5f7 !important;
    }
    tr {pointer-events: none;}

    .el-table{
        --el-table-border-color: none !important;
        --el-table-row-hover-background-color: none !important;
        margin-top: 30px;
    }
    .el-table th, .el-table tr,.el-table td{
        border: 0;
        background-color: transparent !important;
        }

    tr{
        pointer-events: none !important;
    }
    .el-pagination {
        margin-top: 30px;
    }


</style>