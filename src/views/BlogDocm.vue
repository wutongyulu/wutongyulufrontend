<template>
  <el-container>
    <el-main class="max">
      <el-row>
        <div class="topMax">
          <el-row id="headTitle">
            <el-col :xs="24" :sm="2" :md="6" class="hidden-xs-only">
              <br />
            </el-col>
            <el-col :xs="24" :sm="20" :md="12">
              <div class="row">
                <h2 class>Test</h2>
              </div>
              <div class="row">
                <h4 class>Test</h4>
              </div>
            </el-col>
            <el-col :xs="24" :sm="2" :md="6" class="hidden-xs-only">
              <br />
            </el-col>
          </el-row>
        </div>
      </el-row>

      <el-row id="message">
        <el-col :xs="24" :sm="2" :md="6" class="hidden-xs-only">
          <br />
        </el-col>
        <el-col :xs="24" :sm="20" :md="12">
          <!-- 文档 -->
          <div class="Docm"></div>
          <!-- 标签 -->
          <div></div>
          <!-- 回复 -->
          <div>
            <div>
              <h3 class="hTitle">
                Comments /
                <samp>评论</samp>
              </h3>

              <div>
                <ul>
                  <li></li>
                </ul>
              </div>
            </div>

            <div>
              <h4 class="hTitle">
                input Box /
                <samp>输入框</samp>
              </h4>
            </div>
            <div class>
              <div class>
                <textarea
                  style="color:rgb(165,153,165);"
                  class="textarea FontBorder"
                  rows="9"
                  placeholder="这是一个少年和他的童话..."
                ></textarea>
              </div>

              <div></div>

              <div class>
                <img src alt />
              </div>
              <el-row :gutter="30">
                <el-col :xs="24" :sm="3" :md="3">
                  <img src alt />
                </el-col>
                <el-col :xs="24" :sm="7" :md="7">
                  <input class="text FontBorder" type="text" placeholder="输入名称或者QQ号" />
                </el-col>
                <el-col :xs="24" :sm="6" :md="7">
                  <input class="text FontBorder" type="text" placeholder="邮箱" />
                </el-col>
                <el-col :xs="24" :sm="6" :md="7">
                  <input class="text FontBorder" style="padding-right:0px;" type="text" placeholder="网址(选填)" />
                </el-col>
              </el-row>
              <el-row :gutter="5">
                <el-col :xs="21" :sm="21" :md="21">
                  <input type="button" class="textButton" value="发送" />
                </el-col>
                <el-col  :xs="1" :sm="1" :md="1">
                  <br>
                </el-col>
                <el-col :xs="2" :sm="2" :md="2">
                  <el-button size="small" type="primary" class="textButton el-icon-picture-outline"></el-button>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="2" :md="6" class="hidden-xs-only"></el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "BlogDocm"
};
</script>

<style>
body{
  height: 2000px;
}

.hTitle {
  font-size: 18px;
  font-weight: 600;
  color: rgb(54, 52, 52);
}

.textButton {
  color: rgba(165, 153, 165);
  font-size: 18px;
  margin-top: 50px;
  height: 50px;
  width: 100%;
  background: rgba(0, 0, 0, 0);
  border: 1px solid rgba(165, 153, 165);
  border-radius: 5px;
}

.textButton:hover {
  color: rgb(238, 164, 171);
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid rgb(238, 164, 171);
}

.FontBorder:focus {
  color: rgb(238, 164, 171);
  background-color: rgba(0, 0, 0, 0);
  border: 2px solid rgb(238, 164, 171);
}

.text {
  margin-top: 20px;
  margin-bottom: 15px;
  font-size: 14px;
  height: 60px;
  width: 100%;
  padding-left: 15px;
  border: 1px solid rgb(145, 145, 145);
  border-radius: 5px;
  outline: none;
}

.textarea {
  width: 95%;
  margin-right: 10px;
  margin-left: 10px;
  padding: 15px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid rgb(145, 145, 145);
  outline: none;
}



#headTitle {
  padding-top: 20%;
}
.topMax {
  width: 100%;
  height: 60vh;
  background: black;
  padding: 0px;
  z-index: 100;
  background: url("../assets/Img/BG1.png");
  background-size: cover;
  opacity: 0.9;
}
</style>