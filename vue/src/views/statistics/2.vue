<template>
    <div id="statistics" class="statistics-chart"></div>
</template>
<style lang="less" scoped>
.statistics-chart {
    width: 100%;
    height: 300px;
}
</style>
<script>
import statistics from '@/constants/statistics/2';
import { init } from 'echarts';

let chart = null;

export default {
    name: 'statistics',
    /**
     * @Hook
     */
    mounted: function () {
        chart = init(document.getElementById('statistics'));
        chart.setOption(statistics);
    },

    /**
     * @Hook
     */
    beforeUnmount () {
        chart.dispose()
        chart = null
    }
}
</script>