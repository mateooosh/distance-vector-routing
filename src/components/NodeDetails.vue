<template>
  <div class="node-details">
    <div v-for="id in selectedNodes" :key="id">
      <div class="node-details__title">
        <div>{{ nodes[id].name }}</div>
        <div @click="closeDetails(id)">
          <BIconXLg class="node-details__close"/>
        </div>
      </div>
      <div class="node-details__content">
        <div>
          <div class="node-details__input-title">Name</div>
          <input v-model="nodes[id].name" type="text"/>
        </div>
        <div>
          <div class="node-details__input-title">Color</div>
          <input v-model="nodes[id].color" type="color"/>
        </div>
        <div>
          <div class="node-details__input-title">Active</div>
          <input v-model="nodes[id].active" type="checkbox"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {computed} from "vue"
import {useStore} from "vuex"
import {BIconXLg} from "bootstrap-icons-vue"

export default {
  components: {
    BIconXLg
  },
  setup() {
    const store = useStore()

    const showNodeDetails = computed(() => !!store.state.selectedNodes.length)

    const closeDetails = (nodeId) => {
      store.state.selectedNodes = store.state.selectedNodes.filter(id => id !== nodeId)
    }

    const selectedNodes = computed({
      get() {
        return store.state.selectedNodes
      },

      set(newValue) {
        store.state.selectedNodes = newValue
      }
    })

    const nodes = computed({
      get() {
        return store.state.nodes
      },

      set(newValue) {
        store.state.nodes = newValue
      }
    })

    return {
      showNodeDetails,
      selectedNodes,
      store,
      nodes,
      closeDetails
    }
  }
}
</script>

<style scoped lang="scss">
.node-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: fixed;
  top: 0;
  right: 8px;
  padding: 8px 0;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;

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
