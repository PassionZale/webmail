<template>
    <ul class="mdui-list mdui-list-dense" v-show="visible">
        <li class="mdui-list-item mdui-ripple" v-for="i in 5">
            <div class="mdui-list-item-avatar mdui-color-grey-100"></div>
            <div class="mdui-list-item-content mdui-color-grey-100"></div>
        </li>
    </ul>
</template>

<script>
    export default {
        props: {
            'visible': {
                type: Boolean,
                default: false,
                twoWay: true
            }
        }
    }
</script>