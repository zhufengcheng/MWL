<template>
  <div class="routerA">
    <Row>
      <Col span="24">
        <p style="font-size: 20px">这里是 <span style="color: red;">routerA</span>页</p>
        <h2 style="color:#f00">注意：获取参数是路由$route;进行路由的跳转是路由器$router</h2>
      </Col>
    </Row>
    <Row type="flex" justify="end" :gutter="10">
      <Col span="6">
        <Button @click="gotoAbout" type="primary" long>方法里带传参跳转，【跳转至routerB】</Button>
      </Col>
      <Col span="6">
        <Button @click="gotoAboutOne" type="primary" long>方法里name传参跳转，【跳转至routerB】</Button>
      </Col>
    </Row>
    <p>路由通过props传递过来得静态参数:{{crj}}</p>
  </div>
</template>

<script>

export default {
  name: 'routerA',
  components: {

  },
  props:{
    crj:{
      type:String,
      default:''
    }
  },
  methods:{
    gotoAbout() {
      this.$router.push('/routerDome/routerB/ID789/方法里带传参跳转')
    },
    gotoAboutOne(){
      this.$router.push({name:'routerB',params:{id:'ID123',msg:'方法里name传参跳转'}})
    }
  }
}
</script>
