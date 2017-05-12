<template>
    <div class="mdui-appbar mdui-appbar-fixed mdui-appbar-scroll-hide">
        <div class="mdui-toolbar mdui-color-theme-accent">
            <a @click.prevent="goBack" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">&#xe5c4;</i></a>
            <span class="mdui-typo-title">邮件详情</span>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            goBack() {
                const redirect = decodeURIComponent(this.$route.query.redirect || '/');
                this.$route.router.go(redirect);
            }
        }
    }
</script>
