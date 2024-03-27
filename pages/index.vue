<template>
  <div>
    <HRHome v-if="valueToken" />
  </div>
</template>

<script>
import Cookies from "js-cookie";
import HRHome from "~/components/HRHome";

export default {
  name: "IndexPage",
  components: {
    HRHome,
  },
  layout: "home",
  data() {
    return {
      valueToken: null,
    };
  },
  auth: false,
  created() {
    const valueToken = Cookies.get("token_user")
      ? Cookies.get("token_user")
      : null;
    if (!valueToken) {
      this.$router.push(this.localeLocation("/login"));
    } else {
      this.$router.push("/connect");
    }
  },
};
</script>
