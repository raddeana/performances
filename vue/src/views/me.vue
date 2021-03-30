<template>
    <van-cell-group>
        <van-cell title="姓名" :value="$store.state.user.data.name" />
        <van-cell title="邮箱" :value="$store.state.user.data.email" />
    </van-cell-group>
    <van-cell-group>
        <van-cell title="生日" :value="$store.state.user.data.birthday" />
        <van-cell title="职业" :value="$store.state.user.data.occupation" />
    </van-cell-group>
    <van-button class="van-button__logout" color="linear-gradient(to right, #ff6034, #ee0a24)">登出</van-button>
</template>
<style lang="less" scoped>
.van-button__logout {
    margin: 20px 0 0 5%;
    width: 90%;
}
</style>
<script>
export default {
    name: 'user'
}
</script>