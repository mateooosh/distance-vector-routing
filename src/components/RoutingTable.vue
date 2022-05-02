<template>
  <div class="routing-table">
    <div class="routing-table__header">Destination</div>
    <div class="routing-table__header">Distance</div>
    <div class="routing-table__header">Next hop</div>
    <template v-for="row in routingTable" :key="row">
      <div>{{ store.state.nodes[row.destination].name }}</div>
      <div>{{ row.distance === Infinity ? '∞' : row.distance }}</div>
      <div>{{ row.nextHop }}</div>
    </template>
  </div>
</template>

<script>

import {useStore} from "vuex"
import {computed} from "vue"

export default {
  props: [
    'id',
    'node'
  ],

  setup(props) {

    const store = useStore()

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

    return {store, props, routingTable, step}
  }
}
</script>

<style scoped lang="scss">
.routing-table {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4px;
  padding-top: 16px;

  > div:nth-child(3n) {
    text-align: right;
  }

  > div:nth-child(3n + 1) {
    text-align: left;
  }

  > div:nth-child(3n + 2) {
    text-align: center;
  }

  &__header {
    font-weight: 700;
    color: #313131;
  }
}
</style>
