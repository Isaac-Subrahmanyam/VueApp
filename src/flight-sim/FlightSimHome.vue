<template>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
  <title>Flight Sim</title>
  <div style="background-color: #ffffffb3; backdrop-filter: blur(8px); box-shadow: 0px 0px 4px 4px rgba(127, 180, 216, 0.5); transform: translateY(-20px);">
    <h1 style="padding: 0.5rem; user-select: none;">(IFS) - Isaac's Flight Simulator</h1>
  </div>
  <div style="background-color: rgba(0, 0, 0, 0.3); backdrop-filter: blur(8px); transform: translateY(-40px);">
    <h1 style="padding: 0.5rem; font-size: 1.2rem; color: rgba(255, 255, 255, 0.6); user-select: none;" v-if="state === 'start-sim'">{{ planes[currentPlane]?.name || "No Plane Selected" }} - {{locations[currentLocation]?.name || "No Location Selected"}}</h1>
  </div>
  <div class="keypad-container" v-show="state === 'start-sim'">
    <div class="keypad">
      <button id="up"><i class="fas fa-arrow-up" style="user-select: none;"></i></button>
      <button id="left"><i class="fas fa-arrow-left" style="user-select: none;"></i></button>
      <button id="right"><i class="fas fa-arrow-right" style="user-select: none;"></i></button>
      <button id="down"><i class="fas fa-arrow-down" style="user-select: none;"></i></button>
    </div>
  </div>
  <div class="play-button-container" v-show="state === 'select-plane'">
      <button class="play-button" @click="togglePlay" style="user-select: none;">
        <i class="fas fa-play" style="user-select: none;"></i>
      </button>
  </div>
  <div class="stop-button-container" v-show="state === 'start-sim'">
      <button class="play-button" @click="stopSim">
        <i class="fas fa-stop" style="user-select: none;"></i>
      </button>
  </div>
  <!-- Toggle Button -->
  <div class="toggle-container" v-show="state === 'select-plane'">
    <button
      class="toggle-button"
      :class="{ active: currentView === 'planes' }"
      @click="switchView('planes')"
    >
      Planes
    </button>
    <button
      class="toggle-button"
      :class="{ active: currentView === 'locations' }"
      @click="switchView('locations')"
    >
      Locations
    </button>
  </div>
  <div class="left-container" v-show="state === 'select-plane'">
      <h2>{{ currentView === 'planes' ? 'Select Plane' : 'Select Location' }}</h2>
      <ul v-if="currentView === 'planes'">
        <li
          v-for="(plane, index) in planes"
          :key="index"
          :class="{ selected: index === currentPlane }"
          @click="displayModel(index)"
        >
          {{ plane.name }} <br> [speed: {{ Math.floor(plane.speed * 3.6) }} km/r, agility: {{ (plane?.speed / 100000).toFixed(4) }} radians/frame]
        </li>
      </ul>
      <ul v-if="currentView === 'locations'">
        <li
          v-for="(location, index) in locations"
          :key="index"
          :class="{ selected: index === currentLocation }"
          @click="displayLocation(index)"
        >
          {{ location.name }} <br> [long: {{ location.longitude }}, lat: {{ location.latitude }}, alt: {{ location.altitude }}]
        </li>
      </ul>
  </div>

  <div class="right-container" v-show="state === 'select-plane'">
      <h2 style="color: #ffffffb3;">{{ planes[currentPlane]?.description }}</h2>
  </div>
</template>

