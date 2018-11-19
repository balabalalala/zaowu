<template>
  <div class="title">
      <div class="ftitle">
        <div class="art" :class="{active:isActive == 1}" @click='artClick'>
            精选文章
        </div>
        <div class="art good" :class="{active:isActive == 2}" @click='goodClick'>
            好物推荐
        </div>
      </div>
  </div>
</template>
<script>
export default {
    components:{
    },
  data(){
      return{
        isActive:1
      }
  },
  methods:{
    //   向父类发送事件
    artClick(){
        this.$emit('artClick');
         this.isActive = 1
    },
    goodClick(){
        this.$emit('goodClick');
         this.isActive = 2
    }
  }
}
</script>
<style scoped lang='styl'>
.title{
    position: fixed;
    width: 100%;
    height: 45px;
    padding-bottom: 12px;
    background-color: #fff;
    z-index: 3;
    .ftitle{
        position: absolute
        left: 0;
        top: 9px;
        width: 100%;
        height: 35px;
        line-height:45px;
        .art{
            float: left;
            width: 50%;
            height: 100%;
            font-size: 18px;
            text-align: center;
            color:#999999;
        }
        .good{
            float: right;
        }
        .active{
            color: #010E0D;
        }
    }
}
</style>


