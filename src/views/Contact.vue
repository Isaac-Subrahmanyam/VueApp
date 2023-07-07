
<template>
  <title>Contact</title>
  <div class="about">
    <div class="description">
      <div class="copy-text phone">
        <h2 class="left">407-725-5513</h2>
        <button class="right" @:click="copy('.phone', '407-725-5513')">
          <i class="fa fa-clone"></i>
        </button>
      </div>
      <br />
      <br />
      <br />
      <div class="copy-text email">
        <h2 class="left">isaac.subrahmanyam@outlook.com</h2>
        <button
          class="right"
          @:click="copy('.email', 'isaac.subrahmanyam@outlook.com')"
        >
          <i class="fa fa-clone"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {}
  },
  methods: {
    copy(select, input) {
      let copyText = document.querySelector(select)
      copyText.classList.add('active')
      window.getSelection().removeAllRanges()
      navigator.clipboard.writeText(input)
      setTimeout(function () {
        copyText.classList.remove('active')
      }, 2000)
    }
  }
}
</script>


<style scoped>
.about {
  margin: 20vh auto;
  width: min(80vw, 500px);
  height: 100%;
  padding-bottom: 50px;
  padding-top: 50px;
}

.left {
  text-align: left;
  color: #f8f1f1;
  padding: 10px;
  font-size: min(20px, 80%);
}

.contact {
  width: min(400px, 90%);
  margin: auto;
  color: white;
  margin-top: 45px;
  background-color: #243964;
  border-radius: 10px;
}

p {
  color: black;
}

.right {
  position: absolute;
  right: 10px;
}

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.label {
  padding: 10px;
  font-size: 18px;
  color: #111;
}
.copy-text {
  margin: auto;
  font-size: 20px;
  width: 90%;
  position: relative;
  padding: 10px;
  background-color: #ffffff6e;
  backdrop-filter: blur(8px);
  border-radius: 10px;
  display: flex;
}

.copy-text button {
  padding: 10px;
  background-image: linear-gradient(#72d2dbd2, #3a93b3a4);
  color: white;
  font-size: 18px;
  border: none;
  outline: none;
  border-radius: 10px;
  cursor: pointer;
}

.copy-text button:active {
  background-image: linear-gradient(#35929bd2, #195d75a4);
}
.copy-text button:before {
  content: 'Copied';
  position: absolute;
  top: -55px;
  right: -12px;
  background-image: linear-gradient(#72d2dbd2, #3a93b3a4);
  padding: 8px 10px;
  border-radius: 20px;
  font-size: 15px;
  display: none;
}
.copy-text button:after {
  content: '';
  position: absolute;
  top: -30px;
  right: 14px;
  width: 10px;
  height: 10px;
  background-image: linear-gradient(#72d2dbd2, #3a93b3a4);
  transform: rotate(45deg);
  display: none;
}
.copy-text.active button:before,
.copy-text.active button:after {
  display: block;
}
</style>