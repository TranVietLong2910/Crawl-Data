<template>
  <div class="position-relative">
    <div v-if="error.statusCode === 404">
      <img
        src="~/assets/images/image404.png"
        class="w-100"
        style="height: calc(100vh - 90px)"
      />
    </div>
    <h1 v-else>An error occurred</h1>
    <b-button variant="primary" pill class="custom_button_home" to="/connect"
      >Connect page</b-button
    >
  </div>
</template>

<script>
export default {
  layout: "error",
  props: ["error"], // you can set a custom layout for the error page
};
</script>
<style lang="scss" scoped>
.custom_button_home {
  position: absolute;
  z-index: 2;
  bottom: 200px;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 40px;
  font-weight: 700;
  font-size: 25px;
}
</style>
