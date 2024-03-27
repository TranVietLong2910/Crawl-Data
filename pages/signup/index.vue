<template>
  <div class="hrLogin">
    <HRPreLoad v-bind:preload="preload" />
    <b-col sm="8" lg="8" xl="6" class="mx-auto pt-3 pb-5">
      <div class="hrLogin-background-body bg-image">
        <div v-if="!checkSentMail">
          <div class="pt-4">
            <h6 class="hrLogin-text-title">SIGNUP TO DIRECTION MAKETING</h6>
          </div>
          <b-col xl="10" class="mx-auto mt-5">
            <div>
              <div class="hrLogin-form-submit">
                <b-form>
                  <div class="form-group position-relative validate-form">
                    <div class="text-primary label-input pb-1">Email:</div>
                    <b-form-input
                      v-model.trim="email"
                      type="email"
                      v-bind:placeholder="$t('sign_up.label.email')"
                      v-bind:class="{ 'is-invalid': checkEmail === true }"
                      v-on:keyup.enter="signUp()"
                    ></b-form-input>
                    <div v-if="checkEmail === true" class="error-text">
                      {{ errorEmail }}
                    </div>
                  </div>

                  <b-row>
                    <b-col lg="12">
                      <div
                        v-if="form.businessType != 1"
                        class="form-group position-relative validate-form"
                      >
                        <div class="text-primary label-input pb-1">
                          User name:
                        </div>
                        <b-form-input
                          v-model.trim="user_name"
                          type="email"
                          placeholder="User name"
                          v-bind:class="{
                            'is-invalid': checkUserName === true,
                          }"
                          required
                          v-on:keyup.enter="signUp()"
                        ></b-form-input>
                        <div v-if="checkUserName === true" class="error-text">
                          {{ errorUserName }}
                        </div>
                      </div>
                    </b-col>
                  </b-row>
                  <div class="form-group position-relative validate-form">
                    <div class="text-primary label-input pb-1">
                      {{ $t("sign_up.label.password") }}:
                    </div>
                    <b-form-input
                      v-model.trim="password"
                      v-bind:type="showPassword ? 'text' : 'password'"
                      v-bind:placeholder="$t('sign_up.label.password')"
                      v-bind:class="{
                        'is-invalid': checkPassword === true,
                      }"
                      pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                      class="custom-input"
                      v-on:keyup.enter="signUp()"
                    />
                    <div v-on:click="toggleShow">
                      <div
                        class="position-absolute hrLogin-icon-eye"
                        v-bind:class="
                          showPassword ? 'eye-fill' : 'eye-slash-fill'
                        "
                      >
                        <b-icon
                          role="button"
                          v-bind:icon="
                            showPassword ? 'eye-fill' : 'eye-slash-fill'
                          "
                        ></b-icon>
                      </div>
                    </div>
                    <div v-if="checkPassword === true" class="error-text">
                      {{ errorPassword }}
                    </div>
                  </div>
                  <div class="form-group position-relative validate-form">
                    <div class="text-primary label-input pb-1">
                      Repeat Password:
                    </div>
                    <b-form-input
                      v-model.trim="repeat_password"
                      v-bind:type="showRePassword ? 'text' : 'password'"
                      placeholder="Repeat Password"
                      v-bind:class="{
                        'is-invalid': checkRePassword === true,
                      }"
                      pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                      class="custom-input"
                      v-on:keyup.enter="signUp()"
                    />
                    <div v-on:click="toggleShowRePasswork">
                      <div
                        class="position-absolute hrLogin-icon-eye"
                        v-bind:class="
                          showRePassword ? 'eye-fill' : 'eye-slash-fill'
                        "
                      >
                        <b-icon
                          role="button"
                          v-bind:icon="
                            showRePassword ? 'eye-fill' : 'eye-slash-fill'
                          "
                        ></b-icon>
                      </div>
                    </div>
                    <div v-if="checkRePassword === true" class="error-text">
                      {{ errorRePassword }}
                    </div>
                  </div>

                  <div class="d-flex justify-content-center w-100">
                    <b-button
                      class="hrLogin-submit-button"
                      variant="primary"
                      v-on:click="signUp()"
                    >
                      <p class="text-white">
                        {{ $t("sign_up.label.create_my_account") }}
                      </p>
                    </b-button>
                  </div>
                </b-form>
              </div>

              <div class="hrLogin-text-already pt-4 pb-4">
                <p>
                  {{ $t("sign_up.label.already") }}
                  <nuxt-link
                    class="hrLogin-text-blue"
                    v-bind:to="localeLocation('/login')"
                  >
                    {{ $t("common.btnLogin") }}
                  </nuxt-link>
                </p>
              </div>
            </div>
          </b-col>
        </div>
        <div v-else>
          <div class="pt-4">
            <h6 class="hrLogin-text-title">
              {{ $t("login.label.sent_mail") }}
            </h6>
          </div>
          <b-col xl="10" class="mx-auto mt-5">
            <div>
              <div class="hrLogin-message-email text-center py-2">
                {{ $t("sign_up.message.send_email") }}
              </div>
              <div class="hrLogin-form-submit">
                <div
                  class="d-flex hrLogin-button-group justify-content-center pt-4 pb-5"
                >
                  <b-button
                    v-bind:disabled="submitted"
                    class="send-email"
                    v-on:click="$router.push(localeLocation('/login'))"
                  >
                    {{ $t("login.label.title") }}
                  </b-button>
                </div>
              </div>
            </div>
          </b-col>
        </div>
      </div>
    </b-col>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import { mapActions, mapGetters } from "vuex";
