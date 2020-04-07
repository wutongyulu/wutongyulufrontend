<template>
  <el-container>
  
    <el-main>
      <!-- head图片区域 -->
      <el-row>
        <el-col :xs="24" :sm="24" :md="24">
          <div id="bgImg">
            <div id="bgImg2"></div>
            <div id="wave">
              <div id="wave1"></div>
              <div id="wave2"></div>
            </div>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <!-- PageMessageCard区域 -->
        <el-col :xs="24" :sm="2" :md="6" class="hidden-xs-only">
          <br />
        </el-col>
        <el-col :xs="24" :sm="20" :md="12">
          <div>
            <div id="contentMessage" class="posittionContent">
              <span class="el-icon-s-promotion" aria-hidden="true"></span>
              “如同不能言语的人偶，恍如彷徨在街角无主的猫”
            </div>
          </div>

          <!-- UPMessage -->
          <div>
            <div id="UpMessage">
              <div>
                <div>
                  <h3 class="h3Head">
                    <span class="el-icon-s-flag" aria-hidden="true"></span>
                    Up
                  </h3>
                </div>
              </div>

              <el-row :gutter="20">
                <el-col :xs="24" :sm="8" :md="8" class="Up-M-d hidden-xs-only">
                  <div class="UpMessage-img">
                    <a href>
                      <div class="info">
                        <div class="InfoTitle">title</div>
                        <img
                          src="/img/BG2.jpeg"
                          class="img-responsive upimg"
                          alt="Responsive image"
                        />
                        <div class="InfoInfo">info</div>
                      </div>
                    </a>
                  </div>
                </el-col>

                <el-col :xs="24" :sm="8" :md="8" class="Up-M-d hidden-xs-only">
                  <div class="UpMessage-img">
                    <a href>
                      <div class="info">
                        <div class="InfoTitle">title</div>
                        <img
                          src="/img/BG2.jpeg"
                          class="img-responsive upimg"
                          alt="Responsive image"
                        />
                        <div class="InfoInfo">info</div>
                      </div>
                    </a>
                  </div>
                </el-col>

                <el-col :xs="24" :sm="8" :md="8" class="Up-M-d hidden-xs-only">
                  <div class="UpMessage-img">
                    <a href>
                      <div class="info">
                        <div class="InfoTitle">title</div>
                        <img
                          src="/img/BG2.jpeg"
                          class="img-responsive upimg"
                          alt="Responsive image"
                        />
                        <div class="InfoInfo">info</div>
                      </div>
                    </a>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>

          <!-- //页面信息卡片 -->
          <div id="newpage">
            <h3 class="h3Head">
              <span class="el-icon-sunny"></span> New
            </h3>
          </div>
          <PageMessageCardRightImg>
            <!-- //标题 -->
            <h3 slot="tilte">1</h3>
            <!-- 更新时间 -->
            <span slot="createtime">1</span>
            <!-- 评论数 -->
            <span slot="comment">1</span>
            <!-- 点击数 -->
            <span slot="view">1</span>
            <!-- 内容 -->
            <p slot="Message">123</p>
            <!-- 图片 -->
            <img
              src="../assets/Img/BG3.jpg"
              slot="img"
              class="img-responsive"
              alt="Responsive image"
            />
          </PageMessageCardRightImg>
          <PageMessageCardLeftImg>
            <!-- //标题 -->
            <h3 slot="tilte">1</h3>
            <!-- 更新时间 -->
            <span slot="createtime">1</span>
            <!-- 评论数 -->
            <span slot="comment">1</span>
            <!-- 点击数 -->
            <span slot="view">1</span>
            <!-- 内容 -->
            <p slot="Message">123</p>
            <!-- 图片 -->
            <img
              src="../assets/Img/BG3.jpg"
              slot="img"
              class="img-responsive"
              alt="Responsive image"
            />
          </PageMessageCardLeftImg>
        </el-col>
        <el-col :xs="24" :sm="2" :md="6" class="hidden-xs-only">
          <br />
        </el-col>
      </el-row>

      <el-row>
        <div id="newPagebutton">
          <el-button type="danger" round>更多内容</el-button>
        </div>
      </el-row>
    </el-main>
 
  </el-container>
