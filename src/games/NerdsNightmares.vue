<template>
  <title>Nerds Nightmares</title>
    <div id="projectsStyle1">
        <div id="projectsStyle2">
            <n-tag type="info" size="large" round dashed>
            #NerdsNightmares
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
		style="border: 0px; width: 600px; height: 400px;" 
		src="https://www.khanacademy.org/computer-programming/nerds-nightmares/6604120031002624/embedded?id=1664825528358-0.3118122278570641&origin=file%3A%2F%2F&editor=no&buttons=no&author=no&embed=yes">
		</iframe>
		</h2>
	</div>
</template>

<script>
    export default {
        name: 'App',
        data: function () {
            return {
                handleClick() { window.open("https://www.khanacademy.org/computer-programming/nerds-nightmares/6604120031002624") }
            }
        }
    }
</script>

