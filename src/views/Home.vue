<!-- 首页 -->
<template>
    <Header/>

    <!-- 走马灯 -->
    <el-row :gutter="10">
        <el-col :xs="4" :sm="4" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
        <el-col :xs="16" :sm="16" :md="16" :lg="18" :xl="22">
            <div class="grid-content" id="carousel">

                <el-carousel :interval="4000" :height="Height + 'px'" type="card" >
                    <el-carousel-item v-for="item in item" :key="item">
                        <img ref="Height" :src="item.url" alt="..." @load="imgLoad" style="width: 100%"/>
                    </el-carousel-item>
                </el-carousel>

        </div></el-col>
        <el-col :xs="4" :sm="4" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
    <!-- 热门漫画列表 -->
    <el-row :gutter="10">
        <el-col :xs="4" :sm="4" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
        <el-col :xs="16" :sm="16" :md="16" :lg="18" :xl="22">
            <div class="tag">
                <p>热门</p>
            </div>
            <div class="rank">

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
            </div>
        </el-col>
        <el-col :xs="4" :sm="4" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
    <!-- 最近更新列表 -->
    <el-row :gutter="10">
        <el-col :xs="4" :sm="4" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
        <el-col :xs="16" :sm="16" :md="16" :lg="18" :xl="22">
            <div class="tag">
                <p>更新</p>
            </div>
            <div class="rank">

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
            </div>
        </el-col>
        <el-col :xs="4" :sm="4" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>

    <Footer/>
</template>

<script>
    import { useRouter } from  "vue-router";
    import Header from "../components/Header";
    import Footer from "../components/Footer";
    import Detail from "./Detail";
    export default {
        name: "Home",
        components: {Footer, Header, Detail},
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
        data() {
            return {
                Height: "",
                // 走马灯图片数据
                item: [
                    {url : require("@/img/1.jpg")},
                    {url: require("@/img/2.jpg")},
                    {url : require("@/img/3.png")},
                    {url : require("@/img/4.jpg")},
                    {url : require("@/img/5.jpg")},
                ]
            };
        },
        mounted() {
            this.imgLoad();
            window.addEventListener('resize',() => {
                this.Height = this.$refs.Height[0].height;
                this.imgLoad();
            },false)
        },
        methods: {
            imgLoad(){
                this.$nextTick(()=>{
                    this.Height = this.$refs.Height[0].height;
                    console.log(this.$refs.Height[0].height);
                })
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

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
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
    .image {
        width: 100%;
        /*height: 100%;*/
        /*max-width: 100%;*/
        /*max-height: 100%;*/
        display: block;
    }

    #carousel {
        margin-top: 70px;
    }
    .tag {
        width: 50px;
        height: 20px;
        margin-top: 20px;
        font-size: large;
    }
    .rank {
        margin: 20px;
    }

</style>