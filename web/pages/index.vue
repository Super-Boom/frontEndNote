<template>
  <div>
    <p>{{name}}</p>
  </div>
</template>

<script>

import { fetchData } from "./api/test.js";
export default {
  components: {
    
  },
  data() {
    return {
      name:''
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      let data = fetchData.asyncData({ a: 1 });
      data.then(res => {
        console.log("res", res);
        this.name = res.data;
      });
    }
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
