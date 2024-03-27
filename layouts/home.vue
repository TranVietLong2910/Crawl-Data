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
import Cookies from "js-cookie";
import HRHeaderLog from "@/components/HRHeaderLog";
export default {
  name: "HomePage",
  components: {
    HRHeaderLog,
  },
  data() {
    return {
      userToken: "",
      checkLogin: false,
      logged: true,
    };
  },
  created() {
    this.userToken = Cookies.get("token_user");
    if (this.userToken) {
      this.logged = true;
    } else {
      this.logged = false;
    }
  },
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
