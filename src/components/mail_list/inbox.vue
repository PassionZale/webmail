<template>
    <!--收件箱邮件列表-->
    <c-place-holder :visible.sync="visible"></c-place-holder>
    <ul class="mdui-list" v-show="!visible">
        <li class="mdui-list-item mdui-ripple" v-for="i in 20" v-link="{name: 'detail'}">
            <div class="mdui-list-item-avatar">B</div>
            <div class="mdui-list-item-content">
                <div class="mdui-list-item-text mdui-list-item-one-line mdui-text-color-theme-text">
                    Multiline item Multiline item
                </div>
                <div class="mdui-list-item-text mdui-list-item-one-line mdui-text-color-theme-text">
                    2017-01-03 10:00:30
                    <i style="font-size:inherit;" class="mdui-icon material-icons">&#xe15e;</i>
                    <i style="font-size:inherit;" class="mdui-icon material-icons">&#xe226;</i>
                </div>
                <div class="mdui-list-item-text mdui-list-item-two-line">You've got to get enough sleep. Other travelling salesmen live a life of luxury. You've got to get enough sleep. Other travelling salesmen live a life of luxury.</div>
            </div>
            <i v-if="i < 3" class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-theme">&#xe159;</i>
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