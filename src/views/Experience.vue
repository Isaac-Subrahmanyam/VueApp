<template>
  <title>Experience</title>

  <div class="experience-page">
    <section class="experience-section">

      <div class="section-heading">
        <span class="section-label">Career</span>

        <h1>Experience</h1>

        <div class="section-divider"></div>
      </div>

      <div class="experience-list">

        <!-- CAE -->
        <article class="experience-card">
          <div class="timeline-marker">
            <span></span>
          </div>

          <div class="experience-card-header">
            <div class="experience-heading">
              <span class="experience-date">
                NOV 2022 — PRESENT
              </span>

              <h2>Software Engineer</h2>

              <a
                href="https://www.cae.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="company-link"
              >
                CAE
                <span>↗</span>
              </a>

              <span class="experience-location">
                Orlando, Florida
              </span>
            </div>

            <div class="experience-number">
              01
            </div>
          </div>

          <div class="experience-summary">
            Developing mission-planning, simulation, autonomy,
            geospatial, and training software for defense applications.
          </div>

          <!-- VISTA -->
          <div class="project-block">
            <div class="project-header">
              <div>
                <span class="project-label">
                  PROJECT
                </span>

                <h3>Vista</h3>
              </div>

              <div class="project-tags">
                <span>Angular</span>
                <span>OpenLayers</span>
                <span>Cesium</span>
                <span>.NET</span>
              </div>
            </div>

            <ul class="project-details">
              <li>
                Designed and implemented a multi-user mission planning
                and execution system supporting concurrent scenario
                editing, timeline-based mission scripting and playback,
                and real-time control of simulated entities.
              </li>

              <li>
                Integrated AI-driven autonomous agents and developed
                geospatial Common Operating Picture and analytics
                capabilities.
              </li>
            </ul>

            <div class="secondary-tags">
              <span>GridStack.js</span>
              <span>Observable Plot</span>
              <span>Mission Planning</span>
              <span>Autonomy</span>
            </div>
          </div>

          <!-- CCA ACADEMY -->
          <div class="project-block">
            <div class="project-header">
              <div>
                <span class="project-label">
                  PROJECT
                </span>

                <h3>CCA Academy</h3>
              </div>

              <div class="project-tags">
                <span>React</span>
                <span>AGRA</span>
                <span>HMI</span>
              </div>
            </div>

            <ul class="project-details">
              <li>
                Integrated General Atomics Collaborative Combat
                Aircraft AI models using the Autonomous Government
                Reference Architecture into a cockpit flight simulator.
              </li>

              <li>
                Implemented HMI controls, state visualization, and
                command workflows supporting autonomous aircraft
                operations.
              </li>

              <li>
                Developed a React-based courseware application with
                interactive lessons, assessments, and simulator
                integration for pilot training.
              </li>
            </ul>
          </div>

          <!-- SOLDIER VIRTUAL TRAINER -->
          <div class="project-block">
            <div class="project-header">
              <div>
                <span class="project-label">
                  PROJECT · SOFTWARE LEAD
                </span>

                <h3>Soldier Virtual Trainer</h3>
              </div>

              <div class="project-tags">
                <span>Angular</span>
                <span>TypeScript</span>
                <span>Webpack</span>
              </div>
            </div>

            <ul class="project-details">
              <li>
                Served as Software Lead and Scrum Master, providing
                technical direction, coordinating development
                priorities, and leading sprint execution while
                contributing directly to application development.
              </li>

              <li>
                Led development of the core Angular and TypeScript UI
                and plugin architecture used to integrate independent
                vendor-developed UI components.
              </li>

              <li>
                Standardized how external plugins were packaged,
                loaded, and integrated into the broader training
                environment.
              </li>
            </ul>

            <div class="leadership-badge">
              <span class="leadership-dot"></span>
              Software Lead & Scrum Master
            </div>
          </div>
        </article>

        <!-- JHU APL -->
        <article class="experience-card">
          <div class="timeline-marker">
            <span></span>
          </div>

          <div class="experience-card-header">
            <div class="experience-heading">
              <span class="experience-date">
                MAY 2022 — NOV 2022
              </span>

              <h2>Software Engineer Intern</h2>

              <a
                href="https://www.jhuapl.edu/"
                target="_blank"
                rel="noopener noreferrer"
                class="company-link"
              >
                Johns Hopkins University
                Applied Physics Laboratory
                <span>↗</span>
              </a>

              <span class="experience-location">
                Laurel, Maryland
              </span>
            </div>

            <div class="experience-number">
              02
            </div>
          </div>

          <div class="experience-summary">
            Worked on full-stack software modernization for
            mission-focused engineering applications.
          </div>

          <div class="project-block">
            <div class="project-header">
              <div>
                <span class="project-label">
                  APPLICATION MODERNIZATION
                </span>

                <h3>Full-Stack Web Architecture</h3>
              </div>

              <div class="project-tags">
                <span>Vue.js</span>
                <span>Java</span>
                <span>Spark Java</span>
              </div>
            </div>

            <ul class="project-details">
              <li>
                Modernized a Java and Spring Boot thick-client
                application into a web-based architecture.
              </li>

              <li>
                Developed the new frontend using Vue.js and transitioned
                backend functionality to Spark Java.
              </li>

              <li>
                Improved application usability, maintainability, and
                deployment flexibility through the new web architecture.
              </li>
            </ul>
          </div>
        </article>

      </div>
    </section>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap');

