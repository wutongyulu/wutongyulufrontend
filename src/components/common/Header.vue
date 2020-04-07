<template>
  <header class="header">
    <div id="progress"></div>
    <div id="logodiv">
      <router-link to="/home">
        <img src="../../assets/Img/logo粉.png" class="logoImg logo" />
      </router-link>

      <router-link to="/home" id="logoName" class="hidden-sm-and-down">梧桐与鹿</router-link>
    </div>
    <ul>
      <li>
        <router-link class="a el-icon-s-home" to="/home">首页</router-link>
      </li>
      <li>
        <router-link class="a el-icon-folder" to="/13">分类</router-link>
      </li>
      <li>
        <router-link class="a el-icon-notebook-1" to="/home">文档</router-link>
      </li>
      <li>
        <router-link class="a el-icon-s-flag" to="/home">关于</router-link>
      </li>
      <li>
        <router-link
          class="a el-icon-user-solid"
          to="/login"
          v-if="this.$store.state.userDto == null || this.$store.state.userDto == ''"
        >登录</router-link>

        <div class="userMessage" v-else>
         {{$store.state.userDto.name}} <el-avatar :size="40" ></el-avatar>
          <div class="userMessageDiv">
            <div>个人中心</div>
            <div>注销</div>
          </div>
        </div>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {}
};
window.addEventListener("scroll", () => {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
 
});
window.addEventListener("scroll", () => {
  // 页面总高
  var totalH =
    document.body.scrollHeight || document.documentElement.scrollHeight;
  // 可视高
  var clientH = window.innerHeight || document.documentElement.clientHeight;
  window.addEventListener("scroll", function(e) {
    // 计算有效高
    var validH = totalH - clientH;
    // 滚动条卷去高度
    var scrollH = document.body.scrollTop || document.documentElement.scrollTop;
    // 百分比
    var result = parseInt(((scrollH / validH) * 100).toFixed(2));

    var progress = document.querySelector("#progress");
    progress.style.width = result + "%";
  });
});
</script>
 
<style>


.header:hover .userMessage{
  color: rgb(128,128,128);
}

.userMessage {
  width: 120px;
  height: 50px;
  color: white;
  font-size: 18px;
}
.userMessage>div{
  display:none;
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid white;

}
.userMessageDiv:hover{
  border: 1px solid rgba(238,164,171,0.7);
}
.userMessage:hover .userMessageDiv{
  display: block;
}
.userMessage div div{
  width: 100%;
  display: block;
  font-size: 16px;
  color: rgb(128, 128, 128);
}
.userMessage:hover .userMessageDiv div{
  padding: 15px;
  background: white;
  border-bottom: 1px solid rgba(128, 128, 128, 0.5);
}

#progress {
  position: absolute;
  width: 0px;
  height: 3px;
  top: 0;
  background-color: rgb(255, 122, 149);
  transition: width 1s ease-out;
}

@media screen and (min-width: 100px) and (max-width: 700px) {
  .a{
    margin-right: 8px!important;
    font-size: 14px!important;
  }
  #logodiv{
    display: none!important;
  }
  .userMessage{
    width: 80px;
    font-size: 14px;
  }
}

#logodiv {
  width: 25%;
  height: 50px;
  display: flex;
}

#logoName {
  margin-top: 8px;
  font-weight: 500;
  font-size: 28px;
  color: rgba(253, 138, 138, 0.39);
  background: url("../../assets/Img/logoNamebolang.png");
  text-transform: uppercase;
  -webkit-background-clip: text;
  animation: wave 30s linear infinite;
  text-decoration: none;
}

@keyframes wave {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 1000px 0;
  }
}

.sticky {
  padding: 20px 0px 20px 0px;
  height: 20px;
  background: white;
  box-shadow: 10px 0 40px 1px grey;
  border-radius: 0px 0px 15px 15px;
}
.sticky .a {
  color: grey;
}
.sticky .userMessage{
  color: grey;
}

.header:hover {
  background: white;
  box-shadow: 10px 0 40px 1px grey;
  border-radius: 0px 0px 20px 20px;
}

.header:hover .a {
  color: grey;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.6s;

  z-index: 10;
}

header ul {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

header ul li {
  position: relative;
  list-style: none;
  z-index: 1;
}

.a {
  position: relative;
  margin-right: 30px;
  text-decoration: none;
  letter-spacing: 2px;
  font-weight: 600px;
  font-size: 18px;
  transition: 0.6s;
  color: white;
  z-index: 1;
}

.logo {
  margin-left: 50px;
}

.logoImg {
  width: 50px;
  height: 50px;
}
</style>