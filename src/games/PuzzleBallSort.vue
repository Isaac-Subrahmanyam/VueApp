<template>
  <title>Puzzle Ball Sort</title>
    <div id="projectsStyle1">
        <div id="projectsStyle2">
            <n-tag type="success" size="large" round dashed>
            #PuzzleBallSort
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
		src="https://www.khanacademy.org/computer-programming/puzzle-ball-sort/6578697265430528/embedded?id=1664825334526-0.35741941781045705&origin=file%3A%2F%2F&editor=no&buttons=no&author=no&embed=yes">
		</iframe>
		</h2>
	</div>
</template>

<script>
    export default {
        name: 'App',
        data: function () {
            return {
                handleClick() { window.open("https://www.khanacademy.org/computer-programming/puzzle-ball-sort/6578697265430528") }
            }
        }
    }
</script>

