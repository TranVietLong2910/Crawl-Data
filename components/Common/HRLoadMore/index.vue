<template>
  <div
    role="button"
    class="load-more d-flex justify-content-center pb-5 align-items-center"
  >
    <div class="load-more-text">
      {{ content }}
    </div>
    <div
      class="load-more-icon rounded-circle d-flex align-items-center justify-content-center"
    >
      <b-icon variant="light" icon="chevron-down" class="rounded-circle" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'HRLoadMore',
  props: {
    content: {
      type: String,
      default() {
        return ''
      }
    }
  },
  components: {}
}
</script>
<style lang="scss" scoped>
.load-more-text {
  color: $deepseablue;
  font-weight: $font-weight-medium;
}
.load-more-icon {
  background: $deepseablue;
  width: 18px;
  height: 18px;
  .rounded-circle {
    font-size: 13px;
  }
}
</style>
