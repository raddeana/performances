<template>
  <div class="list">
    <Card
      v-for="card in list"
      :key="card.id"
      :item="card"
    />
  </div>
</template>
<style scoped lang="less">
  
</style>
<script>
import Card from './card';

export default {
    name: 'List',
    props: {
        msg: String
    },
    components: {
        Card
    },
    data: function () {
        return {
            list: [{
                id: new Date().getTime(),
                name: '0质量发生器'
            }, {
                id: new Date().getTime(),
                name: '空间分割'
            }, {
                id: new Date().getTime(),
                name: '光压'
            }, {
                id: new Date().getTime(),
                name: ''
            }]
        };
    }
}
</script>
