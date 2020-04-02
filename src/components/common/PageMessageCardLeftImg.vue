<template>
  <article class="newPageArticle">
    <el-row>
      <el-col :xs="24" :sm="14" :md="14">
        <div class="newImg">
          <a href="#">
            <slot name="img"></slot>
          </a>
        </div>
      </el-col>
      <el-col :xs="24" :sm="10" :md="10">
        <div class="newPageConten">
          <div class="newPageHead">
            <a href class="newPageA newPageTitleA">
              <slot name="tilte"></slot>
            </a>
          </div>
          <div class="time">
            <span class="el-icon-time" aria-hidden="true"></span>
            发布于：
            <slot name="createtime"></slot>
          </div>
          <div class="pageMessage">
            <span class="el-icon-chat-square" aria-hidden="true">
              <a href class="newPageA">
                <slot name="comment"></slot>留言
              </a>
            </span>
            <span class="el-icon-view" aria-hidden="true">
              <slot name="view"></slot>浏览
            </span>
            <span class="el-icon-folder" aria-hidden="true">
              <a href class="newPageA">分类</a>
            </span>
          </div>
          <div class="NewMessage">
            <slot name="Message"></slot>
          </div>
          <div class="bottomMessage">
            <a href class="newPageA newPageAB">...</a>
          </div>
        </div>
      </el-col>
    </el-row>
  </article>
</template>

<script>
export default {
  name: "PageMessageCard"
};
</script>

<style >
.newPageTitleA h3 {
  font-size: 1.7em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  margin-top: 10px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-wrap: break-word;
}
.bottomMessage {
  margin-top: -30px;
}
.newPageAB {
  font-size: 3em;
  font-weight: 500;
}

.newPageA:hover {
  color: rgb(238, 164, 171);
}

.newPageA {
  color: rgb(80, 78, 78);
  text-decoration: none;
}
.newPageA:link {
  text-decoration: none;
}
.newPageA span {
  margin-left: 8px;
  margin-right: 2px;
}
.NewMessage p {
  word-wrap: break-word;
}

.NewMessage {
  position: relative;
  margin-top: 30px;
  width: 90%;
  height: 100px;
}
.pageMessage span {
  font-size: 12px;
  font-weight: 500;
}
.pageMessage {
  margin-top: 10px;
}

.newPageHead {
  height: 60px;
  overflow: hidden;
}

.newPageHead p {
  word-wrap: break-word;
}

.newPageConten {
  position: relative;
  margin-top: 20px;
  margin-left: 35px;
  height: 100%;
  width: 100%;
}

.newImg {
  height: 300px;
  padding: 0;
  border-radius: 15px 0 0 15px;
  overflow: hidden;
}

.newImg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: all 0.6s;
}

.newImg :hover {
  transform: scale(1.1);
}

.newPageArticle {
  margin-top: 50px;
  margin-bottom: 50px;
  border-radius: 15px;
  border-left: 0px;
  border-bottom: 0px;
  border: solid rgba(244, 244, 244, 0.9) 5px;
  color: rgba(0, 0, 0, 0.66);
}
</style>