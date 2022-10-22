import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import router from './router'
import naive from 'naive-ui'

import '@fortawesome/fontawesome-free/js/all'

var app = createApp(App)

app.use(router)

app.use(naive)

app.component('bottom-nav-component', {
    props: {
        to: { type: String, required: true },
        icon: { type: String, required: true },
        name: { type: String, required: true },
        value: { type: Number, required: true },
    },
    template: `
        <router-link :to="to" class="case-icon" :class="$route.path == to ? 'active' : 'inactive'">
            <div class="icon-bg"></div>
            <n-badge :value="value" :max="15">
                <i :class="icon" id="icon"/>
            </n-badge>
            <span class="icon-title" :innerHTML="name"/>
        </router-link>
    `
});

app.mount('#app')