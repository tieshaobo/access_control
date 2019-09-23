<template>
  <div class="login">
    <p class="login-title">登录</p>
    <el-form class="login-form" ref="form" :model="form" :rules="rules" label-width="80px" style="width:100%;">
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="form.userName" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password" placeholder="密码"></el-input>
      </el-form-item>
    </el-form>
    <div class="flexdiv">
      <div class="button" id="login" @click="signinValidate">登录</div>
      <div class="button" id="signin" @click="toSignup">注册</div>
    </div>
  </div>
</template>

<script>
import {login} from '@/api/login'
export default {
  name: "signin",
  data() {
    return {
      form: {
        userName: "",
        password: ""
      },
      rules: {
        userName: [{ required: true, message: "请输入用户名" }],
        password: { required: true, message: "请输入密码" }
      }
    };
  },
  created() {
    let that = this;
    document.onkeydown = function() {
      let key = window.event.keyCode;
      key == 13 ? that.signinValidate() : "";
    };
  },
  methods: {  
    signinValidate() {
      this.$refs.form.validate(valid => {
        if (!valid) return;
        let data = {
          userName: this.form.userName,
          password: this.form.password
        };
        login(data).then((res)=>{
          if(res.success){
            sessionStorage.setItem("userName",res.data.userName)
            this.$store.commit("setUserName",{name:res.data.userName})
            this.$router.push('/system');

          }else{
            this.$message.warning(res.message)
          }
        });
      });
    },
    toSignup() {
      this.$router.push("/signup");
    }
    
  }
};
</script>

<style lang="scss" scoped>
.login {
  width:500px;
  padding: 30px;
  margin:50px auto 0;
  &-title {
    margin-bottom: 30px;
    @include text($text-color-title, 30px);
    line-height: 30px;
    text-align: center;
  }
  &-form {
    margin: 0 auto;
    width: 50%;
    .el-form-item {
      margin-bottom: 22px !important;
    }
  }
  .button {
    margin: 30px 30px 0;
    &#login {
      margin:30px 30px 0 120px;
      @include button(160, 44, gradient);
    }
    &#signin {
      @include button(160, 44, default);
      border: 1px solid #316bff;
      color: #316bff;
    }
  }
}
.flexdiv {
  display:flex;
  justify-content: center;
  text-align: center;
}
</style>
