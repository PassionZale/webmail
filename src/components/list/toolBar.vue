<template>
    <!--工具栏导航-->
    <div class="mdui-appbar mdui-appbar-fixed mdui-appbar-scroll-hide">
        <div class="mdui-toolbar mdui-color-theme-accent">
            <a id="drawer-toggle-btn" href="javascript:" class="mdui-btn mdui-btn-icon">
                <i class="mdui-icon material-icons">&#xe5d2;</i>
            </a>
            <span class="mdui-typo-title">{{ title }}</span>
            <div class="mdui-toolbar-spacer"></div>
            <a @click="redirect_search" class="mdui-btn mdui-btn-icon">
                <i class="mdui-icon material-icons">&#xe8b6;</i>
            </a>
        </div>
    </div>

    <!--抽屉式导航-->
    <div class="mdui-drawer mdui-drawer-close" id="left-drawer">
        <ul class="mdui-list">
            <li class="mdui-list-item mdui-ripple">
                <div class="mdui-list-item-avatar"><img :src="avatar"/></div>
                <div class="mdui-list-item-content mdui-text-truncate">{{ mail }}</div>
            </li>
            <li class="mdui-divider"></li>
            <li class="mdui-list-item mdui-ripple router-item" data-router-name="inbox-list">
                <i class="mdui-list-item-icon mdui-icon material-icons">&#xe168;</i>
                <div class="mdui-list-item-content">收件箱</div>
            </li>
            <li class="mdui-list-item mdui-ripple router-item" data-router-name="sent-list">
                <i class="mdui-list-item-icon mdui-icon material-icons">&#xe163;</i>
                <div class="mdui-list-item-content">已发邮件</div>
            </li>
            <li class="mdui-list-item mdui-ripple router-item" data-router-name="draft-list">
                <i class="mdui-list-item-icon mdui-icon material-icons">&#xe151;</i>
                <div class="mdui-list-item-content">草稿</div>
            </li>
            <li class="mdui-divider"></li>
            <li class="mdui-list-item mdui-ripple">
                <i class="mdui-list-item-icon mdui-icon material-icons">&#xe3b7;</i>
                <div class="mdui-list-item-content">夜间模式</div>
                <label class="mdui-switch">
                    <input type="checkbox" v-model="dark_mode"/>
                    <i class="mdui-switch-icon"></i>
                </label>
            </li>
            <li class="mdui-list-item mdui-ripple">
                <i class="mdui-list-item-icon mdui-icon material-icons">&#xe8b8;</i>
                <div class="mdui-list-item-content">设置</div>
            </li>
        </ul>
    </div>
</template>

<script>
    import defaultAvatar from '../../assets/images/default_avatar.png'
    export default {
        props: {
            title: {
                type: String,
                default: '收件箱'
            }
        },
        data() {
            return {
                avatar: defaultAvatar,
                mail: 'whouu@qq.com',
                unReadMsg: 13,
                dark_mode: false
            }
        },
        created() {
            this.changeTitle(this.$route.name);
        },
        ready() {
            let vm = this;
            let inst = new mdui.Drawer('#left-drawer');
            document.getElementById('drawer-toggle-btn').addEventListener('click', function () {
                inst.open();
            });
            let items = document.getElementsByClassName('router-item');
            let len = items.length;
            for(let i = 0; i< len; i++) {
                items[i].addEventListener('click', function() {
                    inst.close();
                    let router_name = this.getAttribute('data-router-name');
                    vm.$route.router.go({name: router_name});
                });
            }
        },
        watch: {
            'dark_mode': 'changeMode',
            '$route.name': 'changeTitle'
        },
        methods: {
            redirect_search() {
                const redirect = encodeURIComponent(this.$route.path);
                this.$route.router.go({name: 'search', query: {redirect}});
            },
            changeMode(mode) {
                if(mode) {
                    $('body').addClass('mdui-theme-layout-dark');
                }else{
                    $('body').removeClass('mdui-theme-layout-dark');
                }
            },
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

<style>
#avatar-img {
    width: 60px;
    height: 60px;
}
</style>