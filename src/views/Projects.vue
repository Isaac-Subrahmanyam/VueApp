<template>
  <title>Projects</title>

  <div class="projects-page">

    <!-- JAVASCRIPT GAMES -->
    <section class="portfolio-section">
      <div class="section-heading">
        <span class="section-label">Interactive Projects</span>
        <h2>JavaScript Games</h2>
        <div class="section-divider"></div>
      </div>

      <div class="projects-grid">
        <router-link
          v-for="project in projects"
          :key="project.link"
          :to="project.link"
          class="project-game-card"
        >
          <img
            :src="project.image"
            :alt="project.name"
            class="project-game-image"
          />

          <div class="project-game-overlay">
            <div class="project-game-title">
              {{ project.name }}
            </div>

            <div class="project-game-action">
              <span class="project-play-icon">▶</span>
              Play Game
            </div>
          </div>
        </router-link>
      </div>
    </section>

    <!-- FLIGHT SIMULATOR -->
    <section class="portfolio-section showcase-section">
      <div class="section-heading">
        <span class="section-label">Simulation</span>
        <h2>Flight Simulator</h2>
        <div class="section-divider"></div>
      </div>

      <div class="project-video-container">
        <iframe
          src="https://www.youtube.com/embed/9rUCdSf4UAI?si=PjjQa0EXeMec_NM4"
          title="Flight Simulator"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <router-link to="/flight-sim" class="project-link">
        Launch Flight Simulator
        <span>→</span>
      </router-link>
    </section>

    <!-- SD2 -->
    <section class="portfolio-section showcase-section">
      <div class="section-heading">
        <span class="section-label">Software Project</span>
        <h2>SD2 Project</h2>
        <div class="section-divider"></div>
      </div>

      <div class="project-video-container">
        <iframe
          src="https://www.youtube.com/embed/vj2GCrb2X6E"
          title="SD2 Project"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </section>

    <!-- ARTIORGANIZER -->
    <section class="portfolio-section showcase-section">
      <div class="section-heading">
        <span class="section-label">Software Project</span>
        <h2>ArtiOrganizer</h2>
        <div class="section-divider"></div>
      </div>

      <div class="project-video-container">
        <iframe
          src="https://www.youtube.com/embed/5TgSjWn_jB0"
          title="ArtiOrganizer Project"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </section>

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
import wordrivals from '../../images/wordrivals.png'
import flybird from '../../images/flybird.jpeg'

