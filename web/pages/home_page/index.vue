<template>
  <div>
    <!-- <headerBar></headerBar> -->
    <el-row>
      <el-col :span="6">
        <navList></navList>
      </el-col>
      <el-col :span="18"></el-col>
      <!-- <el-col :span="5" style="height:250px"></el-col>
      <el-col :span="14">
        <swipper></swipper>
      </el-col>
      <el-col :span="5" style="height:250px"></el-col> -->
    </el-row>
  </div>
</template>

<script>
import swipper from './components/swipper';
import headerBar from './components/headerBar';
import navList from './components/navList'
export default {
  data(){
    return {
      
    }
  },
  components:{swipper,headerBar,navList}
}
</script>
