<template>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
  <title>Flight Sim</title>
  <div style="background-color: #ffffffb3; backdrop-filter: blur(8px); box-shadow: 0px 0px 4px 4px rgba(127, 180, 216, 0.5); transform: translateY(-20px);">
    <h1 style="padding: 0.5rem;">(IFS) - Isaac's Flight Simulator</h1>
  </div>
  <div style="background-color: rgba(0, 0, 0, 0.3); backdrop-filter: blur(8px); transform: translateY(-40px);">
    <h1 style="padding: 0.5rem; font-size: 1.2rem; color: rgba(255, 255, 255, 0.6);" v-if="state === 'start-sim'">{{ planes[currentPlane]?.name || "No Plane Selected" }}</h1>
  </div>
  <div class="keypad-container" v-show="state === 'start-sim'">
    <div class="keypad">
      <button id="up"><i class="fas fa-arrow-up"></i></button>
      <button id="left"><i class="fas fa-arrow-left"></i></button>
      <button id="right"><i class="fas fa-arrow-right"></i></button>
      <button id="down"><i class="fas fa-arrow-down"></i></button>
    </div>
  </div>
  <div class="play-button-container" v-show="state === 'select-plane'">
      <button class="play-button" @click="togglePlay">
        <i class="fas fa-play"></i>
      </button>
  </div>
  <div class="stop-button-container" v-show="state === 'start-sim'">
      <button class="play-button" @click="stopSim">
        <i class="fas fa-stop"></i>
      </button>
  </div>
  <div class="left-container" v-show="state === 'select-plane'">
      <h2>Select Plane</h2>
      <ul>
        <li
          v-for="(plane, index) in planes"
          :key="index"
          :class="{ selected: index === currentPlane }"
          @click="displayModel(index)"
        >
          {{ plane.name }} 
        </li>
      </ul>
    </div>
  <!-- <div style="background-color: #ffffffb3; backdrop-filter: blur(8px); box-shadow: 0px 0px 4px 4px rgba(127, 180, 216, 0.5); height: 100%; transform: translateY(-35px);">
    
  </div> -->
</template>

