<!-- 漫画章节详情页面（就是开始看漫画图片的页面） -->
<template>
    <Header/>
    <Pictures/>
    <Footer/>
</template>

<script>

import Footer from "../components/Footer";
import Header from "../components/Header";
import Pictures from "../components/Pictures";

export default {
    name: "charterDetail",
    components: {Pictures, Footer, Header}
}
</script>

<style scoped>

</style>