<template>
  <title>Flight Sim</title>
  <div style="background: rgba(7, 16, 21, 0.88); backdrop-filter: blur(16px); border-bottom: 1px solid rgba(123, 195, 221, 0.14); box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2); transform: translateY(-20px); color: rgba(255,255,255,0.9);">
    <h1 style="padding: 0.5rem; user-select: none; font-size: 1.2rem; ">(IFS) - Isaac's Flight Simulator</h1>
  </div>
  <div style="background: rgba(7, 16, 21, 0.7); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(123, 195, 221, 0.08); transform: translateY(-40px);">
    <h1 style="padding: 0.5rem; font-size: 0.8rem; color: rgba(255, 255, 255, 0.6); user-select: none;" v-if="state === 'start-sim'">{{ planes[currentPlane]?.name || "No Plane Selected" }} - {{locations[currentLocation]?.name || "No Location Selected"}}</h1>
  </div>
  <div class="keypad-container" v-show="state === 'start-sim'">
    <div class="keypad">
      <button id="up"><i class="fas fa-arrow-up" style="user-select: none;"></i></button>
      <button id="left"><i class="fas fa-arrow-left" style="user-select: none;"></i></button>
      <button id="right"><i class="fas fa-arrow-right" style="user-select: none;"></i></button>
      <button id="down"><i class="fas fa-arrow-down" style="user-select: none;"></i></button>
    </div>
  </div>
  <div class="stop-button-container" v-show="state === 'start-sim'">
      <button class="play-button" @click="stopSim('failed')">
        <i class="fas fa-stop" style="user-select: none;"></i><span class="sim-button-label">Stop</span>
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
    <button
      class="toggle-button"
      :class="{ active: currentView === 'missions' }"
      @click="switchView('missions')"
    >
      Mission
    </button>
  </div>
  <div class="left-container" v-show="state === 'select-plane' && currentView !== 'missions'">
      <h2>{{ currentView === 'planes' ? 'Select Plane' : 'Select Location' }}</h2>
      <ul v-if="currentView === 'planes'">
        <li
          v-for="(plane, index) in planes"
          :key="index"
          :class="{ selected: index === currentPlane }"
          @click="displayModel(index)"
        >
          <b>{{ plane.name }}</b>
          <br> [speed: {{ Math.floor(plane.speed * 3.6) }} km/r, agility: {{ (plane?.speed / 100000).toFixed(4) }} radians/frame]
        </li>
      </ul>
      <ul v-if="currentView === 'locations'">
        <li
          v-for="(location, index) in locations"
          :key="index"
          :class="{ selected: index === currentLocation }"
          @click="displayLocation(index)"
        >
          <b>{{ location.name }}</b>
          <br> [long: {{ location.longitude }}, lat: {{ location.latitude }}, alt: {{ location.altitude }}]
        </li>
      </ul>
  </div>

  <div class="right-container" v-show="state === 'select-plane'" v-if="currentView === 'planes'">
      <h2 style="color: #ffffffb3;">{{ planes[currentPlane]?.description }}</h2>
  </div>
  
  <div id="radarMap" class="map-view" :class="{ expand: (currentView === 'missions' && state === 'select-plane') }"></div>

  <div id="toolbar" class="toolbar" v-show="currentView === 'missions' && state === 'select-plane'">
    <!-- Default tool -->
    <div class="tool-group default">
      <button id="defaultTool" class="tool-button active" data-tool="default" title="Default">
        <i class="fas fa-mouse-pointer" style="color: white"></i>
      </button>
      <button id="eraseTool" class="tool-button" data-tool="erase" title="Erase Shapes">
        <i class="fas fa-eraser" style="color: white"></i>
      </button>
    </div>

    <!-- Obstacle tools -->
    <div class="tool-group obstacle-group">
      <button id="circleToolObstacle" class="tool-button" data-tool="circle-obstacle" title="Draw Obstacle Circle">
        <i class="far fa-circle" style="color: white"></i>
      </button>
      <button id="polygonToolObstacle" class="tool-button" data-tool="polygon-obstacle" title="Draw Obstacle Polygon">
        <i class="fas fa-draw-polygon" style="color: white"></i>
      </button>
    </div>

    <!-- Finish line tools -->
    <div class="tool-group finish-line-group">
      <button id="circleToolFinish" class="tool-button" data-tool="circle-finish" title="Draw Finish Circle">
        <i class="far fa-circle" style="color: white"></i>
      </button>
      <button id="polygonToolFinish" class="tool-button" data-tool="polygon-finish" title="Draw Finish Polygon">
        <i class="fas fa-draw-polygon" style="color: white"></i>
      </button>
    </div>
  </div>

  <div class="play-button-container" v-show="state === 'select-plane'">
      <button class="play-button" @click="togglePlay" style="user-select: none;">
        <i class="fas fa-play" style="user-select: none;"></i><span class="sim-button-label">Play</span>
      </button>
  </div>

  <div id="statusCard" class="status-card" v-show="currentView === 'missions' && state === 'select-plane'">
    <div id="missionStatus" class="mission-status">Mission Not Started</div>
  </div>
