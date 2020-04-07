<template>
  <form>
    <h1>
      注册
      <el-tag type="info" class="info">Registe</el-tag>
    </h1>
    <div>
      <label for="exampleInputUserName">登录名/User</label>
      <el-input
        type="text"
        class="el-input"
        id="exampleInputUserName"
        v-model="user.name"
        placeholder="登录名/User"
        prefix-icon="el-icon-user"
        clearable
      ></el-input>
    </div>
    <div>
      <label for="exampleInputPassword1">密码/Password</label>
      <el-input
        type="password"
        class="el-input"
        v-model="user.password"
        @blur="verifypassword"
        id="exampleInputPassword1"
        placeholder="密码/Password"
        show-password
        prefix-icon="el-icon-key"
        clearable
      ></el-input>
    </div>
    <div>
      <label for="exampleInputPassword2">确认密码/RePassword</label>
      <el-input
        type="password"
        class="el-input"
        v-model="rePassword"
        @blur="verifypassword"
        id="exampleInputPassword2"
        placeholder="确认密码/RePassword"
        show-password
        prefix-icon="el-icon-key"
        clearable
      ></el-input>
      <el-alert title="两次密码是不一样的" v-if="bn" type="error"></el-alert>
    </div>
    <div>
      <label for="exampleInputPassword1">邮箱/Email</label>
      <el-input
        type="text"
        class="el-input"
        v-model="user.email"
        id="exampleInputEmail2"
        placeholder="邮箱/Email"
        prefix-icon="el-icon-emial"
        clearable
      ></el-input>
    </div>

    <div class="loading">
      <div
        v-loading="this.$store.state.requestStatus "
        element-loading-text="Loading..."
        element-loading-background="rgba(0,0,0,0)"
      ></div>
      {{$store.state.registeMessage}}
      <el-button
        type="success"
        class="bt-registe"
        @click="registeUser"
        v-show="!this.$store.state.requestStatus"
      >注册</el-button>
    </div>
    <router-link to="/home">
      <el-link class="el-link" style="color:Rgb(68,157,68) ;">首页</el-link>
    </router-link>
    <router-link to="/login">
      <el-link class="el-link" style="color:Rgb(68,157,68) ;">登录</el-link>
    </router-link>
  </form>
</template>

<script>
export default {
  name: "RegisteForm",
  data() {
    return {
      user: {
        name: "",
        password: "",
        email: ""
      },
      rePassword: "",
      bn: false
    };
  },
  methods: {
    //验证表单
    verifyMessage(Message) {
      this.$notify.error({
        title: "梧桐：",
        message: Message,
        offset: 150,
        duration: 10000,
        dangerouslyUseHTMLString: true
      });
    },

    //注册用户
    registeUser() {
      if (
        this.user.userName == "" &&
        this.user.password == "" &&
        this.rePassword == "" &&
        this.user.email == ""
      ) {
        this.verifyMessage("<span style='padding-left:40px;'>?</span>");
      } else if (this.user.userName == "") {
        this.verifyMessage(
          "<span style='padding-left:40px;'>用户名不可以为空！</span>"
        );
      } else if (this.user.password == "") {
        this.verifyMessage(
          "<span style='padding-left:40px;'>密码也不可以为空！</span>"
        );
      } else if (this.rePassword == "") {
        this.verifyMessage(
          "<span style='padding-left:40px;'>确认密码一样不可以为空！</span>"
        );
      } else if (this.user.email == "") {
        this.verifyMessage(
          "<span style='padding-left:40px;'>邮箱还是不不不可以为空！</span>"
        );
      } else {
        this.$store.dispatch("registeUser", this.user);
      }
    },
    verifypassword() {
      if (this.user.password != "" && this.rePassword != "") {
        if (this.user.password == this.rePassword ? false : true) {
          this.$notify.error({
            title: "梧桐：",
            message:
              "<span style='padding-left:40px;'>两次密码是不同的的！</span>",
            offset: 150,
            duration: 10000,
            dangerouslyUseHTMLString: true
          });
        }
      }
    }
  }
};
</script>

<style>
.loading {
  padding-top: 20px;
}

.el-link {
  display: inline-block;
  margin: 25px 12px;
}
.bt-registe {
  width: 100%;
  display: block;
  height: 36px;
}

label {
  display: inline-block;
  max-width: 100%;
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 14px;
}

.el-input  {
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  margin-bottom: 20px;
  outline: none;
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
</style>