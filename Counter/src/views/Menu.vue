<template>
    <el-container>
        <el-aside>
            <el-tree :data="menus" :props="treeProps" node-key="id"
                     highlight-current default-expand-all
                     :expand-on-click-node="false" @node-click="handleNodeClick"></el-tree>
        </el-aside>
        <el-container>
            <el-header>
                <el-button-group>
                    <el-button type="primary" icon="el-icon-plus" @click="openDialog"></el-button>
                    <el-button type="primary" icon="el-icon-edit"></el-button>
                    <el-button type="primary" icon="el-icon-delete"></el-button>
                </el-button-group>
            </el-header>
            <el-main>
                <el-table :data="currentChildren" border stripe
                          style="width: 100%"
                          max-height="250">
                    <el-table-column fixed
                                     prop="code"
                                     label="编码"
                                     width="150">
                    </el-table-column>
                    <el-table-column fixed prop="name"
                                     label="菜单名"
                                     width="120">
                    </el-table-column>
                    <el-table-column prop="parent"
                                     label="父菜单"
                                     width="120">
                    </el-table-column>
                    <el-table-column prop="url"
                                     label="地址"
                                     width="120">
                    </el-table-column>
                    <el-table-column prop="icon"
                                     label="图标"
                                     width="300">
                    </el-table-column>
                    <el-table-column prop="sort"
                                     label="排序"
                                     width="120">
                    </el-table-column>
                    <!--<el-table-column fixed="right"
                                     label="操作"
                                     width="120">
                        <template slot-scope="scope">
                            <el-button @click.native.prevent="deleteRow(scope.$index, currentChildren)"
                                       type="text"
                                       size="small">
                                移除
                            </el-button>
                        </template>
                    </el-table-column>-->
                </el-table>
                <MenuEdit></MenuEdit>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import { createNamespacedHelpers } from 'vuex';
    const { mapState, mapActions } = createNamespacedHelpers('menu');
    import MenuEdit from './MenuEdit.vue';

    export default {
        name: 'Menu',
        computed: {
            ...mapState([
                'menus',
                'treeProps',
                'current',
                'currentChildren',
            ])
        },
        methods: {
            ...mapActions([
                'getMenus',
                'setCurrent',
                'setCurrentChildren',
                'openDialog',
                'closeDialog'
            ]),
            handleNodeClick(data) {
                this.$store.dispatch('menu/setCurrent', { data });
            },
            handleAddClick() {

            }
        },
        created: function () {
            this.$store.dispatch('menu/getMenus');
        },
        components: {
            MenuEdit
        }
    };
</script>

<style scoped>
</style>