</template>

<script>
    import 'ol/ol.css'; // Include OpenLayers CSS
    import Map from 'ol/Map.js';
    import View from 'ol/View.js';
    import TileLayer from 'ol/layer/Tile.js';
    import OSM from 'ol/source/OSM.js';
    import Feature from 'ol/Feature.js';
    import Point from 'ol/geom/Point.js';
    import VectorLayer from 'ol/layer/Vector.js';
    import VectorSource from 'ol/source/Vector.js';
    import { Style, Icon, Stroke, Fill } from 'ol/style.js';
    import { fromLonLat } from 'ol/proj';
    import { LineString } from 'ol/geom';
    import Draw from 'ol/interaction/Draw.js';
    import booleanIntersects from '@turf/boolean-intersects';
    import { circle } from '@turf/turf';
    import { toLonLat } from 'ol/proj';

   export default {
        name: 'App',
        data: function () {
            return {
                state: 'select-plane',
                currentView: "planes",
                features: [],
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
                    asset: "boeing_b-52_stratofortress.glb",
                    cameraZ: -100,
                    size: 100,
                    inverse: true,
                    heading: 180,
                    speed: 194,
                    displayZoom: 100,
                    invert: false,
                    description: "The Boeing B-52 Stratofortress is a long-range, subsonic, strategic bomber that has been in service since the 1950s. \nRenowned for its durability and versatility, the B-52 can carry up to 32,000 kg (70,000 lbs) of payload, \nincluding conventional and nuclear weapons. Powered by eight Pratt & Whitney turbofan engines, \nit has a cruising speed of 1,000 km/h and a range of 14,162 km (8,800 miles) without aerial refueling. \nThe B-52 has been adapted over decades for various missions, from strategic bombing to close air support, \nand remains an integral part of the U.S. Air Force's global strike capability. \nKnown affectionately as the 'BUFF' (Big Ugly Fat Fellow), it continues to be modernized and is expected to serve into the 2050s."
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
        mounted() {
          // Initialize the radar map
          const radarSource = new VectorSource();
          const radarLayer = new VectorLayer({ source: radarSource });

          const radarMap = new Map({
              target: 'radarMap',
              layers: [
                  new TileLayer({ source: new OSM() }),
                  radarLayer
              ],
              view: new View({
                  center: [0, 0], // Default center, updated dynamically
                  zoom: 0.5, // Radar map zoom level
                  maxZoom: 16,
                  minZoom: 10
              }),
              controls: [] // No controls for simplicity
          });

          radarMap.getView().setRotation(-Math.PI / 2);

          // Global vector source and layer for the heading line
          let headingLineSource = new VectorSource();

          const headingLineLayer = new VectorLayer({
              source: headingLineSource,
              style: new Style({
                  stroke: new Stroke({
                      color: 'rgba(255,0,0,0.25)',
                      width: 5
                  })
              })
          });

          function updateHeadingLine(longitude, latitude, distance = 1000) {
              const heading = Math.PI / 2;
              const earthRadius = 6371; // Earth's radius in kilometers
              const endLatitude = latitude + (distance / earthRadius) * (180 / Math.PI) * Math.cos(heading);
              const endLongitude = longitude + (distance / earthRadius) * (180 / Math.PI) * Math.sin(heading) / Math.cos(latitude * Math.PI / 180);

              const coordinates = [
                  fromLonLat([longitude, latitude]),
                  fromLonLat([endLongitude, endLatitude])
              ];

              // Use `let` for reassignment
              let headingLineFeature = headingLineSource.getFeatures()[0];
              if (!headingLineFeature) {
                  headingLineFeature = new Feature({
                      geometry: new LineString(coordinates)
                  });
                  headingLineSource.addFeature(headingLineFeature);
              } else {
                  headingLineFeature.getGeometry().setCoordinates(coordinates);
              }
          }

          // Add a feature to represent the plane's location
          const planeFeature = new Feature({
              geometry: new Point([0, 0]) // Updated dynamically
          });
          planeFeature.setStyle(new Style({
              image: new Icon({
                  src: 'red_marker.png', // Replace with your plane icon
                  scale: 0.05
              })
          }));
          radarSource.addFeature(planeFeature);

          // Update radar map's view center
          radarMap.getView().setCenter(fromLonLat([this.locations[this.currentLocation].longitude, this.locations[this.currentLocation].latitude]));

          updateHeadingLine(this.locations[this.currentLocation].longitude, this.locations[this.currentLocation].latitude);

          // Update plane's feature position
          planeFeature.setGeometry(new Point(fromLonLat([this.locations[this.currentLocation].longitude, this.locations[this.currentLocation].latitude])));
          
          // Add the layer to the radar map
          radarMap.addLayer(headingLineLayer);

          let features = [];

          function detectCollision() {
            // Convert the plane's geometry to GeoJSON
            const planeGeometry = planeFeature.getGeometry();
            const planeGeoJSON = {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: toLonLat(planeGeometry.getCoordinates()), // Convert coordinates to [lon, lat]
              },
              properties: { type: 'plane' },
            };

            features.forEach((feature) => {
              // Convert feature geometry to GeoJSON
              const featureGeometry = feature.getGeometry();
              let featureGeoJSON;

              if (featureGeometry.getType() === 'Circle') {
                const center = toLonLat(featureGeometry.getCenter());
                const radius = featureGeometry.getRadius(); // Radius in meters
                featureGeoJSON = circle(center, radius, {
                  steps: 64, // Number of vertices for the circle
                  units: 'meters',
                });
              } else if (featureGeometry.getType() === 'Polygon') {
                const coordinates = featureGeometry.getCoordinates();
                featureGeoJSON = {
                  type: 'Feature',
                  geometry: {
                    type: 'Polygon',
                    coordinates: coordinates.map((ring) =>
                      ring.map((coord) => toLonLat(coord)) // Convert each ring's coordinates to [lon, lat]
                    ),
                  },
                  properties: { type: feature.get('type') },
                };
              } else {
                console.error(`Unsupported geometry type: ${featureGeometry.getType()}`);
                return;
              }

              // Use Turf.js to check for intersection
              if (booleanIntersects(planeGeoJSON, featureGeoJSON)) {
                const featureType = feature.get('type');
                if (featureType === 'obstacle') {
                  const event = new CustomEvent("stopSim", {
                    detail: { state: "failed" }, // Optional payload
                  });
                  window.dispatchEvent(event);
                } else if (featureType === 'finish-line') {
                  const event = new CustomEvent("stopSim", {
                    detail: { state: "complete" }, // Optional payload
                  });
                  window.dispatchEvent(event);
                }
              }
            });
          }

          window.addEventListener("changeMapView", (event) => {
            const long = event.detail.location.longitude;
            const lat = event.detail.location.latitude;

            // Update radar map's view center
            radarMap.getView().setCenter(fromLonLat([long, lat]));

            // Update plane's feature position
            planeFeature.setGeometry(new Point(fromLonLat([long, lat])));

            detectCollision();

            if(event.detail.updateHeading) updateHeadingLine(long, lat)
          })

          window.addEventListener("changeView", () => {
            setTimeout(() => {
              radarMap.updateSize();
            }, 100)
          })

          window.addEventListener("features", (event) => {
            this.features = event.detail.features;
            features = this.features;
          })

          window.addEventListener("stopSim", (event) => {
            const state = event.detail.state;
            this.stopSim(state);
          })

          // Vector source and layer for the drawn features
          const drawSource = new VectorSource();
          const drawLayer = new VectorLayer({
            source: drawSource
          });
          radarMap.addLayer(drawLayer);

          // Active tool state
          let drawInteraction = null;

          // Define styles
          const obstacleStyle = new Style({
            fill: new Fill({
              color: 'rgba(255, 0, 0, 0.5)' // Red fill
            }),
            stroke: new Stroke({
              color: 'red', // Red border
              width: 2
            })
          });

          const finishLineStyle = new Style({
            fill: new Fill({
              color: 'rgba(0, 255, 0, 0.5)' // Green fill
            }),
            stroke: new Stroke({
              color: 'green', // Green border
              width: 2
            })
          });

          let isErasorOn = false;

          // Function to activate the erase tool
          radarMap.on('singleclick', (event) => {
              radarMap.forEachFeatureAtPixel(event.pixel, (feature, layer) => {
                if (layer === drawLayer && isErasorOn) {
                  // Remove the feature from the source
                  drawSource.removeFeature(feature);
                  const features = drawSource.getFeatures();
                  const event = new CustomEvent("features", {
                    detail: { features: features }, // Optional payload
                  });
                  window.dispatchEvent(event);
                }
              });
          });

          // Function to set active tool
          function setActiveTool(tool) {

            // Remove existing interactions
            radarMap.removeInteraction(drawInteraction);
            drawInteraction = null;

            // Highlight the active button
            document.querySelectorAll('.tool-button').forEach((button) => {
              button.classList.remove('active');
            });
            document.querySelector(`[data-tool="${tool}"]`).classList.add('active');

            isErasorOn = false;

            // Add drawing interaction based on selected tool
            if (tool === 'circle-finish' || tool === 'circle-obstacle') {
              drawInteraction = new Draw({
                source: drawSource,
                type: 'Circle'
              });
            } else if (tool === 'line-obstacle' || tool === 'line-finish') {
              drawInteraction = new Draw({
                source: drawSource,
                type: 'LineString'
              });
            } else if (tool === 'polygon-obstacle' || tool === 'polygon-finish') {
              drawInteraction = new Draw({
                source: drawSource,
                type: 'Polygon'
              });
            } else if (tool === 'erase') {
              isErasorOn = true;
            }

            // Add the interaction and style features dynamically
            if (drawInteraction) {
              drawInteraction.on('drawend', (event) => {
                const feature = event.feature;

                // Apply style based on tool type
                if (tool.startsWith('polygon')) {
                  if (tool.includes('obstacle')) {
                    feature.setStyle(obstacleStyle);
                    feature.set("type", "obstacle")
                  } else if (tool.includes('finish')) {
                    feature.setStyle(finishLineStyle);
                    feature.set("type", "finish-line")
                  }
                } else if (tool.startsWith('circle')) {
                  if (tool.includes('obstacle')) {
                    feature.setStyle(obstacleStyle);
                    feature.set("type", "obstacle")
                  } else if (tool.includes('finish')) {
                    feature.setStyle(finishLineStyle);
                    feature.set("type", "finish-line")
                  }
                }
                setTimeout(() => {
                  const features = drawSource.getFeatures();
                  const event = new CustomEvent("features", {
                    detail: { features: features }, // Optional payload
                  });
                  window.dispatchEvent(event);
                }, 100)
              });

              radarMap.addInteraction(drawInteraction);
            }
          }

          // Event listeners for tool buttons
          document.querySelectorAll('.tool-button').forEach((button) => {
            button.addEventListener('click', () => {
              const tool = button.getAttribute('data-tool');
              setActiveTool(tool);
            });
          });

          const event = new CustomEvent("game", {
            detail: { message: this.state, plane: this.planes[this.currentPlane], location: this.locations[this.currentLocation] }, // Optional payload
          });
          window.dispatchEvent(event); // Or use document.dispatchEvent(event);

          let intervalId = null; // Stores the interval for continuous updates

          const radarMapElement = document.getElementById("radarMap");
          if (this.currentView === "locations" || this.currentView === "missions") {
              radarMapElement.style.display = "block"; // Show the radar map
          } else {
              radarMapElement.style.display = "none"; // Hide the radar map
          }

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
        methods: {
          updateMissionCard(state) {
            const missionStatusDiv = document.getElementById('missionStatus');

            // Update the text
            missionStatusDiv.textContent = state;

            // Update the style based on the state
            missionStatusDiv.className = 'mission-status'; // Reset classes
            if (state === 'Mission Not Started') {
              missionStatusDiv.classList.add('not-started');
            } else if (state === 'Mission Complete') {
              missionStatusDiv.classList.add('complete');
            } else if (state === 'Mission Failed') {
              missionStatusDiv.classList.add('failed');
            }
          },
          switchView(view) {
            this.currentView = view;            
            const radarMapElement = document.getElementById("radarMap");
            if (this.currentView === "locations" || this.currentView === "missions") {
                radarMapElement.style.display = "block"; // Show the radar map
            } else {
                radarMapElement.style.display = "none"; // Hide the radar map
            }
            const event = new CustomEvent("changeView", {
              detail: { view: this.currentView }, // Optional payload
            });
            window.dispatchEvent(event);
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
            const event2 = new CustomEvent("changeMapView", {
              detail: { location: location, updateHeading: true }, // Optional payload
            });
            window.dispatchEvent(event); // Or use document.dispatchEvent(event);
            window.dispatchEvent(event2);
          },
          stopSim(state) {
            this.state = 'select-plane';
            const radarMapElement = document.getElementById("radarMap");
            if (this.currentView === "locations" || this.currentView === "missions") {
                radarMapElement.style.display = "block"; // Show the radar map
            } else {
                radarMapElement.style.display = "none"; // Hide the radar map
            }
            const event = new CustomEvent("game", {
              detail: { message: this.state, plane: this.planes[this.currentPlane], location: this.locations[this.currentLocation] }, // Optional payload
            });
            const event2 = new CustomEvent("changeMapView", {
              detail: { location: this.locations[this.currentLocation], updateHeading: true }, // Optional payload
            });
            window.dispatchEvent(event); // Or use document.dispatchEvent(event);
            window.dispatchEvent(event2);
            const event3 = new CustomEvent("changeView", {
              detail: { view: this.currentView }, // Optional payload
            });
            window.dispatchEvent(event3);
            if(state === "failed") this.updateMissionCard("Mission Failed");
            if(state === "complete") this.updateMissionCard("Mission Complete");
          },
          togglePlay() {
            this.state = 'start-sim';
            const radarMapElement = document.getElementById("radarMap");
            radarMapElement.style.display = "block"; // Show the radar map
            const event = new CustomEvent("game", {
              detail: { message: this.state, plane: this.planes[this.currentPlane], features: this.features }, // Optional payload
            });
            window.dispatchEvent(event); // Or use document.dispatchEvent(event);
            const event3 = new CustomEvent("changeView", {
              detail: { view: this.currentView }, // Optional payload
            });
            window.dispatchEvent(event3);
          },
        }
    }
</script>


<style>

:root {
  --ifs-bg: rgba(7, 16, 21, 0.88);
  --ifs-bg-solid: #071015;
  --ifs-surface: rgba(13, 27, 34, 0.88);
  --ifs-surface-light: rgba(21, 43, 53, 0.88);

  --ifs-border: rgba(123, 195, 221, 0.16);
  --ifs-border-hover: rgba(123, 195, 221, 0.32);

  --ifs-accent: #69c6e7;
  --ifs-accent-light: #9ce4fc;
  --ifs-accent-dark: #3a93b3;

  --ifs-text: rgba(255, 255, 255, 0.92);
  --ifs-text-soft: rgba(255, 255, 255, 0.62);
  --ifs-text-muted: rgba(255, 255, 255, 0.42);

  --ifs-red: #e56767;
  --ifs-green: #67d69a;

  --ifs-radius: 16px;
}


/* =========================================================
   GLOBAL
========================================================= */

body {
  margin: 0;
  padding: 0;
  height: 100vh;
  overflow: hidden;

  font-family: 'Inter', 'Poppins', Arial, sans-serif;

  background: transparent;
}


/* =========================================================
   MISSION STATUS
========================================================= */

.status-card {
  position: absolute;

  top: 120px;
  right: 60px;

  width: 130px;

  padding: 7px;

  z-index: 200;

  background:
    linear-gradient(
      145deg,
      rgba(13, 27, 34, 0.94),
      rgba(7, 16, 21, 0.96)
    );

  border: 1px solid var(--ifs-border);

  border-radius: 12px;

  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  box-shadow:
    0 12px 30px rgba(0, 0, 0, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.035);
}

.mission-status {
  margin: 0;
  padding: 9px 7px;

  text-align: center;

  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 700;

  color: var(--ifs-text-soft);

  letter-spacing: 0.02em;
}

.mission-status.not-started {
  color: var(--ifs-text-soft);
}

.mission-status.complete {
  color: var(--ifs-green);
}

.mission-status.failed {
  color: var(--ifs-red);
}


/* =========================================================
   TOOLBAR
========================================================= */

.toolbar {
  position: absolute;

  top: 120px;
  left: 5%;

  display: flex;
  flex-direction: column;

  gap: 8px;

  z-index: 200;
}

.tool-group {
  display: flex;
  flex-direction: column;

  gap: 7px;

  margin-top: 8px;

  padding: 6px;

  background: rgba(7, 16, 21, 0.82);

  border: 1px solid rgba(123, 195, 221, 0.1);

  border-radius: 14px;

  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.22);
}

.tool-button {
  width: 42px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  background: rgba(255, 255, 255, 0.045);

  border: 1px solid rgba(123, 195, 221, 0.13);

  border-radius: 9px;

  cursor: pointer;

  font-size: 16px;

  box-shadow: none;

  backdrop-filter: blur(8px);

  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.tool-button i {
  color: rgba(255, 255, 255, 0.62) !important;

  transition: color 0.2s ease;
}

.tool-button:hover {
  width: 42px;
  height: 42px;

  background: rgba(105, 197, 231, 0.548);

  border: 1px solid rgba(105, 198, 231, 0.3);

  border-radius: 9px;

  transform: translateY(-1px);

  box-shadow: 0 5px 14px rgba(0, 0, 0, 0.2);
}

.tool-button:hover i {
  color: var(--ifs-accent-light) !important;
}

.tool-button.active {
  background: rgba(105, 198, 231, 0.75);

  border-color: rgb(105, 197, 231);

  box-shadow:
    0 0 13px rgba(105, 198, 231, 0.12);
}

.tool-button.active i {
  color: var(--ifs-accent-light) !important;
}

.obstacle-group .tool-button {
  border-color: rgba(229, 103, 103, 0.60);
}

.obstacle-group .tool-button:hover,
.obstacle-group .tool-button.active {
  background: rgba(229, 103, 103, 0.534);
  border-color: rgb(229, 103, 103);
}

.obstacle-group .tool-button:hover i,
.obstacle-group .tool-button.active i {
  color: #ff9b9b !important;
}

.finish-line-group .tool-button {
  border-color: rgba(103, 214, 154, 0.60);
}

.finish-line-group .tool-button:hover,
.finish-line-group .tool-button.active {
  background: rgba(103, 214, 155, 0.5);
  border-color: rgb(103, 214, 155);
}

.finish-line-group .tool-button:hover i,
.finish-line-group .tool-button.active i {
  color: #8aefb8 !important;
}

.default .tool-button {
  border-color: rgba(105, 198, 231, 0.60);
}

.tool-button[data-tool="erase"] {
  border-color: rgba(212, 112, 205, 0.60);
}


/* =========================================================
   PLANES / LOCATIONS / MISSION TOGGLE
========================================================= */

.toggle-container {
  display: flex;
  justify-content: center;

  gap: 4px;

  width: fit-content;

  margin: 0 auto 14px;
  padding: 5px;

  background:
    linear-gradient(
      145deg,
      rgba(13, 27, 34, 0.92),
      rgba(7, 16, 21, 0.94)
    );

  border: 1px solid var(--ifs-border);

  border-radius: 13px;

  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.22);
}

.toggle-button {
  margin: 0;

  padding: 8px 17px;

  background: transparent;

  border: 1px solid transparent;

  border-radius: 9px;

  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 600;

  color: var(--ifs-text-soft);

  cursor: pointer;

  backdrop-filter: none;

  transition:
    background 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;
}

.toggle-button:hover {
  background: rgba(105, 198, 231, 0.07);

  color: rgba(255, 255, 255, 0.88);
}

.toggle-button.active {
  background: rgba(105, 198, 231, 0.13);

  border-color: rgba(105, 198, 231, 0.23);

  color: var(--ifs-accent-light);

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.035);
}