<style>
    .play-button-container {
      position: fixed;
      bottom: 130px; /* Distance from the bottom of the screen */
      right: 60px; /* Distance from the right of the screen */
      width: 100px; /* Size of the play button */
      height: 100px;
      z-index: 10;
    }

    .stop-button-container {
      position: fixed;
      bottom: 150px; /* Distance from the bottom of the screen */
      left: 20px; /* Distance from the right of the screen */
      width: 100px; /* Size of the play button */
      height: 100px;
      z-index: 10;
    }

    .play-button {
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.616);
      backdrop-filter: blur(8px);
      border: none;
      border-radius: 50%;
      font-size: 40px;
      color: #07405594;
      box-shadow: 0px 0px 4px 4px rgba(127, 180, 216, 0.5);
      cursor: pointer;
      transition: background 0.2s, transform 0.2s;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .play-button:hover {
      background: #d5d5d5;
    }

    .play-button:active {
      background: #bbb;
      transform: scale(0.95);
    }

    .left-container {
      position: fixed;
      top: 100px;
      left: 3rem;
      width: 25%; /* Default width for desktop */
      height: 70vh;
      backdrop-filter: blur(8px);
      background-color: #ffffffb3;
      border-radius: 46px 46px 46px 46px;
      box-shadow: 0px 0px 4px 4px rgba(127, 180, 216, 0.5);
      padding: 20px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 15px; /* Spacing between cards */
      z-index: 0;
    }

    /* Highlight selected item */
    .left-container li.selected {
      background-color: #074055b0; /* Highlighted color */
      color: white;
      transform: scale(1.05);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    .left-container h2 {
      font-size: 20px;
      color: #333;
      text-align: center;
      margin-bottom: 10px;
    }

    .left-container ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 15px; /* Adds spacing between cards */
    }

    .left-container li {
      padding: 15px;
      backdrop-filter: blur(8px);
      background-color: #ffffff69;
      border-radius: 10px;
      cursor: pointer;
      transition: background 0.3s ease, transform 0.2s ease;
      text-align: center;
      font-size: 16px;
      font-weight: bold;
      color: #333;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .left-container li:hover {
      background: #ececec;
      transform: scale(1.02);
    }

    .left-container li:active {
      background: #dcdcdc;
      transform: scale(0.98);
    }

    @media screen and (max-width: 768px) {
      .left-container {
        position: fixed;
        top: 110px;
        left: 12px;
        width: 25%; /* Default width for desktop */
        height: 60vh;
        backdrop-filter: blur(8px);
        background-color: #ffffffb3;
        border-radius: 46px 46px 46px 46px;
        padding: 20px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 15px; /* Spacing between cards */
        z-index: 0;
      }

      .play-button-container {
          position: fixed;
          bottom: 130px; /* Distance from the bottom of the screen */
          right: 10px; /* Distance from the right of the screen */
          width: 100px; /* Size of the play button */
          height: 100px;
          z-index: 10;
        }

      .left-container h2 {
        font-size: 15px;
        color: #333;
        text-align: center;
        margin-bottom: 10px;
      }

      .left-container li {
        padding: 5px;
        backdrop-filter: blur(8px);
        background-color: #ffffff69;
        border-radius: 10px;
        cursor: pointer;
        transition: background 0.3s ease, transform 0.2s ease;
        text-align: center;
        font-size: 10px;
        font-weight: bold;
        color: #333;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      }

      /* Highlight selected item */
      .left-container li.selected {
        background-color: #074055b0; /* Highlighted color */
        color: white;
        transform: scale(1.05);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      }
    }

    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      height: 100vh;
      overflow: hidden;
      background-color: #282c34;
    }

    .keypad-container {
      position: fixed;
      bottom: 150px; /* Distance from the bottom of the screen */
      right: 20px;   /* Distance from the left of the screen */
      width: 35vw; /* Scale with the viewport width */
      height: 35vw;
      max-width: 250px; /* Limit maximum size for larger screens */
      max-height: 250px;
    }

    .keypad {
      position: relative;
      width: 100%; /* Take the container's size */
      height: 100%;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.24);
      backdrop-filter: blur(8px);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .keypad button {
      position: absolute;
      width: 35%; /* Scale buttons based on the keypad size */
      height: 35%;
      background: #e0e0e03a;
      backdrop-filter: blur(8px);
      border: none;
      border-radius: 50%;
      font-size: calc(2vw + 10px); /* Dynamically adjust font size */
      font-weight: bold;
      color: #07405581;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      transition: background 0.2s, transform 0.2s;
    }

    .keypad button:hover {
      background: #d5d5d5;
    }

    .keypad button:active {
      background: #bbb;
      transform: scale(0.95);
    }

    /* Button positions */
    .keypad #up {
      top: 5%;
      left: 50%;
      transform: translate(-50%, 0);
    }

    .keypad #down {
      bottom: 5%;
      left: 50%;
      transform: translate(-50%, 0);
    }

    .keypad #left {
      left: 5%;
      top: 50%;
      transform: translate(0, -50%);
    }

    .keypad #right {
      right: 5%;
      top: 50%;
      transform: translate(0, -50%);
    }

    .keypad #reset {
      width: 30%;
      height: 30%;
      background: #f5f5f500;
      color: #555;
      font-size: calc(1.5vw + 12px);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    /* Responsive adjustments */
    @media screen and (max-width: 768px) {
      .keypad-container {
        width: 35vw;
        height: 35vw;
      }

      .keypad button {
        font-size: calc(3vw + 8px);
      }

      .keypad #reset {
        font-size: calc(2vw + 10px);
      }
    }
  </style>

