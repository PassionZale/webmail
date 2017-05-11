<template>
    <c-tool-bar></c-tool-bar>

    <div id="app" class="mdui-p-l-1 mdui-p-r-1">
        <div class="mdui-textfield mdui-textfield-floating-label">
            <label class="mdui-textfield-label">请输入邮件标题、正文或发件人等...</label>
            <input class="mdui-textfield-input" type="search" minlength="2" required @keypress=""/>
            <div class="mdui-textfield-error">搜索关键词至少为2个字符！</div>
        </div>

        <p><button class="mdui-btn mdui-ripple mdui-btn-raised">清空</button>&emsp;点击按钮将<mark>清空全部历史记录</mark>。</p>

        <div class="mdui-list mdui-list-dense">
            <div v-for="i in 30">
                <div class="mdui-list-item mdui-ripple">
                    <i class="mdui-list-item-icon mdui-icon material-icons">&#xe192;</i>
                    <div class="mdui-list-item-content mdui-list-item-one-line">
                        <div class="mdui-container-fluid">
                            <div class="mdui-col-xs-7 mdui-text-truncate">Inbox</div>
                            <div class="mdui-col-xs-5">2017-03-23</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
    import cToolBar from '../../components/search/toolBar.vue'
    export default {
        data() {
        },
        components: {
            cToolBar
        },
        methods: {
            search() {

            }
        }
    }
</script>