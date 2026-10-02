<template>
  <title>About</title>

  <div class="about-page">
    <section class="about-section">

      <!-- PAGE HEADER -->
      <div class="section-heading">
        <span class="section-label">Get To Know Me</span>

        <h1>About Me</h1>
        
        <div class="section-divider"></div>

      </div>

      <!-- MAIN ABOUT CARD -->
      <div class="about-card">

        <!-- PROFILE SIDE -->
        <div class="profile-column">

          <div class="profile-image-wrapper">
            <img
              id="photo"
              src="../../images/profilephoto.jpeg"
              alt="Isaac Subrahmanyam"
            />

            <div class="profile-status">
              <span class="status-dot"></span>
              Software Engineer
            </div>
          </div>

          <div class="profile-info">
            <span class="profile-label">
              HELLO, I'M
            </span>

            <h2>
              Isaac<br />
              Subrahmanyam
            </h2>

            <p class="profile-location">
              Orlando, Florida
            </p>

            <!-- SOCIAL LINKS -->
            <div class="social-links">

              <n-tooltip placement="bottom" trigger="hover">
                <template #trigger>
                  <a
                    href="https://github.com/Isaac-Subrahmanyam"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="social-button"
                  >
                    <div class="social-icon">
                      <img
                        src="../../images/git.jpeg"
                        alt="GitHub"
                      />
                    </div>

                    <span class="social-name">
                      GitHub
                    </span>

                    <span class="social-arrow">
                      ↗
                    </span>
                  </a>
                </template>

                <span>View GitHub</span>
              </n-tooltip>

              <n-tooltip placement="bottom" trigger="hover">
                <template #trigger>
                  <a
                    href="https://www.linkedin.com/in/isaac-subrahmanyam/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="social-button"
                  >
                    <div class="social-icon">
                      <img
                        src="../../images/in.jpeg"
                        alt="LinkedIn"
                      />
                    </div>

                    <span class="social-name">
                      LinkedIn
                    </span>

                    <span class="social-arrow">
                      ↗
                    </span>
                  </a>
                </template>

                <span>View LinkedIn</span>
              </n-tooltip>

            </div>
          </div>

        </div>

        <!-- ABOUT CONTENT -->
        <div class="about-content">

          <span class="content-label">
            MY STORY
          </span>

          <h3>
            I like building software that
            <span>does something interesting.</span>
          </h3>

          <p>
            My interest in software development started when I was
            13, building JavaScript applications and experimenting
            with what I could create through code.
          </p>

          <p>
            That interest eventually led me to earn my degree in
            Computer Science and build a career as a software
            engineer. Today, I work across full-stack development,
            defense simulation, autonomous systems, and interactive
            geospatial applications.
          </p>

          <p>
            I've worked on everything from multi-user mission
            planning software and AI-driven aircraft simulations to
            training applications and extensible UI platforms.
            I especially enjoy projects where engineering,
            visualization, and interactivity come together.
          </p>

          <!-- SKILLS -->
          <div class="about-skills">
            <span>Full-Stack</span>
            <span>Simulation</span>
            <span>Geospatial</span>
            <span>Autonomy</span>
            <span>UI / UX</span>
          </div>

          <!-- ACTIONS -->
          <div class="about-actions">

            <router-link
              to="/projects"
              class="primary-action"
            >
              View My Projects
              <span>→</span>
            </router-link>

            <router-link
              to="/flight-sim"
              class="primary-action"
            >
              Flight Simulator
              <span>→</span>
            </router-link>

          </div>

        </div>

      </div>

    </section>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap');

* {
  box-sizing: border-box;
}

.about-page {
  width: 100%;
  padding: 40px 0 120px;
}

.about-section {
  width: min(1050px, 90%);
  margin: 0 auto;
}

/* ========================================
   PAGE HEADER
======================================== */

.section-heading {
  max-width: 650px;
  margin: 0 auto 55px;

  text-align: center;
}

