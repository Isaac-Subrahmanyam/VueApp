<template>
  <div class="home">
    <img id="companyImage" 
    src="https://www.foodrepublic.com/wp-content/uploads/2015/02/capresepesto.jpg" />
    
    <h1 class="companytitle">YOSHI SALAD</h1>
    <h1 class="companydesp">We make the best fucking salads! Fuck Olive Garden their salads are literally shit!</h1>

    <div class="menu">
      
      <div class="tab">
        <h1 class="number">02</h1>
        <h1 class="number-title">Table Number</h1>
      </div>

      <div class="section">
        
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="scss" scoped>

.menu {
  background: radial-gradient(122.48% 82.9% at 49.87%, rgb(190, 190, 190) 0%, rgba(255, 255, 255) 100%) ;
  box-shadow: 0px 4px 9px 11px rgba(0, 0, 0, 0.25);
  border-radius: 46px;

  left: 0px;
  width: 100%;
  height: calc(100vh - 200px);
  opacity: 90%;
  overflow-y: hidden;
  transform: translateY(200px);
  overflow-x: hidden;
  z-index: -1;
  // position: absolute;
}
.number {
  // left: 0px;
  font-weight: 600;
  transform: translate(25px, -15px);
  text-align: left;
  color: rgba(0, 88, 77, 0.92);
  font-size: 40px;
  line-height: 53px;
}
.number-title {
  // left: 0px;
  font-weight: 600;
  transform: translate(30px, 0px);
  text-align: left;
  color: rgba(0, 88, 77, 0.92);
  font-size: 25px;
  line-height: 53px;
}
.tab {
  display: flex;
}
.section {
  transform: translate(0px, -30px);
}
.menu-options {
  --n-tab-color-segment: rgba(0, 88, 77, 0.92) !important;
  --n-tab-text-color: rgba(0, 88, 77, 0.92) !important;
  --n-pane-text-color: white !important;
  --n-color-segment: white !important;
  --n-tab-font-weight: 600 !important;
  --n-tab-font-size: 20px !important;
  --n-tab-text-color-hover: white !important;
  --n-tab-text-color-pressed: white !important;
  --n-tab-text-color-active: white !important;
}

.companytitle {
  z-index: -2;
  position: fixed;
  top: 120px;
  left: 15px;
  text-align: left;
  font-weight: 700;
  font-size: 20px;
  line-height: 18px;
  font-weight: 500;

  color: #FFFFFF;
}

.companydesp {
  z-index: -2;
  position: fixed;
  width: 75%;
  top: 145px;
  left: 15px;
  text-align: left;
  font-size: 13px;
  font-weight: 400;
  color: #FFFFFF;
}

#companyImage {
  position: fixed;
  filter: brightness(30%);
  opacity: 80%;
  top: 0px;
  left: 0px;
  margin: 0px;
  // display: flex;
  width: 100%;
  // height: 300px;
  z-index: -3;
}

</style>