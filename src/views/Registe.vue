<template>
  <el-container >
    <el-main style="padding:0px;">
      <el-row>
        <el-col :xs="24" :sm="12" :md="9" class='hidden-xs-only' >
          <img
            src="../assets/Img/花鹿.png"
            style="width: 400px;  margin-top: 10vh;"
            alt
          />
          <div id="rigthimg"></div>
        </el-col>

        <el-col :xs="20" :sm="10" :md="7">
          <div id="RegisteForm">
            <RegisteForm></RegisteForm>
          </div>
        </el-col>
        <el-col :xs="24" :sm="2" :md="8" class='hidden-sm-and-down'>
          <img src="../assets/Img/sun.gif" id="“zhongimg”"    style="margin-left: 70px;"/>
        </el-col>
      </el-row>
    </el-main>
 
  </el-container>
</template>

<script>
import RegisteForm from "../components/common/RegisteForm";


export default {
  name: "Registe",
  components: {
    RegisteForm,
   
  }
};
</script>

<style>
body {
  /* background-color: rgb(203, 234, 241); */
  background-color: rgb(245, 245, 245);
}

#RegisteForm {
  margin-top:25%;
  margin-left:60px;
}
</style>