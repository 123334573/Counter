<template>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <El_Submenu v-for="(menu,index) in menus" :key="index+1" :menu="menu" :index="''+(index+1)" />
    </el-menu>
</template>

<script>
    import { mapState } from 'vuex';
    import El_Submenu from './El_Submenu.vue';
    export default {
        name: 'NavMenu',
        computed: {
            ...mapState([
                'isCollapse',
                'menus'
            ])
        },
        methods: {
            handleOpen(/*key, keyPath*/) {
                //alert(key + '\n' + keyPath);
            },
            handleClose(/*key, keyPath*/) {
                //console.log(key, keyPath);
            }
        },
        components: {
            El_Submenu
        }
    };
</script>

<style scoped>
</style>