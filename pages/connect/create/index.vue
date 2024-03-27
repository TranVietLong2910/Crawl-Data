<template>
  <div class="hrCreate">
    <HRPreLoad v-bind:preload="preload" />
    <div class="py-5">
      <h1 class="hrCreate-title-create">NEW CONNECT</h1>
    </div>
    <b-form class="form-detail">
      <b-col md="10" lg="9" xl="9" class="mx-auto mb-5">
        <div class="bg-white h-100 hrCreate-border-button">
          <b-col sm="9" md="10" lg="9" xl="9" class="mx-auto">
            <div class="pt-2">
              <div class="d-flex hrCreate-label">Name Category</div>
              <div class="validate-form position-relative pt-2">
                <b-form-input
                  v-model.trim="name_category"
                  class="mt-2"
                  type="text"
                  v-bind:class="{ 'is-invalid': name_category == '' }"
                ></b-form-input>
                <!-- <div v-if="name_category.$error" class="error-text">
                  <span v-if="!$v.resourceTitle.required">
                    {{ $t('create_resource.message.title_required') }}
                  </span>
                </div> -->
              </div>
            </div>
            <div class="pt-4">
              <div class="d-flex hrCreate-label">Search key</div>
              <b-form-textarea
                id="textarea-no-resize"
                v-model="search_key"
                class="mt-2"
                rows="5"
                v-bind:class="{ 'is-invalid': search_key == '' }"
                no-resize
              ></b-form-textarea>
            </div>
            <b-row>
              <b-col cols="12" md="12" xl="4" class="mt-4">
                <div class="d-flex hrCreate-label">Filter</div>
                <div class="validate-form position-relative pt-2">
                  <v-select
                    v-model.trim="filter"
                    label="text"
                    v-bind:options="optionFilter"
                    v-bind:reduce="(label) => label.text"
                    v-bind:clearable="false"
                    v-bind:class="{ 'is-invalid': filter }"
                  ></v-select>
                  <div v-if="filter.$error" class="error-text">
                    <span v-if="!filter.$error">
                      {{ $t("create_resource.message.main_skill_required") }}
                    </span>
                  </div>
                </div>
              </b-col>
              <b-col cols="12" md="12" xl="4" class="mt-4">
                <div class="d-flex hrCreate-label">Location</div>
                <div class="validate-form position-relative pt-2">
                  <b-form-input
                    v-model.trim="location"
                    class=""
                    type="text"
                    v-bind:class="{ 'is-invalid': location == '' }"
                  ></b-form-input>
                  <div v-if="$v.location.$error" class="error-text">
                    <span v-if="!$v.location.required">
                      {{ $t("create_resource.message.location_required") }}
                    </span>
                  </div>
                </div>
              </b-col>
              <b-col cols="12" md="12" xl="4" class="mt-4">
                <div class="d-flex hrCreate-label">Number Connect</div>
                <div class="validate-form position-relative pt-2">
                  <b-form-input
                    id="main-skill"
                    v-model.trim="number_connect"
                    type="text"
                    v-bind:class="{ 'is-invalid': number_connect == '' }"
                  ></b-form-input>
                  <div v-if="$v.level.$error" class="error-text">
                    <span v-if="!$v.level.required">
                      {{ $t("create_resource.message.level_required") }}
                    </span>
                  </div>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" md="12" class="mt-4">
                <div class="w-100">
                  <!-- <vue-editor v-model="message"></vue-editor> -->
                  <textarea
                    v-model="message"
                    class="w-100 h-100 p-2"
                    rows="7"
                  ></textarea>
                </div>
              </b-col>
            </b-row>
            <div
              class="hrCreate-group-action d-flex justify-content-between mt-3"
            >
              <b-button
                style="background-color: #a1a1a1; color: white"
                class="px-4"
                onclick="history.back()"
              >
                <b-icon icon="caret-left-fill"></b-icon>
                Back to List Connect
              </b-button>
              <b-button
                class="px-4"
                style="background-color: #2993f5; border-color: unset"
                v-on:click="handleCreateNewResource()"
              >
                <b-icon icon="plus-lg"></b-icon> Connect
              </b-button>
            </div>
          </b-col>
        </div>
      </b-col>
    </b-form>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
import Cookies from "js-cookie";
import { position } from "~/utils/position";
import { location } from "~/utils/location";
import HRPreLoad from "~/components/Common/HRPreLoad/index.vue";
export default {
  name: "CreateResource",
  components: {
    HRPreLoad,
  },
  // layout: 'home',
  data() {
    return {
      memberNumber: null,
      location: "",
      timeStart: new Date().toISOString(),
      timeEnd: new Date().toISOString(),
      listLocation: location.VIE,
      positions: position.POSITION,
      dataCheck: [],
      preload: false,
      message: "",
      name_category: "",
      search_key: "",
      filter: "",
      number_connect: "",
      optionFilter: [
        { value: 1, text: "Jobs" },
        { value: 2, text: "People" },
        { value: 3, text: "Companies" },
        { value: 4, text: "Groups" },
        { value: 5, text: "Posts" },
        { value: 6, text: "Events" },
        { value: 7, text: "Courses" },
        { value: 8, text: "Products" },
        { value: 9, text: "Schools" },
        { value: 10, text: "Service Proiders" },
      ],
      infoAccountCrawl: null,
      optionToast: {
        position: "top-right",
        duration: 3000,
        keepOnHover: true,
        singleton: true,
        fitToScreen: true,
      },
    };
  },
  computed: {
    tableField() {
      return [
        {
          key: "name",
          label: this.$t("common.name"),
        },
        {
          key: "position",
          label: this.$t("common.position"),
        },
        {
          key: "skill",
          label: this.$t("common.skills"),
        },
        {
          key: "level",
          label: this.$t("common.level"),
        },
        {
          key: "language",
          label: this.$t("common.language"),
        },
        {
          key: "job_in_process",
          label: this.$t("create_resource.label.job_in_process"),
        },
        {
          key: "price",
          label: this.$t("create_resource.label.price"),
        },
        {
          key: "action",
          label: "",
        },
      ];
    },
  },
  watch: {},
  created() {
    if (process.client) {
      this.infoAccountCrawl = JSON.parse(
        Cookies.get("InfoAccount_Crawl")
          ? Cookies.get("InfoAccount_Crawl")
          : null
      );
    }
  },
  methods: {
    ...mapActions({
      createConnect: "connect/createConnect",
    }),
    async handleCreateNewResource() {
      const dataRequest = {
        email: this.infoAccountCrawl.user_name,
        password: this.infoAccountCrawl.password,
        search_key: this.search_key,
        message: this.message,
        limit: this.number_connect,
        filter: this.filter,
        locations: this.location,
        name_category: this.name_category,
      };
      const datarRepond = await this.createConnect(dataRequest);
      if (datarRepond.success === true) {
        await this.$toast.success(datarRepond.message, this.optionToast);
        await this.$router.push("/connect");
      } else {
        await this.$toast.error(datarRepond.message, this.optionToast);
      }
    },
  },
  auth: false,
  validations: {
    resourceTitle: {
      required,
    },
    mainSkill: {
      required,
    },
    level: {
      required,
    },
    location: {
      required,
    },
    memberNumber: {
      required,
    },
    category: {
      required,
    },
    workingForm: {
      required,
    },
  },
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
</style>
