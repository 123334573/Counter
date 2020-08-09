<template>
    <el-container>
        <el-aside><el-tree :data="menus" :props="treeProps"></el-tree></el-aside>
        <el-container>
            <el-header>Header</el-header>
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
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import { createNamespacedHelpers } from 'vuex';
    const { mapState, mapGetters, mapActions } = createNamespacedHelpers('menu');
    export default {
        computed: {
            ...mapState([
                'menus',
                'treeProps'
            ]),
            ...mapGetters([
                'currentChildren'
            ])
        },
        methods: {
            ...mapActions([
                'getMenus'
            ])
        },
        created: function () {
            this.$store.dispatch('menu/getMenus');
        }
    };
</script>

<style scoped>
</style>