<template>
<div id="app" class="container">
    <van-nav-bar :title="pageName" />
    <router-view v-slot="{ Component }" v-if="false">
        <keep-alive>
            <component :is="Component" />
        </keep-alive>
    </router-view>
    <router-view />
    <van-tabbar v-model="activeTab" active-color="#ee0a24" inactive-color="#000">
        <van-tabbar-item icon="home-o" name="home">首页</van-tabbar-item>
        <van-tabbar-item icon="cashier-o" name="hack">Hack</van-tabbar-item>
        <van-tabbar-item icon="user-circle-o" name="me">我的</van-tabbar-item>
    </van-tabbar>
</div>
</template>
<script>
export default {
    name: 'layout',
    data: function () {
        return {
            activeTab: ''
        };
    },
    watch: {
        activeTab: function () {
            let url = '';

            switch (this.activeTab) {
                case 'home':
                    url = '/';
                    break;
                case 'hack':
                    url = '/hack';
                    break;
                case 'me':
                    url = '/me';
                    break;
            }

            this.$router.push(url);
        }
    },
    computed: {
        pageName: function () {
            let pageName = '';

            switch (this.activeTab) {
                case 'home':
                    pageName = '首页';
                    break;
                case 'hack':
                    pageName = 'Hack';
                    break;
                case 'me':
                    pageName = '我的';
                    break;
            }

            return pageName;
        }
    },
    /**
     * @Hook
     */
    mounted () {
        this.activeTab = this.$route.path.replace('/', '') || 'home';
    }
}
</script>
