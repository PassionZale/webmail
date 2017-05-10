<template>
    <div class="container" v-show="visible">
        <div class="firstLine line"></div>
        <div class="secondLine line"></div>

        <div class="firstLine line"></div>
        <div class="secondLine line"></div>

        <div class="firstLine line"></div>
        <div class="secondLine line"></div>

        <div class="firstLine line"></div>
        <div class="secondLine line"></div>

        <div class="firstLine line"></div>
        <div class="secondLine line"></div>
    </div>
</template>

<style>
    .firstLine {
        width: 100%;
    }
    .secondLine {
        width: 40%;
    }
    .line {
        margin-bottom: 10px;
        height: 20px;
        background-color: #f4f5f5;
    }
</style>

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