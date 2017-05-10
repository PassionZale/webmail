<template>
    <c-head-bar></c-head-bar>
    <c-drawer-bar></c-drawer-bar>
    <div id="app">

    </div>
    <c-back-top></c-back-top>
    <c-new-mail></c-new-mail>
</template>

<script>
import cHeadBar from './views/headBar.vue'
import cBackTop from './views/backTop.vue'
import cNewMail from './views/newMail.vue'
import cDrawerBar from './views/drawerBar.vue'
export default {
    data () {
        return {

        }
    },
    components: {
        cHeadBar,
        cDrawerBar,
        cBackTop,
        cNewMail,
    }
}
</script>