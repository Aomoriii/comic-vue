<template>
    <Header/>
    <el-row :gutter="10" id="tag">
        <el-col :xs="4" :sm="4" :md="4" :lg="3" :xl="1">
        </el-col>
        <el-col :xs="16" :sm="16" :md="16" :lg="18" :xl="22">
            <div class="wrap">
                <div class="detail">
                    <img :src="src" >
                    <h1>comic name</h1>
                    <h2>作者：Aomori</h2>
                    <div class="type">
                        <span class="type-left">状态</span>
                        <span class="type-right">连载中</span>
                        <span class="type-left">题材</span>
                        <span class="type-right">...</span>
                        <span class="type-left">人气</span>
                        <span class="type-right">123456</span>
                    </div>
                    <p style="height: auto">
                        这是由青春漫画旗手所呈现的青春期的不眠之夜。 以《富士山同学正值青春期》《猫之寺的知恩姐》描绘了如一瞬的光辉般的青春期的绪城真的最新作，是以能登为舞台所描绘的“睡不着”的高中生的青春期之夜。 因失眠而苦恼的高中男生岩太邂逅了有同样烦恼的的伊咲，放学后在现已成为仓库的学校天文台，享受片刻的睡眠并共有秘密，二人展开了一段奇妙的关系…… 读着读着就会开心地笑起来，然后和他们一同陷入恬静的睡眠中。 同时也直接描绘了男生女生从友情到恋情的青涩。 “你睡不着的夜晚，也一定有其意义” 现代，日本人里每4人就有1人有睡眠障碍， 十多岁的人群中失眠症也急剧增加， 在明明很累却睡不着的漫漫长夜里， 这部作品会告诉我们：“你已经不再孤独。”
                    </p>
                    <div class="readButton">
                        <el-button round>阅读</el-button>
                    </div>


                </div>
            </div>
            <div class="charterList">
                <el-card class="box-card" id="box-card">
                    <template #header>
                        <div class="card-header">
                        </div>
                    </template>
                        <div v-for="(item, key) in list" class="text item" id="list" v-show="key<num"><el-button class="charterButton" @click="goToCharter">{{ item  }}</el-button></div>

                    <span @click="showMore"><el-button type="danger" id="showMore_button" plain>{{ txt }}</el-button></span>
                </el-card>
            </div>

        </el-col>
        <el-col :xs="4" :sm="4" :md="4" :lg="3" :xl="1"></el-col>
    </el-row>
    <Footer/>
</template>

<script >
import { useRouter } from "vue-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
    name: "Detail",
    components: {Footer, Header},
    setup() {
        const router = useRouter();
        const  goToCharter = () => {
            router.push({
                name: "charterDetail",
            });
        };
        const src =
            'https://cover.yzkimage.com/cover/a8/f1/a8f14a15eaf89412e29742dc150e7ff9.jpeg-r0';
        return {
            src,
            goToCharter,
        }
    },
    data() {
        return {
            list: [
                '第一章',
                '第二章',
                '第三章',
                '第四章',
                '第五章',
                '第六章',
                '第七章',
                '第八章',
                '第九章',
                '第十章',
                '第十一章',
            ],
            isShow: true,
            txt: '加载更多',
            num: 8
        }
    },
    methods: {
        showMore(){
            this.isShow = !this.isShow;
            this.num = this.isShow? 8:this.list.length;
            this.txt = this.isShow? '加载更多': '收起'
        }
    }

}
</script>

<style scoped>
    * {
        /*font-family: 微软雅黑;*/
        margin: 0;
        padding: 0;
    }

        .wrap {
            width: auto;
            margin: 0 auto;
        }
        .detail {
            /*width: auto;*/
            /*min-height: 200px;*/
            /*background-color: #d3dce6;*/
            /*margin-top: 88px;*/
            /*position: relative;*/
            /*padding-left: 301px;*/
            /*padding-top: 30px;*/
            /*padding-bottom: 20px;*/
            /*border-radius: 5px;*/
            width: auto;
            height: auto;
            /*min-height: 250px;*/
            background-color: #d3dce6;
            margin-top: 88px;
            position: relative;
            padding-left: 30%;
            padding-top: 30px;
            padding-bottom: 20px;
            border-radius: 5px;
        }
        .detail img{
            width:20%;
            height: 130%;
            position: absolute;
            top: -48px;
            left: 39px;
            border-radius: 5px;
            box-shadow: 2px 2px 2px 1px #888888;
        }
        .detail h1 {
            font-weight: normal;
            color: #333;
            font-size: 30px;
            width: 80%;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            margin-top: 10px;
            /*-webkit-box-orient: vertical;*/
            /*-webkit-line-clamp:1;*/
        }
        .detail h2 {
            font-size: 14px;
            color: #666;
            font-weight: normal;
            width: 500px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            margin-top: 10px;
            /*-webkit-box-orient: vertical;*/
            /*-webkit-line-clamp:1;*/
        }
        .type{
            margin-top: 11px;
            width: 38%;
        }
        .type span.type-left{
            color: #999;
            font-size: 14px;

        }
        .type span.type-right{
            color: #666;
            font-size: 14px;


        }
        .type span:nth-of-type(2n) {
            margin-right: 38px;
        }
        .detail p {
            font-size: 14px;
            color: #666;
            line-height: 20px;
            width: 90%;
            margin-top: 13px;
            margin-right: 30px;
            word-break: break-all;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            /*省略行数*/
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;

        }
        .readButton{
            margin-top: 11px;
            width: 5%;
        }



    .charterList {
        margin-top: 100px;

    }
    .item {
        float: left;
        margin: 6px;
        width: 250px;
        /*padding: 10px;*/
    }
    .charterButton {
        width: 250px;
        margin-bottom: 5px;
    }
    #box-card {
        padding-bottom: 30px;
    }

    .demo-image__placeholder .block {
        padding: 30px 0;
        margin-top: 50px;
        text-align: center;
        /*border-right: solid 1px var(--el-border-color-base);*/
        /*display: inline-block;*/
        width: 30%;
        box-sizing: border-box;
        vertical-align: top;
    }
    .demo-image__placeholder .demonstration {
        display: block;
        color: var(--el-text-color-secondary);
        font-size: 14px;
        margin-bottom: 20px;
    }
    .demo-image__placeholder .el-image {
        padding: 5px;
        max-width: 280px;
        max-height: 450px;
    }

    .demo-image__placeholder.image-slot {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background: #f5f7fa;
        color: var(--el-text-color-secondary);
        font-size: 14px;
    }
    .demo-image__placeholder .dot {
        animation: dot 2s infinite steps(3, start);
        overflow: hidden;
    }


</style>