.section-label,
.content-label {
  display: block;

  margin-bottom: 9px;

  color: #58b7d8;

  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 700;

  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.section-heading h1 {
  margin: 0;

  color: #ffffff;

  font-family: 'Poppins', sans-serif;
  font-size: clamp(32px, 5vw, 44px);
  font-weight: 600;

  letter-spacing: -0.035em;
}

.section-heading p {
  max-width: 540px;

  margin: 12px auto 0;

  color: rgba(255, 255, 255, 0.55);

  font-family: 'Inter', sans-serif;
  font-size: 14px;

  line-height: 1.7;
}

.section-divider {
  width: 44px;
  height: 3px;

  margin: 18px auto 0;

  border-radius: 100px;

  background: linear-gradient(
    90deg,
    transparent,
    #3a93b3,
    transparent
  );

  box-shadow:
    0 0 12px rgba(58, 147, 179, 0.4);
}

/* ========================================
   MAIN ABOUT CARD
======================================== */

.about-card {
  display: grid;

  grid-template-columns: 310px 1fr;

  overflow: hidden;

  border-radius: 22px;

  background:
    linear-gradient(
      145deg,
      rgba(13, 27, 34, 0.9),
      rgba(7, 16, 21, 0.94)
    );

  border:
    1px solid rgba(123, 195, 221, 0.13);

  box-shadow:
    0 25px 60px rgba(0, 0, 0, 0.32),
    inset 0 1px 0 rgba(255, 255, 255, 0.025);

  backdrop-filter: blur(12px);
}

/* ========================================
   PROFILE COLUMN
======================================== */

.profile-column {
  padding: 30px;

  background:
    linear-gradient(
      160deg,
      rgba(58, 147, 179, 0.12),
      rgba(5, 15, 20, 0.2)
    );

  border-right:
    1px solid rgba(123, 195, 221, 0.09);
}

/* ========================================
   PROFILE IMAGE
======================================== */

.profile-image-wrapper {
  position: relative;

  width: 100%;

  aspect-ratio: 1 / 1;

  margin-bottom: 25px;
}

#photo {
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;

  border-radius: 18px;

  border:
    1px solid rgba(123, 195, 221, 0.2);

  box-shadow:
    0 15px 35px rgba(0, 0, 0, 0.35);
}

.profile-status {
  position: absolute;

  left: 50%;
  bottom: -13px;

  transform: translateX(-50%);

  width: max-content;

  display: flex;
  align-items: center;

  gap: 7px;

  padding: 7px 12px;

  color: #dff7ff;

  background:
    rgba(7, 21, 27, 0.95);

  border:
    1px solid rgba(123, 195, 221, 0.22);

  border-radius: 100px;

  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 600;

  box-shadow:
    0 7px 18px rgba(0, 0, 0, 0.3);
}

.status-dot {
  width: 6px;
  height: 6px;

  border-radius: 50%;

  background: #6bd0f4;

  box-shadow:
    0 0 8px rgba(107, 208, 244, 0.7);
}

/* ========================================
   PROFILE INFO
======================================== */

.profile-info {
  padding-top: 7px;

  text-align: center;
}

.profile-label {
  color: rgba(123, 195, 221, 0.55);

  font-family: 'Inter', sans-serif;
  font-size: 9px;
  font-weight: 700;

  letter-spacing: 0.16em;
}

.profile-info h2 {
  margin: 6px 0 4px;

  color: #ffffff;

  font-family: 'Poppins', sans-serif;
  font-size: 25px;
  font-weight: 600;

  line-height: 1.15;

  letter-spacing: -0.025em;
}

.profile-location {
  margin: 0;

  color: rgba(255, 255, 255, 0.4);

  font-family: 'Inter', sans-serif;
  font-size: 11px;
}

/* ========================================
   SOCIAL LINKS
======================================== */

.social-links {
  width: 175px;

  display: flex;
  flex-direction: column;

  gap: 8px;

  margin: 20px auto 0;
}

