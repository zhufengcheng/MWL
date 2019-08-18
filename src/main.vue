<template>
    <div id="app">
        <div class="layout">
            <Layout>
                <Header>
                    <Menu mode="horizontal" theme="light" active-name="1">
                        <div class="layout-logo">
                            <img src="https://file.iviewui.com/dev-dist/ed8b91b1778a790780603244055ff16d.png" alt="">
                        </div>
                        <div class="layout-nav">
                            <ButtonGroup>
                                <Button @click="changeLangEvent"><span
                                        v-if="lang === 'zh-CN'">{{$t('m.language')}}</span><span v-else>{{$t('m.language')}}</span>
                                </Button>
                                <Button @click="quit">{{$t('m.exitSystem')}}</Button>
                            </ButtonGroup>
                        </div>
                    </Menu>
                </Header>
                <Layout>
                    <Sider hide-trigger>
                        <Menu :open-names="['0']" active-name="4-1" theme="light" width="auto" accordion
                              @on-select="menuSelect">
                            <MenuItem :name="0">
                                <Icon type="ios-home" />
                                <router-link to="/home">首页</router-link>
                            </MenuItem>
                            <Submenu :name="item.Name" v-for="(item, index) in menuList" :key="index">
                                <template slot="title">
                                    <Icon :type="item.Icon"></Icon>
                                    <router-link :to="item.Router">{{item.Title}}</router-link>
                                </template>
                                <MenuItem  :name="itemOne.Content" v-for="(itemOne, indexOne) in item.MenuItemData"
                                          :key="indexOne">
                                    <router-link :to="itemOne.Router">{{itemOne.Content}}</router-link>
                                </MenuItem>
                            </Submenu>
                        </Menu>
                    </Sider>
                    <Layout class="layoutCon">
                        <Content class="layoutCon_Con">
                            <Breadcrumb class="breadcrumb">
                                <BreadcrumbItem to="/home">Home</BreadcrumbItem>
                                <BreadcrumbItem v-if="subRoute!==''">{{subRoute}}</BreadcrumbItem>
                            </Breadcrumb>
                            <Alert closable v-if="closableShow" @on-close="closable">{{testNum}}</Alert>
                            <!-- 路由出口 路由匹配到的组件将渲染在这里 -->
                            <router-view></router-view>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        components: {},
        data() {
            return {
                lang: 'zh-CN',
                theme2: 'dark',
                menuList: [
                    {
                        Name: '2',
                        Title: '文档',
                        Icon: 'ios-book',
                        Router: '',
                        MenuItemData: [
                            {
                                Name: '2-1',
                                Content: 'Html',
                                Router: '/htmlDocument'
                            },  {
                                Name: '2-2',
                                Content: 'Css',
                                Router: '/cssDocument'
                            },  {
                                Name: '2-4',
                                Content: 'ES6文档',
                                Router: '/es6Document'
                            }, {
                                Name: '2-5',
                                Content: 'Vue文档',
                                Router: '/vueDocument'
                            }]
                    }, {
                        Name: '3',
                        Title: '实例',
                        Icon: 'ios-briefcase',
                        Router: '',
                        MenuItemData: [
                            {
                                Name: '3-1',
                                Content: 'Html',
                                Router: '/htmlMuster'
                            }, {
                                Name: '3-3',
                                Content: 'Css',
                                Router: '/cssMuster'
                            },{
                                Name: '3-6',
                                Content: 'ES6',
                                Router: '/es6Muster'
                            }, {
                                Name: '3-7',
                                Content: 'Vue',
                                Router: '/vueMuster'
                            },{
                                Name: '3-8',
                                Content: 'vuex',
                                Router: '/vuexDome'
                            },{
                                Name: '3-9',
                                Content: 'PDF',
                                Router: '/pdf'
                            },{
                                Name: '3-10',
                                Content: 'Vux',
                                Router: '/vuxMuster'
                            },{
                                Name: '3-10',
                                Content: 'element',
                                Router: '/elementMuster'
                            },{
                                Name: '3-11',
                                Content: 'iview',
                                Router: '/iviewMuster'
                            },{
                                Name: '3-12',
                                Content: '路由，传参',
                                Router: '/routerDome'
                            },{
                                Name: '3-12',
                                Content: '日期格式化',
                                Router: '/momentMuster'
                            },{
                                Name: '3-13',
                                Content: '拖拽',
                                Router: '/draggable'
                            }
                            ]
                    }
                ],
                testNum: '',
                subRoute: '首页',
                closableShow: false
            }
        },
        methods: {
            quit() {
                this.$router.push({
                    name: "login"
                });
            },
            // 切换语言
            changeLangEvent() {
                this.$Modal.confirm({
                    title: '提示',
                    content: '确定切换语言吗?',
                    onOk: () => {
                        if (this.lang === 'zh-CN') {
                            this.lang = 'en-US';
                            this.$i18n.locale = this.lang;//关键语句
                        } else {
                            this.lang = 'zh-CN';
                            this.$i18n.locale = this.lang;//关键语句
                        }
                    },
                    onCancel: () => {
                        this.$Message.success('已取消');
                    }
                });
            },
            // 导航栏选中，动态改变面包屑
            menuSelect(name) {
                if (name === 0) {
                    this.subRoute = '首页'
                }else{
                    this.subRoute = name
                }
            },
            closable (){
                this.testNum = ''
                this.closableShow = false
            }
        },
        created() {
            // 模拟 vuex 全局监听事件，获取数据
            this.$bus.$on('curTestNum', (data) => {
                console.log(data,'11111')
                if(data){
                    this.closableShow = true
                }
                this.testNum = data;
            })
        }

    }
</script>

<style>
    #app {
        height: 100vh;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .ivu-layout-header {
        background: #ffffff;
        padding: 0;
    }

    .ivu-layout-sider {
        background: #f5f7f9;
    }

    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }

    .layout-logo {
        width: 200px;
        height: 50px;
        /*background: #5b6270;*/
        border-radius: 3px;
        float: left;
        position: relative;
        top: 5px;
        left: 20px;
    }

    .layout-logo img {
        display: block;
        width: 100%;
        height: 100%;
    }

    .layout-nav {
        width: 160px;
        margin: 0 auto;
        margin-right: 10px;
    }

    .layoutCon {
        padding: 8px;
    }

    .layoutCon_Con {
        padding: 0 24px 24px;
        min-Height: 280px;
        height: calc(100vh - 82px);
        background: #fff;
        overflow: auto;
    }

    .breadcrumb {
        text-align: left;
        height: 32px;
        line-height: 32px;
    }
</style>
