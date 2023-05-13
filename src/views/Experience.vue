<template>
  <title>Experience</title>
  <div class="page">
    <div class="timeline">
        <div class="timeline__group">
        <!-- <span class="timeline__year time" aria-hidden="true">2023</span> -->
        <div class="timeline__cards">
            <div class="timeline__card card">
            <header class="card__header">
                <time class="time" datetime="2022-02-02">
                <span class="time__day">May 2023 - </span>
                <span class="time__month">Current</span>
                </time>
                <h3 class="card__title r-title">Co-Chief Executive Officer
                  <br>
                  <a href="https://artiorganizer.com/home" target="_blank">ArtiOrganizer</a></h3>
            </header>
            <div class="card__content">
                <p>
                  <br>
                  <b>Project - (AI-Powered Message Organizer)</b>
                <ul>
                  <li>Led and managed the strategic vision and product.</li>
                  <br>
                  <li>Designed and implemented the entire frontend architecture in Angular.</li>
                  <br>
                  <li>Led all branding and creative design initiatives, establishing a cohesive and impactful brand identity across various channels.</li>
                  <br>
                  <li>Collaborated closely with the other 3 Co-CEO to align business objectives and drive overall company performance.</li>
                </ul>
                <br>
                </p>
            </div>
            </div>
        </div>
        
        <div class="timeline__cards">
            <div class="timeline__card card">
            <header class="card__header">
                <time class="time" datetime="2022-02-02">
                <span class="time__day">November 2022 - </span>
                <span class="time__month">Current</span>
                </time>
                <h3 class="card__title r-title">Software Engineer
                  <br>
                  <a href="https://www.cae.com/" target="_blank">CAE</a></h3>
            </header>
            <div class="card__content">
                <p>
                  <br>
                  <b>Project #1 (Common Operating Picture (COP) application using OpenLayers, GeoServer, and Angular)</b>
                <ul>
                  <li>Held a key role as one of the head UI developers, responsible for designing and implementing the user interface.</li>
                  <br>
                  <li>Utilized PrimeNG, a UI component library for Angular, to enhance the user interface and provide a consistent look and feel.</li>
                  <br>
                  <li>Integrated interactive maps and data folders/layers to offer a comprehensive view of the operational environment.</li>
                  <br>
                  <li>Successfully integrated real-time collaborative features, allowing users to collaboratively draw shapes and routes on the map in real-time.</li>
                </ul>
                <br>
                </p>
            </div>
            </div>
        </div>

        <div class="timeline__cards">
            <div class="timeline__card card">
            <header class="card__header">
                <time class="time" datetime="2022-02-02">
                <span class="time__day">May 2022 - </span>
                <span class="time__month">November 2022</span>
                </time>
                <h3 class="card__title r-title">Software Engineer Intern
                  <br>
                  <a href="https://www.jhuapl.edu/" target="_blank">
                  The Johns Hopkins University Applied Physics Laboratory
                  </a>
                  </h3>
            </header>
            <div class="card__content">
                <p>
                  <br>
                  <b>Project #1 (Software that predicts the probability of successfully transmitting/receiving radio signals)</b>
                <ul>
                  <li>Completed UI development coding tasks that went into production, which include analyzing user 
                interface issues and creating manageable solutions using agile development.</li>
                  <br>
                  <li>Improved a Dotnet application that used entity framework to query data and reformat it into more 
                efficient data structures, which improved retrieval speeds.</li>
                  <br>
                  <li>Containerized the application using Docker.</li>
                </ul>
                <br>
                <b>Project #2 (Satellite communications system that ensures a survival path is present)</b>
                <ul>
                  <li>Refactored a Java thick client into a web application using a Vue.js frontend and Java backend.</li>
                  <br>
                  <li>Acted as a full-stack developer, creating backend endpoints to retrieve data, and APIs/UI
                components to visualize data.</li>
                  <br>
                  <li>Conducted testing and performed documentation of UI and services.</li>
                </ul>
                </p>
            </div>
            </div>
        </div>
        </div>
        <div class="timeline__group">
        <!-- <span class="timeline__year time" aria-hidden="true">2022</span> -->
        </div>
      </div>
  </div>
</template>

<style scoped>
.r-title{
  margin-top: var(--rTitleMarginTop, 0) !important;
  margin-bottom: var(--rTitleMarginBottom, 0) !important;
}


p:not([class]){
  line-height: var(--cssTypographyLineHeight, 1.78);
  margin-top: var(--cssTypographyBasicMargin, 1em);
  margin-bottom: 0;
}

