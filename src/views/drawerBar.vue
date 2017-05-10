<template>
    <div class="mdui-drawer mdui-drawer-close" id="left-drawer">
        <ul class="mdui-list">
            <li class="mdui-list-item mdui-ripple">
                <div class="mdui-list-item-avatar"><img :src="avatar"/></div>
                <div class="mdui-list-item-content mdui-text-truncate">{{ mail }}</div>
            </li>
            <li class="mdui-divider"></li>
            <li class="mdui-list-item mdui-ripple">
                <i class="mdui-list-item-icon mdui-icon material-icons">&#xe168;</i>
                <div class="mdui-list-item-content">收件箱</div>
            </li>
            <li class="mdui-list-item mdui-ripple">
                <i class="mdui-list-item-icon mdui-icon material-icons">&#xe163;</i>
                <div class="mdui-list-item-content">已发邮件</div>
            </li>
            <li class="mdui-list-item mdui-ripple">
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
import defaultAvatar from '../assets/images/default_avatar.png'
export default {
    data() {
        return {
            avatar: defaultAvatar,
            mail: 'whouu@qq.com',
            dark_mode: false
        }
    },
    watch: {
        'dark_mode': 'changeMode'
    },
    methods: {
        changeMode(mode) {
            if(mode) {
                $('body').addClass('mdui-theme-layout-dark');
            }else{
                $('body').removeClass('mdui-theme-layout-dark');
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