<script>
    export default {
        name: 'App',
        mounted() {
          const event = new CustomEvent("game", {
            detail: { message: this.state, plane: this.planes[this.currentPlane], location: this.locations[this.currentLocation] }, // Optional payload
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
                currentView: "planes",
                currentPlane: 0,
                currentLocation: 0,
                locations: [
                  {
                    name: "Grand Canyon, USA",
                    longitude: -112.1401,
                    latitude: 36.1069,
                    altitude: 6000,
                  },
                  {
                    name: "Mount Everest, Nepal",
                    longitude: 86.9250,
                    latitude: 27.9881,
                    altitude: 29000, // Simulated altitude to view the summit
                  },
                  {
                    name: "New York City, USA",
                    longitude: -74.0060,
                    latitude: 40.7128,
                    altitude: 5000,
                  },
                  {
                    name: "Dubai, UAE",
                    longitude: 55.2708,
                    latitude: 25.2048,
                    altitude: 5000,
                  },
                  {
                    name: "Paris, France",
                    longitude: 2.3522,
                    latitude: 48.8566,
                    altitude: 3000,
                  },
                  {
                    name: "Swiss Alps, Switzerland",
                    longitude: 8.5417,
                    latitude: 46.6587,
                    altitude: 8000,
                  },
                  {
                    name: "Sydney, Australia",
                    longitude: 151.2093,
                    latitude: -33.8688,
                    altitude: 4000,
                  },
                  {
                    name: "Rio de Janeiro, Brazil",
                    longitude: -43.1729,
                    latitude: -22.9068,
                    altitude: 4000,
                  },
                  {
                    name: "Cape Town, South Africa",
                    longitude: 18.4241,
                    latitude: -33.9249,
                    altitude: 5000,
                  },
                  {
                    name: "Tokyo, Japan",
                    longitude: 139.6917,
                    latitude: 35.6895,
                    altitude: 4000,
                  },
                  {
                    name: "Banff National Park, Canada",
                    longitude: -116.1672,
                    latitude: 51.1784,
                    altitude: 7000,
                  },
                  {
                    name: "Iceland Highlands, Iceland",
                    longitude: -18.0713,
                    latitude: 64.8403,
                    altitude: 6000,
                  },
                  {
                    name: "Barcelona, Spain",
                    longitude: 2.1734,
                    latitude: 41.3851,
                    altitude: 3000,
                  },
                  {
                    name: "Himalayas, India",
                    longitude: 78.9629,
                    latitude: 30.0668,
                    altitude: 15000,
                  },
                  {
                    name: "Queenstown, New Zealand",
                    longitude: 168.6626,
                    latitude: -45.0312,
                    altitude: 6000,
                  },
                  {
                    name: "Norwegian Fjords, Norway",
                    longitude: 7.8500,
                    latitude: 61.0000,
                    altitude: 5000,
                  },
                  {
                    name: "Santorini, Greece",
                    longitude: 25.4319,
                    latitude: 36.3932,
                    altitude: 3000,
                  },
                  {
                    name: "Machu Picchu, Peru",
                    longitude: -72.5448,
                    latitude: -13.1631,
                    altitude: 7000,
                  },
                ],
                planes: [
                  {
                    name: "Lockheed C130-H",
                    asset: 'yc-130prototype_of_c-130.glb',
                    cameraZ: -100,
                    size: 100,
                    inverse: true,
                    heading: 180,
                    speed: 150,
                    displayZoom: 100,
                    invert: false,
                    description: "The Lockheed C-130 Hercules, introduced in 1956, is one of the most versatile military aircraft ever built. \nPrimarily used for tactical airlift missions, the C-130 can operate from short and unprepared runways. \nThe C130-H variant, first produced in the 1970s, features upgraded Allison T56-A-15 turboprop engines, \nmodern avionics, and increased range. It can carry up to 20,000 kg of cargo or transport 92 passengers. \nKnown for its rugged design, the C-130 has been adapted for various roles, including search and rescue, \naerial refueling, and gunship operations (AC-130). It has served in over 70 countries and remains active today."
                  },
                  {
                    name: "Tupolev TU-142m Bomber Plane",
                    asset: 'tupolev_tu-142m_bomber_plane.glb',
                    cameraZ: -100,
                    size: 500,
                    inverse: false,
                    heading: 0,
                    speed: 229,
                    displayZoom: 500,
                    invert: false,
                    description: "The Tupolev Tu-142, derived from the iconic Tu-95 'Bear' strategic bomber, \nis a long-range maritime patrol and anti-submarine warfare aircraft. \nFirst introduced in the 1970s, the Tu-142M features enhanced avionics and more efficient NK-12MP turboprop engines, \nallowing it to operate for extended durations over vast oceanic regions. \nIt is known for its distinctive counter-rotating propellers, which make it one of the fastest turboprop aircraft, \nwith a maximum speed of 925 km/h. The Tu-142 has been a cornerstone of Soviet and later Russian naval aviation, \nfrequently spotted during Cold War-era patrols near NATO waters. Its robust airframe and long-range capabilities \nensure its continued relevance in maritime reconnaissance missions."
                  },
                  {
                    name: "Northrop Grumman B-2 Spirit Stealth Bomber Plane",
                    asset: 'northrop_grumman_b-2_spirit_stealth_bomber_plane.glb',
                    cameraZ: -4000,
                    size: 100,
                    inverse: true,
                    heading: 180,
                    speed: 280.5556,
                    displayZoom: 5000,
                    invert: false,
                    description: "The Northrop Grumman B-2 Spirit, also known as the Stealth Bomber, \nis a revolutionary aircraft designed to evade radar detection and deliver precision strikes. \nFirst flown in 1989 and introduced into service in 1997, the B-2 features a unique flying-wing design \nthat minimizes its radar cross-section. It can carry up to 18,000 kg of ordnance, including nuclear or conventional weapons. \nWith a combat radius of 11,000 km, it is capable of intercontinental missions without refueling. \nOnly 21 B-2s were built due to their high cost, with each aircraft valued at over $2 billion. \nThe B-2 remains a vital component of the U.S. strategic deterrence arsenal, renowned for its blend of advanced technology \nand unparalleled stealth capabilities."
                  },
                  {
                    name: "Boeing B-52 Stratofortress",
                    asset: 'boeing_b-52_stratofortress.glb',
                    cameraZ: -100,
                    size: 100,
                    inverse: true,
                    heading: 180,
                    speed: 194,
                    displayZoom: 100,
                    invert: false,
                    description: "The Boeing E-767 is an airborne warning and control system (AWACS) aircraft, \nbased on the Boeing 767-200 platform. Developed for Japan's Air Self-Defense Force, \nthe E-767 is equipped with a Northrop Grumman radar system, capable of monitoring \nand tracking aerial threats over vast areas. It is powered by twin General Electric CF6-80C2 engines, \nallowing for a cruising speed of 850 km/h and an operational ceiling of 12,800 meters (42,000 feet). \nThe E-767 plays a critical role in air defense and command, with advanced communication systems \nand a crew of up to 19 personnel, making it a versatile platform for modern military operations."
                  },
                  {
                    name: "Boeing E-767",
                    asset: 'boeing_e-767_-_free.glb',
                    cameraZ: -100,
                    size: 500,
                    inverse: true,
                    heading: 180,
                    speed: 238,
                    displayZoom: 10,
                    invert: false,
                    description: "The Boeing E-767 is an airborne warning and control system (AWACS) aircraft, \nbased on the Boeing 767-200 platform. Developed for Japan's Air Self-Defense Force, \nthe E-767 is equipped with a Northrop Grumman radar system, capable of monitoring \nand tracking aerial threats over vast areas. It is powered by twin General Electric CF6-80C2 engines, \nallowing for a cruising speed of 850 km/h and an operational ceiling of 12,800 meters (42,000 feet). \nThe E-767 plays a critical role in air defense and command, with advanced communication systems \nand a crew of up to 19 personnel, making it a versatile platform for modern military operations."
                  },
                  {
                    name: "Rockwell B-1 Lancer",
                    asset: 'rockwell_b-1_lancer.glb',
                    cameraZ: -500,
                    size: 100,
                    inverse: false,
                    heading: 0,
                    speed: 403,
                    displayZoom: 100,
                    invert: false,
                    description: "The Rockwell B-1 Lancer, known as the 'Bone,' is a supersonic variable-sweep wing bomber \nintroduced in the 1980s as a strategic bomber for the U.S. Air Force. \nIt features a maximum speed of Mach 1.25 (1,335 km/h or 403 m/s) and is capable of low-altitude penetration. \nWith a payload capacity of 84,000 pounds, the B-1 can carry a mix of conventional and nuclear weapons. \nIts advanced terrain-following radar and variable-sweep wings enable it to operate effectively at low altitudes, \navoiding radar detection. The B-1 remains a critical component of the U.S. bomber fleet, \nserving in strategic and tactical roles worldwide."
                  },
                  {
                    name: "Lockheed Martin F-22 Raptor",
                    asset: 'lockheed_martin_f-22_raptor.glb',
                    cameraZ: -1000,
                    size: 200,
                    inverse: false,
                    heading: -90,
                    speed: 545,
                    displayZoom: 50,
                    invert: true,
                    description: "The Lockheed Martin F-22 Raptor is a fifth-generation fighter jet introduced in 2005, \ndesigned to establish air superiority through its unmatched combination of stealth, speed, and agility. \nPowered by twin Pratt & Whitney F119 engines, the F-22 can supercruise at Mach 1.82 without afterburners \nand reach a maximum speed of Mach 2.25. Its advanced avionics and sensor fusion enable it to detect and engage threats \nlong before being spotted. The F-22 is equipped with AIM-120 and AIM-9 missiles for air combat, as well as precision bombs for ground strikes. \nDespite its high cost, at approximately $150 million per unit, the F-22 is regarded as one of the most lethal aircraft ever built, \nsetting a benchmark for modern air combat."
                  },
                  {
                    name: "Eurofighter Typhoon Fighter Jet",
                    asset: 'eurofighter_typhoon_-_fighter_jet_-_free.glb',
                    cameraZ: -500,
                    size: 200,
                    inverse: true,
                    heading: -90,
                    speed: 800,
                    displayZoom: 50,
                    invert: true,
                    description: "The Eurofighter Typhoon is a highly advanced multirole fighter jet, \ndeveloped through a collaboration of European nations including the UK, Germany, Italy, and Spain. \nKnown for its agility, speed, and advanced avionics, the Typhoon excels in both air superiority \nand ground-attack roles. Powered by twin Eurojet EJ200 turbofan engines, it can reach speeds of up to Mach 2.0 (2,470 km/h). \nIts delta-wing design with canards ensures exceptional maneuverability. \nThe Typhoon features state-of-the-art radar and sensor systems, making it a cornerstone of NATO air defenses \nand a key player in modern military operations."
                  },
                  {
                    name: "USAF F35A Lightning II",
                    asset: 'low_poly_11_usaf_f35a.glb',
                    cameraZ: -500,
                    size: 300,
                    inverse: false,
                    heading: 0,
                    speed: 544,
                    displayZoom: 75,
                    invert: false,
                    description: "The USAF F-35A Lightning II, part of the Joint Strike Fighter program, \nis a multirole stealth fighter introduced in 2016. Designed to perform air-to-air, air-to-ground, \nand intelligence missions, it represents the cutting edge of modern military aviation. \nEquipped with advanced sensors, radar, and electronic warfare systems, the F-35A offers unparalleled situational awareness. \nIt is powered by a single Pratt & Whitney F135 engine, enabling speeds of up to Mach 1.6 and a combat radius of 1,100 km. \nThe F-35A also features stealth technology, enabling it to penetrate advanced air defenses. \nWith over 800 units delivered across allied nations, the F-35 is a key component of 21st-century air power, \nsupporting diverse mission profiles from conventional strikes to electronic warfare."
                  }
                ]

            }
        },
        methods: {
          switchView(view) {
            this.currentView = view;
            this.selectedIndex = null; // Reset selection when switching views
          },
          displayModel(index) {
            const plane = this.planes[index];
            this.currentPlane = index;
            const event = new CustomEvent("game", {
              detail: { message: this.state, plane: plane, location: this.locations[this.currentLocation] }, // Optional payload
            });
            window.dispatchEvent(event); // Or use document.dispatchEvent(event);
          },
          displayLocation(index) {
            const location = this.locations[index];
            this.currentLocation = index;
            const event = new CustomEvent("game", {
              detail: { message: this.state, plane: this.planes[this.currentPlane], location: location }, // Optional payload
            });
            window.dispatchEvent(event); // Or use document.dispatchEvent(event);
          },
          stopSim() {
            this.state = 'select-plane';
            const event = new CustomEvent("game", {
              detail: { message: this.state, plane: this.planes[this.currentPlane], location: this.locations[this.currentLocation] }, // Optional payload
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


<style>
    .toggle-container {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
    }

    .toggle-button {
      backdrop-filter: blur(8px);
      padding: 10px 20px;
      background: rgba(255, 255, 255, 0.623);
      border: none;
      border-radius: 20px;
      font-size: 16px;
      font-weight: bold;
      color: #074055bd;
      margin: 0 5px;
      cursor: pointer;
      transition: background 0.2s, transform 0.2s;
    }

    .toggle-button:hover {
      background: #d5d5d5;
      backdrop-filter: blur(8px);
    }

    .toggle-button.active {
      background: #074055cc;
      backdrop-filter: blur(8px);
      color: white;
    }
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
      height: 67vh;
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

    .right-container {
      position: fixed;
      top: 100px;
      right: 3rem;
      width: 25%; /* Default width for desktop */
      height: 45vh;
      backdrop-filter: blur(8px);
      background-color: #074055bd;
      border-radius: 46px 46px 46px 0px;
      text-align: left;
      box-shadow: 0px 0px 4px 4px rgba(255, 255, 255, 0.5);
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
      .toggle-container {
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
        transform: translateY(-30px);
        right: 5px;
        position: fixed;
      }
        
      .right-container {
        position: fixed;
        top: 145px;
        right: 1rem;
        width: 25%; /* Default width for desktop */
        height: 27vh;
        backdrop-filter: blur(8px);
        background-color: #074055bd;
        border-radius: 46px 46px 46px 46px;
        box-shadow: 0px 0px 4px 4px rgba(255, 255, 255, 0.5);
        padding: 20px;
        overflow-y: auto;
        text-align: left;
        display: flex;
        font-size: 6px;
        flex-direction: column;
        gap: 15px; /* Spacing between cards */
        z-index: 0;
      }

      .left-container {
        position: fixed;
        top: 110px;
        left: 12px;
        width: 25%; /* Default width for desktop */
        height: 55vh;
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