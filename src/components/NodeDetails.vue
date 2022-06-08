<template>
  <div class="details">
    <FormCollapsePanel v-if="!!nodes[props.id]?.name" :title="nodes[props.id]?.name">
      <van-form>
        <van-field
            v-model="nodes[props.id].name"
            name="=name"
            label="Name"
            placeholder="Name"
            label-width="120px"
            class="details__field"
        />

        <van-field name="color" label="Color" label-width="120px" class="details__field">
          <template #input>
            <input v-model="nodes[props.id].color" type="color"/>
          </template>
        </van-field>

        <van-field name="placement" label="Label placement" label-width="120px" class="details__field">
          <template #input>
            <select class="node-details__select" v-model="nodes[props.id].direction">
              <option v-for="dir in DIRECTIONS" :key="dir" :value="dir">{{ dir }}</option>
            </select>
          </template>
        </van-field>
      </van-form>
      <div class="details__title">Routing table</div>
      <RoutingTable :id="props.id" :node="nodes[props.id]" :routing-table="routingTable"/>
      <template #explanation>
        <RoutingTableExplanation :nodeKey="props.id" :node="nodes[props.id]"/>
      </template>
    </FormCollapsePanel>
  </div>
</template>

<script>


import {computed} from "vue"
import {useStore} from "vuex"
import FormCollapsePanel from "@/components/FormCollapsePanel"
// import {BIconXLg} from "bootstrap-icons-vue"
import {DIRECTIONS} from "@/utils/enums"
import RoutingTable from "@/components/RoutingTable"
import RoutingTableExplanation from "@/components/RoutingTableExplanation"

export default {
  props: {
    'id': String
  },
  components: {
    RoutingTableExplanation,
    RoutingTable,
    FormCollapsePanel
    // BIconXLg
  },
  setup(props) {

    const store = useStore()

    const showNodeDetails = computed(() => !!store.state.selectedNodes.length)

    const nodes = computed({
      get() {
        return store.state.nodes
      },

      set(newValue) {
        store.state.nodes = newValue
      }
    })

    const step = computed({
      get() {
        return store.state.step
      },

      set(newValue) {
        store.state.step = newValue
      }
    })

    const routingTable = computed(() => {
      return store.state.routingTables[step.value][props.id]
    })

    return {
      showNodeDetails,
      store,
      nodes,
      DIRECTIONS,
      routingTable,
      props
    }
  }
}
</script>

<style scoped lang="scss">
.details {

  &__title {
    color: #646566;
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

  &__button {
    width: 100%;
    margin-top: 16px;
    padding: 8px 16px;
    border-radius: 4px;
    border: 1px solid #d5d5d5;
    background-color: #0079d0;
    color: white;
    cursor: pointer;
  }
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>
