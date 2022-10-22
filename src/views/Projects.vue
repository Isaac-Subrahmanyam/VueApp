<template>
  <title>Projects</title>
    <div class="search">
        <n-input v-model:value="searchQuery" size="large" round placeholder="Search" />
    </div>
    <div class="projects">
        <div v-for='project in resultQuery' :key='project'>
            <n-card :title="project.name" size="small">
                <template #cover>
                <img :src="project.image">
                </template>
                <n-button strong secondary type="primary" @click="project.handleClick()">
                Play
                </n-button>
            </n-card>
        </div>
    </div>
    <div v-if="resultQuery.length === 0">
        <div class="status418">
            <n-result
                status="418"
                title="No results found..."
                description="Maybe drink some tea! ;)">
            </n-result>
        </div>
    </div>
</template>

<script>
    import thecurrent2 from '../../images/thecurrent2.jpeg';
    import adventuresofthesouthpole from '../../images/adventuresofthesouthpole.jpeg';
    import burgermaster from '../../images/burgermaster.jpeg';
    import donttouchthered2 from '../../images/donttouchthered2.jpeg';
    import gravity from '../../images/gravity.jpeg';
    import nerdsnightmares from '../../images/nerdsnightmares.jpeg';
    import puzzleballsort from '../../images/puzzleballsort.jpeg';
    import rolly from '../../images/rolly.jpeg';
    import unicornmania from '../../images/unicornmania.jpeg';
    import theemojigame from '../../images/theemojigame.jpeg';
    import spiral from '../../images/spiral.jpeg';
    import flybird from '../../images/flybird.jpeg';

    export default {
        name: 'App',
        data: function () {
            return {
                searchQuery: null,
                projects: [
                    {
                        name: "Gravity",
                        image: gravity,
                        handleClick() { window.location.href="/gravity" }
                    },
                    {
                        name: "Puzzle Ball Sort",
                        image: puzzleballsort,
                        handleClick() { window.location.href="/puzzleballsort" }
                    },
                    {
                        name: "The Current",
                        image: thecurrent2,
                        handleClick() { window.location.href="/thecurrent" }
                    },
                    {
                        name: "Fly Bird",
                        image: flybird,
                        handleClick() { window.location.href="/flybird" }
                    },
                    {
                        name: "Adventures of the South Pole",
                        image: adventuresofthesouthpole,
                        handleClick() { window.location.href="/adventuresofthesouthpole" }
                    },
                    {
                        name: "Rolly",
                        image: rolly,
                        handleClick() { window.location.href="/rolly" }
                    },
                    {
                        name: "Burger Master",
                        image: burgermaster,
                        handleClick() { window.location.href="/burgermaster" }
                    },
                    {
                        name: "Don't Touch the Red",
                        image: donttouchthered2,
                        handleClick() { window.location.href="/donttouchthered" }
                    },
                    {
                        name: "Nerds Nightmares",
                        image: nerdsnightmares,
                        handleClick() { window.location.href="/nerdsnightmares" }
                    },
                    {
                        name: "Unicorn Mania",
                        image: unicornmania,
                        handleClick() { window.location.href="/unicornmania" }
                    },
                    {
                        name: "The Emoji Game",
                        image: theemojigame,
                        handleClick() { window.location.href="/theemojigame" }
                    },
                    {
                        name: "Spiral",
                        image: spiral,
                        handleClick() { window.location.href="/spiral" }
                    }
                ]
            }
        },
        computed: {
            resultQuery() {
                if (this.searchQuery) {
                    return this.projects.filter(item => {
                    return this.searchQuery
                        .toLowerCase()
                        .split(" ")
                        .every(v => item.name.toLowerCase().includes(v));
                    });
                } else {
                    return this.projects;
                }
            }
        }
    }
</script>


<style scoped>

.n-card {
    --n-title-font-size: min(3vw, 15px) !important;
    --n-padding-top: 10% !important;
    --n-font-size: min(3vw, 15px) !important;
    width: min(30vw, 250px) !important;
    height: min(40vw, 350px) !important;
    text-align: left;
    /* opacity: 80%; */
}
/* .n-card:hover {
    opacity: 100%;
} */

.n-card .n-card-cover img {
    display: block;
}

.status418 {
    padding-bottom: 200px;
}

.projects {
    justify-content: center;
    margin: 5vh auto;
    width: 80%;
    height: 100%;
    padding-bottom: 10%;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 60px;
}

.search {
    text-align: left;
    justify-content: center;
    margin: 5vh auto;
    width: min(40vw, 300px);
    height: 100%;
    display: flex;
    flex-wrap: wrap;
}

</style>