<template>
    <!--根路由，默认进入收件箱列表-->
    <c-tool-bar></c-tool-bar>
    <c-drawer-bar></c-drawer-bar>
    <div id="app">
        <router-view></router-view>
    </div>
    <c-new-mail></c-new-mail>
</template>

<style>
    #app {
        margin-top: 56px;
    }
</style>

<script>
import cToolBar from '../../components/list/toolBar.vue'
import cDrawerBar from '../../components/list/drawerBar.vue'
import cNewMail from '../../components/common/newMail.vue'
export default {
    components: {
        cToolBar,
        cDrawerBar,
        cNewMail,
    }
}
</script>