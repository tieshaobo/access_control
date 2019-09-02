<template>
  <div class="signin">
    <p class="signin-title">注册</p>
    <el-form class="signin-form" ref="form" :model="form" :rules="rules" label-width="100px">
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="form.userName" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="confirmPassword">
        <el-input v-model="form.confirmPassword" type="password" placeholder="确认密码"></el-input>
      </el-form-item>
    </el-form>

    <div class="flexdiv">
      <div class="button" id="signin" @click="signup">注册</div>

      <div class="button" id="login">
        <router-link to="/signin">登录</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "signin",
    data() {
        return {
        showSelect: false, //
        form: {
            userName: "",
            password: "",
            confirmPassword: '',
            userType: ""
        },
        rules: {
            userName: [
            { required: true, message: "请输入用户名", trigger: "change" },
            { validator: this.checkusername, trigger: "change" }
            ],
            password: [
            { required: true, message: "请输入密码" },
            { validator: this.checkuserpassword, trigger: "change" }
            ],
            confirmPassword: [
            { required: true, message: "请输入密码" },
            { validator: this.checkuserpassword, trigger: "change" }
            ]
        }
        };
    },
  created() {
    
  },
    methods: {
    // 注册
        signup() {
            this.$refs.form.validate(valid => {
                if (!valid) return;
            
            });
        },
        checkusername(r, v, c) {
            var reg = /^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
            if (reg.test(v) == false) {
                c(new Error("用户名由英文字母和数字组成的4-16位字符，以字母开头"));
            }
            var reg = /^[a-zA-Z0-9]{4,10}$/;
            if (reg.test(v) == false) {
                c(new Error("密码由英文字母和数字组成的4-10位字符"));
            }

            console.log(c);
            if (!v) return;
            checkusername({ name: v }).then(res => {
                if (res.code !== 0) return c(new Error(res.msg));
                if (res.result >= 1) return c(new Error("用户名重复"));
                c();
        });
    },

    checkuserpassword(r, v, c) {
        var reg = /^[a-zA-Z0-9]{4,10}$/;
        if (reg.test(v) == false) {
            return c(new Error("密码由英文字母和数字组成的4-10位字符"));
        }
        c();
    },
    // 跳转登录
    toSignin() {
        this.$router.replace("/signin");
    }
  }
};
</script>

<style lang="scss" scoped>
.flexdiv {
  display: flex;
  width: 400px;
  margin: -33px auto 106px;
}
.signin {
  padding: 30px 0;
  &-title {
    margin-bottom: 30px;
    @include text($text-color-title, 30px);
    line-height: 30px;
    text-align: center;
  }
  &-form {
    margin: 0 auto 150px;
    width: 50%;
    .el-form-item {
      margin-bottom: 22px !important;
    }
  }
  .button {
    display: block !important;
    margin: 30px auto 0;
    &#signin {
      @include button(160, 44, gradient);
    }
    &#login {
      @include button(160, 44, line);
      a {
        display: block;
        text-decoration: none;
      }
    }
  }
}
</style>
