<template>
  <div class="login">
    <el-form class="login-form" :model="loginForm">
      <h3 class="title">RuoYi管理系统</h3>
      <el-form-item>
        <el-input
          v-model="loginForm.username"
          type="text"
          placeholder="账号">

        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="loginForm.password"
          type="password"
          placeholder="密码">

        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="loginForm.code"
          style="width: 63%"
          placeholder="验证码">

        </el-input>
        <div class="login-code">
          <img :src="codeUrl" class="login-code-img" />
        </div>
      </el-form-item>
      <el-checkbox
        style="margin: 0 0 25px 0"
        v-model="loginForm.rememberMe">记住密码</el-checkbox>
      <el-form-item style="width: 100%;">
        <el-button
        type="primary"
        style="width: 100%">
          <span>登录</span>
        </el-button>
      </el-form-item>
    </el-form>
    <div class="el-login-footer">
      <span>Copyright © 2018-2024 ruoyi.vip All Rights Reserved.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        username: '',
        password: '',
        code: '',
        rememberMe: false
      },
      codeUrl: ''
    }
  }
}
</script>

<style scoped lang="scss">
  .login {
    display: flex;
    background-image: url("../assets/images/login-background.jpg");
    height: 100%;
    background-size: cover;
    justify-content: center;
    align-items: center;
  }
  .title {
    color: #707070;
    text-align: center;
    margin: 0 auto 30px;
  }
  .login-form {
    box-sizing: border-box;
    width: 400px;
    border-radius: 6px;
    background: #ffffff;
    padding: 25px 25px 5px 25px;
  }
  .el-login-footer {
    height: 40px;
    line-height: 40px;
    position: fixed;
    bottom: 0;
    color: #ffffff;
    font-size: 12px;
    letter-spacing: 1px;
    font-family: Arial,serif;
  }
  .login-code {
    width: 33%;
    float: right;
    img {
      cursor: pointer;
    }
  }
  .login-code-img {

  }
</style>
