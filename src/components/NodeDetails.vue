<template>
  <div class="node-details">
    <div v-for="id in selectedNodes" :key="id">
     <FormCollapsePanel :title="nodes[id].name">
       <van-form>
         <van-field
             v-model="nodes[id].name"
             name="=name"
             label="Name"
             placeholder="Name"
             class="node-details__field"
         />
         <van-field name="active" label="Active" class="node-details__field">
           <template #input>
             <van-switch v-model="nodes[id].active" active-color="#01c501" inactive-color="#ff0000" size="20px"/>
           </template>
         </van-field>
         <van-field name="color" label="Color" class="node-details__field">
           <template #input>
             <input v-model="nodes[id].color" type="color"/>
           </template>
         </van-field>
       </van-form>
     </FormCollapsePanel>
    </div>
  </div>
</template>

<script>


import {computed} from "vue"
import {useStore} from "vuex"
import FormCollapsePanel from "@/components/FormCollapsePanel"
// import {BIconXLg} from "bootstrap-icons-vue"

export default {
  components: {
    FormCollapsePanel
    // BIconXLg
  },
  setup() {
    const store = useStore()

    const showNodeDetails = computed(() => !!store.state.selectedNodes.length)

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
    }
  }
}
</script>

<style scoped lang="scss">
.node-details {
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: fixed;
  top: 0;
  right: 0;
  padding: 8px;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;

  > div {
    width: 300px;
    padding: 0 8px;
    border-radius: 8px;
    box-shadow: 0px 0px 7px -3px rgba(66, 68, 90, 1);
    background-color: white;
  }

  &__field {
    padding: 10px 0;
  }
}
</style>
