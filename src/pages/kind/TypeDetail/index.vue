<template>
  <div class="type-detail-main">
      <button @click="$router.go(-1);">返回</button>
      这是typedetail,类型是 {{ $route.params.type}};
  </div>

</template>
<script>
export default {
  name:'TypeDetail',
  data () {
      return {

      }
  }
}
</script>
