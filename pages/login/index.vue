<template>
  <div class="hrLogin bg-image">
    <b-col sm="8" lg="8" xl="6" class="mx-auto pt-3">
      <div class="hrLogin-background-body">
        <div class="pt-4">
          <h6 class="hrLogin-text-title">LOGIN</h6>
          <h6 class="hrLogin-text-title">Direction Marketing</h6>
        </div>
        <b-col xl="7" class="mx-auto mt-5">
          <div class="hrLogin-form-submit">
            <div class="error-message text-center mb-2">
              {{ message }}
            </div>
            <div class="text-primary label-input pb-1">
              {{ $t("login.label.username_or_email") }}:
            </div>
            <div class="form-group position-relative validate-form">
              <b-form-input
                v-model.trim="$v.user.username.$model"
                type="email"
                v-bind:placeholder="$t('login.label.username_or_email')"
                class="custom-input"
                v-bind:class="{ 'is-invalid': $v.user.username.$error }"
                v-on:keyup.enter="login()"
              />
              <div class="position-absolute hrLogin-person-icon">
                <b-icon icon="person-fill"></b-icon>
              </div>
              <div v-if="$v.user.username.$error" class="error-text">
                <p v-if="!$v.user.username.required">
                  {{ $t("login.message.email_required") }}
                </p>
              </div>
              <div v-if="$v.user.username.$error" class="error-text">
                <span v-if="!$v.user.username.email">
                  {{ $t("login.message.email_invalid") }}
                </span>
              </div>
            </div>

            <div class="text-primary label-input pb-1">
              {{ $t("login.label.password") }}:
            </div>
            <div class="form-group position-relative validate-form">
              <b-form-input
                v-model.trim="$v.user.password.$model"
                type="password"
                v-bind:placeholder="$t('login.label.password')"
                v-bind:class="{ 'is-invalid': $v.user.password.$error }"
                class="custom-input"
                v-on:keyup.enter="login()"
              />
              <div class="position-absolute hrLogin-key-icon">
                <b-icon icon="key-fill"></b-icon>
              </div>
              <div v-if="$v.user.password.$error" class="error-text">
                <span v-if="!$v.user.password.required">
                  {{ $t("login.message.pass_required") }}
                </span>
              </div>
            </div>
            <nuxt-link v-bind:to="localeLocation('/signup')">
              <div class="hrLogin-signup">Sign up</div>
            </nuxt-link>
            <div class="d-flex justify-content-center my-4">
              <b-button
                class="hrLogin-submit-button"
                variant="primary"
                v-bind:disabled="submitted"
                v-on:click="login()"
              >
                <p class="hrLogin-text-bold">
                  {{ $t("common.btnLogin") }}
                </p>
              </b-button>
            </div>
          </div>
        </b-col>
      </div>
    </b-col>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-named-as-default
import { required, email } from "vuelidate/lib/validators";
import Cookies from "js-cookie";
// import { Api } from "../../utils/http-common";
// import { Urls } from "~/utils/urls";

export default {
  name: "Login",
  layout: "auth",
  data() {
    return {
      saveLogin: true,
      showPassword: true,
      user: {
        username: "",
        password: "",
      },
      submitted: false,
      message: "",
      lang: "",
      optionToast: {
        position: "top-right",
        duration: 3000,
        keepOnHover: true,
        singleton: true,
        fitToScreen: true,
      },
    };
  },

  validations: {
    user: {
      username: {
        required,
        email,
      },
      password: {
        required,
      },
    },
  },

  created() {
    const valueToken = Cookies.get("token_user")
      ? Cookies.get("token_user")
      : null;
    if (valueToken) {
      this.$router.push(this.localeLocation("/connect"));
    }
  },

  methods: {
    login() {
      this.submitted = true;
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.submitted = false;
        this.$router.push("/connect");
        // const dataForm = this.user;
        // const dataForm = {
        //   user_name_or_email: this.user.username,
        //   password: this.user.password,
        // };
        // await Api.requestServer1
        //   .post(`/log-in`, dataForm)
        //   .then((response) => {
        //     const { data } = response;
        //     if (data.success) {
        //       Cookies.set("token_user", data.token);
        //       localStorage.setItem("token_user", data.token);
        //       Cookies.set("user_login", this.user.username);
        //       Cookies.set("Limit_Crawl", 10);
        //       this.$router.push("/connect");
        //     } else {
        //       this.$toast.error(data.message, this.optionToast);
        //       setTimeout(() => {
        //         this.message = "";
        //       }, 3000);
        //     }
        //   })
        //   .catch((error) => {
        //     // eslint-disable-next-line no-console
        //     console.log(error);
        //   });
      } else {
        // this.submitted = false;
      }
    },

    toggleShow() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/login/login.scss";
.error-message {
  color: $red;
}
</style>
