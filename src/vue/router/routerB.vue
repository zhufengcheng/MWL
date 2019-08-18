<template>
    <div class="routerB">
        <Row>
            <Col span="24">
                <p style="font-size: 20px">这里是 <span style="color: red;">routerB</span>页</p>
            </Col>
        </Row>
        <h2>路由路径和name传递过来得参数</h2>
        <Row type="flex" justify="end" :gutter="10">
            <Col span="24">
                routerA 路由路径和name传递过来得参数【id】：{{$route.params.id}}
            </Col>
            <Col span="24">
                routerA 路由路径和name传递过来得参数【msg】：{{$route.params.msg}}
            </Col>
        </Row>

        <h2>通过属性props传递过来</h2>
        <Row type="flex" justify="end" :gutter="10">
            <Col span="24">
                通过方法，属性props传递过来【id】：{{id}}
            </Col>
            <Col span="24">
                routerA 路由路径传递过来得参数【msg】：{{msg}}
            </Col>
            <Col span="24">
                routerA 路由路径传递过来得参数【foo】：{{foo}}
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        props: ['id', 'msg', 'foo'],
        created() {
            console.log(this.$route.params.msg, '获取路由路径参数')
            // 查询参
            console.log(this.$route.query.foo, '获取路由路径查询参')
        }
    }
</script>
