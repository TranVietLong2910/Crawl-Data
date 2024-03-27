<template>
  <div>
    <div class="main-content" bac>
      <Nuxt />
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {},
  data() {
    return {};
  },
  created() {
    console.log(this.$nuxt.$route.path);
  },
};
</script>

<style lang="scss" scoped>
.main-content {
  background-color: #f3f3f3;
  min-height: 100vh;
  @include screen(280) {
    margin-top: 20px !important;
  }
  @include screen(767) {
    margin-top: 40px;
  }
}
</style>
