<template>
  <div class="order">
      <order-header></order-header>
      <order-content :goods="goods"></order-content>
  </div>
</template>
<script>
    import goods1 from "@/assets/my/goods1.png"
    import goods2 from "@/assets/my/goods2.png"
    import goods3 from "@/assets/my/goods3.png"
    import orderHeader from '@/components/orderHeader'
    import orderContent from './components/orderContent'
    export default {
        components:{
            orderHeader,
            orderContent,
        },
        data(){
            return{
                 goods:[
                {
                    order:'订单编号：2217896',
                    deliver:'已发货',
                    url:goods1,
                    title:'ESSENCE',
                    money:'¥219',
                    sleep:'女士Cozy圆领吊带性感睡衣',
                    amount:'X 2',
                    ctotal:'合计：',
                    etotal:'¥438',
                    see:'查看物流',
                    confirm:'确认收货'
                },
                {   
                    order:'订单编号：2217897',
                    deliver: '待付款',
                    url:goods2,
                    title:'ESSENCE',
                    money:'¥219',
                    sleep:'女士Cozy圆领吊带性感睡衣',
                    amount:'X 2',
                    ctotal:'合计：',
                    etotal:'¥438',
                    see:'取消订单',
                    confirm:'付款'
                },
                {   
                    order:'订单编号：2217898',
                    deliver: '已收货',
                    url:goods3,
                    title:'ESSENCE',
                    money:'¥219',
                    sleep:'女士Cozy圆领吊带性感睡衣',
                    amount:'X 2',
                    ctotal:'合计：',
                    etotal:'¥438',
                    see:'申请售后',
                    confirm:'评价'
                },
            ]
            }
        }
    }
</script>
<style scoped lang='styl'>
    .order{
        position: absolute;
        left: 0;
        top: 0;
        bottom: -150px;
        right: 0;
        width: 100%;
        box-sizing: border-box;
        background-color: #f4f4f4;
    }
</style>


