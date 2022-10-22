
<template>
  <title>About</title>
  <div class="about">
    <div class="pfp">
      <img id = "photo" src = "../../images/profilephoto.jpeg"><br>
      <h1 class="name">I'm Isaac Subrahmanyam</h1>
    </div>
    <div class="description">
      <h1 class="intro">Hello there,<br><br>
      I’m Isaac! I am a full-stack developer with an emphasis on front-end development! This is my portfolio website created in Vue.js! Feel free to look around, and be sure to play a few of my JS games while you are at it!
      </h1>
      <div id="socials">
      <a target="_blank" href="https://github.com/Isaac-Subrahmanyam"><img class = "iconHomePage" src="../../images/git.jpeg"></a>
      <a target="_blank" href="https://www.linkedin.com/in/isaac-subrahmanyam/"><img class = "iconHomePage" src="../../images/in.jpeg"></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
#photo {
    animation: fadeEffect 1s;
    border-radius: 100%;
    margin: 20px auto;
    width: min(40vw, 200px);
}
.name {
  font-size: min(3vw, 30px);
}
.iconHomePage {
    animation: fadeEffect 6s;
    transition: all 150ms ease-in-out;
    border-radius: 200px;
    width: min(6vw, 30px);
    height: min(6vw, 30px);
    box-shadow: 0 0 10px 0 #ffffff inset, 0 0 10px 2px #ffffff;
    cursor: pointer;
}
.iconHomePage:hover {
    box-shadow: 0 0 20px 0 #ffffff inset, 0 0 25px 4px #ffffff;
}
#socials {
  margin: 4vh auto;
  justify-content: space-between;
  width: 20%;
  display: flex;
}


.about {
  margin: 3vh auto;
  width: min(80vw, 500px);
  height: 100%;
  padding-bottom: 50px;
}
.pfp {
  background-color: white;
  height: min(80vw, 400px);
  width: 100%;
}
.intro {
  margin: auto; 
  text-align: left;
  color: white;
  width: 70%;
}
.description {
  padding-top: 5vw;
  background-color: #449c92;
  width: 100%;
  font-size: min(1.5vw, 7px);
  height: min(50vw, 250px);
}

</style>