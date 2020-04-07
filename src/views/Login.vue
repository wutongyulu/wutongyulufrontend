<template>
  <el-container id="body">
    <el-main id="row">
      <el-row>
        <el-col :xs="24" :sm="2" :md="2">  <br>
        </el-col>
        <el-col :xs="24" :sm="10" :md="12">
          <img src="../assets/Img/Login_img.png" class="hidden-xs-only" />
        </el-col>
        <el-col :xs="24" :sm="10" :md="6">
          <div class="LoginForm">
            <LoginForm>
              <a
                slot="disanfangdenglu"
                href="https://github.com/login/oauth/authorize?client_id=8f1215e906031a87e2bd&redirect_uri=http://localhost/callback&scope=user&state=1"
              >
                <img src="../assets/Img/Github.jpg" alt="使用Github登录" />
              </a>
              <a slot="disanfangdenglu" href>
                <img src="../assets/Img/QQ.jpg" alt="使用QQ登录" />
              </a>
            </LoginForm>
          </div>
        </el-col>
       <el-col :xs="24" :sm="0" :md="2">  <br> </el-col>
      </el-row>
    </el-main>
  
  </el-container>
</template>

<script>
import LoginForm from "../components/common/LoginForm";

export default {
  name: "Login",
  components: {
    LoginForm,
    
  }
};
</script>

<style>
.LoginForm {
  margin-top: 30%;
}
#row {
  padding-bottom: 0px;
}

#body {
  background-color: rgb(245, 245, 245);
}
</style>