* {
  box-sizing: border-box;
}

.experience-page {
  width: 100%;
  padding: 40px 0 120px;
}

.experience-section {
  width: min(1000px, 90%);
  margin: 0 auto;
}

/* ========================================
   PAGE HEADER
======================================== */

.section-heading {
  max-width: 650px;
  margin: 0 auto 65px;

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

.section-heading h1 {
  margin: 0;

  color: #ffffff;

  font-family: 'Poppins', sans-serif;
  font-size: clamp(32px, 5vw, 44px);
  font-weight: 600;

  letter-spacing: -0.035em;
}

.section-heading p {
  max-width: 570px;

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
   EXPERIENCE LIST
======================================== */

.experience-list {
  position: relative;

  display: flex;
  flex-direction: column;

  gap: 35px;
}

.experience-list::before {
  content: '';

  position: absolute;

  top: 30px;
  bottom: 30px;
  left: -31px;

  width: 1px;

  background: linear-gradient(
    to bottom,
    transparent,
    rgba(91, 188, 222, 0.55) 8%,
    rgba(91, 188, 222, 0.25) 90%,
    transparent
  );
}

/* ========================================
   EXPERIENCE CARD
======================================== */

.experience-card {
  position: relative;

  padding: 34px;

  overflow: visible;

  text-align: left;

  background:
    linear-gradient(
      145deg,
      rgba(13, 27, 34, 0.88),
      rgba(7, 16, 21, 0.92)
    );

  border:
    1px solid rgba(123, 195, 221, 0.12);

  border-radius: 20px;

  box-shadow:
    0 20px 45px rgba(0, 0, 0, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.025);

  backdrop-filter: blur(10px);

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.experience-card:hover {
  transform: translateY(-3px);

  border-color:
    rgba(123, 195, 221, 0.25);

  box-shadow:
    0 25px 55px rgba(0, 0, 0, 0.34),
    0 0 30px rgba(58, 147, 179, 0.05);
}

/* ========================================
   TIMELINE MARKER
======================================== */

.timeline-marker {
  position: absolute;

  left: -38px;
  top: 35px;

  width: 15px;
  height: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: #071116;

  border: 2px solid #55b4d5;

  box-shadow:
    0 0 13px rgba(85, 180, 213, 0.45);
}

.timeline-marker span {
  width: 5px;
  height: 5px;

  border-radius: 50%;

  background: #8edcf7;
}

/* ========================================
   EXPERIENCE HEADER
======================================== */

.experience-card-header {
  display: flex;

  align-items: flex-start;
  justify-content: space-between;

  gap: 25px;

  text-align: left;
}

.experience-heading {
  display: flex;
  flex-direction: column;

  align-items: flex-start;

  text-align: left;
}

.experience-date {
  margin-bottom: 10px;

  color: #5eb9da;

  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 700;

  letter-spacing: 0.13em;
}

.experience-heading h2 {
  margin: 0 0 5px;

  color: #f4f9fb;

  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 600;

  letter-spacing: -0.025em;

  text-align: left;
}

.company-link {
  display: inline-flex;

  align-items: center;

  gap: 6px;

  color: #83d4f1;

  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;

  line-height: 1.4;

  text-decoration: none;
  text-align: left;

  transition: color 0.2s ease;
}

.company-link span {
  font-size: 12px;

  transition: transform 0.2s ease;
}

.company-link:hover {
  color: #b4eaff;
}

.company-link:hover span {
  transform: translate(2px, -2px);
}

.experience-location {
  margin-top: 7px;

  color: rgba(255, 255, 255, 0.38);

  font-family: 'Inter', sans-serif;
  font-size: 12px;

  text-align: left;
}

/* ========================================
   EXPERIENCE NUMBER
======================================== */

.experience-number {
  color: rgba(123, 195, 221, 0.07);

  font-family: 'Poppins', sans-serif;
  font-size: 54px;
  font-weight: 700;

  line-height: 1;

  user-select: none;
}

/* ========================================
   SUMMARY
======================================== */

.experience-summary {
  max-width: 720px;

  margin-top: 23px;
  padding-top: 21px;

  color: rgba(255, 255, 255, 0.58);

  border-top:
    1px solid rgba(255, 255, 255, 0.06);

  font-family: 'Inter', sans-serif;
  font-size: 13px;

  line-height: 1.7;

  text-align: left;
}

/* ========================================
   PROJECT BLOCKS
======================================== */

.project-block {
  position: relative;

  margin-top: 25px;
  padding: 23px;

  border-radius: 14px;

  background:
    rgba(255, 255, 255, 0.025);

  border:
    1px solid rgba(255, 255, 255, 0.055);

  text-align: left;
}

.project-header {
  display: flex;

  align-items: flex-start;
  justify-content: space-between;

  gap: 20px;

  margin-bottom: 17px;

  text-align: left;
}

.project-label {
  display: block;

  margin-bottom: 5px;

  color: rgba(123, 195, 221, 0.55);

  font-family: 'Inter', sans-serif;
  font-size: 9px;
  font-weight: 700;

  letter-spacing: 0.14em;

  text-align: left;
}

.project-header h3 {
  margin: 0;

  color: rgba(255, 255, 255, 0.93);

  font-family: 'Poppins', sans-serif;
  font-size: 17px;
  font-weight: 600;

  text-align: left;
}

/* ========================================
   TECHNOLOGY TAGS
======================================== */

.project-tags {
  display: flex;
  flex-wrap: wrap;

  justify-content: flex-end;

  gap: 6px;
}

.project-tags span,
.secondary-tags span {
  display: inline-flex;

  align-items: center;

  padding: 5px 9px;

  color: #8dd8f3;

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
   PROJECT DETAILS
======================================== */

.project-details {
  width: 100%;

  margin: 0;
  padding: 0;

  list-style: none;

  text-align: left !important;
}

.project-details li {
  position: relative;

  display: block;

  width: 100%;

  margin: 0 0 12px;
  padding-left: 25px;

  color: rgba(255, 255, 255, 0.62);

  font-family: 'Inter', sans-serif;
  font-size: 12.5px;

  line-height: 1.7;

  text-align: left !important;
}

.project-details li:last-child {
  margin-bottom: 0;
}

.project-details li::before {
  content: '';

  position: absolute;

  top: 8px;
  left: 2px;

  width: 5px;
  height: 5px;

  border-radius: 50%;

  background: #4da9ca;

  box-shadow:
    0 0 7px rgba(77, 169, 202, 0.45);
}

/* ========================================
   SECONDARY TAGS
======================================== */

.secondary-tags {
  display: flex;
  flex-wrap: wrap;

  justify-content: flex-start;

  gap: 6px;

  margin-top: 17px;
  padding-top: 15px;

  border-top:
    1px solid rgba(255, 255, 255, 0.05);

  text-align: left;
}

.secondary-tags span {
  color: rgba(255, 255, 255, 0.45);

  background:
    rgba(255, 255, 255, 0.025);

  border-color:
    rgba(255, 255, 255, 0.06);
}

/* ========================================
   LEADERSHIP
======================================== */

.leadership-badge {
  width: fit-content;

  margin-top: 17px;

  display: flex;
  align-items: center;

  gap: 7px;

  padding: 7px 10px;

  color: #9eddf3;

  background:
    rgba(58, 147, 179, 0.08);

  border:
    1px solid rgba(123, 195, 221, 0.14);

  border-radius: 8px;

  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 600;

  text-align: left;
}

.leadership-dot {
  width: 6px;
  height: 6px;

  flex-shrink: 0;

  border-radius: 50%;

  background: #67c7e9;

  box-shadow:
    0 0 7px rgba(103, 199, 233, 0.5);
}

/* ========================================
   TABLET
======================================== */

@media (max-width: 850px) {
  .experience-section {
    width: 88%;
  }

  .experience-list::before {
    left: -23px;
  }

  .timeline-marker {
    left: -30px;
  }

  .experience-card {
    padding: 28px;
  }
}

/* ========================================
   MOBILE
======================================== */

@media (max-width: 600px) {
  .experience-page {
    padding-top: 20px;
  }

  .experience-section {
    width: 92%;
  }

  .section-heading {
    margin-bottom: 42px;
  }

  .section-heading h1 {
    font-size: 30px;
  }

  .experience-list::before {
    display: none;
  }

  .timeline-marker {
    display: none;
  }

  .experience-card {
    padding: 22px;

    border-radius: 16px;
  }

  .experience-card-header {
    gap: 10px;
  }

  .experience-heading h2 {
    font-size: 20px;
  }

  .experience-number {
    font-size: 40px;
  }

  .project-block {
    padding: 18px;
  }

  .project-header {
    flex-direction: column;

    gap: 12px;
  }

  .project-tags {
    justify-content: flex-start;
  }

  .project-details li {
    padding-left: 21px;

    font-size: 12px;

    text-align: left !important;
  }
}
</style>