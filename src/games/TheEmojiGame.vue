<template>
  <title>The Emoji Game</title>
    <div id="projectsStyle1">
        <div id="projectsStyle2">
            <n-tag type="info" size="large" round dashed>
            #TheEmojiGame
            </n-tag>
        </div>
        <div id="projectsStyle2">
            <n-button strong secondary type="info" @click="handleClick()">
            Source Code
            </n-button>
        </div>
    </div>
    <div id="gamescript">
		<h2>
		<iframe 
		frameborder="0" 
		scrolling="no" 
		style="border: 0px; width: 500px; height: 500px;" 
		src="https://www.khanacademy.org/computer-programming/the-emoji-game/5150805528608768/embedded?id=1664825624858-0.8272361690412109&origin=file%3A%2F%2F&editor=no&buttons=no&author=no&embed=yes">
		</iframe>
		</h2>
	</div>
</template>

<script>
    export default {
        name: 'App',
        data: function () {
            return {
                handleClick() { window.open("https://www.khanacademy.org/computer-programming/the-emoji-game/5150805528608768") }
            }
        }
    }
</script>

