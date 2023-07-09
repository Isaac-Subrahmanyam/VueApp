<template>
  <title>Projects</title>
  <div style="padding-bottom: 100px">
    <div class="header-section">
      <section>
        <div class="content">
          <h2>JavaScript Games</h2>
          <h2>JavaScript Games</h2>
        </div>
      </section>
    </div>
    <div class="projects">
      <swiper-container
        :slides-per-view="3"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
      >
        <swiper-slide v-for="project in projects" :key="project">
          <n-card size="small">
            <template #cover>
              <img
                :src="project.image"
                style="object-fit: cover; width: 100%; max-height: 250px"
              />
            </template>
            <router-link :to="project.link">
              <div class="btn"><a href="#">Play</a></div>
            </router-link>
          </n-card>
        </swiper-slide>
      </swiper-container>
    </div>
    <div class="header-section">
      <section>
        <div class="content">
          <h2>SD2 Project</h2>
          <h2>SD2 Project</h2>
        </div>
      </section>
    </div>
    <iframe
      width="80%"
      style="
        filter: drop-shadow(0 0 0.75rem #3a93b3);
        max-width: 800px;
        max-height: 800px;
        padding-bottom: 5rem;
      "
      height="500px"
      src="https://www.youtube.com/embed/vj2GCrb2X6E"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
    <div class="header-section">
      <section>
        <div class="content">
          <h2>ArtiOrganizer Project</h2>
          <h2>ArtiOrganizer Project</h2>
        </div>
      </section>
    </div>
    <h1>
      <a class="arti" href="https://artiorganizer.com/" target="_blank">
        artiorganizer.com
      </a>
    </h1>
    <iframe
      width="80%"
      style="padding-top: 2rem; filter: drop-shadow(0 0 0.75rem #3a93b3; max-width: 800px; max-height: 800px; padding-bottom: 5rem;"
      height="500px"
      src="https://www.youtube.com/embed/5TgSjWn_jB0"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
import thecurrent2 from '../../images/thecurrent2.jpeg'
import adventuresofthesouthpole from '../../images/adventuresofthesouthpole.jpeg'
import burgermaster from '../../images/burgermaster.jpeg'
import donttouchthered2 from '../../images/donttouchthered2.jpeg'
import gravity from '../../images/gravity.jpeg'
import nerdsnightmares from '../../images/nerdsnightmares.jpeg'
import puzzleballsort from '../../images/puzzleballsort.jpeg'
import rolly from '../../images/rolly.jpeg'
import unicornmania from '../../images/unicornmania.jpeg'
import theemojigame from '../../images/theemojigame.jpeg'
import spiral from '../../images/spiral.jpeg'
import flybird from '../../images/flybird.jpeg'

export default {
  name: 'App',
  data: function () {
    return {
      projects: [
        {
          image: gravity,
          link: '/gravity'
        },
        {
          image: puzzleballsort,
          link: '/puzzleballsort'
        },
        {
          image: thecurrent2,
          link: '/thecurrent'
        },
        {
          image: flybird,
          link: '/flybird'
        },
        {
          image: adventuresofthesouthpole,
          link: '/adventuresofthesouthpole'
        },
        {
          name: 'Rolly',
          image: rolly,
          link: '/rolly'
        },
        {
          image: burgermaster,
          link: '/burgermaster'
        },
        {
          image: donttouchthered2,
          link: '/donttouchthered'
        },
        {
          image: nerdsnightmares,
          link: '/nerdsnightmares'
        },
        {
          image: unicornmania,
          link: '/unicornmania'
        },
        {
          image: theemojigame,
          link: '/theemojigame'
        },
        {
          image: spiral,
          link: '/spiral'
        }
      ]
    }
  },
  computed: {}
}
</script>


<style scoped>
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  --swiper-theme-color: #3a93b3;
}

.arti {
  text-decoration: none;
  color: #bfcad0;
  font-weight: 700;
  position: relative;
}

.arti::before {
  content: '';
  background-color: hsl(196, 51%, 46%, 0.75);
  position: absolute;
  left: 0;
  bottom: 3px;
  width: 100%;
  height: 8px;
  z-index: -1;
  transition: all 0.3s ease-in-out;
}

