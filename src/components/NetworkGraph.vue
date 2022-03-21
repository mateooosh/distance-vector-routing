<template>
  <div class="graph">
    <v-network-graph :nodes="store.state.nodes" :edges="store.state.edges" :configs="config"
                     v-model:selected-nodes="selectedNodes">
    </v-network-graph>
  </div>
</template>

<script>
import {defineConfigs} from "v-network-graph"
import {useStore} from "vuex"
import {computed, reactive} from "vue";

export default {
  setup() {
    const store = useStore()

    const state = reactive({
      // selectedNodes: []
    })

    const selectedNodes = computed({
      get() {
        return store.state.selectedNodes
      },

      set(newValue) {
        store.state.selectedNodes = newValue
      }
    })

    const config = defineConfigs({
      node: {
        selectable: true,
        normal: {
          radius: 30
        }
      },
      edge: {
        selectable: true
      }
    })

    return {config, store, state, selectedNodes}
  }
}
</script>
