<template>
    <Header/>
    <Tags/>
    <Footer/>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import Tags from "../components/Tags";
export default {
    name: "Category",
    components: {Tags, Footer, Header}
}
</script>

<style scoped>
.tag{
    margin-top: 30px;
}
</style>