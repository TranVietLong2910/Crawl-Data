<template>
  <div class="d-flex flex-column">
    <div class="padding-item">
      <HRHeaderLog />
    </div>
    <div class="main-content mt-3">
      <Nuxt />
    </div>
  </div>
</template>
<script>
import HRHeaderLog from "@/components/HRHeaderLog";
export default {
  components: {
    HRHeaderLog,
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.padding-item {
  margin-bottom: 70px;
}

.main-content {
  background-color: #f3f3f3;
}
</style>
