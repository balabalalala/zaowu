<template>
    <div class="good-recommond">
        <find-header :title1=title1></find-header>
        <find-nav></find-nav>
        <article-content></article-content>
    </div>
</template>
<script>
import FindHeader from '@/components/FindDetailHeader'
import FindNav from '@/components/FindDetailNav'
import ArticleContent from './components/ArticleContent'
export default {
    components: {
        FindHeader,
        FindNav,
        ArticleContent
    },
    data() {
        return {
            title1:'精选文章'
        }
    },
    created(){
        console.log('hello')
    }
}
</script>
<style scoped lang='styl'>
.good-recommond {
    position: absolute;
    top: 0;
    left: 0;
    bottom: -100px;
    right: 0;
    z-index: 1000;
    overflow: hidden;
    background-color: #fff;
}
</style>
