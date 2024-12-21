<template>
  <title>Flight Sim</title>
  <div style="background-color: #ffffffb3; backdrop-filter: blur(8px); box-shadow: 0px 0px 4px 4px rgba(127, 180, 216, 0.5); transform: translateY(-20px);">
    <h1 style="padding: 0.5rem;">(IFS) - Isaac's Flight Simulator</h1>
  </div>
  <div style="background-color: rgba(0, 0, 0, 0.3); backdrop-filter: blur(8px); transform: translateY(-40px);">
    <h1 style="padding: 0.5rem; font-size: 1.2rem; color: rgba(255, 255, 255, 0.6);">C130-H</h1>
  </div>
  <div class="keypad-container">
    <div class="keypad">
      <button id="up">↑</button>
      <button id="left">←</button>
      <button id="right">→</button>
      <button id="down">↓</button>
    </div>
  </div>
  <!-- <div style="background-color: #ffffffb3; backdrop-filter: blur(8px); box-shadow: 0px 0px 4px 4px rgba(127, 180, 216, 0.5); height: 100%; transform: translateY(-35px);">
    
  </div> -->
</template>

<style>
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
      color: #33333375;
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
            detail: { message: "start-sim" }, // Optional payload
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
                handleClick() { window.open("https://www.khanacademy.org/computer-programming/adventures-of-the-south-pole-ft-chester-banks/5873098975297536") }
            }
        },
    }
</script>

