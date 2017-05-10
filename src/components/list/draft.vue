<template>
    <c-place-holder :visible.sync="visible"></c-place-holder>
    <ul class="mdui-list">
        <li class="mdui-list-item mdui-ripple">
            <i class="mdui-list-item-icon mdui-icon material-icons">&#xe168;</i>
            <div class="mdui-list-item-content">草稿箱</div>
        </li>
        <li class="mdui-list-item mdui-ripple">
            <i class="mdui-list-item-icon mdui-icon material-icons">&#xe838;</i>
            <div class="mdui-list-item-content">草稿箱</div>
        </li>
        <li class="mdui-list-item mdui-ripple">
            <i class="mdui-list-item-icon mdui-icon material-icons">&#xe838;</i>
            <div class="mdui-list-item-content">草稿箱</div>
        </li>
        <li class="mdui-list-item mdui-ripple">
            <i class="mdui-list-item-icon mdui-icon material-icons">&#xe838;</i>
            <div class="mdui-list-item-content">草稿箱</div>
        </li>
        <li class="mdui-list-item mdui-ripple">
            <i class="mdui-list-item-icon mdui-icon material-icons">&#xe838;</i>
            <div class="mdui-list-item-content">草稿箱</div>
        </li>
        <li class="mdui-list-item mdui-ripple">
            <i class="mdui-list-item-icon mdui-icon material-icons">&#xe838;</i>
            <div class="mdui-list-item-content">草稿箱</div>
        </li>
        <li class="mdui-list-item mdui-ripple">
            <i class="mdui-list-item-icon mdui-icon material-icons">&#xe838;</i>
            <div class="mdui-list-item-content">草稿箱</div>
        </li>
        <li class="mdui-list-item mdui-ripple">
            <i class="mdui-list-item-icon mdui-icon material-icons">&#xe838;</i>
            <div class="mdui-list-item-content">草稿箱</div>
        </li>
        <li class="mdui-list-item mdui-ripple">
            <i class="mdui-list-item-icon mdui-icon material-icons">&#xe838;</i>
            <div class="mdui-list-item-content">草稿箱</div>
        </li>
        <li class="mdui-list-item mdui-ripple">
            <i class="mdui-list-item-icon mdui-icon material-icons">&#xe838;</i>
            <div class="mdui-list-item-content">草稿箱</div>
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