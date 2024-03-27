<template>
  <div class="hrLogin">
    <div class="hrLogin-navbar-login">
      <div class="d-flex justify-content-center pt-3">
        <nuxt-link v-bind:to="localeLocation('/')">
          <img width="160px" src="~/assets/images/hrsharing.png" alt="" />
        </nuxt-link>
      </div>
    </div>
    <div>
      <Nuxt />
    </div>
  </div>
</template>
<script>
export default {
  components: {}
}
</script>

<style lang="scss" scoped>
.hrLogin {
  &-navbar-login {
    background: white;
    opacity: 1;
    height: 70px;
    width: 100%;
  }
}
</style>
