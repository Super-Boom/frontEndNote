<template>
  <div>
    <div class="head">
      <el-row>
        <el-col class="side_bar" :span="5"></el-col>
        <el-col :span="14">11</el-col>
        <el-col class="side_bar" :span="5"></el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
  .head{
    height: 50px;
    background-color: red;
  }
  .side_bar{
    height: 50px;
  }
</style>
