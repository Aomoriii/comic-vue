<template>
    <body id="signup-page">
    <el-form class="signup-container" label-position="left" label-width="0px">
        <h3 class="signup_title">注册</h3>
        <el-form-item>
            <el-input
                    type="text"
                    v-model="signupForm.signupName"
                    auto-complete="off"
                    placeholder="邮箱"
            ></el-input>
        </el-form-item>
        <el-form-item>
            <el-input
                    type="password"
                    v-model="signupForm.password"
                    auto-complete="off"
                    placeholder="密码"
            ></el-input>
        </el-form-item>
        <el-form-item style="width: 100%">
            <el-button
                    type="primary"
                    style="width: 40%;  border: none"
            >注册</el-button
            >
        </el-form-item>
    </el-form>
    </body>
</template>

<script>
export default {
    name: "Signup",
    data() {
        return {
            signupForm: {
                signupName: "",
                password: "",
            },
            responseResult: [],
        };
    },
    methods: {},
}
</script>

<style scoped>
    #signup-page {
        /*background: url("../assets/img/bg.jpg") no-repeat;*/
        background-position: center;
        height: 100%;
        width: 100%;
        background-size: cover;
        position: fixed;
    }
    body {
        margin: 0px;
    }
    .signup-container {
        border-radius: 15px;
        background-clip: padding-box;
        margin: 150px auto;
        width: 350px;
        padding: 35px 35px 15px 35px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
        /*margin-top: 150px;*/
    }

    .signup_title {
        margin: 0px auto 40px auto;
        text-align: center;
        color: #505458;
    }
</style>