/* =========================================================
   LEFT SELECTION PANEL
========================================================= */

.left-container {
  position: fixed;

  top: 100px;
  left: 3rem;

  width: 25%;
  height: 67vh;

  padding: 18px;

  overflow-y: auto;

  display: flex;
  flex-direction: column;

  gap: 12px;

  z-index: 10;

  background:
    linear-gradient(
      145deg,
      rgba(13, 27, 34, 0.92),
      rgba(7, 16, 21, 0.95)
    );

  border: 1px solid var(--ifs-border);

  border-radius: 20px;

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  box-shadow:
    0 18px 45px rgba(0, 0, 0, 0.34),
    inset 0 1px 0 rgba(255, 255, 255, 0.035);

  scrollbar-width: thin;
  scrollbar-color:
    rgba(105, 198, 231, 0.3)
    transparent;
}

.left-container::-webkit-scrollbar {
  width: 5px;
}

.left-container::-webkit-scrollbar-track {
  background: transparent;
}

.left-container::-webkit-scrollbar-thumb {
  background: rgba(105, 198, 231, 0.25);

  border-radius: 20px;
}

.left-container h2 {
  margin: 2px 0 8px;

  color: rgba(255, 255, 255, 0.88);

  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 600;

  text-align: left;
}

.left-container ul {
  list-style: none;

  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;

  gap: 8px;
}

