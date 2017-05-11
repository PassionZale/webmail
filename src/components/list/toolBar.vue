<template>
    <div class="mdui-appbar mdui-appbar-fixed mdui-appbar-scroll-hide">
        <div class="mdui-toolbar mdui-color-theme-accent">
            <a id="drawer-toggle-btn" mdui-drawer="{target: '#left-drawer'}" href="javascript:" class="mdui-btn mdui-btn-icon">
                <i class="mdui-icon material-icons">&#xe5d2;</i>
            </a>
            <span class="mdui-typo-title">{{ title }}</span>
            <div class="mdui-toolbar-spacer"></div>
            <a v-link="{name: 'search'}" class="mdui-btn mdui-btn-icon">
                <i class="mdui-icon material-icons">&#xe8b6;</i>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '收件箱'
            }
        },
        watch:{
            '$route.name':{
                handler:function(val){
                    this.changeTitle(val);
                }
            }
        },
        methods: {
            changeTitle(router_name) {
                let vm = this;
                switch (router_name){
                    case 'inbox-list':
                        vm.$set('title', '收件箱');
                        break;
                    case 'sent-list':
                        vm.$set('title', '已发邮件');
                        break;
                    case 'draft-list':
                        vm.$set('title', '草稿');
                        break;
                    default:
                        break;
                }
            }
        }
    }
</script>