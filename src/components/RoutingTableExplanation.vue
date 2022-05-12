<template>
  <div class="explanation">
    <template v-if="store.state.step !== 0">
      <div class="explanation__block">
        <div>
          {{ props.node.name }} receives routing tables from its neighbours:
          <ul>
            <li v-for="item in explanation.neighbours" :key="item">
              {{ getNameOfNode(item) }}
            </li>
          </ul>
        </div>
      </div>

      <div v-if="state.microStep > 0" class="explanation__block">
        Routing table from previous step
        <RoutingTable :id="props.nodeKey"
                      :node="props.node"
                      :routing-table="store.state.routingTables[store.state.step - 1][props.nodeKey]"
                      mark/>
      </div>

      <div v-if="state.microStep > 1" class="explanation__block">
        <div v-for="(table, index) in explanation.receivedTables" :key="index">
          Routing table received from: {{ store.state.nodes[explanation.neighbours[index]].name }}
          <RoutingTable :id="props.nodeKey" :node="props.node" :routing-table="table" mark prev-step/>
        </div>
      </div>
      <div v-if="state.microStep > 2" class="explanation__block">
        <div v-for="(item, index) in tablesGroupedByDestination" :key="index">
          <span @mouseover="onMouseOver(item)" :class="routerToMark === item[0] ? 'marked' : ''">
            Cost {{ props.node.name }} -> {{ store.state.nodes[item[0]].name }} = {{ getCostText(item[0]) }}
          </span>
        </div>
      </div>

      <div v-if="state.microStep > 3" class="explanation__block">
        Updated routing table:
        <RoutingTable :id="props.nodeKey"
                      :node="props.node"
                      :routing-table="store.state.routingTables[store.state.step][props.nodeKey]"/>
      </div>
    </template>

    <template v-else>
      <div class="explanation__block">
        {{ props.node.name }} prepares routing table using its local knowledge.
      </div>
      <div v-if="state.microStep > 0" class="explanation__block">
        <RoutingTable :id="props.id" :node="nodes[props.id]" :routing-table="routingTable"/>
      </div>
    </template>

    <div class="explanation__buttons">
      <div class="explanation__button" :class="{'explanation__button--active' : canPrevStep}" @click="prevStep">
        Previous
      </div>
      <div class="explanation__button" :class="{'explanation__button--active' : canNextStep}" @click="nextStep">
        Next
      </div>
    </div>
  </div>

</template>

<script>

import {useStore} from "vuex"
import {computed, reactive, watch} from "vue"
import RoutingTable from "@/components/RoutingTable";

export default {
  props: {
    'nodeKey': String,
    'node': Object
  },
  components: {
    RoutingTable
  },

  setup(props) {
    const store = useStore()

    const state = reactive({
      microStep: 0
    })

    const explanation = computed({
      get() {
        return store.state.explanation[store.state.step][props.nodeKey]
      },

      set(newValue) {
        store.state.explanation = newValue
      }
    })

    const nodes = computed(() => store.state.nodes)

    const routingTable = computed(() => {
      return store.state.routingTables[store.state.step][props.nodeKey]
    })

    const getNameOfNode = nodeKey => {
      return store.state.nodes[nodeKey].name
    }

    const tablesGroupedByDestination = computed(() => Object.entries(explanation.value.groupedReceivedTables).filter(item => item[0] !== props.nodeKey))

    const getCostText = (nodeKey) => {
      let result = 'min {'
      const obj = explanation.value.calculating[nodeKey]

      let arr = []
      obj.distances.map(item => {
        arr.push(`${formatDistance(item[0])}+${formatDistance(item[1])}`)
      })
      result += arr.join(', ')
      result += `} = ${formatDistance(obj.min)} via ${formatNextHop(obj.nextHop)}`

      return result
    }

    const formatDistance = dis => {
      return dis === Number.POSITIVE_INFINITY ? '∞' : dis
    }

    const formatNextHop = next => {
      return next ? next : '-'
    }

    const nextStep = () => {
      if (state.microStep < maxSteps.value)
        state.microStep = state.microStep + 1
    }

    const prevStep = () => {
      if (state.microStep > 0)
        state.microStep = state.microStep - 1
    }

    watch(() => store.state.step, () => {
      state.microStep = 0
    })

    watch(() => state.microStep, () => {
      store.commit('markRouter', null)
      store.commit('markRouterPrevStep', null)
    })

    const onMouseOver = (item) => {
      store.commit('markRouter', item[0])
      store.commit('markRouterPrevStep', explanation.value.calculating[item[0]].nextHopKey)
    }

    const routerToMark = computed(() => store.state.routerToMark)

    const maxSteps = computed(() => store.state.step !== 0 ? 4 : 1)
    const canPrevStep = computed(() => state.microStep > 0)
    const canNextStep = computed(() => state.microStep < maxSteps.value)

    return {
      store,
      explanation,
      getNameOfNode,
      props,
      nodes,
      getCostText,
      tablesGroupedByDestination,
      state,
      nextStep,
      prevStep,
      canPrevStep,
      canNextStep,
      maxSteps,
      routingTable,
      onMouseOver,
      routerToMark
    }
  }
}
</script>

<style lang="scss" scoped>
.explanation {
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: #646566;

  &__block {

  }

  &__table {
    border-radius: 10px;
    border-collapse: collapse;
    margin: 4px 0;
    font-size: 13px;
    width: 100%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

    thead {
      tr {
        background-color: #0079d0;
        color: #ffffff;
      }
    }

    th,
    td {
      padding: 6px 2px;
      text-align: center;
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

  &__buttons {
    display: flex;
    justify-content: center;
    gap: 16px;
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
  }

  &__button {
    width: 100px;
    text-align: center;
    padding: 8px 16px;
    border-radius: 4px;
    border: 1px solid #d5d5d5;
    color: #adadad;
    cursor: not-allowed;

    &--active {
      background-color: #0079d0;
      color: white;
      cursor: pointer;
    }
  }

  li {
    list-style-type: disc;
    margin-left: 24px;
  }
}

.marked {
  background-color: yellow !important;
}
</style>