p:not([class]):first-child{
  margin-top: 0;
}

/*
text component
*/

.text{
  display: var(--textDisplay, inline-flex);
  font-size: var(--textFontSize, 1rem);  
}

/*
time component
*/

/*
core styles
*/

.time{
  display: var(--timeDisplay, inline-flex);
}

/*
extensions
*/

.time__month{
  margin-left: var(--timelineMounthMarginLeft, .25em);
}

/*
skin
*/

.time{
  padding: var(--timePadding, .25rem 1.25rem .25rem);
  background-color: var(--timeBackgroundColor, #f0f0f0);

  font-size: var(--timeFontSize, .75rem);
  font-weight: var(--timeFontWeight, 700);
  text-transform: var(--timeTextTransform, uppercase);
  color: var(--timeColor, currentColor);
}

/*
card component
*/

/*
core styles
*/

.card{
  padding: var(--timelineCardPadding, 1.5rem 1.5rem 1.25rem);
}

.card__content{
  margin-top: var(--cardContentMarginTop, .5rem);
  text-align: left;
}

/*
skin
*/

.card{
  border-radius: var(--timelineCardBorderRadius, 2px);
  border-left: var(--timelineCardBorderLeftWidth, 3px) solid var(--timelineCardBorderLeftColor, var(--uiTimelineMainColor));
  box-shadow: var(--timelineCardBoxShadow, 0 1px 3px 0 rgba(0, 0, 0, .12), 0 1px 2px 0 rgba(0, 0, 0, .24));
  background-color: var(--timelineCardBackgroundColor, #fff);
}

/*
extensions
*/

.card__title{
  --rTitleMarginTop: var(--cardTitleMarginTop, 1rem);
  font-size: var(--cardTitleFontSize, 1.25rem);
}

/*
=====
CORE STYLES
=====
*/

.timeline{
  display: var(--timelineDisplay, grid);
  grid-row-gap: var(--timelineGroupsGap, 2rem);
}

/*
1. If timeline__year isn't displaed the gap between it and timeline__cards isn't displayed too
*/

.timeline__year{
  margin-bottom: 1.25rem; /* 1 */
}

.timeline__cards{
  display: var(--timeloneCardsDisplay, grid);
  grid-row-gap: var(--timeloneCardsGap, 1.5rem);
}


/*
=====
SKIN
=====
*/

.timeline{
  --uiTimelineMainColor: var(--timelineMainColor, #222);
  --uiTimelineSecondaryColor: var(--timelineSecondaryColor, #fff);

  border-left: var(--timelineLineWidth, 3px) solid var(--timelineLineBackgroundColor, var(--uiTimelineMainColor));
  padding-top: 1rem;
  padding-bottom: 1.5rem;
}

.timeline__year{
  --timePadding: var(--timelineYearPadding, .5rem 1.5rem);
  --timeColor: var(--uiTimelineSecondaryColor);
  --timeBackgroundColor: var(--uiTimelineMainColor);
  --timeFontWeight: var(--timelineYearFontWeight, 400);
}

.timeline__card{
  position: relative;
  margin-left: var(--timelineCardLineGap, 1rem);
}

/*
1. Stoping cut box shadow
*/

.timeline__cards{
  overflow: hidden;
  padding-top: .25rem; /* 1 */
  padding-bottom: .25rem; /* 1 */
}

.timeline__card::before{
  content: "";
  width: 100%;
  height: var(--timelineCardLineWidth, 2px);
  background-color: var(--timelineCardLineBackgroundColor, var(--uiTimelineMainColor));

  position: absolute;
  top: var(--timelineCardLineTop, 1rem);
  left: -50%;
  z-index: -1;
}

/*
=====
SETTINGS
=====
*/
/**/
.timeline{
  --timelineMainColor: #3a93b3;
}

/*
=====
DEMO
=====
*/

body{
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans, Ubuntu, Fira Sans, Helvetica Neue, sans-serif;
  color: #222;
  overflow-y: auto;

  background-color: #f0f0f0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

p{
  margin-top: 0;
  margin-bottom: 1rem;
  line-height: 1.5;
}

p:last-child{
  margin-bottom: 0;
}

.page{
  max-width: 47rem;
  padding: 5rem 2rem;
  padding-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
}


.substack{
  border:1px solid #EEE; 
  background-color: #fff;
  width: 100%;
  max-width: 480px;
  height: 280px;
  margin: 1rem auto;;
}

</style>