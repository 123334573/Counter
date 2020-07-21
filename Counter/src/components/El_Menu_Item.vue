<template>
    <el-menu-item :index="index">
        <i class="el-icon-setting"></i>
        <span slot="title">{{menu.title}}</span>
    </el-menu-item>
</template>

<script>
    export default {
        name: 'El_Menu_Item',
        props: {
            menu: Object,
            index: String
        }
    };
</script>

<style scoped>
</style>