.left-container li b {
  display: inline-block;
  margin-bottom: 2px;
  color: rgba(255, 255, 255, 0.92);
  font-size: 14px;
  font-weight: 650;
  line-height: 1.35;
}

.left-container li {
  padding: 12px 13px;

  background: rgba(255, 255, 255, 0.035);

  border: 1px solid rgba(255, 255, 255, 0.055);

  border-radius: 10px;

  cursor: pointer;

  color: var(--ifs-text-soft);

  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 500;
  line-height: 1.6;

  text-align: left;

  box-shadow: none;

  backdrop-filter: none;

  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;
}

.left-container li:hover {
  background: rgba(105, 198, 231, 0.07);

  border-color: rgba(105, 198, 231, 0.18);

  color: rgba(255, 255, 255, 0.82);

  transform: translateX(2px);
}

.left-container li:active {
  background: rgba(105, 198, 231, 0.1);

  transform: translateX(1px);
}

.left-container li.selected {
  background:
    linear-gradient(
      90deg,
      rgba(58, 147, 179, 0.18),
      rgba(58, 147, 179, 0.07)
    );

  border-color: rgba(105, 198, 231, 0.32);

  color: #e5f8ff;

  transform: none;

  box-shadow:
    inset 3px 0 0 var(--ifs-accent);
}


