<template>
  <div class="share-dialog" v-show="shareDialog">
      <div class="share-mask">
          <div class="share-return" @click="closeDialog"></div>
        <div class="share-dialog-content">
            <p class="share-title">分享</p>
            <ul class="share-group">
                <router-link tag='li' to='/' class="share-item">
                    <img src="@/assets/kind/wx.png" alt="sorry" class="share-photo">
                    <p class="share-word">微信好友</p>
                </router-link>
                <router-link tag='li' to='/' class="share-item">
                    <img src="@/assets/kind/circle.png" alt="sorry" class="share-photo">
                    <p class="share-word">朋友圈</p>
                </router-link>
                <router-link tag='li' to='/' class="share-item">
                    <img src="@/assets/kind/wb.png" alt="sorry" class="share-photo">
                    <p class="share-word">微博</p>
                </router-link>
                <router-link tag='li' to='/' class="share-item">
                    <img src="@/assets/kind/qq.png" alt="sorry" class="share-photo">
                    <p class="share-word">QQ好友</p>
                </router-link>
                <router-link tag='li' to='/' class="share-item">
                    <img src="@/assets/kind/kj.png" alt="sorry" class="share-photo">
                    <p class="share-word">QQ空间</p>
                </router-link>
                <router-link tag='li' to='/' class="share-item">
                    <img src="@/assets/kind/lj.png" alt="sorry" class="share-photo">
                    <p class="share-word">复制链接</p>
                </router-link>
                <router-link tag='li' to='/' class="share-item">
                    <img src="@/assets/kind/fx.png" alt="sorry" class="share-photo">
                    <p class="share-word">更多分享</p>
                </router-link>
            </ul>
        </div>
      </div>
  </div>
</template>
<script>
export default {
    props:{
        shareDialog:{

        }
    },
    data(){
        return{

        }
    },
    methods:{
         closeDialog() {
            this.$emit('closeDialog')
        }
    }
}
</script>
<style scoped lang='styl'>
    .share-dialog{
        width: 100%;
        height: 100%;
        .share-mask{
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            z-index:1004;
            .share-return{
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 202px;
                background: #fff;
            }
            .share-dialog-content{
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 465px;
                background:#e8e8e8;
                z-index:1100;
                .share-title{
                    font-size: 20px;
                    color: #010E0D;
                    letter-spacing: 0.24px;
                    text-align: center;
                    margin-top:15px;
                }
                .share-group{
                    /*margin: 0 auto;*/
                    width: 334px;
                    height: 100%;
                    margin-top: 30px;
                    .share-item{
                        float: left;
                        width: 70px;
                        height: 100px;
                        margin-left:41px;
                        margin-bottom:41px;
                        .share-word{
                            font-size: 14px;
                            color: #010E0D;
                            letter-spacing: 0.17px;
                            text-align: center;
                            margin-top: 9px;
                        }
                    }
                }
            }
        }
    }
</style>

