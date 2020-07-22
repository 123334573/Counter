<template>
    <el-menu-item :index="menu.name" @click="handleClick">
        <i class="el-icon-setting"></i>
        <span slot="title">{{menu.title}}</span>
    </el-menu-item>
</template>

<script>
    export default {
        name: 'El_Menu_Item',
        props: {
            menu: Object
        },
        methods: {
            handleClick: e => e.$router.push(e.index)
        }
    };
</script>

<style scoped>
</style>