<template>
  <div class="edge-details">
    <div v-for="id in selectedEdges" :key="id">
      <FormCollapsePanel :title="getTitle(id)">
        <van-form>
          <van-field
              v-model="state.labels[id]"
              name="=label"
              label="Label:Weight"
              placeholder="Label:Weight"
              type="text"
              class="edge-details__field"
              @change="onLabelChange($event, id)"
              :rules="[{validator, message: 'Sample value: A:10'}]"
          />

          <van-field name="color" label="Color" class="edge-details__field">
            <template #input>
              <input v-model="edges[id].color" type="color"/>
            </template>
          </van-field>
        </van-form>
      </FormCollapsePanel>
    </div>
  </div>
</template>

<script>
import {computed, reactive, watch} from "vue"
import {useStore} from "vuex"
import FormCollapsePanel from "@/components/FormCollapsePanel"

export default {
  components: {
    FormCollapsePanel
  },

  setup() {
    const store = useStore()

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

    const showEdgeDetails = computed(() => !!store.state.selectedEdges.length)

    const getNodeName = (nodeId) => {
      return store.state.nodes[nodeId].name
    }

    const getTitle = (edgeId) => {
      return "".concat(getNodeName(store.state.edges[edgeId].source), ' = ', getNodeName(store.state.edges[edgeId].target))
    }

    const onLabelChange = (e, edgeId) => {
      if (validator(e.target.value)) {
        store.state.edges[edgeId].label = e.target.value
      }
    }

    const state = reactive({
      labels: []
    })

    watch(selectedEdges, () => {
      Object.keys(store.state.edges).map(edge => {
        state.labels[edge] = store.state.edges[edge].label
      })
    })

    const validator = val => /^[a-zA-Z]+:\d+$/.test(val)

    return {
      showEdgeDetails,
      selectedEdges,
      store,
      edges,
      getNodeName,
      getTitle,
      onLabelChange,
      validator,
      state
    }
  }
}
</script>

<style scoped lang="scss">
.edge-details {
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: fixed;
  top: 0;
  right: 0;
  padding: 16px;
  max-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;

  > div {
    width: 300px;
    padding: 0 8px;
    border-radius: 8px;
    box-shadow: 0px 0px 7px -2px rgba(66, 68, 90, 1);
    background-color: white;
  }

  &__field {
    padding: 10px 0;
  }
}
</style>
