<template>
    <div class="login">
        <div class="login-con">
            <Card :bordered="false">
                <div class="Ctop">
                    <img src="https://file.iviewui.com/dev-dist/ed8b91b1778a790780603244055ff16d.png" alt="">
                </div>
                <div class="form-con">
                    <Form ref="loginForm" :model="loginForm" :rules="rules">
                        <!-- 账号 -->
                        <FormItem prop="Account">
                            <Input v-model="loginForm.Account" placeholder="请输入账号"/>
                        </FormItem>
                        <!-- 密码 -->
                        <FormItem prop="Password">
                            <Input type="password" v-model="loginForm.Password" placeholder="请输入密码"/>
                        </FormItem>
                        <!-- 登录 -->
                        <FormItem>
                            <Button @click="onSubmit('loginForm')" type="primary" long>登录</Button>
                        </FormItem>
                        <!-- 回跳 -->
                        <FormItem>
                            <Button @click="login" type="primary" long>回跳</Button>
                        </FormItem>
                    </Form>
                </div>
            </Card>
        </div>
        <Col class="demo-spin-col" span="24" v-if="demoSpinColShow">
            <Spin fix>
                <Icon type="load-a" size=36 class="demo-spin-icon-load"></Icon>
            </Spin>
        </Col>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                demoSpinColShow: false,
                loginForm: {
                    Account: null,
                    Password: null
                },
                rules: {
                    // 账号不能为空
                    Account: [
                        {
                            required: true,
                            message: '账号不能为空',
                            trigger: "blur"
                        }
                    ],
                    // 密码不能为空
                    Password: [
                        {
                            required: true,
                            message: '密码不能为空',
                            trigger: "blur"
                        }
                    ]
                }
            };
        },
        created() {
            this.$store.commit('Login')
            //点击键盘 Enter键---执行登陆
            var _this = this;
            document.onkeydown = function (e) {
                var key = window.event.keyCode;
                if (key == 13) {
                    _this.onSubmit("loginForm");
                }
            };
        },
        methods: {
            onSubmit(name) {
                this.$refs[name].validate(valid => {
                    if (valid) {
                        if(this.loginForm.Account!=='admin' && this.loginForm.Password!=='a'){
                            this.$Message.info('账号密码不正确，请重新输入');
                        }else{
                            this.$router.push({
                                name: "home"
                            });
                        }
                    }
                })
            },
            async login(){

                // window.isLogin = true
                const ret = await this.$store.dispatch('submitLogin')
                // this.$store.state.isLogin
                if(ret){
                    const {redirect} = this.$route.query
                    // const redirect= this.$route.query.redirect  和上面等效
                    console.log(redirect,'和上面等效')
                    // 有回调地址跳转
                    if(redirect){
                        this.$router.push(redirect)
                    }else{
                        this.$router.push('/')
                    }
                }else{
                    alert("登录失败")
                }
            }
        }
    }
</script>
<style scoped>
    .login {
        width: 100%;
        height: 100%;
        background: url("./assets/bg.jpg");
        background-size: 100% 100%;
        background-position: center;
        position: fixed;
    }

    .login-con {
        position: fixed;
        width: 360px;
        height: 350px;
        top: 50%;
        left: 80%;
        margin-left: -180px;
        margin-top: -175px;
    }

    .Ctop img {
        width: 20%;
    }

    .Ctop h3 {
        font-weight: bold;
        line-height: 20px;
    }

    .Cbody {
        position: absolute;
        top: 50%;
        width: 85%;
        margin-top: -70px;
    }

    .form-con {
        margin-top: 20px;
    }

    .ivu-input {
        display: inline-block;
        width: 100%;
        height: 40px;
        line-height: 40px;
        padding-left: 10px;
        font-size: 12px;
        border-radius: 5px;
        color: #495060;
        background: #ebefee;
    }

    .login-tip {
        text-align: center;
    }

    .ivu-btn {
        height: 40px;
    }

    .demo-spin-icon-load {
        animation: ani-demo-spin 1s linear infinite;
    }

    @keyframes ani-demo-spin {
        from {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(180deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    .demo-spin-col {
        height: 100%;
        position: fixed;
        border: 1px solid #eee;
        z-index: 9999;
    }
</style>

