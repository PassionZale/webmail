<template>
    <router-view></router-view>
    <c-back-top></c-back-top>
</template>

<script>
import cBackTop from './components/common/backTop.vue'
export default {
    components: {
        cBackTop
    },
    replace: false
}
</script>