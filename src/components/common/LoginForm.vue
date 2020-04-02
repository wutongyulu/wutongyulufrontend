<template>
  <form>
    <h1>
      登录
      <el-tag type="info" class="info">Login</el-tag>
    </h1>
    <div class="form-group">
      <label for="exampleInputEmail1">用户名/邮箱</label>

      <el-input
        prefix-icon="el-icon-user"
        class="el-input"
        placeholder="Email"
        v-model="user.email"
        id="exampleInputEmail1"
        clearable
      ></el-input>
    </div>
    <br />
    <div class="form-group">
      <label for="exampleInputPassword1">密码/Password</label>
      <el-input
        prefix-icon="el-icon-key"
        class="el-input"
        placeholder="Password"
        v-model="user.password"
        id="exampleInputPassword1"
        show-password
        clearable
      ></el-input>
    </div>
    <br />

    <div class="loading">
      <div
        v-loading="this.$store.state.requestStatus"
        element-loading-text="Loading..."
        element-loading-background="rgba(0,0,0,0)"
      ></div>
    </div>
    <el-button
      type="success"
      class="bt-login"
      @click="clickLogin"
      v-show="!this.$store.state.requestStatus"
    >登录</el-button>

    <br />
    <router-link to="/home">
      <el-link class="el-link" type="info" style="color:Rgb(147,147,147) ;">首页</el-link>
    </router-link>
    <router-link to="/registe">
      <el-link class="el-link" type="info" style="color:Rgb(147,147,147) ;">注册</el-link>
    </router-link>
    <router-link to="/home">
      <el-link class="el-link" type="info" style="color:Rgb(147,147,147) ;">忘记密码？</el-link>
    </router-link>
    <div>
      <div class="disanfangdenglu">
        <slot name="disanfangdenglu"></slot>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    clickLogin() {
      //验证登录
      this.$store.dispatch("verifyUser", this.user);
    }
  }
};
</script>

<style scoped>
.loading{
  padding-left: 200px;
}

.el-link {
  display: inline-block;
  margin: 6px 12px;
}

.el-input {
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

h1 {
  font-size: 36px;
  margin-left: -10px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
}
.info {
  font-size: 55%;
  padding-left: 0px;
}
label {
  display: inline-block;
  max-width: 100%;
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 14px;
}
.bt-login {
  width: 100%;
  display: block;
  height: 36px;
  margin-top: 20px;
}
.disanfangdenglu {
  margin-top: 15px;
}
.disanfangdenglu a {
  margin-left: 15px;
}
.disanfangdenglu img {
  width: 25px;
}
</style>