<template>
  <div>
    <el-carousel height="250px">
      <el-carousel-item v-for="item in imageArr" :key="item">
        <div class="imageBox">
          <img :src="item" :alt="item" style="width:100%">
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  props: {
    width: {
      default: "60%"
    }
  },
  data() {
    return {
      imageArr: [
        "/home_page/1.jpg",
        "/home_page/2.jpg",
        "/home_page/3.jpg",
        "/home_page/4.jpg"
      ]
    };
  }
};
</script>
<style>
.imageBox {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

