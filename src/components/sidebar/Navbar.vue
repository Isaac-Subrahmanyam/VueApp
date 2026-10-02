<template>
  <div class="sidebar">
    <div class="content centered-elements">
      <div class="mobile">
        <div class="mobile-screen">
          <div class="bottom-nav">
            <bottom-nav-component
              @click="scrollToTop()"
              to="/about"
              icon="fas fa-user"
              name="About"
              value="0"
            />

            <bottom-nav-component
              @click="scrollToTop()"
              to="/experience"
              icon="fas fa-suitcase"
              name="Experience"
              value="0"
            />

            <bottom-nav-component
              @click="scrollToTop()"
              to="/projects"
              icon="fas fa-gamepad"
              name="Projects"
              value="0"
            />

            <bottom-nav-component
              @click="scrollToTop()"
              to="/flight-sim"
              icon="fas fa-plane"
              name="Flight Sim"
              value="0"
            />

            <bottom-nav-component
              @click="scrollToTop()"
              to="/contact"
              icon="fas fa-comment-dots"
              name="Contact"
              value="0"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',

  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style>
:root {
  --sidebar-item-hover: #8edcf7;
  --sidebar-item-active: #72c9e8;
}
</style>

<style lang="scss">
.mobile-screen {
  text-align: center;
  justify-content: center;
  align-content: center;
  align-items: center;
}

/* ========================================
   BOTTOM NAVIGATION
======================================== */

.bottom-nav {
  position: fixed;

  z-index: 1000;

  bottom: 5%;
  left: 2.5%;

  width: 95%;
  height: 62px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;

  background:
    linear-gradient(
      145deg,
      rgba(13, 27, 34, 0.9),
      rgba(7, 16, 21, 0.94)
    );

  border:
    1px solid rgba(123, 195, 221, 0.16);

  border-radius: 46px;

  box-shadow:
    0 15px 40px rgba(0, 0, 0, 0.38),
    0 0 20px rgba(58, 147, 179, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.035);

  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  /* ========================================
     NAV ITEM
  ======================================== */

  .case-icon {
    position: relative;

    width: 58px;
    height: 58px;

    display: grid;
    place-items: center;

    border-radius: 100%;

    cursor: default;

    transition:
      background 0.2s ease,
      box-shadow 0.2s ease;

    &::before {
      left: -22px;

      border-radius: 0 0 28px 0;
    }

    &::after {
      right: -22px;

      border-radius: 0 0 0 28px;
    }

    /* ========================================
       ACTIVE ITEM
    ======================================== */

    &.active {
      animation: bounce 600ms both;

      background:
        linear-gradient(
          145deg,
          rgba(20, 43, 53, 0.97),
          rgba(8, 22, 28, 0.98)
        );

      border:
        1px solid rgba(123, 195, 221, 0.26);

      box-shadow:
        0 10px 25px rgba(0, 0, 0, 0.35),
        0 0 18px rgba(58, 147, 179, 0.14),
        inset 0 1px 0 rgba(255, 255, 255, 0.04);

      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);

      .icon-bg {
        opacity: 1;
      }

      #icon {
        color: #d7f5ff;
      }

      .icon-title {
        animation: bounce-in 400ms;
      }
    }

    /* ========================================
       INACTIVE ITEM
    ======================================== */

    &.inactive {
      animation: bounce-reverse 400ms both;

      .icon-bg {
        opacity: 0;
      }

      .icon-title {
        animation: bounce-in-reverse 400ms both;
      }
    }
  }

  /* ========================================
     ICON BACKGROUND
  ======================================== */

  .icon-bg {
    position: absolute;

    width: 48px;
    height: 48px;

    border-radius: 100%;

    background:
      linear-gradient(
        145deg,
        #69c8e9,
        #3a93b3
      );

    border:
      1px solid rgba(166, 229, 251, 0.35);

    box-shadow:
      0 5px 15px rgba(0, 0, 0, 0.25),
      0 0 14px rgba(58, 147, 179, 0.22),
      inset 0 1px 0 rgba(255, 255, 255, 0.25);

    backdrop-filter: blur(8px);

    transition:
      opacity 200ms ease,
      box-shadow 200ms ease,
      transform 200ms ease;
  }

  /* ========================================
     ICON
  ======================================== */

  #icon {
    position: relative;

    z-index: 1;

    width: 25px;
    height: 25px;

    flex: none;

    color: rgba(121, 205, 234, 0.72);

    transition:
      color 200ms ease,
      transform 200ms ease;
  }

  .case-icon:hover #icon {
    color: #a6e5fb;

    transform: scale(1.05);
  }

  /* ========================================
     ACTIVE LABEL
  ======================================== */

  .icon-title {
    position: absolute;

    bottom: -22px;

    padding: 4px 9px;

    color: #8edcf7;

    background:
      rgba(7, 20, 26, 0.96);

    border:
      1px solid rgba(123, 195, 221, 0.17);

    border-radius: 2rem;

    box-shadow:
      0 5px 15px rgba(0, 0, 0, 0.28);

    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    font-family:
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      sans-serif;

    font-size: 12px;
    font-weight: 600;

    text-align: center;

    white-space: nowrap;
  }
}

/* ========================================
   ACTIVE BOUNCE
======================================== */

@keyframes bounce {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-30px);
  }

  100% {
    transform: translateY(-28px);
  }
}

/* ========================================
   RETURN TO NAV
======================================== */

@keyframes bounce-reverse {
  0% {
    transform: translateY(-28px);
  }

  50% {
    transform: translateY(-30px);
  }

  100% {
    transform: translateY(0);
  }
}

/* ========================================
   LABEL ENTER
======================================== */

@keyframes bounce-in {
  0% {
    opacity: 0;

    transform:
      translateY(4px)
      scale(0.85);
  }

  100% {
    opacity: 1;

    transform:
      translateY(0)
      scale(1);
  }
}

/* ========================================
   LABEL EXIT
======================================== */

@keyframes bounce-in-reverse {
  0% {
    opacity: 1;

    transform:
      translateY(0)
      scale(1);
  }

  100% {
    opacity: 0;

    transform:
      translateY(4px)
      scale(0.85);
  }
}

/* ========================================
   MOBILE
======================================== */

@media (max-width: 600px) {
  .bottom-nav {
    bottom: 3%;

    width: 94%;
    left: 3%;

    height: 58px;

    .case-icon {
      width: 53px;
      height: 53px;
    }

    .icon-bg {
      width: 44px;
      height: 44px;
    }

    #icon {
      width: 22px;
      height: 22px;
    }

    .icon-title {
      bottom: -20px;

      padding: 4px 8px;

      font-size: 10px;
    }
  }
}
</style>