.social-button {
  position: relative;

  width: 100%;
  height: 42px;

  display: flex;
  align-items: center;

  gap: 10px;

  padding: 6px 10px 6px 7px;

  color: rgba(255, 255, 255, 0.7);

  background:
    rgba(255, 255, 255, 0.025);

  border:
    1px solid rgba(123, 195, 221, 0.11);

  border-radius: 10px;

  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 600;

  text-decoration: none;

  overflow: hidden;

  transition:
    transform 0.2s ease,
    color 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.social-icon {
  width: 28px;
  height: 28px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  border-radius: 7px;

  background: rgba(255, 255, 255, 0.95);

  border:
    1px solid rgba(255, 255, 255, 0.08);
}

.social-icon img {
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;
}

.social-name {
  flex: 1;

  text-align: left;
}

.social-arrow {
  color: rgba(123, 195, 221, 0.5);

  font-size: 11px;

  transition:
    transform 0.2s ease,
    color 0.2s ease;
}

.social-button:hover {
  transform: translateX(3px);

  color: #ffffff;

  background:
    rgba(58, 147, 179, 0.1);

  border-color:
    rgba(123, 195, 221, 0.3);

  box-shadow:
    0 6px 18px rgba(0, 0, 0, 0.18);
}

.social-button:hover .social-arrow {
  color: #8cddf9;

  transform: translate(2px, -2px);
}

/* ========================================
   ABOUT CONTENT
======================================== */

.about-content {
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 45px 48px;
}

.about-content h3 {
  max-width: 570px;

  margin: 0 0 23px;

  color: #f3f8fa;

  font-family: 'Poppins', sans-serif;
  font-size: clamp(23px, 3vw, 31px);
  font-weight: 600;

  line-height: 1.3;

  letter-spacing: -0.03em;
}

.about-content h3 span {
  color: #72c9e8;
}

.about-content p {
  max-width: 600px;

  margin: 0 0 16px;

  color: rgba(255, 255, 255, 0.68);

  font-family: 'Inter', sans-serif;
  font-size: 13px;

  line-height: 1.8;
  text-align: left;
}

/* ========================================
   SKILLS
======================================== */

.about-skills {
  display: flex;
  flex-wrap: wrap;

  gap: 7px;

  margin-top: 7px;
}

.about-skills span {
  padding: 6px 10px;

  color: #8edcf7;

  background:
    rgba(58, 147, 179, 0.08);

  border:
    1px solid rgba(123, 195, 221, 0.14);

  border-radius: 7px;

  font-family: 'Inter', sans-serif;
  font-size: 9px;
  font-weight: 600;
}

/* ========================================
   ACTIONS
======================================== */

.about-actions {
  display: flex;
  flex-wrap: wrap;

  gap: 10px;

  margin-top: 26px;
}

.primary-action,
.secondary-action {
  display: inline-flex;
  align-items: center;

  gap: 8px;

  padding: 10px 15px;

  border-radius: 9px;

  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 700;

  text-decoration: none;

  transition:
    transform 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.primary-action {
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
}

.primary-action:hover {
  transform: translateY(-2px);

  box-shadow:
    0 11px 25px rgba(58, 147, 179, 0.24);
}

.secondary-action {
  color: #9edff6;

  background:
    rgba(58, 147, 179, 0.07);

  border:
    1px solid rgba(123, 195, 221, 0.17);
}

.secondary-action:hover {
  transform: translateY(-2px);

  color: #c5efff;

  background:
    rgba(58, 147, 179, 0.14);

  border-color:
    rgba(123, 195, 221, 0.35);
}

/* ========================================
   TABLET
======================================== */

@media (max-width: 800px) {
  .about-card {
    grid-template-columns: 260px 1fr;
  }

  .profile-column {
    padding: 23px;
  }

  .about-content {
    padding: 35px 30px;
  }
}

/* ========================================
   MOBILE
======================================== */

@media (max-width: 650px) {
  .about-page {
    padding-top: 20px;
  }

  .about-section {
    width: 92%;
  }

  .section-heading {
    margin-bottom: 40px;
  }

  .section-heading h1 {
    font-size: 30px;
  }

  .about-card {
    grid-template-columns: 1fr;
  }

  .profile-column {
    border-right: none;

    border-bottom:
      1px solid rgba(123, 195, 221, 0.09);
  }

  .profile-image-wrapper {
    max-width: 280px;

    margin-left: auto;
    margin-right: auto;
  }

  .profile-info {
    text-align: center;
  }

  .social-links {
    width: min(190px, 100%);
  }

  .about-content {
    padding: 30px 23px;
  }

  .about-content h3 {
    font-size: 23px;
  }

  .about-actions {
    flex-direction: column;

    align-items: stretch;
  }

  .primary-action,
  .secondary-action {
    justify-content: center;
  }
}
</style>