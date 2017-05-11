<template>
    <!--收件箱邮件列表-->
    <c-place-holder :visible.sync="visible"></c-place-holder>
    <ul class="mdui-list" v-show="!visible">
        <li class="mdui-list-item mdui-ripple" v-for="i in 15">
            <i class="mdui-list-item-icon mdui-icon material-icons">&#xe168;</i>
            <div class="mdui-list-item-content">Inbox</div>
            <i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-theme">&#xe3a6;</i>
        </li>
    </ul>
</template>

<script>
    import cPlaceHolder from '../common/placeHolder.vue'
    export default {
        data() {
            return {
                visible: true
            }
        },
        components: { cPlaceHolder },
        created(){
            setTimeout(()=>{
                this.visible = false;
            }, 1000);
        }
    }
</script>