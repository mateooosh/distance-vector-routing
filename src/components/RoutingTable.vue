<template>
  <table class="table">
    <thead>
    <tr>
      <th>Destination</th>
      <th>Distance</th>
      <th>Next hop</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="row in props.routingTable" :key="row" :class="marked(row.destination) ? 'marked' : ''">
      <td>{{ store.state.nodes[row.destination].name }}</td>
      <td>{{ row.distance === Infinity ? '∞' : row.distance }}</td>
      <td>{{ row.nextHop }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>

import {useStore} from "vuex"
import {computed} from "vue"

export default {
  props: {
    'id': String,
    'node': Object,
    'routingTable': Object,
    'mark': {
      type: Boolean,
      default: false
    },
    'prevStep': {
      type: Boolean,
      default: false
    }
  },

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

    const routerToMark = computed(() => store.state.routerToMark)
    const routerToMarkInPrevStep = computed(() => store.state.routerToMarkInPrevStep)

    const marked = (nodeKey) => {
      return props.mark && ((props.prevStep && routerToMark.value === nodeKey) || (!props.prevStep && routerToMarkInPrevStep.value === nodeKey))
    }

    return {store, props, step, routerToMark, routerToMarkInPrevStep, marked}
  }
}
</script>

<style scoped lang="scss">
table {
  border-radius: 10px;
  border-collapse: collapse;
  margin: 8px 0;
  font-size: 13px;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

  thead {
    tr {
      background-color: #0079d0;
      color: #ffffff;
    }
  }

  th {
    padding: 6px 2px;
    text-align: center;
  }

  td {
    color: #313131;
    text-align: center;
    padding: 2px;
  }

  tbody {
    tr {
      border-bottom: 1px solid #dddddd;

      &:nth-of-type(even) {
        background-color: #f3f3f3;
      }

      &:last-of-type {
        border-bottom: 2px solid #0079d0;
      }
    }
  }
}

.marked {
  background-color: yellow !important;
}
</style>
