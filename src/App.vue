<template>
    <c-head-bar></c-head-bar>
    <c-drawer-bar></c-drawer-bar>
    <div id="app">
        <router-view></router-view>
    </div>
    <c-back-top></c-back-top>
    <c-new-mail></c-new-mail>
</template>

<style>
    #app {
        margin-top: 64px;
    }
</style>

<script>
import cHeadBar from './views/headBar.vue'
import cDrawerBar from './views/drawerBar.vue'
import cBackTop from './components/common/backTop.vue'
import cNewMail from './components/common/newMail.vue'
export default {
    components: {
        cHeadBar,
        cDrawerBar,
        cBackTop,
        cNewMail,
    },
    replace: false
}
</script>