/* =========================================================
   PLANE DESCRIPTION PANEL
========================================================= */

.right-container {
  position: fixed;

  top: 100px;
  right: 3rem;

  width: 25%;
  height: 45vh;

  padding: 20px;

  overflow-y: auto;

  display: flex;
  flex-direction: column;

  gap: 15px;

  z-index: 10;

  text-align: left;

  background:
    linear-gradient(
      145deg,
      rgba(13, 27, 34, 0.91),
      rgba(7, 16, 21, 0.95)
    );

  border: 1px solid var(--ifs-border);

  border-radius: 20px;

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  box-shadow:
    0 18px 45px rgba(0, 0, 0, 0.34),
    inset 0 1px 0 rgba(255, 255, 255, 0.035);

  scrollbar-width: thin;
  scrollbar-color:
    rgba(105, 198, 231, 0.3)
    transparent;
}

.right-container::-webkit-scrollbar {
  width: 5px;
}

.right-container::-webkit-scrollbar-thumb {
  background: rgba(105, 198, 231, 0.25);

  border-radius: 20px;
}

.right-container h2 {
  margin: 0;

  color: var(--ifs-text-soft) !important;

  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.8;

  white-space: pre-line;
}


/* =========================================================
   PLAY / STOP
========================================================= */

.play-button-container {
  position: fixed;

  right: 60px;
  bottom: 130px;

  width: 64px;
  height: 64px;

  z-index: 1000;
}

