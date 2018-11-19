<template>
    <div class="good-recommond">
        <find-header :title1=title1 @openDialog="openDialog"></find-header>
        <find-nav></find-nav>
        <find-content></find-content>
        <share-dialog :shareDialog="shareDialog" @closeDialog="closeDialog"></share-dialog>
        <!--这是GoodRecommond,传过来的ID是 {{ $route.params.id}};-->
    </div>
</template>
<script>
import FindHeader from '@/components/FindDetailHeader'
import FindNav from '@/components/FindDetailNav'
import FindContent from './components/RecommondContent'
import shareDialog from '@/components/shareDialog'
export default {
    components:{
        FindHeader,
        FindNav,
        FindContent,
        shareDialog
    },
    data() {
        return {
            title1:'',
            shareDialog: false,
        }
    },
    created(){
        this.title1 = this.$route.query.title
    },
    methods:{
        openDialog(){
            this.shareDialog = true
        },
        closeDialog(){
            this.shareDialog = false
        }
    }
}
</script>
<style scoped lang='styl'>
.good-recommond{
    position: absolute;
    top: 0;
    left: 0;
    bottom: -200px;
    right: 0;
    z-index: 1000;
    overflow: hidden;
    background-color: #fff;
}
</style>
