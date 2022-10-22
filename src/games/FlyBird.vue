<template>
  <title>Fly Bird</title>
    <div id="projectsStyle1">
        <div id="projectsStyle2">
            <n-tag type="success" size="large" round dashed>
            #FlyBird
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
		style="border: 0px; width: 600px; height: 600px;" 
		src="https://www.khanacademy.org/computer-programming/fly-bird/6306911327682560/embedded?id=1664825684752-0.009669551921271058&origin=file%3A%2F%2F&editor=no&buttons=no&author=no&embed=yes">
		</iframe>
		</h2>
	</div>
</template>

<script>
    export default {
        name: 'App',
        data: function () {
            return {
                handleClick() { window.open("https://www.khanacademy.org/computer-programming/fly-bird/6306911327682560") }
            }
        }
    }
</script>