<script>
    export default {
        name: 'App',
        mounted() {
          const event = new CustomEvent("game", {
            detail: { message: this.state, plane: this.planes[this.currentPlane] }, // Optional payload
          });
          window.dispatchEvent(event); // Or use document.dispatchEvent(event);

          let intervalId = null; // Stores the interval for continuous updates

          // Function to start holding down the button
          function startHolding(callback) {
            callback(); // Execute the action immediately
            intervalId = setInterval(callback, 50); // Execute the action continuously every 50ms
          }

          // Function to stop holding down the button
          function stopHolding() {
            clearInterval(intervalId);
            const event = new CustomEvent("controls", {
              detail: { message: "stop" }, // Optional payload
            });
            window.dispatchEvent(event);
          }

          const addControlEventListener = (id, callback) => {
            const button = document.getElementById(id);

            // Handle mouse and touch events
            button.addEventListener("mousedown", () => startHolding(callback));
            button.addEventListener("mouseup", stopHolding);
            button.addEventListener("mouseleave", stopHolding); // Stop when the mouse leaves the button
            button.addEventListener("touchstart", (e) => {
              e.preventDefault();
              startHolding(callback);
            });
            button.addEventListener("touchend", stopHolding);
            button.addEventListener("touchcancel", stopHolding);
          };

          addControlEventListener("up", () => {
            const event = new CustomEvent("controls", {
              detail: { message: "up" }, // Optional payload
            });
            window.dispatchEvent(event);
          });

          addControlEventListener("down", () => {
            const event = new CustomEvent("controls", {
              detail: { message: "down" }, // Optional payload
            });
            window.dispatchEvent(event);
          });

          addControlEventListener("left", () => {
            const event = new CustomEvent("controls", {
              detail: { message: "left" }, // Optional payload
            });
            window.dispatchEvent(event);
          });

          addControlEventListener("right", () => {
            const event = new CustomEvent("controls", {
              detail: { message: "right" }, // Optional payload
            });
            window.dispatchEvent(event);
          });
        },
        beforeUnmount() {
          const event = new CustomEvent("game", {
            detail: { message: "stop-sim" }, // Optional payload
          });
          window.dispatchEvent(event); // Or use document.dispatchEvent(event);
        },
        data: function () {
            return {
                state: 'select-plane',
                currentPlane: 0,
                planes: [
                  {
                    name: "Cesium Air",
                    asset: 'Cesium_Air.glb',
                    cameraZ: -100,
                    size: 108,
                    inverse: false,
                    heading: 0,
                    movementIntensity: 0.002,
                    speed: 1,
                    displayZoom: 100
                  },
                  {
                    name: "Tupolev TU-142m Bomber Plane",
                    asset: 'tupolev_tu-142m_bomber_plane.glb',
                    cameraZ: -100,
                    size: 700,
                    inverse: false,
                    heading: 0,
                    movementIntensity: 0.002,
                    speed: 1,
                    displayZoom: 1000
                  },
                  {
                    name: "Northrop Grumman B-2 Spirit Stealth Bomber Plane",
                    asset: 'northrop_grumman_b-2_spirit_stealth_bomber_plane.glb',
                    cameraZ: -4000,
                    size: 100,
                    inverse: true,
                    heading: 1800,
                    movementIntensity: 0.002,
                    speed: 1,
                    displayZoom: 5000
                  },
                  {
                    name: "C130-H",
                    asset: 'yc-130prototype_of_c-130.glb',
                    cameraZ: -100,
                    size: 100,
                    inverse: true,
                    heading: 1800,
                    movementIntensity: 0.002,
                    speed: 10,
                    displayZoom: 100
                  },
                  {
                    name: "USAF F35A",
                    asset: 'low_poly_11_usaf_f35a.glb',
                    cameraZ: -50,
                    size: 100,
                    inverse: false,
                    heading: 0,
                    movementIntensity: 0.002,
                    speed: 1,
                    displayZoom: 75
                  }
                ],
            }
        },
        methods: {
          displayModel(index) {
            const plane = this.planes[index];
            this.currentPlane = index;
            const event = new CustomEvent("game", {
              detail: { message: this.state, plane: plane }, // Optional payload
            });
            window.dispatchEvent(event); // Or use document.dispatchEvent(event);
          },
          stopSim() {
            this.state = 'select-plane';
            const event = new CustomEvent("game", {
              detail: { message: this.state, plane: this.planes[this.currentPlane] }, // Optional payload
            });
            window.dispatchEvent(event); // Or use document.dispatchEvent(event);

          },
          togglePlay() {
            this.state = 'start-sim';
            const event = new CustomEvent("game", {
              detail: { message: this.state, plane: this.planes[this.currentPlane] }, // Optional payload
            });
            window.dispatchEvent(event); // Or use document.dispatchEvent(event);
          },
        }
    }
</script>

