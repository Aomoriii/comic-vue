<template>
    <el-row :gutter="10" id="tag">
        <el-col :xs="4" :sm="4" :md="4" :lg="3" :xl="1">
        </el-col>
        <el-col :xs="16" :sm="16" :md="16" :lg="18" :xl="22">
            <el-tabs>
                <el-tab-pane label="User">
                    <el-col
                            v-for="(o) in 12"
                            :key="o"
                            :span="4"
                            :gutter="10"
                    >
                        <el-card :body-style="{ padding: '0px' }">
                            <img src="https://cover.yzkimage.com/cover/a8/f1/a8f14a15eaf89412e29742dc150e7ff9.jpeg-r0" class="image"/>
                            <div style="padding: 5px">
                                <el-button type="text" @click="goToDetail">comic name</el-button>
                            </div>
                        </el-card>


                        <br>
                    </el-col>
                    <el-pagination small layout="prev, pager, next" :total="50"> </el-pagination>
                    <el-pagination
                            small
                            background
                            layout="prev, pager, next"
                            :total="50"
                            class="mt-4"
                    >
                    </el-pagination>
                </el-tab-pane>
                <el-tab-pane label="Config">
                    <el-col
                            v-for="(o) in 12"
                            :key="o"
                            :span="4"
                            :gutter="10"
                    >
                        <el-card :body-style="{ padding: '0px' }">
                            <img src="https://cover.yzkimage.com/cover/a8/f1/a8f14a15eaf89412e29742dc150e7ff9.jpeg-r0" class="image"/>
                            <div style="padding: 5px">
                                <el-button type="text" @click="goToDetail">comic name</el-button>
                            </div>
                        </el-card>


                        <br>
                    </el-col>
                    <el-pagination
                            small
                            background
                            layout="prev, pager, next"
                            :total="50"
                            class="mt-4"
                    >
                    </el-pagination>
                </el-tab-pane>
                <el-tab-pane label="Role">
                    <el-col
                            v-for="(o) in 12"
                            :key="o"
                            :span="4"
                            :gutter="10"
                    >
                        <el-card :body-style="{ padding: '0px' }">
                            <img src="https://cover.yzkimage.com/cover/a8/f1/a8f14a15eaf89412e29742dc150e7ff9.jpeg-r0" class="image"/>
                            <div style="padding: 5px">
                                <el-button type="text" @click="goToDetail">comic name</el-button>
                            </div>
                        </el-card>


                        <br>
                    </el-col>
                    <el-pagination
                            small
                            background
                            layout="prev, pager, next"
                            :total="50"
                            class="mt-4"
                    >
                    </el-pagination>
                </el-tab-pane>
                <el-tab-pane label="Task">
                    <el-col
                            v-for="(o) in 12"
                            :key="o"
                            :span="4"
                            :gutter="10"
                    >
                        <el-card :body-style="{ padding: '0px' }">
                            <img src="https://cover.yzkimage.com/cover/a8/f1/a8f14a15eaf89412e29742dc150e7ff9.jpeg-r0" class="image"/>
                            <div style="padding: 5px">
                                <el-button type="text" @click="goToDetail">comic name</el-button>
                            </div>
                        </el-card>


                        <br>
                    </el-col>
                    <el-pagination
                            small
                            background
                            layout="prev, pager, next"
                            :total="50"
                            class="mt-4"
                    >
                    </el-pagination>
                </el-tab-pane>
            </el-tabs>
        </el-col>
        <el-col :xs="4" :sm="4" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
</template>

<script  >

import {useRouter} from "vue-router";

export default {
    name: "Tags",
    setup() {
        const router = useRouter();
        const goToDetail = () => {
            router.push({
                name: "Detail",
            });
        };
        return {
            goToDetail,
        }
    },
}

</script>

<style scoped>
#tag{
    margin-top: 60px;
}
.demo-tabs > .el-tabs__content {
    padding: 32px;
    background-color: #f4f5f7;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}
</style>