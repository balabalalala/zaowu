<template>
    <div class="pay-header">
        <img src="@/assets/home/return.png" @click="$router.go(-1);" alt="" class="arrow">
    </div>
</template>
<script>
export default {

}
</script>
<style scoped lang='styl'>
.pay-header {
    width: 100%;
    height: 20px;
    .arrow {
        position: absolute;
        left: 14px;
        top: 14px;
    }
}
</style>


