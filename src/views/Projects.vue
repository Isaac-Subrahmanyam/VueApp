<template>
  <title>Projects</title>
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
            <swiper-slide v-for='project in projects' :key='project'>
                <n-card :title="project.name" size="small">
                    <template #cover>
                    <img :src="project.image">
                    </template>
                    <n-button strong secondary type="primary" @click="project.handleClick()">
                    Play
                    </n-button>
                </n-card>
            </swiper-slide>
        </swiper-container>
    </div>
    <n-divider />
    <div class="header-section">
        <section>
            <div class="content">
                <h2>SD2 Project</h2>
                <h2>SD2 Project</h2>
            </div>
        </section>
    </div>
    <iframe width="80%" style="max-width: 800px; max-height: 800px; padding-bottom: 5rem;" height="500px" src="https://www.youtube.com/embed/vj2GCrb2X6E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
    </iframe>
    <n-divider />
    <div class="header-section">
        <section>
            <div class="content">
                <h2>ArtiOrganizer Project</h2>
                <h2>ArtiOrganizer Project</h2>
            </div>
        </section>
    </div>
    <h1><a style="color: rgb(6, 54, 6);" href="https://artiorganizer.com/" target="_blank">artiorganizer.com</a></h1>
    <iframe width="80%" style="max-width: 800px; max-height: 800px; padding-bottom: 5rem;" height="500px" src="https://www.youtube.com/embed/5TgSjWn_jB0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</template>

<script>
    import thecurrent2 from '../../images/thecurrent2.jpeg';
    import adventuresofthesouthpole from '../../images/adventuresofthesouthpole.jpeg';
    import burgermaster from '../../images/burgermaster.jpeg';
    import donttouchthered2 from '../../images/donttouchthered2.jpeg';
    import gravity from '../../images/gravity.jpeg';
    import nerdsnightmares from '../../images/nerdsnightmares.jpeg';
    import puzzleballsort from '../../images/puzzleballsort.jpeg';
    import rolly from '../../images/rolly.jpeg';
    import unicornmania from '../../images/unicornmania.jpeg';
    import theemojigame from '../../images/theemojigame.jpeg';
    import spiral from '../../images/spiral.jpeg';
    import flybird from '../../images/flybird.jpeg';

    export default {
        name: 'App',
        data: function () {
            return {
                projects: [
                    {
                        name: "Gravity",
                        image: gravity,
                        handleClick() { window.location.href="/gravity" }
                    },
                    {
                        name: "Puzzle Ball Sort",
                        image: puzzleballsort,
                        handleClick() { window.location.href="/puzzleballsort" }
                    },
                    {
                        name: "The Current",
                        image: thecurrent2,
                        handleClick() { window.location.href="/thecurrent" }
                    },
                    {
                        name: "Fly Bird",
                        image: flybird,
                        handleClick() { window.location.href="/flybird" }
                    },
                    {
                        name: "Adventures of the South Pole",
                        image: adventuresofthesouthpole,
                        handleClick() { window.location.href="/adventuresofthesouthpole" }
                    },
                    {
                        name: "Rolly",
                        image: rolly,
                        handleClick() { window.location.href="/rolly" }
                    },
                    {
                        name: "Burger Master",
                        image: burgermaster,
                        handleClick() { window.location.href="/burgermaster" }
                    },
                    {
                        name: "Don't Touch the Red",
                        image: donttouchthered2,
                        handleClick() { window.location.href="/donttouchthered" }
                    },
                    {
                        name: "Nerds Nightmares",
                        image: nerdsnightmares,
                        handleClick() { window.location.href="/nerdsnightmares" }
                    },
                    {
                        name: "Unicorn Mania",
                        image: unicornmania,
                        handleClick() { window.location.href="/unicornmania" }
                    },
                    {
                        name: "The Emoji Game",
                        image: theemojigame,
                        handleClick() { window.location.href="/theemojigame" }
                    },
                    {
                        name: "Spiral",
                        image: spiral,
                        handleClick() { window.location.href="/spiral" }
                    }
                ]
            }
        },
        computed: {
        }
    }
</script>


<style scoped>

* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
    --swiper-theme-color: #10c964;
}

.n-card {
    --n-title-font-size: min(3vw, 15px) !important;
    --n-padding-top: 10% !important;
    --n-font-size: min(3vw, 15px) !important;
    width: min(30vw, 250px) !important;
    height: min(40vw, 350px) !important;
    text-align: left;
    /* opacity: 80%; */
}
/* .n-card:hover {
    opacity: 100%;
} */

.n-card .n-card-cover img {
    display: block;
}

.status418 {
    padding-bottom: 200px;
}

.projects {
    justify-content: center;
    margin: 5vh auto;
    width: 80%;
    max-width: 800px;
    height: 100%;
    padding-bottom: 10%;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 60px;
}


.gallery {
  background: #EEE;
}

.gallery-cell {
  width: 66%;
  height: 200px;
  margin-right: 10px;
  background: #8C8;
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
    margin: 3vh auto;
    width: 100%;
    height: 100%;
    display: flex;
    color: rgb(6, 54, 6);
    flex-wrap: wrap;
}

@import url("https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900");

body {
  display: flex;
  background: #000;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

.content h2 {
  color: #fff;
  font-size: 2.2em;
  position: absolute;
  width: 100%;
  transform: translate(-50%, -50%);
}

.content h2:nth-child(1) {
  color: transparent;
  -webkit-text-stroke: 2px rgb(6, 54, 6);
}

.content h2:nth-child(2) {
  color: rgb(6, 54, 6);
  animation: animate 1s ease-in-out infinite;
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