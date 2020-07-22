<template>
    <el-form ref="form" :model="form" label-width="80px">
        <h3 class="title">系统登录</h3>
        <el-form-item label="用户名">
            <el-input v-model="form.username" clearable placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="form.password" show-password placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary">登录</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    username: '',
                    password: ''
                }
            }
        }
    }
</script>

<style scoped>
</style>