import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VNetworkGraph from "v-network-graph"
import "v-network-graph/lib/style.css"

createApp(App).use(store).use(router).use(VNetworkGraph).mount('#app')