.arti:hover::before {
  bottom: 0;
  height: 100%;
}

.n-card {
  --n-title-font-size: min(3vw, 15px) !important;
  --n-padding-top: 10% !important;
  --n-font-size: min(3vw, 15px) !important;
  width: min(30vw, 250px) !important;
  height: min(40vw, 350px) !important;
  text-align: left;
}
.n-card .n-card-cover img {
  display: block;
}

.status418 {
  padding-bottom: 200px;
}

.projects {
  justify-content: center;
  margin: 0vh auto;
  filter: drop-shadow(0 0 0.75rem #3a93b3);
  width: 80%;
  max-width: 800px;
  height: 100%;
  padding-bottom: 10%;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 60px;
}

.gallery {
  background: #eee;
}

.gallery-cell {
  width: 66%;
  height: 200px;
  margin-right: 10px;
  background: #3a93b3;
  counter-increment: gallery-cell;
}

/* cell number */
.gallery-cell:before {
  display: block;
  text-align: center;
  content: counter(gallery-cell);
  line-height: 200px;
  font-size: 80px;
  color: white;
}

.header-section {
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: center;
  justify-content: center;
  margin: 5vh auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}

@import url('https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900');

body {
  display: flex;
  background: #000;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

.content h2 {
  font-size: 2.2em;
  position: absolute;
  width: 350px;
  background-color: rgba(255, 255, 255, 0.466);
  backdrop-filter: blur(8px);
  transform: translate(-50%, -50%);
  border-radius: 50px;
  filter: drop-shadow(0px 0px 7px #7bc3dd);
}

.content h2:nth-child(1) {
  color: transparent;
  -webkit-text-stroke: 2px #3a93b3a4;
}

.content h2:nth-child(2) {
  color: #3a93b3a4;
  animation: animate 1s ease-in-out infinite;
}

.n-card {
  background-color: #ffffff2a;
  backdrop-filter: blur(8px) !important;
  width: 100% !important;
}

.btn {
  position: relative;
  top: 25%;
  left: 0;
  width: 100%;
  height: 50px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  padding: 10px;
  letter-spacing: 1px;
  text-decoration: none;
  overflow: hidden;
  color: #fff;
  font-weight: 400px;
  z-index: 1;
  transition: 0.5s;
  backdrop-filter: blur(15px);
}
.btn:hover a {
  letter-spacing: 3px;
}
.btn a::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(to left, rgba(255, 255, 255, 0.15), transparent);
  transform: skewX(45deg) translate(0);
  transition: 0.5s;
  filter: blur(0px);
}
.btn:hover a::before {
  transform: skewX(45deg) translate(200px);
}
.btn::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translatex(-50%);
  bottom: -5px;
  width: 30px;
  height: 10px;
  background: #f00;
  border-radius: 10px;
  transition: 0.5s;
  transition-delay: 0.5;
}
.btn:hover::before /*lightup button*/ {
  bottom: 0;
  height: 50%;
  width: 80%;
  border-radius: 30px;
}

.btn::after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translatex(-50%);
  top: -5px;
  width: 30px;
  height: 10px;
  background: #f00;
  border-radius: 10px;
  transition: 0.5s;
  transition-delay: 0.5;
}
.btn:hover::after /*lightup button*/ {
  top: 0;
  height: 50%;
  width: 80%;
  border-radius: 30px;
}
.btn:nth-child(1)::before, /* 2*/
.btn:nth-child(1)::after {
  background: #2db2ff;
  box-shadow: 0 0 5px #2db2ff, 0 0 15px #2db2ff, 0 0 30px #2db2ff,
    0 0 60px #2db2ff;
  backdrop-filter: blur(8px) !important;
}
@keyframes animate {
  0%,
  100% {
    clip-path: polygon(
      0% 45%,
      16% 44%,
      33% 50%,
      54% 60%,
      70% 61%,
      84% 59%,
      100% 52%,
      100% 100%,
      0% 100%
    );
  }

  50% {
    clip-path: polygon(
      0% 60%,
      15% 65%,
      34% 66%,
      51% 62%,
      67% 50%,
      84% 45%,
      100% 46%,
      100% 100%,
      0% 100%
    );
  }
}
</style>