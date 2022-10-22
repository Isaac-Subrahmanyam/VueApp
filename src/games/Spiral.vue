<template>
  <title>Spiral</title>
    <div id="projectsStyle1">
        <div id="projectsStyle2">
            <n-tag type="success" size="large" round dashed>
            #Spiral
            </n-tag>
        </div>
        <div id="projectsStyle2">
            <n-button strong secondary type="primary" @click="handleClick()">
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
		src="https://www.khanacademy.org/computer-programming/spiral/6312160950943744/embedded?id=1664825458239-0.41397621295846454&origin=file%3A%2F%2F&editor=no&buttons=no&author=no&embed=yes">
		</iframe>
		</h2>
	</div>
</template>

<script>
    export default {
        name: 'App',
        data: function () {
            return {
                handleClick() { window.open("https://www.khanacademy.org/computer-programming/spiral/6312160950943744") }
            }
        }
    }
</script>

