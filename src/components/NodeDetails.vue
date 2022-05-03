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
             label-width="120px"
             class="node-details__field"
         />

         <van-field name="active" label="Active" label-width="120px" class="node-details__field">
           <template #input>
             <van-switch v-model="nodes[id].active" active-color="#01c501" inactive-color="#ff0000" size="20px"/>
           </template>
         </van-field>

         <van-field name="color" label="Color" label-width="120px" class="node-details__field">
           <template #input>
             <input v-model="nodes[id].color" type="color"/>
           </template>
         </van-field>

         <van-field name="placement" label="Label placement" label-width="120px" class="node-details__field">
           <template #input>
             <select class="node-details__select" v-model="nodes[id].direction">
               <option v-for="dir in DIRECTIONS" :key="dir" :value="dir">{{dir}}</option>
             </select>
           </template>
         </van-field>
       </van-form>
       <RoutingTable :id="id" :node="nodes[id]"/>
     </FormCollapsePanel>
    </div>
  </div>
</template>

<script>


import {computed} from "vue"
import {useStore} from "vuex"
import FormCollapsePanel from "@/components/FormCollapsePanel"
// import {BIconXLg} from "bootstrap-icons-vue"
import {DIRECTIONS} from "@/utils/enums"
import RoutingTable from "@/components/RoutingTable"

export default {
  components: {
    RoutingTable,
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
      DIRECTIONS
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

  &__select {
    padding: 4px 2px;
    cursor: pointer;

    > option {
      padding: 10px;
    }
  }
}
</style>
