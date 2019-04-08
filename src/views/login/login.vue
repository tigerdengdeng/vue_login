<template>
  <div class="login">
    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm"  class="demo-ruleForm">
      <el-form-item label="用戶名" prop="username">
        <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密  码" prop="password">
        <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>
<script>
  import {login} from "../../api/api";
  export default {
    data() {
      return {
        loginForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            {required: true, message: '请输入用戶名', trigger: 'blur'},
            {min: 3, max: 20, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密碼', trigger: 'blur'},
            {min: 2, max: 25, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let _this = this
            login({
              username: this.loginForm.username,
              password: this.loginForm.password
            }).then((response) => {
              _this.$message({
                message: '恭喜你，这是一条成功消息',
                type: 'success'
              });
               //用户存入store
                 console.log(response.data.user.username)
                _this.$store.commit('SAVE_USERINFO',response.data)
                this.$router.push('/Index')
            }).catch(function (error){
              if (error.response.data.status == 400) {
                _this.$message.error(error.response.data.message);
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
