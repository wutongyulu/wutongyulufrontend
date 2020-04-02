<template>
  <!-- 底部 -->
  <el-row>
    <el-col :xs="24" :sm="24" :md="24" :lg="24">
      <div id="bottomBeian">
        <div id="bottomBeianDiv">
          © 2020 WTYL
          <a href="http://www.beian.miit.gov.cn/">蜀ICP备20005359号</a>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
#bottomBeianDiv a {
  color: rgba(0, 0, 0, 0.4);
  text-decoration: none;
}

#bottomBeianDiv {
  color: rgba(0, 0, 0, 0.4);
}

#bottomBeian {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 50px;
}
</style>