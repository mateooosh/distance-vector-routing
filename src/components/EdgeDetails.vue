<template>
  <div class="edge-details">
    <div v-for="id in selectedEdges" :key="id">
      <div class="edge-details__title">
        <div>{{ "".concat(getNodeName(edges[id].source), ' = ', getNodeName(edges[id].target)) }}</div>
        <div @click="closeDetails(id)">
          <BIconXLg class="edge-details__close"/>
        </div>
      </div>
      <div class="edge-details__content">
        <div>
          <div class="edge-details__input-title">Weight</div>
          <input v-model.number="edges[id].label" type="number" min="1"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {BIconXLg} from 'bootstrap-icons-vue'
import {computed} from "vue"
import {useStore} from "vuex"

export default {
  components: {
    BIconXLg
  },
  setup() {
    const store = useStore()

    const showEdgeDetails = computed(() => !!store.state.selectedEdges.length)

    const getNodeName = (nodeId) => {
      return store.state.nodes[nodeId].name
    }

    const closeDetails = (edgeId) => {
      store.state.selectedEdges = store.state.selectedEdges.filter(id => id !== edgeId)
    }

    const selectedEdges = computed({
      get() {
        return store.state.selectedEdges
      },

      set(newValue) {
        store.state.selectedEdges = newValue
      }
    })

    const edges = computed({
      get() {
        return store.state.edges
      },

      set(newValue) {
        store.state.edges = newValue
      }
    })

    return {
      showEdgeDetails,
      selectedEdges,
      store,
      edges,
      getNodeName,
      closeDetails
    }
  }
}
</script>

<style scoped lang="scss">
.edge-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: fixed;
  top: 0;
  right: 8px;
  padding: 8px 0;
  height: 100vh;
  overflow-y: auto;

  > div {
    width: 300px;
    padding: 16px 24px;
    border-radius: 8px;
    border: 1px solid #adadad;
    background-color: #f2f2f2;
  }

  &__title {
    color: #797979;
    font-weight: 700;
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__input-title {
    margin-bottom: 4px;
  }

  &__close {
    font-size: 20px;
    cursor: pointer;
  }
}
</style>
