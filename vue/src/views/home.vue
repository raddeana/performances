<template>
<van-list>
  <van-cell v-for="item in list" :key="item" :title="item" @click="handleViewStatistics(item)" />
</van-list>
</template>
<style lang="less" scoped>
.van-button__home {
    margin: 20px 0 0 5%;
    width: 90%;
}
</style>
<script>
export default {
    name: 'home',
    data: function () {
        return {
            list: [1, 2, 3, 4, 5]
        };
    },
    methods: {
        /**
         * 查看统计图表
         * @EventHandler
         */
        handleViewStatistics (num) {
            this.$router.push(`/statistics/${num}`);
        }
    }
}
</script>