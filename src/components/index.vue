<template>
    <c-head-bar></c-head-bar>
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
import cHeadBar from '../views/headBar.vue'
import cDrawerBar from '../views/drawerBar.vue'
import cNewMail from '../components/common/newMail.vue'
export default {
    components: {
        cHeadBar,
        cDrawerBar,
        cNewMail,
    }
}
</script>