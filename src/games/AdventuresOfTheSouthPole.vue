<template>
  <title>Adventures of The South Pole</title>
    <div id="projectsStyle1">
        <div id="projectsStyle2">
            <n-tag type="info" size="large" round dashed>
            #AdventuresOfTheSouthPole
            </n-tag>
        </div>
        <div id="projectsStyle2">
            <n-button strong secondary type="info" @click="handleClick()">
            Source Code
            </n-button>
        </div>
    </div>
    <div id="gamescript">
		<iframe 
            frameborder="0" 
            scrolling="no" 
            style="border: 0px; width: 600px; height: 600px;" 
            src="https://www.khanacademy.org/computer-programming/adventures-of-the-south-pole-ft-chester-banks/5873098975297536/embedded?id=1664825884407-0.018950907816416063&origin=file%3A%2F%2F&editor=no&buttons=no&author=no&embed=yes">
		</iframe>
	</div>
</template>

<script>
    export default {
        name: 'App',
        data: function () {
            return {
                handleClick() { window.open("https://www.khanacademy.org/computer-programming/adventures-of-the-south-pole-ft-chester-banks/5873098975297536") }
            }
        }
    }
</script>