.stop-button-container {
  position: fixed;

  left: 60px;
  bottom: 150px;

  width: 58px;
  height: 58px;

  z-index: 1000;
}

.play-button {
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  background:
    linear-gradient(
      145deg,
      rgba(58, 147, 179, 0.28),
      rgba(13, 35, 44, 0.94)
    );

  border: 1px solid rgba(105, 198, 231, 0.35);

  border-radius: 50%;

  color: var(--ifs-accent-light);

  font-size: 22px;

  cursor: pointer;

  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  box-shadow:
    0 10px 28px rgba(0, 0, 0, 0.3),
    0 0 18px rgba(105, 198, 231, 0.09),
    inset 0 1px 0 rgba(255, 255, 255, 0.07);

  transition:
    transform 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.play-button:hover {
  background:
    linear-gradient(
      145deg,
      rgba(69, 168, 203, 0.4),
      rgba(13, 35, 44, 0.96)
    );

  border-color: rgba(105, 198, 231, 0.58);

  transform: translateY(-2px);

  box-shadow:
    0 13px 30px rgba(0, 0, 0, 0.35),
    0 0 20px rgba(105, 198, 231, 0.15);
}

.play-button:active {
  transform: scale(0.94);
}

.stop-button-container .play-button {
  background:
    linear-gradient(
      145deg,
      rgba(229, 103, 103, 0.23),
      rgba(40, 18, 20, 0.94)
    );

  border-color: rgba(229, 103, 103, 0.35);

  color: #ff9d9d;

  box-shadow:
    0 10px 28px rgba(0, 0, 0, 0.3),
    0 0 15px rgba(229, 103, 103, 0.08);
}

.stop-button-container .play-button:hover {
  background:
    linear-gradient(
      145deg,
      rgba(229, 103, 103, 0.34),
      rgba(40, 18, 20, 0.96)
    );

  border-color: rgba(229, 103, 103, 0.55);
}


/* =========================================================
   FLIGHT KEYPAD
========================================================= */

.keypad-container {
  position: fixed;

  right: 20px;
  bottom: 150px;

  width: 35vw;
  height: 35vw;

  max-width: 220px;
  max-height: 220px;

  z-index: 500;
}

.keypad {
  position: relative;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(22, 47, 58, 0.9),
      rgba(7, 16, 21, 0.91)
    );

  border: 1px solid rgba(105, 198, 231, 0.18);

  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  box-shadow:
    0 15px 40px rgba(0, 0, 0, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

.keypad::after {
  content: '';

  position: absolute;

  width: 22%;
  height: 22%;

  border-radius: 50%;

  background: rgba(105, 198, 231, 0.055);

  border: 1px solid rgba(105, 198, 231, 0.1);
}

.keypad button {
  position: absolute;

  width: 31%;
  height: 31%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  background: rgba(255, 255, 255, 0.045);

  border: 1px solid rgba(105, 198, 231, 0.13);

  border-radius: 50%;

  color: rgba(156, 228, 252, 0.65);

  font-size: clamp(17px, 2vw, 25px);

  cursor: pointer;

  box-shadow: none;

  backdrop-filter: blur(8px);

  transition:
    background 0.15s ease,
    color 0.15s ease,
    border-color 0.15s ease,
    transform 0.15s ease;
}

.keypad button:hover {
  background: rgba(105, 198, 231, 0.12);

  border-color: rgba(105, 198, 231, 0.35);

  color: var(--ifs-accent-light);
}

.keypad button:active {
  background: rgba(105, 198, 231, 0.2);

  transform: scale(0.9);
}

.keypad #up {
  top: 6%;
  left: 34.5%;
}

.keypad #down {
  bottom: 6%;
  left: 34.5%;
}

