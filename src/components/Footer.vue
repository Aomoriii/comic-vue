<template>
    <el-row :gutter="10">
        <el-col :xs="4" :sm="4" :md="4" :lg="3" :xl="1">
        </el-col>
        <el-col :xs="16" :sm="16" :md="16" :lg="18" :xl="22">
            <div class="footer">
                    <el-divider></el-divider>
            </div>
            <div class="foot-bar">
                <div class="main">
                    <span>Copyright © 2022 Aomori. All rights reserved. Powered by Aomori.</span>
                </div>
            </div>

        </el-col>
        <el-col :xs="4" :sm="4" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style >
    .footer {
        margin-top: 170px;
    }
    .main {
        /*width: 450px;*/
        margin: 0 auto;
        text-align: center;
        /*float: left;*/


    }

</style>