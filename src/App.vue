<template>
  <div id="app">
    
    
        <Header class="header"></Header>
    
    
        <router-view></router-view>
        <Footer></Footer>
   
  </div>
</template>

<script>
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer
  },
    
};
</script>

<style>
.header{
  z-index: 1;
}
</style>