.keypad #left {
  left: 6%;
  top: 34.5%;
}

.keypad #right {
  right: 6%;
  top: 34.5%;
}


/* =========================================================
   MAP
========================================================= */

.map-view {
  position: absolute;

  top: 100px;
  right: 50px;

  width: 15%;
  height: 30vh;

  z-index: 100;

  overflow: hidden;

  border: 2px solid rgba(105, 198, 231, 0.32);
  border-radius: 50%;

  background: rgba(7, 16, 21, 0.9);

  box-shadow:
    0 16px 40px rgba(0, 0, 0, 0.35),
    0 0 18px rgba(58, 147, 179, 0.1);
}

/* Mission editor expanded map */
.map-view.expand {
  position: absolute;

  top: 120px;
  left: 10%;
  right: auto;

  width: 80%;
  height: 65vh;

  z-index: 100;

  border: 1px solid rgba(105, 198, 231, 0.25);
  border-radius: 18px;

  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.4),
    0 0 22px rgba(58, 147, 179, 0.08);
}


/* =========================================================
   MOBILE
========================================================= */

@media screen and (max-width: 768px) {

  .toggle-container {
    display: flex;
    justify-content: center;

    transform: translateY(-25px);

    gap: 2px;

    padding: 4px;
  }

  .toggle-button {
    padding: 7px 11px;

    font-size: 10px;
  }


  /* STATUS */

  .status-card {
    top: 120px;
    right: 10px;

    width: 95px;

    padding: 4px;
  }

  .mission-status {
    padding: 7px 4px;

    font-size: 9px;
  }


  /* TOOLBAR */

  .toolbar {
    left: 10px;
  }

  .tool-group {
    padding: 4px;

    gap: 5px;
  }

  .tool-button i {
    color: rgba(255, 255, 255, 0.9) !important;
    transition: color 0.2s ease;
  }

  .tool-button:hover i {
    color: #ffffff !important;
  }

  .tool-button.active i {
    color: #ffffff !important;
  }
  

  /* LEFT PANEL */

  .left-container {
    position: fixed;

    top: 100px;
    left: 12px;

    width: 28%;
    height: 55vh;

    padding: 11px;

    border-radius: 15px;

    gap: 9px;
  }

  .left-container h2 {
    margin-bottom: 5px;

    font-size: 12px;
  }

  .left-container ul {
    gap: 6px;
  }

  .left-container li {
    padding: 7px;

    border-radius: 8px;

    font-size: 9px;
    line-height: 1.45;
  }

  .left-container li:hover {
    transform: none;
  }

  .left-container li.selected {
    transform: none;
  }


  /* RIGHT PANEL */

  .right-container {
    position: fixed;

    top: 100px;
    right: 1rem;

    width: 27%;
    height: 27vh;

    padding: 12px;

    border-radius: 15px;

    gap: 8px;
  }

  .right-container h2 {
    font-size: 7px;
    line-height: 1.6;
  }


  /* PLAY */

  .play-button-container {
    right: 10px;
    bottom: 130px;

    width: 58px;
    height: 58px;
  }

  .stop-button-container {
    left: 12px;
    bottom: 135px;

    width: 52px;
    height: 52px;
  }

  .play-button {
    font-size: 19px;
  }

.play-button {
  width: 178px;
  height: 78px;
  min-width: 178px;
  min-height: 78px;
  box-sizing: border-box;
  border-radius: 22px;
  padding: 0 26px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  overflow: visible;
  white-space: nowrap;
  font-size: 22px;
  font-weight: 700;
  line-height: 1;
}

.play-button i {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  position: static;
  transform: none;
  font-size: 21px;
  line-height: 1;
}

.sim-button-label {
  display: inline-block;
  flex: 0 0 auto;
  line-height: 1;
  white-space: nowrap;
  user-select: none;
}




  /* KEYPAD */

  .keypad-container {
    right: 12px;
    bottom: 130px;

    width: 38vw;
    height: 38vw;

    max-width: 185px;
    max-height: 185px;
  }

  .keypad button {
    font-size: clamp(14px, 4vw, 20px);
  }
}


