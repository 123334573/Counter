<template>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <h3 class="title">系统登录</h3>
        <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username" clearable placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="form.password" show-password placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submit">登录</el-button>
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
                },
                rules: {
                    username: [
                        { required: true, trigger: 'blur' }
                    ],
                    password: [
                        { required: true, trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submit() {
                let data = this;
                data.$refs['form'].validate(valid => {
                    if (valid) {
                        data.$store.dispatch('userLogin', data.form).then(() => {
                            sessionStorage.setItem('user', data.form.username);
                            data.$router.push({ path: '/' });
                        }).catch(err => {
                            alert(err);
                        });

                    } else {
                        alert('error submit!');
                    }
                });
            },
            setCookie(name, pass, days) {
                let expire = new Date();
                expire.setDate(expire.getDate() + days);
                document.cookie = `C-username=${name};expires=${expire}`;
                document.cookie = `C-password=${pass};expires=${expire}`;
            },
            getCookie() {
                if (document.cookie.length) {
                    let arr = document.cookie.split(';');
                    for (let i = 0; i < arr.length; i++) {
                        let arr2 = arr[i].split('=');
                        switch (arr2[0]) {
                            case 'C-username':
                                this.form.username = arr2[1];
                                break;
                            case 'C-password':
                                this.form.password = arr2[1];
                                break;
                        }
                    }
                }
            }
        }
    }
</script>

<style scoped>
</style>