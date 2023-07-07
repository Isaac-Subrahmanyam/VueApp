<script type="module">
import Navbar from '@/components/sidebar/Navbar'
export default {
  components: { Navbar },
  setup() {
    return {}
  }
}
</script>

<template>
  <div class="section-content">
    <Navbar />
    <div>
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#gamescript {
  padding-bottom: 40px;
  padding-top: 1rem;
}

#projectsStyle1 {
  display: flex;
  justify-content: center;
  padding-top: 5rem;
  width: 100%;
}
#projectsStyle2 {
  padding: 0px 5px;
}

#nav a.router-link-exact-active {
  color: #3a93b3;
}

@mixin sp-layout {
  @media screen and (max-width: 750px) {
    @content;
  }
}

.n-tag {
  backdrop-filter: blur(8px);
}

.n-button {
  backdrop-filter: blur(8px);
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: radial-gradient(ellipse at bottom, #0d1d31 0%, #0c0d13 100%);
}

@function random_range($min, $max) {
  $rand: random();
  $random_range: $min + floor($rand * (($max - $min) + 1));
  @return $random_range;
}

.section-content {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  overflow-y: auto;
  height: 100vh;
}
</style>
