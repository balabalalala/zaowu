<template>
    <div class="collection">
        <collection-content :collections="collections"></collection-content>
    </div>
</template>
<script>
import collect1 from '@/assets/my/collect1.png'
import collect2 from '@/assets/my/collect2.png'
import collect3 from '@/assets/my/collect3.png'
import collect4 from '@/assets/my/collect4.png'
import collect5 from '@/assets/my/collect5.png'
import collect6 from '@/assets/my/collect6.png'
import collect7 from '@/assets/my/collect7.png'
import CollectionContent from './components/CollectionContent'
export default {
  components:{
    CollectionContent
  },
  data(){
      return{
            collections: [
                {
                    id: '31',
                    url:collect1,
                    itemTitle:'新款蝴蝶结高腰排扣中长裙棉质吊带露背连衣裙',
                    peple:'980人收藏',
                    money:'￥299',
                },
                {
                    id: '32',
                    url:collect2,
                    itemTitle:'鳄鱼纹小方包时尚手提包百搭单肩包',
                    peple:'980人收藏',
                    money:'￥299',
                },
                {
                    id: '33',
                    url:collect3,
                    itemTitle:'Orange Desire白鸭绒长款羽绒服女2018秋新款韩版加厚羽绒外套女',
                    peple:'980人收藏',
                    money:'￥1389',
                },
                {
                    id: '34',
                    url:collect4,
                    itemTitle:'全棉水洗棉四件套荷叶边简约公主风纯棉条纹日式1.8m双人床上用品',
                    peple:'680人收藏',
                    money:'￥699',
                },
                {
                    id: '35',
                    url:collect5,
                    itemTitle:'巴黎Titlee Midtown铜镀18k金简约小众设计冷淡风气质ins风手链女',
                    peple:'980人收藏',
                    money:'￥289',
                },
                {
                    id: '36',
                    url:collect6,
                    itemTitle:'一字扣带中跟真皮露趾粗跟凉鞋女潮',
                    peple:'980人收藏',
                    money:'￥499',
                },
                {
                    id: '37',
                    url:collect7,
                    itemTitle:'LolaRose手表小表盘ob学院风小众',
                    peple:'580人收藏',
                    money:'￥399',
                },
            ]
      }
  },
}
</script>
<style scoped lang='styl>

</style>


