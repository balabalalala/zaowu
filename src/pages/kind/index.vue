<template>
    <div class="kind">
        <xp-header :isSearch='false' class="kheader"></xp-header>
        <xp-group :kindList="kindList"></xp-group>
        <router-view></router-view>
    </div>
</template>
<script>
    import XpHeader from '@/components/header'
    import XpGroup from './components/group'
    import kindApi from '@/api/mykind'
    import axios from 'axios'
    export default {
        name: 'Type',
        components: {
            XpHeader,
            XpGroup
        },
        data(){
            return {
                kindList:[],
            }
        },
        created(){
            kindApi.getKindList()
            .then(res=>{
                console.log(res)
                this.kindList = res.data.data
            })
        }
    }
</script>
<style scoped lang="styl">
    /*.detail{
        position:fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #abc;
    }*/
    .kind{
		padding-bottom: 68px;
		overflow: hidden;
        /*.kheader{
            position: fixed;
        }*/
        .kheader{
            position: fixed;
            left: 0;
            top: 0;
            background:#fff;
                
        }
	}
</style>