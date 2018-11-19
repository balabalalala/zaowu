<template>
  <div id="app">
    <router-view/>
    <xp-nav v-if='$route.meta.setNavShow' class='bottom-nav'></xp-nav>
  </div>
</template>

<script>
  import XpNav from '@/components/nav'
  import {mapState} from 'vuex'
  export default {
    name: 'App',
    components:{
        XpNav
      },
      computed:{
        ...mapState([
          'isNavShow'
        ])
      }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.bottom-nav{
  position: absolute;
  left: 0;
  width: 100%;
  bottom: 0;
}
</style>
