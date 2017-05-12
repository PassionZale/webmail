<template>
    <!--根路由，默认进入收件箱列表-->
    <c-tool-bar></c-tool-bar>
    <div id="app">
        <router-view></router-view>
    </div>
    <c-back-top></c-back-top>
    <c-new-mail></c-new-mail>
</template>



<script>
import cToolBar from '../../components/mail_list/toolBar.vue'
import cNewMail from '../../components/common/newMail.vue'
import cBackTop from '../../components/common/backTop.vue'
export default {
    components: {
        cToolBar,
        cNewMail,
        cBackTop
    }
}
</script>