<template>
    <div class="card">
        <h4>{{ count }}</h4>
    </div>
</template>
<style scoped lang="less">
  
</style>
<script>
import {
    ref,
    reactive,
    toRefs,
    computed,
    watchEffect,
    markRaw
} from 'vue';

export default {
    name: 'Card',
    /**
    * Hook
    */
    setup () {
        const count = ref(0)
        const state = reactive({
            count
        })

        state.count = 1

        const otherCount = ref(2)

        state.count = otherCount.value

        const book = reactive({
            author: 'Vue Team',
            year: '2020',
            title: 'Vue 3 Guide',
            description: 'You are reading this book right now ;)',
            price: 'free'
        })

        const { title } = toRefs(book)

        title.value = 'Vue 3 Detailed Guide'

        const count2 = ref(1)
        const plusOne = computed({
            get: () => count2.value + 1,
            set: val => {
                count2.value = val - 1
            }
        })

        plusOne.value = 1

        const count1 = ref(0)

        watchEffect(() => console.log(count1.value))

        setTimeout(() => {
            count1.value++
        }, 100)

        const foo1 = markRaw({
            nested: {}
        })

        const bar = reactive({
            nested: foo1.nested
        })

        return {
            count
        };
    }
}
</script>

