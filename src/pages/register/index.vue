<template>
    <div class="register">
        <xp-register></xp-register>
        <xp-content></xp-content>
    </div>
</template>
<script>
import XpRegister from '@/components/RegisterHeader'
import XpContent from './components/content'
export default {
    components: {
        XpRegister,
        XpContent
    },
}
</script>
<style scoped lang="styl">
.register{
    padding-bottom: 68px;
    overflow: hidden;
}
</style>