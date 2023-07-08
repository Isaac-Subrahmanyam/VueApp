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
  data: function () {
    return {
      scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }
}
</script>



<style>
:root {
  /* --sidebar-bg-color: linear-gradient(#ffffff, #000000); */
  --sidebar-item-hover: #e4f9ff;
  --sidebar-item-active: #b3f5ff;
}
</style>

<style lang="scss">
/*
    ** Root element font size
    ** No default margins and paddings
*/
html,
body {
  // font-size: 16px;
  // margin: 0;
  // padding: 0;
}

/*
    **root elements display block
*/
html,
body {
  display: block;
}

/*
    ** Body main style
*/
body {
  line-height: 1.317101995;
  scroll-behavior: smooth;
  font-family: sans-serif;
  background-color: #ffffff;
  color: #333333;
}

.mobile-screen {
  text-align: center;
  justify-content: center;
  align-content: center;
  align-items: center;
}

/* BOTTOM NAVIGATION */

.bottom-nav {
  position: fixed;
  z-index: 1;
  bottom: 5%;
  width: 95%;
  left: 2.5%;
  height: 62px;
  background-color: #ffffffb3;
  backdrop-filter: blur(8px);
  box-shadow: 0px 0px 4px 4px rgba(127, 180, 216, 0.5);
  border-radius: 46px 46px 46px 46px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;

  .case-icon {
    cursor: default;
    position: relative;
    display: grid;
    place-items: center;
    width: 58px;
    height: 58px;
    border-radius: 100%;

    &::before {
      left: -22px;
      border-radius: 0 0 28px 0;
    }

    &::after {
      right: -22px;
      border-radius: 0 0 0 28px;
    }

    &.active {
      animation: bounce 600ms both;
      background-color: #ffffffb3;
      backdrop-filter: blur(8px);

      .icon-bg {
        opacity: 1;
      }

      #icon {
        color: rgb(255, 255, 255);
      }

      .icon-title {
        animation: bounce-in 400ms;
      }
    }

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

  .icon-bg {
    background-image: linear-gradient(#72d2dbd2, #3a93b3a4);
    backdrop-filter: blur(8px);
    border-radius: 100%;
    height: 48px;
    width: 48px;
    position: absolute;
    transition: all 200ms ease;
  }

  #icon {
    height: 25px;
    width: 25px;
    flex: none;
    z-index: 0;
    transition: all 200ms ease;
    color: #3a93b3;
  }

  .icon-title {
    background-color: #ffffffb3;
    backdrop-filter: blur(8px);
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    border-radius: 2rem;
    backdrop-filter: blur(8px);
    text-align: center;
    font-size: 15px;
    color: #3a93b3;
    position: absolute;
    bottom: -22px;
  }
}

@keyframes bounce {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-30px);
  }

  100% {
    transform: translateY(-28px);
  }
}

@keyframes bounce-reverse {
  0% {
    transform: translateY(-28px);
  }

  50% {
    transform: translateY(-30px);
  }

  100% {
    transform: translateY(0px);
  }
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes bounce-in-reverse {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0);
  }
}
</style>