import { location } from "~/utils/location";
import HRPreLoad from "@/components/Common/HRPreLoad";
export default {
  name: "SignUp",
  components: {
    HRPreLoad,
  },
  layout: "auth",
  data() {
    return {
      preload: false,
      checkSentMail: false,
      showPassword: false,
      showRePassword: false,
      passwordDigest: null,
      businessTypeList: [
        { text: "Company", value: 0 },
        { text: "Freelancer", value: 1 },
      ],
      dataLocation: location.VIE,
      checkFirstName: false,
      checkLastName: false,
      lang: "",
      form: {
        email: "",
        passwordDigest: "",
        businessType: null,
        city: null,
        companyName: "",
        firstName: "",
        lastName: "",
        lang: "",
      },
      optionToast: {
        position: "top-right",
        duration: 3000,
        keepOnHover: true,
        singleton: true,
        fitToScreen: true,
      },

      checkboxAccepted: false,
      checkboxSendMail: false,
      email: null,
      password: null,
      repeat_password: null,
      user_name: null,
      checkEmail: null,
      checkUserName: null,
      checkPassword: null,
      checkRePassword: null,
      errorEmail: null,
      errorUserName: null,
      errorPassword: null,
      errorRePassword: null,
    };
  },
  validations: {
    form: {
      email: {
        required,
        email,
      },
      passwordDigest: {
        required,
      },
      companyName: {
        required,
      },
    },
  },
  computed: {
    ...mapGetters({
      message: "register/message",
    }),
  },
  watch: {
    success() {
      this.preload = false;
      if (this.success) {
        this.preload = false;
        this.checkSentMail = true;
        this.$toast.success(this.message, this.optionToast);
        this.$store.commit("register/set", ["message", ""]);
        this.$store.commit("register/set", ["success", false]);
      }
    },
    error() {
      this.preload = false;
      if (this.error) {
        this.checkSentMail = false;
        this.preload = false;
        this.$toast.error(this.message, this.optionToast);
        this.$store.commit("register/set", ["message", ""]);
        this.$store.commit("register/set", ["error", false]);
      }
    },
    email() {
      if (
        // eslint-disable-next-line no-useless-escape
        /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
          this.email
        )
      ) {
        this.checkEmail = false;
      } else {
        this.checkEmail = true;
        this.errorEmail = "Invalid Email";
      }
    },
    user_name() {
      if (
        // eslint-disable-next-line no-useless-escape
        /[^a-z0-9]/gi.test(this.user_name)
      ) {
        this.checkUserName = true;
        this.errorUserName = "Invalid Username";
      } else {
        this.checkUserName = false;
      }
    },
    password() {
      if (
        // eslint-disable-next-line no-useless-escape
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(
          this.password
        )
      ) {
        this.checkPassword = false;
      } else {
        this.checkPassword = true;
        this.errorPassword = "Invalid Password";
      }
    },
    repeat_password() {
      if (this.repeat_password !== this.password) {
        this.checkRePassword = true;
        this.errorRePassword = "Repeat password does not match password";
      } else if (
        // eslint-disable-next-line no-useless-escape
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(
          this.repeat_password
        )
      ) {
        this.checkRePassword = false;
      } else {
        this.checkRePassword = true;
        this.errorRePassword = "Invalid RepeatPassword";
      }
    },
  },
  created() {
    if (this.$route.name === "signUp___en") {
      this.form.lang = "en";
    } else {
      this.form.lang = "vi";
    }
  },
  methods: {
    ...mapActions({
      createAccount: "signup/createAccount",
    }),
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    toggleShowRePasswork() {
      this.showRePassword = !this.showRePassword;
    },
    checkFirst(event) {
      if (event === null || event === "") {
        this.checkFirstName = true;
      } else {
        this.checkFirstName = false;
      }
    },
    checkLats(event) {
      if (event === null || event === "") {
        this.checkLastName = true;
      } else {
        this.checkLastName = false;
      }
    },

    async signUp() {
      this.$v.$touch();
      this.form.companyName = "";
      if (!this.email) {
        this.checkEmail = true;
        this.errorEmail = "Email cannot be blank";
      } else {
        this.checkEmail = false;
      }

      if (!this.user_name) {
        this.checkUserName = true;
        this.errorUserName = "Username cannot be blank";
      } else {
        this.checkUserName = false;
      }

      if (!this.password) {
        this.checkPassword = true;
        this.errorPassword = "Password cannot be blank";
      } else {
        this.checkPassword = false;
      }

      if (!this.repeat_password) {
        this.checkRePassword = true;
        this.errorRePassword = "RepeatPassword cannot be blank";
      } else if (this.repeat_password !== null) {
        this.checkRePassword = false;
      } else if (this.repeat_password !== this.password) {
        this.errorRePassword = "Repeat password does not match password";
      }
      if (
        this.email &&
        this.password &&
        this.repeat_password &&
        this.user_name
      ) {
        this.preload = true;
        const dataRequest = {
          email: this.email,
          password: this.password,
          repeat_password: this.repeat_password,
          user_name: this.user_name,
        };
        const dataRepond = await this.createAccount(dataRequest);
        if (dataRepond.success) {
          this.$router.push("/login");
          this.$toast.success(
            "Successful account registration, please check your email",
            this.optionToast
          );
        }
      }
    },
  },
  auth: false,
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/signUp/signUp.scss";
</style>
