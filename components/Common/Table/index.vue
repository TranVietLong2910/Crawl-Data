<template>
  <div class="hr-table">
    <b-table
      responsive
      v-bind:items="items"
      v-bind:fields="fields"
      v-bind:tbody-tr-class="rowClass"
      sorter
    >
      <template v-for="(x, slotName) in $scopedSlots" #[slotName]="context">
        <slot v-bind:name="slotName" v-bind="context" /> </template
    ></b-table>
  </div>
</template>
<script>
export default {
  name: 'TableComponent',
  props: {
    items: {
      type: Array,
      default: null
    },
    fields: {
      type: Array,
      default: null
    },
    responsive: {
      type: Boolean,
      default: false
    },
    rowClass: {
      type: Function,
      default() {
        return ''
      }
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss">
.hr-table {
  .table {
    font-size: 0.7rem;
    border-spacing: 0 5px;
    border-collapse: separate;

    th {
      border: none;
    }

    td {
      border: none;
      padding: 0.5rem;
    }

    tbody {
      tr {
        font-weight: $font-weight-bold;
        color: $deepseablue;
        text-align: center;
      }

      tr td:first-child {
        border-top-left-radius: 10px;
      }

      tr td:first-child {
        border-bottom-left-radius: 10px;
      }

      tr td:last-child {
        border-top-right-radius: 10px;
      }

      tr td:last-child {
        border-bottom-right-radius: 10px;
      }
    }
  }
}
</style>
