<template>
    <button id="back-top-btn"
            class="mdui-fab mdui-color-white"
            :class="{'mdui-fab-hide' : !show}"
            @click.prevent="toTop">
        <i class="mdui-icon material-icons">&#xe25a;</i>
    </button>
</template>

<style>
    #back-top-btn {
        position: fixed!important;
        left: 16px;
        bottom: 16px;
    }
</style>

<script>
export default {
    data() {
        return {
            show: false
        }
    },
    methods: {
        toTop() {
            document.body.scrollTop = 0;
        }
    },
    ready() {
        window.onscroll = () => {
            if(document.body.scrollTop > 400) {
                this.show = true;
            }else{
                this.show = false;
            }
        }
    },
    beforeDestory() {
        window.onscroll = null;
    }
}
</script>