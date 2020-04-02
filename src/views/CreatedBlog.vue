<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col>
          <div class="headImg"></div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :xs="24" :sm="2" :md="3">
          <br />
        </el-col>
        <el-col :xs="24" :sm="20" :md="18">
          <div class="zhuti">
            <div class="lifediv">
              <h2 class="head">
                发起
                <small class="el-icon-plus"></small>
              </h2>
              <form>
                <el-row>
                  <el-col>
                    <h3 for="exampleInputTitle">
                      <small class="el-icon-chat-round"></small> 标题
                    </h3>
                  </el-col>
                  <el-col :xs="18" :sm="18" :md="18">
                    <input
                      type="text"
                      class="titleText"
                      id="exampleInputTitle"
                      placeholder="输入标签..."
                    />
                  </el-col>
                  <el-col :xs="6" :sm="6" :md="6">
                    <select class="bt-fl">
                      <option value="Java">Java</option>
                      <option value="Sql">Sql</option>
                      <option value="Spring">Spring</option>
                    </select>
                  </el-col>
                </el-row>

                <div class="text">
                  <h4 for="textarea">
                    <small class="el-icon-message"></small> 内容编写
                  </h4>
                  <textarea
                    name="textarea"
                    id="textarea"
                    class="textarea"
                    cols="30"
                    rows="15"
                    placeholder="这一路上走走停停顺着少年漂泊的痕迹..."
                  ></textarea>
                </div>

                <el-col>
                  <h4 for="exampleInputText">
                    <small class="el-icon-price-tag"></small> 添加标签
                  </h4>
                </el-col>
                <el-col :xs="18" :sm="18" :md="18">
                  <input type="text" class="titleText" id="exampleInputText" placeholder="输入标签..." />
                </el-col>
                <el-col :xs="6" :sm="6" :md="6">
                  <button type="button" class="bt-ys bt-tjbq">添 加</button>
                </el-col>
                <div>
                  <label>
                    <small class="el-icon-collection-tag"></small>最近标签
                  </label>
                </div>
                <button type="submit" class="bt-tjwd bt-ys">提交文档</button>
              </form>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="2" :md="3">
          <br />
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "createBlog"
};
</script>

<style>
.titleText {
  width: 90%;
  height: 35px;
  border-radius: 5px;
  border: 1px solid rgb(92, 184, 92);
  padding-left: 15px;
  margin-right: 50px;
}
.zhuti {
  margin-top: 60px;
}

.head {
  padding-bottom: 10px;
  border-bottom: rgb(119, 119, 127) 2px dotted;
}
.lifediv {
  margin: 50px;
}
.bt-fl:hover {
  border: 1px solid rgb(238, 164, 171);
}

.bt-fl {
  height: 37px;
  width: 100%;
  color: rgb(119, 119, 119);
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid rgb(92, 184, 92);
  border-radius: 5px;
  outline: none;
}

form {
  margin-top: 40px;
}

.textarea {
  border: 1px solid rgb(92, 184, 92);
  border-radius: 5px;
  padding: 15px;
  width: 100%;
}
.tag {
  margin-top: 80px;
  margin-bottom: 30px;
  width: 100%;
}

.bt-tjbq {
  font-size: 16px;
  margin-bottom: 30px;
  color: rgb(119, 119, 119);
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid rgb(92, 184, 92);
  border-radius: 5px;
  height: 38px;
  width: 100%;
  float: right;
}

.bt-tjwd {
  font-size: 18px;
  margin-top: 30px;
  margin-bottom: 30px;
  height: 40px;
  color: rgb(119, 119, 119);
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid rgb(92, 184, 92);
  border-radius: 10px;
  float: right;
  width: 50%;
}
.bt-ys:hover {
  outline: none;
  color: rgba(238, 164, 171, 1);
  border: 2px solid rgb(238, 164, 171);
}
.textarea:focus {
  outline: none;

  border: 2px solid rgb(238, 164, 171);
}

#exampleInputText:focus {
  outline: none;
  color: rgba(238, 164, 171, 1);
  border: 2px solid rgb(238, 164, 171);
}
#exampleInputTitle:focus {
  outline: none;
  color: rgba(238, 164, 171, 1);
  border: 2px solid rgb(238, 164, 171);
}

.headImg {
  height: 65vh;
  background: url("../assets/Img/BG3.jpg");
  background-size: cover;
}
@media screen and (min-width: 100px) and (max-width: 767px) {
  .bt-tjbq {
    margin-bottom: 30px;
  }
  .bt-tjwd {
    width: 100%;
  }
  .headImg {
    height: 30vh;
  }
}
</style>