export default {
  name: 'App',

  data: function () {
    return {
      projects: [
        {
          name: 'Word Rivals',
          image: wordrivals,
          link: '/wordrivals'
        },
        {
          name: 'Gravity',
          image: gravity,
          link: '/gravity'
        },
        {
          name: 'Puzzle Ball Sort',
          image: puzzleballsort,
          link: '/puzzleballsort'
        },
        {
          name: 'The Current',
          image: thecurrent2,
          link: '/thecurrent'
        },
        {
          name: 'Fly Bird',
          image: flybird,
          link: '/flybird'
        },
        {
          name: 'Adventures of the South Pole',
          image: adventuresofthesouthpole,
          link: '/adventuresofthesouthpole'
        },
        {
          name: 'Rolly',
          image: rolly,
          link: '/rolly'
        },
        {
          name: 'Burger Master',
          image: burgermaster,
          link: '/burgermaster'
        },
        {
          name: "Don't Touch the Red",
          image: donttouchthered2,
          link: '/donttouchthered'
        },
        {
          name: "Nerd's Nightmares",
          image: nerdsnightmares,
          link: '/nerdsnightmares'
        },
        {
          name: 'Unicorn Mania',
          image: unicornmania,
          link: '/unicornmania'
        },
        {
          name: 'The Emoji Game',
          image: theemojigame,
          link: '/theemojigame'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');

* {
  box-sizing: border-box;
}

.projects-page {
  width: 100%;
  padding: 30px 0 100px;
}

/* ========================================
   SECTIONS
======================================== */

.portfolio-section {
  width: min(1180px, 90%);
  margin: 0 auto;
  padding: 55px 0;
}

.showcase-section {
  padding-top: 75px;
}

/* ========================================
   SECTION HEADERS
======================================== */

.section-heading {
  max-width: 620px;
  margin: 0 auto 38px;
  text-align: center;
}

.section-label {
  display: block;

  margin-bottom: 9px;

  color: #58b7d8;

  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 700;

  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.section-heading h2 {
  margin: 0;

  color: #ffffff;

  font-family: 'Poppins', sans-serif;
  font-size: clamp(28px, 4vw, 38px);
  font-weight: 600;

  letter-spacing: -0.03em;
}

.section-heading p {
  max-width: 520px;

  margin: 11px auto 0;

  color: rgba(255, 255, 255, 0.55);

  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 1.65;
}

.section-divider {
  width: 44px;
  height: 3px;

  margin: 17px auto 0;

  border-radius: 100px;

  background: linear-gradient(
    90deg,
    transparent,
    #3a93b3,
    transparent
  );

  box-shadow: 0 0 12px rgba(58, 147, 179, 0.4);
}

/* ========================================
   GAME GRID
======================================== */

.projects-grid {
  width: 100%;

  display: grid;

  grid-template-columns: repeat(4, minmax(0, 1fr));

  gap: 20px;
}

/* ========================================
   GAME CARD
======================================== */

.project-game-card {
  position: relative;

  width: 100%;

  aspect-ratio: 1 / 1;

  display: block;

  overflow: hidden;

  border-radius: 15px;

  background: linear-gradient(145deg, #09171d, #050c10);

  border: 1px solid rgba(123, 195, 221, 0.18);

  box-shadow:
    0 12px 26px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(88, 183, 216, 0.025);

  text-decoration: none;

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.project-game-card::after {
  content: '';

  position: absolute;
  inset: 0;

  pointer-events: none;

  border-radius: inherit;

  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.025);
}

.project-game-card:hover {
  transform: translateY(-6px) scale(1.015);

  border-color: rgba(123, 195, 221, 0.62);

  box-shadow:
    0 20px 38px rgba(0, 0, 0, 0.42),
    0 0 28px rgba(58, 147, 179, 0.2);
}

/* ========================================
   GAME IMAGE
======================================== */

.project-game-image {
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;

  transition:
    transform 0.4s ease,
    filter 0.4s ease;
}

.project-game-card:hover .project-game-image {
  transform: scale(1.07);

  filter:
    brightness(1.08)
    saturate(1.12);
}

/* ========================================
   CARD OVERLAY
======================================== */

.project-game-overlay {
  position: absolute;

  inset: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  padding: 16px;

  background:
    linear-gradient(
      to top,
      rgba(2, 8, 12, 0.98) 0%,
      rgba(3, 13, 18, 0.88) 20%,
      rgba(5, 23, 30, 0.52) 40%,
      rgba(8, 35, 45, 0.08) 66%,
      transparent 78%
    );

  pointer-events: none;
}

/* ========================================
   CARD TITLE
======================================== */

.project-game-title {
  margin-bottom: 9px;

  color: #ffffff;

  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: 600;

  line-height: 1.25;

  text-shadow:
    0 2px 7px rgba(0, 0, 0, 0.9);
}

/* ========================================
   PLAY ACTION
======================================== */

.project-game-action {
  width: auto !important;
  height: auto !important;

  position: static !important;

  display: inline-flex;
  align-items: center;

  gap: 6px;

  padding: 5px 10px;

  color: #83d8f5;

  background: rgba(58, 147, 179, 0.14);

  border: 1px solid rgba(123, 195, 221, 0.25);

  border-radius: 8px;

  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 700;

  letter-spacing: 0.02em;

  box-shadow: none !important;

  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    color 0.25s ease;
}

.project-play-icon {
  font-size: 9px;
}

.project-game-card:hover .project-game-action {
  color: #b9ebfc;

  background: rgba(58, 147, 179, 0.23);

  border-color: rgba(123, 195, 221, 0.45);
}

/* ========================================
   VIDEOS
======================================== */

.project-video-container {
  width: min(850px, 100%);

  aspect-ratio: 16 / 9;

  margin: 0 auto;

  overflow: hidden;

  border-radius: 18px;

  background: #071014;

  border: 1px solid rgba(123, 195, 221, 0.15);

  box-shadow:
    0 18px 45px rgba(0, 0, 0, 0.35),
    0 0 30px rgba(58, 147, 179, 0.08);
}

.project-video-container iframe {
  display: block;

  width: 100%;
  height: 100%;
}

/* ========================================
   FLIGHT SIM LINK
======================================== */

.project-link {
  width: fit-content;

  margin: 20px auto 0;

  padding: 10px 17px;

  display: flex;
  align-items: center;

  gap: 8px;

  border-radius: 10px;

  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 600;

  text-decoration: none;

  color: #071116;

  background:
    linear-gradient(
      135deg,
      #8adcf7,
      #4aafd3
    );

  border:
    1px solid #9ce5ff;

  box-shadow:
    0 8px 20px rgba(58, 147, 179, 0.16);

  transition:
    transform 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease;
}

.project-link span {
  transition: transform 0.2s ease;
}

.project-link:hover {
  transform: translateY(-2px);

  box-shadow:
    0 11px 25px rgba(58, 147, 179, 0.24);
}

.project-link:hover span {
  transform: translateX(4px);
}

/* ========================================
   TABLET
======================================== */

@media (max-width: 850px) {
  .projects-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));

    gap: 20px;
  }

  .portfolio-section {
    width: 92%;
  }
}

@media (max-width: 680px) {
  .projects-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* ========================================
   MOBILE
======================================== */

@media (max-width: 550px) {
  .projects-page {
    padding-top: 10px;
  }

  .portfolio-section {
    width: 92%;

    padding: 45px 0;
  }

  .projects-grid {
    grid-template-columns: 1fr;

    gap: 18px;
  }

  .section-heading {
    margin-bottom: 28px;
  }

  .section-heading h2 {
    font-size: 27px;
  }

  .section-heading p {
    font-size: 13px;
  }

  .project-game-overlay {
    padding: 17px;
  }

  .project-game-title {
    font-size: 15px;
  }

  .showcase-section {
    padding-top: 55px;
  }

  .project-video-container {
    border-radius: 13px;
  }
}
</style>