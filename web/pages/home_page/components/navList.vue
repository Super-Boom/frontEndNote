<template>
  <div>
    <div class="navBox">
      <h1>前端笔记</h1>
      <aside class="navItem" v-for="item in navFirstLevel" :key="item">{{item}}</aside>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navList: {
        HTML:[],
        CSS:[],
        JS:[],
        Node:[],
        VUE:[]
      },
    };
  },
  computed:{
    navFirstLevel(){
      return Object.keys(this.navList);
    }
  },
  mounted(){

  },
  methods:{

  }
};
</script>
<style>
.navBox {
  width: 20%;
  background-color: cadetblue;
  box-shadow: 6px 0 6px #ccc;
  position: fixed;
  height: 100%;
}
.navItem {
  line-height: 40px;
  cursor: pointer;
  padding: 4px;
  
}
.navItem:hover {
  background-color: #fff;
}
</style>
