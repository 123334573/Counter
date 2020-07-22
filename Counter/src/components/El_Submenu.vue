<template>
    <el-submenu :index="index">
        <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{menu.title}}</span>
        </template>
        <El_Menu_Item v-for="child in menu.children" :key="child.name" :menu="child" />
    </el-submenu>
</template>

<script>
    import El_Menu_Item from './El_Menu_Item.vue';
    export default {
        name: 'El_Submenu',
        props: {
            menu: Object,
            index: String
        },
        components: {
            El_Menu_Item
        }
    };
</script>

<style scoped>
</style>