<template>
    <body id="login-page">
    <el-form :model="loginForm" :rules="rules" ref="loginForm" class="login-container" label-position="left" label-width="0px">
        <h3 class="login_title">用户登录</h3>
        <el-form-item prop="loginName">
            <el-input
                    type="text"
                    v-model="loginForm.loginName"
                    auto-complete="off"
                    placeholder="用户名"
            ></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input
                    type="password"
                    v-model="loginForm.password"
                    auto-complete="off"
                    placeholder="密码"
            ></el-input>
        </el-form-item>
        <el-form-item style="width: 100%">
            <el-button
                    type="primary"
                    style="width: 40%;  border: none"
                    @click="submitForm('loginForm')"
            >登录</el-button
            >
            <el-button
                    id="sign_up_button"
                    style="width: 40%"
                    @click="goToSignup"
            >注册</el-button
            >
        </el-form-item>

    </el-form>
    </body>
</template>

<script>
import { useRouter } from "vue-router";
export default {
    name: "Signin",
    setup() {
        const router = useRouter();
        const  goToSignup = () => {
            router.push({
                name: "Signup",
            });
        };
        return {
            goToSignup,
        }
    },
    data() {
        const validateLoginName = (rule,value,callback)=> {
            if (value ===''){
                return callback(new Error("用户名不能为空"));
            }
            else {
                callback();
            }
        };
        const validatePassword = (rule,value,callback) => {
            if (value ===''){
                callback(new Error('密码不能为空'));
            }
            else {
                callback();
            }
        };
        return {
            loginForm: {
                loginName: '',
                password: '',
            },
            rules: {
              loginName: [{
                  validator: validateLoginName,
                  trigger: 'blur'
              }],
              password: [{
                  validator: validatePassword,
                  trigger: 'blur'
              }]
            },
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    if(this.loginForm.loginName !=="admin" || this.loginForm.password !=="123456"){
                        this.$message.error('账号密码不正确');
                        return false;
                    }
                    else {
                        this.$message({
                            message: '登录成功',
                            type: 'success'
                        });
                        this.$router.push({name: "Home"})
                    }
                }
                else{
                    this.$message.error('登录失败');
                    return false;
                }
            });
        },
    },

}
</script>

<style scoped>
    #login-page {
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
    .login-container {
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

    .login_title {
        margin: 0px auto 40px auto;
        text-align: center;
        color: #505458;
    }
    /*:root {*/
    /*    --el-color-primary:#53a8ff !important;*/
    /*}*/
    .el-button:hover {
        color: #53a8ff !important;
    }
    .el-button--primary:hover {
        color: #f4f5f7 !important;
    }
</style>