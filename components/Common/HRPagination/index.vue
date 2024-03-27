<template>
  <div class="hr-panigation">
    <b-pagination
      v-model="page"
      v-bind:total-rows="totalpage"
      v-bind:per-page="perPage"
      v-bind:align="align"
      first-number
      last-number
    ></b-pagination>
  </div>
</template>

<script>
export default {
  name: 'HRPagination',
  props: {
    totalpage: {
      type: Number,
      default() {
        return 0
      }
    },
    currentPage: {
      type: Number,
      default() {
        return 0
      }
    },
    align: {
      type: String,
      default() {
        return 'center'
      }
    }
  },
  data() {
    return {
      perPage: 1,
      page: 1
    }
  },
  watch: {
    page() {
      this.$emit('update-page', this.page)
    },
    currentPage() {
      this.page = this.currentPage
    }
  }
}
</script>

<style lang="scss">
.hr-panigation {
  overflow: auto;
  .page-item {
    font-size: 16px;
    font-weight: bold;
    .page-link {
      color: $black;
      border: unset;
      width: 30px;
      height: 30px;
      margin: 0 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      &:focus {
        box-shadow: unset;
      }
    }
    &.active {
      .page-link {
        background: $switchblue;
        color: $white;
        outline: unset;
        box-shadow: unset;
      }
    }
    &.disabled {
      .page-link {
        color: $white;
        background: #c4c4c4;
      }
    }
  }
}
</style>
