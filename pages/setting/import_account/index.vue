<template>
  <div class="hrCreate">
    <b-form class="form-detail">
      <!-- Basic information -->
      <b-row class="bg-white h-100 hrCreate-border-button">
        <b-col lg="12" class="py-3 text-center" style="color: #3461b6">
          <h4 style="font-weight: 600; font-size: 30px">NEW ACCOUNT</h4>
        </b-col>
        <b-col sm="12" md="12" lg="12" xl="12" class="mx-auto py-3">
          <span style="font-size: 20px; font-weight: 600"
            >Basic information</span
          >
        </b-col>
        <b-col sm="12" md="12" lg="12" xl="12" class="mx-auto mt-3">
          <b-row>
            <b-col cols="12" md="12" xl="4" class="mt-4">
              <div class="d-flex hrCreate-label">
                Name&nbsp;<span style="color: red">*</span>
              </div>
              <div class="validate-form position-relative mt-1">
                <b-form-input
                  id="main-skill"
                  v-model="name"
                  type="text"
                ></b-form-input>
              </div>
            </b-col>
            <b-col cols="12" md="12" xl="4" class="mt-4">
              <div class="d-flex hrCreate-label">
                Gender&nbsp;<span style="color: red">*</span>
              </div>
              <div class="validate-form position-relative mt-1">
                <v-select
                  v-model="gender"
                  v-bind:options="listGender"
                  label="text"
                  class="w-100 ml-1"
                  placeholder="Gender"
                ></v-select>
              </div>
            </b-col>
            <b-col cols="12" md="12" xl="4" class="mt-4">
              <div class="d-flex hrCreate-label">
                Type Account&nbsp;<span style="color: red">*</span>
              </div>
              <div class="validate-form position-relative mt-1">
                <v-select
                  v-model="typeAccount"
                  v-bind:options="listTypeAccount"
                  label="text"
                  class="w-100 ml-1"
                  placeholder="Type Account"
                ></v-select>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col sm="12" md="12" lg="12" xl="12" class="mx-auto mt-3">
          <div v-if="typeAccount && typeAccount.value === 'zalo'">
            <div class="d-flex hrCreate-label">
              Number Phone&nbsp;<span style="color: red">*</span>
            </div>
            <div class="validate-form position-relative">
              <b-form-input
                v-model="email"
                class="mt-1"
                type="number"
                onkeypress="return event.keyCode === 8 || event.charCode >= 48 && event.charCode <= 57"
              ></b-form-input>
            </div>
          </div>
          <div v-else>
            <div class="d-flex hrCreate-label">
              Email&nbsp;<span style="color: red">*</span>
            </div>
            <div class="validate-form position-relative">
              <b-form-input
                v-model="email"
                class="mt-1"
                type="text"
              ></b-form-input>
            </div>
          </div>
        </b-col>

        <b-col
          v-if="typeAccount && typeAccount.value !== 'zalo'"
          sm="12"
          md="12"
          lg="12"
          xl="12"
          class="mx-auto mt-3"
        >
          <div class="">
            <div class="d-flex hrCreate-label">
              Password&nbsp;<span style="color: red">*</span>
            </div>
            <div class="validate-form position-relative">
              <b-form-input
                v-model="password"
                class="mt-1"
                type="password"
              ></b-form-input>
            </div>
          </div>
        </b-col>
        <div
          class="hrCreate-group-action d-flex justify-content-end w-100 mt-5"
        >
          <b-button
            style="background-color: #a1a1a1; color: white"
            class="px-4"
            v-on:click="backListSetting()"
          >
            <b-icon icon="caret-left-fill"></b-icon>
            Back to Setting
          </b-button>
          <b-button
            class="px-4 py-2"
            style="background-color: #2993f5; border-color: unset"
            v-on:click="importAccount()"
          >
            <b-icon icon="plus-lg"></b-icon> Import Account
          </b-button>
        </div>
      </b-row>
      <!-- end -->
    </b-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Cookies from "js-cookie";
export default {
  name: "CreateResource",
  components: {},
  // layout: 'home',
  data() {
    return {
      gender: null,
      email: null,
      password: " ",
      type: null,
      name: null,
      name_user_login: null,
      typeAccount: null,
      listGender: [
        {
          value: "Male",
          text: "Male",
        },
        {
          value: "Female",
          text: "Female",
        },
      ],
      listTypeAccount: [
        { value: "facebook", text: "FaceBook" },
        { value: "linkedin", text: "Linked" },
        { value: "zalo", text: "Zalo" },
      ],
      optionToast: {
        position: "top-right",
        duration: 3000,
        keepOnHover: true,
        singleton: true,
        fitToScreen: true,
      },
    };
  },
  watch: {},
  created() {},
  methods: {
    ...mapActions({
      add_Account: "setting/add_Account",
    }),
    backListSetting() {
      this.$router.push("/setting");
    },
    async importAccount() {
      this.name_user_login = Cookies.get("user_login");
      const dataRequest = {
        user_create: this.name_user_login,
        email: this.email,
        password: this.password,
        type: this.typeAccount.value,
        name: this.name,
        gender: this.gender.value,
      };
      const dataRepond = await this.add_Account(dataRequest);
      if (dataRepond.success === true) {
        this.$toast.success("Account added successfully", this.optionToast);
        this.$router.push("/setting");
      } else {
        this.$toast.error(dataRepond.message, this.optionToast);
      }
    },
  },
  auth: false,
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/resoucre/create.scss";
.validate-form {
  .error-text {
    span {
      white-space: nowrap;
    }
  }
}
.hrCreate-border-button {
  padding: 5% 10% !important;
}
.form-detail {
  margin: 5% 15% !important;
}
.hrCreate-label {
  font-weight: unset;
}
.custom-datepicker {
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
  border-right-color: white !important;
  border-left-color: #c3c3c3 !important;
  border-top-color: #c3c3c3 !important;
  border-bottom-color: #c3c3c3 !important;
}
.custom-icon-datepicker {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: white !important;
  background-color: white;
  border-right-color: #c3c3c3 !important;
  border-top-color: #c3c3c3 !important;
  border-bottom-color: #c3c3c3 !important;
}
.edit-profile-image {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  background: #00000030;
}
.select-image {
  position: relative;
  height: 40px;
  line-height: 40px;
  margin: auto;
  overflow: hidden;
  padding: 0 10px;
  color: #fff;
}
.avatar:hover .edit-profile-image {
  display: flex;
  transition: 0.5s ease-in-out;
}
</style>
