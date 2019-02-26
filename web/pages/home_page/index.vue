<template>
  <div>
    <headerBar></headerBar>
    <el-row>
      <el-col :span="5" style="height:250px"></el-col>
      <el-col :span="14">
        <swipper></swipper>
      </el-col>
      <el-col :span="5" style="height:250px"></el-col>
    </el-row>
  </div>
</template>

<script>
import swipper from './components/swipper';
import headerBar from './components/headerBar';
export default {
  data(){
    return {
      
    }
  },
  components:{swipper,headerBar}
}
</script>
