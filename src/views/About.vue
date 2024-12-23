
<template>
  <title>About</title>
  <div class="about">
    <div class="pfp">
      <img id="photo" src="../../images/profilephoto.jpeg" />
      <br />
      <h1 class="name">Isaac Subrahmanyam</h1>
    </div>
    <div class="description">
      <h1 class="intro">
        Hello there,
        <br />
        <br />
        I’m Isaac! I am a full-stack developer with an emphasis on front-end
        development! My favorite frameworks are Angular and Vue.
        <br />
        <br />
        My experience includes the development of GIS / COP Applications, so I
        am well versed using OpenLayers, GeoServer, and Cesium. Check out this personal project I made that uses these tools:
        <router-link to="/flight-sim" class="btn" style="color: aqua;">
          Isaac's Flight Simulator
        </router-link>
        <br />
        <br />
        Check out more of my personal projects here:
        <router-link to="/projects" class="btn" style="color: aqua;">
          Isaac's Projects
        </router-link>
      </h1>
      <div id="socials">
        <n-tooltip placement="top" trigger="hover">
          <template #trigger>
            <a target="_blank" href="https://github.com/Isaac-Subrahmanyam">
              <img class="iconHomePage" src="../../images/git.jpeg" />
            </a>
          </template>
          <span>GitHub</span>
        </n-tooltip>
        <n-tooltip placement="top" trigger="hover">
          <template #trigger>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/isaac-subrahmanyam/"
            >
              <img class="iconHomePage" src="../../images/in.jpeg" />
            </a>
          </template>
          <span>LinkedIn</span>
        </n-tooltip>
      </div>
    </div>
  </div>
</template>

<style scoped>
#photo {
  animation: fadeEffect 1s;
  border-radius: 100%;
  margin: 20px auto;
  width: min(40vw, 200px);
}
.name {
  font-size: min(3vw, 30px);
}
.iconHomePage {
  animation: fadeEffect 6s;
  transition: all 150ms ease-in-out;
  border-radius: 200px;
  width: min(6vw, 30px);
  height: min(6vw, 30px);
  box-shadow: 0 0 10px 0 #ffffff inset, 0 0 10px 2px #ffffff;
  cursor: pointer;
}
.iconHomePage:hover {
  box-shadow: 0 0 20px 0 #ffffff inset, 0 0 25px 4px #ffffff;
}
#socials {
  margin: 4vh auto;
  justify-content: space-between;
  width: 20%;
  display: flex;
}

.about {
  margin: 3vh auto;
  width: min(80vw, 500px);
  height: 100%;
  padding-bottom: 130px;
}
.pfp {
  background-color: rgba(255, 255, 255, 0.486);
  backdrop-filter: blur(8px);
  height: min(80vw, 400px);
  filter: drop-shadow(0 0 0.75rem #3a93b3);
  width: 100%;
}
.intro {
  margin: auto;
  text-align: left;
  color: white;
  width: 70%;
}
.description {
  padding-top: 2vw;
  filter: drop-shadow(0 0 0.75rem #3a93b3);
  background-color: #3a93b386;
  backdrop-filter: blur(8px);
  width: 100%;
  font-size: min(1.5vw, 7px);
  height: min(100vw, 350px);
}
</style>