/* =========================================================
   SMALL MOBILE
========================================================= */

@media screen and (max-width: 480px) {

  .left-container {
    width: 31%;

    left: 8px;

    padding: 8px;
  }

  .right-container {
    width: 30%;

    right: 8px;

    padding: 9px;
  }

  .left-container li {
    padding: 6px;

    font-size: 8px;
  }

  .toggle-button {
    padding: 6px 9px;

    font-size: 9px;
  }

  .toolbar {
    left: 6px;
  }

  .tool-button,
  .tool-button:hover {
    width: 33px;
    height: 33px;
  }
}

.play-button-container,
.stop-button-container {
  width: auto !important;
  height: auto !important;
  min-width: 0 !important;
  min-height: 0 !important;
  overflow: visible !important;
}

.play-button-container .play-button,
.stop-button-container .play-button {
  width: 180px !important;
  height: 76px !important;
  min-width: 180px !important;
  min-height: 76px !important;
  max-width: none !important;
  max-height: none !important;
  aspect-ratio: auto !important;
  border-radius: 22px !important;
  padding: 0 26px !important;
  box-sizing: border-box !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 13px !important;
  overflow: visible !important;
  white-space: nowrap !important;
  font-size: 22px !important;
  font-weight: 700 !important;
  line-height: 1 !important;
}

.play-button-container .play-button i,
.stop-button-container .play-button i {
  position: static !important;
  width: auto !important;
  height: auto !important;
  margin: 0 !important;
  transform: none !important;
  flex: 0 0 auto !important;
  font-size: 21px !important;
  line-height: 1 !important;
}

.play-button-container .sim-button-label,
.stop-button-container .sim-button-label {
  display: inline-block !important;
  position: static !important;
  width: auto !important;
  margin: 0 !important;
  transform: none !important;
  flex: 0 0 auto !important;
  white-space: nowrap !important;
  line-height: 1 !important;
}

</style>