﻿<template>
    <el-container>
        <el-aside><NavMenu /></el-aside>
        <el-container>
            <el-header>
                <el-button type="primary" :icon="collapseIcon" @click="toggleCollapse" class="el-collase-btn"></el-button>
                <el-menu class="el-menu-top" mode="horizontal">
                    <el-menu-item index="1">处理中心</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">
                            我的工作台
                        </template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                        <el-submenu index="2-4">
                            <template slot="title">
                                选项4
                            </template>
                            <el-menu-item index="2-4-1">选项1</el-menu-item>
                            <el-menu-item index="2-4-2">选项2</el-menu-item>
                            <el-menu-item index="2-4-3">选项3</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                </el-menu>
            </el-header>
            <el-main><router-view></router-view></el-main>
        </el-container>
    </el-container>
</template>

<script>
    import { mapActions, mapState } from 'vuex';
    import NavMenu from './NavMenu.vue';

    export default {
        name: 'Container',
        computed: {
            ...mapState({
                collapseIcon: state => state.isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'
            })
        },
        methods: {
            ...mapActions([
                'toggleCollapse',
                'getMenus'
            ])
        },
        components: {
            NavMenu
        },
        created: function () {
            this.$store.dispatch('getMenus');
        }
    };
</script>

<style scoped>
    .el-collase-btn, .el-menu-top {
        float: left;
    }
</style>