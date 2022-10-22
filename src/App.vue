<script>
import Navbar from '@/components/sidebar/Navbar'
export default {
  components: { Navbar },
  setup() {
    return {
      
    }
  }
}
</script>
<template>
  <Navbar />
  <div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
    background-image: linear-gradient(-225deg, #ffffff 0%, rgb(197, 218, 216) 56%, rgb(136, 173, 170) 100%);
    color: #ffffff;
    overflow-x: hidden;
    background-size: 100% 150%;
}

#gamescript {
  margin: 2vh;
  padding-bottom: 40px;
}

#projectsStyle1 {
  margin: 2vh auto;
  display: flex;
  justify-content: center;
}
#projectsStyle2 {
  padding: 0px 5px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
