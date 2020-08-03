<template>
    <el-menu-item :index="menu.code" @click="handleClick">
        <i :class="menu.icon"></i>
        <span slot="title">{{menu.name}}</span>
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