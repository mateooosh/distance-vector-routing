import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VNetworkGraph from "v-network-graph"
import "v-network-graph/lib/style.css"
import {Switch, Button, Collapse, CollapseItem, Field, Form} from 'vant'
createApp(App).use(store).use(router).use(VNetworkGraph)
  .use(Switch)
  .use(Button)
  .use(Collapse)
  .use(CollapseItem)
  .use(Field)
  .use(Form)
  .mount('#app')
