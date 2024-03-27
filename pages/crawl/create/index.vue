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
                  v-model.trim="$v.resourceTitle.$model"
                  v-bind:class="{ 'is-invalid': $v.resourceTitle.$error }"
                  class="mt-2"
                  type="text"
                ></b-form-input>
                <div v-if="$v.resourceTitle.$error" class="error-text">
                  <span v-if="!$v.resourceTitle.required">
                    {{ $t("create_resource.message.title_required") }}
                  </span>
                </div>
              </div>
            </div>
            <div class="pt-4">
              <div class="d-flex hrCreate-label">Search key</div>
              <b-form-textarea
                id="textarea-no-resize"
                v-model="resourceDescription"
                class="mt-2"
                rows="5"
                no-resize
              ></b-form-textarea>
            </div>
            <b-row>
              <b-col cols="12" md="12" xl="4" class="mt-4">
                <div class="d-flex hrCreate-label">Filter</div>
                <div class="validate-form position-relative pt-2">
                  <b-form-input
                    id="main-skill"
                    v-model.trim="$v.mainSkill.$model"
                    type="text"
                    v-bind:class="{ 'is-invalid': $v.mainSkill.$error }"
                  ></b-form-input>
                  <div v-if="$v.mainSkill.$error" class="error-text">
                    <span v-if="!$v.mainSkill.required">
                      {{ $t("create_resource.message.main_skill_required") }}
                    </span>
                  </div>
                </div>
              </b-col>
              <b-col cols="12" md="12" xl="4" class="mt-4">
                <div class="d-flex hrCreate-label">Location</div>
                <div class="validate-form position-relative pt-2">
                  <v-select
                    v-model.trim="$v.location.$model"
                    label="text"
                    v-bind:options="listLocation"
                    v-bind:reduce="(label) => label.id"
                    v-bind:class="{ 'is-invalid': $v.location.$error }"
                    v-bind:clearable="false"
                  ></v-select>
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
                    v-model.trim="$v.mainSkill.$model"
                    type="text"
                    v-bind:class="{ 'is-invalid': $v.mainSkill.$error }"
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
                  <vue-editor v-model="htmlForEditor"></vue-editor>
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
import { tableFields } from "~/utils/table-fields";
import { language } from "~/utils/language";
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
      tableFields,
      resourceTitle: null,
      resourceDescription: null,
      mainSkill: null,
      memberNumber: null,
      category: 0,
      location: 1,
      level: 0,
      timeStart: new Date().toISOString(),
      timeEnd: new Date().toISOString(),
      listMembers: [],
      selectedMember: [],
      workingForm: 0,
      workingForms: [
        { text: "On Site", value: 0 },
        { text: "Remote", value: 1 },
        { text: "Half Remote", value: 2 },
      ],
      addMember: [],
      userId: null,
      languagesSelect: language.LANG,
      listLocation: location.VIE,
      levels: [
        {
          value: 0,
          label: "Fresher",
        },
        {
          value: 1,
          label: "Junior",
        },
        {
          value: 2,
          label: "Senior",
        },
        {
          value: 3,
          label: "Middle",
        },
        {
          value: 4,
          label: "Master",
        },
      ],
      positions: position.POSITION,
      categorys: [
        { id: 0, name: this.$t("category.label.networking") },
        { id: 1, name: this.$t("category.label.data") },
        { id: 2, name: this.$t("category.label.web") },
        { id: 3, name: this.$t("category.label.translation") },
        { id: 4, name: this.$t("category.label.accounting") },
        { id: 5, name: this.$t("category.label.customer_service") },
        { id: 6, name: this.$t("category.label.design") },
        { id: 7, name: this.$t("category.label.sale") },
        { id: 8, name: this.$t("category.label.writing") },
      ],
      optionToast: {
        position: "top-right",
        duration: 3000,
        keepOnHover: true,
        singleton: true,
        fitToScreen: true,
      },
      dataCheck: [],
      preload: false,
      htmlForEditor: "",
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
  watch: {
    listMember() {
      this.listMembers = this.listMember;
      this.preload = false;
    },
    createSuccess() {
      if (this.createSuccess) {
        this.preload = false;
        this.$toast.success(
          this.$t("create_resource.message.create_success"),
          this.optionToast
        );
        this.$router.push(this.localeLocation("/user/resource/list"));
        this.$store.commit("resource/create/set", ["createSuccess", false]);
      }
    },
    memberNumber() {
      if (this.memberNumber !== null && this.memberNumber !== "") {
        if (this.memberNumber < this.selectedMember.length) {
          const amount = this.selectedMember.length - this.memberNumber;
          this.selectedMember.splice(this.memberNumber, amount);
          this.$toast.error(
            this.$t("create_resource.message.selected_members_required"),
            this.optionToast
          );
        }
      }
    },
  },
  created() {},
  methods: {},
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
