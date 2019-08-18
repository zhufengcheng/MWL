<template>
  <div class="routerDome">
      <Tag checkable color="yellow"><router-link to="/routerDome/routerA">跳至routerA页</router-link></Tag>
      <Tag checkable color="yellow"><router-link to="/routerDome/static">通过props给组件传静态值</router-link></Tag>
      <Tag checkable color="yellow"><router-link to="/routerDome/routerC/m-w-l">通过props给组件传动态值</router-link></Tag>
      <Tag checkable color="yellow"><router-link to="/routerDome/routerB/456/vuejsMSG?foo=bar">跳至routerB页</router-link></Tag>
      <Tag checkable color="yellow"><router-link to="/login">login</router-link></Tag>
      <Alert closable>当父亲的组件必须有一个路由的出口，负责显示子路由的内容</Alert>
      <router-view/>
  </div>
</template>
<script>
export default {
  name: 'routerDome',
  components: {

  }
}
</script>
