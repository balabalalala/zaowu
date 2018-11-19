<template>
  <div class="test-main">
        <input type="checkbox" v-model="obj.value" @change="change(obj)"> {{obj.name}}
  </div>
</template>
<script>
export default {
    name:'test',
    props:['obj'],
    methods:{
        change(obj){
            this.$emit('change',obj.code);
        }
    }
}
</script>
<style scoped>
    .test-main {
        margin-top:100px;
    }

</style>

