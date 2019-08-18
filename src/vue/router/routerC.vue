<template>
  <div class="routerC">
    <p>路由通过props传递过来得动态参数参数:{{crj}}</p>
  </div>
</template>

<script>

export default {
  name: 'routerC',
  components: {

  },
  props:{
    crj:{
      type:String,
      default:''
    }
  },
  methods:{

  }

}
</script>