</template>

<script>

import PageMessageCardRightImg from "../components/common/PageMessageCardRightImg";
import PageMessageCardLeftImg from "../components/common/PageMessageCardLeftImg";

export default {
  name: "Home",
  components: {
    
    PageMessageCardRightImg,
    PageMessageCardLeftImg,
  
  }
};
</script>

<style >
/* 头部图片 */
#bgImg2 {
  /* position: absolute; */
  padding: 0px;
  margin-top: -20px;
  height: 95vh;
  width: 100vw;
  /* background: url("../assets/Img/dot.gif"); */
}

#bgImg {
  width: 100vw;
  padding: 0px;
  height: 95vh;
  background: url("../assets/Img/BG6.jpg");
  background-size: cover;
}

/* 波浪 */
#wave1 {
  margin-left: -250vw;
  margin-top: 20px;
  width: 500vw;
  animation: moving 120s ease-in-out infinite;
  height: 85px;
  background: url("../assets/Img/wave1.png");
}

#wave2 {
  margin-top: -95px;
  margin-left: -250vw;
  animation: moving 100s ease-in-out infinite;
  width: 500vw;
  height: 85px;
  background: url("../assets/Img/wave2.png");
}

@keyframes moving {
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(250vw, 0, 0);
  }
  51% {
    transform: translate3d(250vw, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

#wave {
  height: 100px;
  width: 100vw;
  overflow: hidden;
  margin-top: -100px;
  bottom: 0px;
}

/* 木偶&猫 */
#contentMessage {
  border-radius: 10px;
  font-size: 15px;
  color: rgb(150, 161, 186);
  border: rgba(201, 198, 198, 0.4) solid 1px;
  height: 30%;
  width: 98%;
  padding-top: 20px;
  padding-left: 15px;
  padding-bottom: 20px;
  background-color: rgb(254, 254, 254);
}

/* up内容区域 */
.UpMessage-img :hover .InfoInfo {
  opacity: 1;
  background: rgba(0, 0, 0, 0.5);
}

.UpMessage-img :hover .InfoTitle {
  background: rgba(17, 17, 17, 1);
}

.UpMessage-img :hover .upimg {
  transform: scale(1.4);
}

.InfoInfo {
  width: 100%;
  height: 100%;
  padding-top: 50%;
  text-align: center;
  color: rgb(174, 174, 174);
  opacity: 0;
  background: rgba(17, 17, 17, 0);
  position: absolute;
  z-index: 2;
  transition: opacity 1s;
}

.InfoTitle {
  font-size: 18px;
  text-align: center;
  background: rgba(119, 119, 119, 0);
  padding-top: 15px;
  height: 50px;
  width: 100%;
  margin-top: 20px;
  color: white;
  position: absolute;
  z-index: 3;
  transition: background 1s;
}

.info {
  position: relative;
  width: 100%;
  height: 100%;
  float: left;
}

.UpMessage-img a img {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: all 0.6s;
}

.UpMessage-img {
  position: relative;
  margin-top: 20px;
  height: 180px;
  border-radius: 15px;
  overflow: hidden;
  border-right: solid hsla(0, 0%, 79%, 0.7) 2px;
  border-bottom: solid rgba(202, 202, 202, 0.7) 2px;
}

/* //底部更多 */
#newPagebutton {
  margin-top: 150px;
  margin-bottom: 150px;
  text-align: center;
}

/* H3标签 */
.h3Head {
  color: rgb(102, 102, 102);
  padding-top: 50px;
  border-bottom: rgba(102, 102, 102, 0.2) dashed 1px;
  padding-bottom: 10px;
}


</style>