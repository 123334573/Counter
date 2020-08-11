<template>
    <el-dialog title="收货地址" :visible="dialogFormVisible" @close="closeDialog">
        <el-form :model="form">
            <el-form-item label="活动名称">
                <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <!--<el-form-item label="活动区域" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>-->
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="closeDialog">取 消</el-button>
            <el-button type="primary" @click="closeDialog">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
    import { createNamespacedHelpers } from 'vuex';
    const { mapState, mapActions } = createNamespacedHelpers('menu');
    export default {
        name: 'MenuEdit',
        data() {
            return {
                form: {
                    id: 0,
                    code: '',
                    parent: 0,
                    name: '',
                    url: '',
                    icon: '',
                    sort: '',
                    create_user: '',
                    create_date: '',
                    modify_user: '',
                    modify_date: ''
                }
            }
        },
        computed: {
            ...mapState([
                'dialogFormVisible'
            ]),
            resetForm() {

            }
        },
        methods: {
            ...mapActions([
                'getMenus',
                'getChildren',
                'closeDialog'
            ]),
            handleNodeClick(data) {
                this.$store.dispatch('menu/setCurrentChildren', { data: (data.children || []) });
            }
        }
    };
</script>

<style scoped>
</style>