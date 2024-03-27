<template>
  <div class="hrCreate">
    <HRPreLoad v-bind:preload="preload" />
    <b-form class="form-detail mt-5" style="margin: 15%">
      <div style="position: absolute; left: 50px">
        <b-button class="px-4 custom-back-list" v-on:click="backListGroup()"
          ><img src="~/assets/images/left.svg" />
          Back to Group
        </b-button>
      </div>
      <!-- Info group -->
      <b-row class="mx-1 px-2 py-3 custom_info_group">
        <b-col md="12" lg="3" sm="12" class="custom-info py-3">
          <div class="d-flex flex-column justify-content-center h-100">
            <div class="custom_name_group">{{ infoGroup.name_group }}</div>
            <div style="font-size: 14px">{{ infoGroup.create_date }}</div>
          </div>
        </b-col>
        <b-col md="12" lg="4" sm="12" class="custom-info py-3">
          <div
            class="d-flex h-100 justify-content-center align-items-center text-center"
          >
            <div class="col-4 col-lg-4 col-md-6 px-0">
              <img src="~/assets/images/key.svg" /><span class="ml-1">{{
                infoGroup.nominee
              }}</span>
            </div>
            <div class="col-4 col-lg-4 col-md-6 px-0">
              <img src="~/assets/images/Vector1.svg" /><span class="ml-1">{{
                infoGroup.people
              }}</span>
            </div>
            <div class="col-4 col-lg-4 col-md-6 px-0">
              <img src="~/assets/images/location.svg" /><span class="ml-1">{{
                infoGroup.location
              }}</span>
            </div>
          </div>
        </b-col>
        <b-col md="12" lg="3" sm="12" class="custom-info py-3">
          <div class="d-flex h-100">
            <div class="custom-text-filter text-nowrap" style="font-size: 16px">
              Fillter by:
            </div>
            <div class="ml-3" style="font-size: 14px">
              <div>Key search: {{ infoGroup.key_search }}</div>
              <div>Location: {{ infoGroup.location }}</div>
              <div>Degree: {{ infoGroup.degree }}</div>
            </div>
          </div>
        </b-col>
        <b-col md="12" lg="2" sm="12" class="py-3">
          <div class="d-flex align-items-center h-100">
            <div class="text-nowrap" style="font-size: 16px">
              Number Selected:
              <span style="font-weight: 600">{{
                infoGroup.number_selected
              }}</span>
            </div>
          </div>
        </b-col>
      </b-row>
      <!-- end -->

      <div class="custom_info_group mt-3 py-0">
        <b-card no-body style="border-radius: 20px">
          <b-tabs content-class="mt-3" card>
            <b-tab title="Email" active>
              <div class="px-3">
                <b-table
                  responsive
                  v-bind:items="listData"
                  thead-class="hidden_header"
                  v-bind:fields="table"
                >
                  <template #head(id)="data">
                    <b-form-checkbox v-model="data.id" v-on:click="select()">
                    </b-form-checkbox>
                  </template>
                  <template #cell(id)="data">
                    <b-form-checkbox v-model="data.item.id"> </b-form-checkbox>
                  </template>
                  <template #cell(name)="data">
                    <div class="d-flex">
                      <div>
                        <img src="~/assets/images/user.svg" />
                      </div>
                      <div class="ml-2">
                        <div style="font-weight: 600">
                          {{ data.item.name }}
                        </div>
                        <div>
                          {{ data.item.nominee }}
                        </div>
                        <div>
                          {{ data.item.location }}
                        </div>
                      </div>
                    </div>
                  </template>
                  <template #cell(status)="data">
                    <div
                      v-if="data.item.status === 0"
                      class="color-faild p-2 d-flex justify-content-center"
                    >
                      <span> Faild </span>
                    </div>
                    <div
                      v-if="data.item.status === 1"
                      class="color-process p-2 d-flex justify-content-center"
                    >
                      <span> Process </span>
                    </div>
                    <div
                      v-if="data.item.status === 2"
                      class="color-success p-2 d-flex justify-content-center"
                    >
                      <span> Success </span>
                    </div>
                  </template>
                  <template #cell(action)="data">
                    <div class="bg-action">
                      <b-dropdown
                        size="lg"
                        variant="link"
                        class="dropdown"
                        toggle-class="text-decoration-none"
                        no-caret
                      >
                        <template #button-content>
                          <div
                            class="bg-dropdown d-flex align-items-center justify-content-center"
                          >
                            <img src="~/assets/images/3cham.svg" />
                            <span hidden>{{ data }}</span>
                          </div>
                        </template>
                        <b-dropdown-item
                          v-b-modal.edit-member
                          style="
                            padding-left: 5px !important;
                            padding-right: 5px !important;
                          "
                        >
                          <div class="d-flex py-2">
                            <img src="~/assets/images/archive_down.svg" />
                            <div class="ml-2 mt-1">
                              <p>Crawl</p>
                            </div>
                          </div>
                        </b-dropdown-item>
                        <b-dropdown-item
                          v-b-modal.modal-remove
                          style="
                            padding-left: 5px !important;
                            padding-right: 5px !important;
                          "
                        >
                          <div class="d-flex py-2">
                            <img src="~/assets/images/icon_delete.svg" />
                            <div class="ml-2 mt-1">
                              <p>Delete</p>
                            </div>
                          </div>
                        </b-dropdown-item>
                      </b-dropdown>
                    </div>
                  </template>
                </b-table>
              </div>
            </b-tab>
            <b-tab title="Linkedin"
              ><div class="px-3">
                <b-table
                  responsive
                  v-bind:items="listData"
                  v-bind:fields="table"
                  thead-class="hidden_header"
                >
                  <template #head(id)="data">
                    <b-form-checkbox v-model="data.id" v-on:click="select()">
                    </b-form-checkbox>
                  </template>
                  <template #cell(id)="data">
                    <b-form-checkbox v-model="data.item.id"> </b-form-checkbox>
                  </template>
                  <template #cell(name)="data">
                    <div class="d-flex">
                      <div>
                        <img src="~/assets/images/user.svg" />
                      </div>
                      <div class="ml-2">
                        <div style="font-weight: 600">
                          {{ data.item.name }}
                        </div>
                        <div>
                          {{ data.item.nominee }}
                        </div>
                        <div>
                          {{ data.item.location }}
                        </div>
                      </div>
                    </div>
                  </template>
                  <template #cell(status)="data">
                    <div
                      v-if="data.item.status === 0"
                      class="color-faild p-2 d-flex justify-content-center"
                    >
                      <span> Faild </span>
                    </div>
                    <div
                      v-if="data.item.status === 1"
                      class="color-process p-2 d-flex justify-content-center"
                    >
                      <span> Process </span>
                    </div>
                    <div
                      v-if="data.item.status === 2"
                      class="color-success p-2 d-flex justify-content-center"
                    >
                      <span> Success </span>
                    </div>
                  </template>
                  <template #cell(action)="data">
                    <div class="bg-action">
                      <b-dropdown
                        size="lg"
                        variant="link"
                        class="dropdown"
                        toggle-class="text-decoration-none"
                        no-caret
                      >
                        <template #button-content>
                          <div
                            class="bg-dropdown d-flex align-items-center justify-content-center"
                          >
                            <img src="~/assets/images/3cham.svg" />
                            <span hidden>{{ data }}</span>
                          </div>
                        </template>
                        <b-dropdown-item
                          v-b-modal.edit-member
                          style="
                            padding-left: 5px !important;
                            padding-right: 5px !important;
                          "
                        >
                          <div class="d-flex py-2">
                            <img src="~/assets/images/archive_down.svg" />
                            <div class="ml-2 mt-1">
                              <p>Crawl</p>
                            </div>
                          </div>
                        </b-dropdown-item>
                        <b-dropdown-item
                          v-b-modal.modal-remove
                          style="
                            padding-left: 5px !important;
                            padding-right: 5px !important;
                          "
                        >
                          <div class="d-flex py-2">
                            <img src="~/assets/images/icon_delete.svg" />
                            <div class="ml-2 mt-1">
                              <p>Delete</p>
                            </div>
                          </div>
                        </b-dropdown-item>
                      </b-dropdown>
                    </div>
                  </template>
                </b-table>
              </div></b-tab
            >
            <b-tab title="Messenger"
              ><div class="px-3">
                <b-table
                  responsive
                  v-bind:items="listData"
                  v-bind:fields="table"
                  thead-class="hidden_header"
                >
                  <template #head(id)="data">
                    <b-form-checkbox v-model="data.id" v-on:click="select()">
                    </b-form-checkbox>
                  </template>
                  <template #cell(id)="data">
                    <b-form-checkbox v-model="data.item.id"> </b-form-checkbox>
                  </template>
                  <template #cell(name)="data">
                    <div class="d-flex">
                      <div>
                        <img src="~/assets/images/user.svg" />
                      </div>
                      <div class="ml-2">
                        <div style="font-weight: 600">
                          {{ data.item.name }}
                        </div>
                        <div>
                          {{ data.item.nominee }}
                        </div>
                        <div>
                          {{ data.item.location }}
                        </div>
                      </div>
                    </div>
                  </template>
                  <template #cell(status)="data">
                    <div
                      v-if="data.item.status === 0"
                      class="color-faild p-2 d-flex justify-content-center"
                    >
                      <span> Faild </span>
                    </div>
                    <div
                      v-if="data.item.status === 1"
                      class="color-process p-2 d-flex justify-content-center"
                    >
                      <span> Process </span>
                    </div>
                    <div
                      v-if="data.item.status === 2"
                      class="color-success p-2 d-flex justify-content-center"
                    >
                      <span> Success </span>
                    </div>
                  </template>
                  <template #cell(action)="data">
                    <div class="bg-action">
                      <b-dropdown
                        size="lg"
                        variant="link"
                        class="dropdown"
                        toggle-class="text-decoration-none"
                        no-caret
                      >
                        <template #button-content>
                          <div
                            class="bg-dropdown d-flex align-items-center justify-content-center"
                          >
                            <img src="~/assets/images/3cham.svg" />
                            <span hidden>{{ data }}</span>
                          </div>
                        </template>
                        <b-dropdown-item
                          v-b-modal.edit-member
                          style="
                            padding-left: 5px !important;
                            padding-right: 5px !important;
                          "
                        >
                          <div class="d-flex py-2">
                            <img src="~/assets/images/archive_down.svg" />
                            <div class="ml-2 mt-1">
                              <p>Crawl</p>
                            </div>
                          </div>
                        </b-dropdown-item>
                        <b-dropdown-item
                          v-b-modal.modal-remove
                          style="
                            padding-left: 5px !important;
                            padding-right: 5px !important;
                          "
                        >
                          <div class="d-flex py-2">
                            <img src="~/assets/images/icon_delete.svg" />
                            <div class="ml-2 mt-1">
                              <p>Delete</p>
                            </div>
                          </div>
                        </b-dropdown-item>
                      </b-dropdown>
                    </div>
                  </template>
                </b-table>
              </div></b-tab
            >
            <b-tab title="SMS"
              ><div class="px-3">
                <b-table
                  responsive
                  v-bind:items="listData"
                  v-bind:fields="table"
                  thead-class="hidden_header"
                >
                  <template #head(id)="data">
                    <b-form-checkbox v-model="data.id" v-on:click="select()">
                    </b-form-checkbox>
                  </template>
                  <template #cell(id)="data">
                    <b-form-checkbox v-model="data.item.id"> </b-form-checkbox>
                  </template>
                  <template #cell(name)="data">
                    <div class="d-flex">
                      <div>
                        <img src="~/assets/images/user.svg" />
                      </div>
                      <div class="ml-2">
                        <div style="font-weight: 600">
                          {{ data.item.name }}
                        </div>
                        <div>
                          {{ data.item.nominee }}
                        </div>
                        <div>
                          {{ data.item.location }}
                        </div>
                      </div>
                    </div>
                  </template>
                  <template #cell(status)="data">
                    <div
                      v-if="data.item.status === 0"
                      class="color-faild p-2 d-flex justify-content-center"
                    >
                      <span> Faild </span>
                    </div>
                    <div
                      v-if="data.item.status === 1"
                      class="color-process p-2 d-flex justify-content-center"
                    >
                      <span> Process </span>
                    </div>
                    <div
                      v-if="data.item.status === 2"
                      class="color-success p-2 d-flex justify-content-center"
                    >
                      <span> Success </span>
                    </div>
                  </template>
                  <template #cell(action)="data">
                    <div class="bg-action">
                      <b-dropdown
                        size="lg"
                        variant="link"
                        class="dropdown"
                        toggle-class="text-decoration-none"
                        no-caret
                      >
                        <template #button-content>
                          <div
                            class="bg-dropdown d-flex align-items-center justify-content-center"
                          >
                            <img src="~/assets/images/3cham.svg" />
                            <span hidden>{{ data }}</span>
                          </div>
                        </template>
                        <b-dropdown-item
                          v-b-modal.edit-member
                          style="
                            padding-left: 5px !important;
                            padding-right: 5px !important;
                          "
                        >
                          <div class="d-flex py-2">
                            <img src="~/assets/images/archive_down.svg" />
                            <div class="ml-2 mt-1">
                              <p>Crawl</p>
                            </div>
                          </div>
                        </b-dropdown-item>
                        <b-dropdown-item
                          v-b-modal.modal-remove
                          style="
                            padding-left: 5px !important;
                            padding-right: 5px !important;
                          "
                        >
                          <div class="d-flex py-2">
                            <img src="~/assets/images/icon_delete.svg" />
                            <div class="ml-2 mt-1">
                              <p>Delete</p>
                            </div>
                          </div>
                        </b-dropdown-item>
                      </b-dropdown>
                    </div>
                  </template>
                </b-table>
              </div></b-tab
            >
            <b-tab title="Zalo"
              ><div class="px-3">
                <b-table
                  responsive
                  v-bind:items="listData"
                  v-bind:fields="table"
                  thead-class="hidden_header"
                >
                  <template #head(id)="data">
                    <b-form-checkbox v-model="data.id" v-on:click="select()">
                    </b-form-checkbox>
                  </template>
                  <template #cell(id)="data">
                    <b-form-checkbox v-model="data.item.id"> </b-form-checkbox>
                  </template>
                  <template #cell(name)="data">
                    <div class="d-flex">
                      <div>
                        <img src="~/assets/images/user.svg" />
                      </div>
                      <div class="ml-2">
                        <div style="font-weight: 600">
                          {{ data.item.name }}
                        </div>
                        <div>
                          {{ data.item.nominee }}
                        </div>
                        <div>
                          {{ data.item.location }}
                        </div>
                      </div>
                    </div>
                  </template>
                  <template #cell(status)="data">
                    <div
                      v-if="data.item.status === 0"
                      class="color-faild p-2 d-flex justify-content-center"
                    >
                      <span> Faild </span>
                    </div>
                    <div
                      v-if="data.item.status === 1"
                      class="color-process p-2 d-flex justify-content-center"
                    >
                      <span> Process </span>
                    </div>
                    <div
                      v-if="data.item.status === 2"
                      class="color-success p-2 d-flex justify-content-center"
                    >
                      <span> Success </span>
                    </div>
                  </template>
                  <template #cell(action)="data">
                    <div class="bg-action">
                      <b-dropdown
                        size="lg"
                        variant="link"
                        class="dropdown"
                        toggle-class="text-decoration-none"
                        no-caret
                      >
                        <template #button-content>
                          <div
                            class="bg-dropdown d-flex align-items-center justify-content-center"
                          >
                            <img src="~/assets/images/3cham.svg" />
                            <span hidden>{{ data }}</span>
                          </div>
                        </template>
                        <b-dropdown-item
                          v-b-modal.edit-member
                          style="
                            padding-left: 5px !important;
                            padding-right: 5px !important;
                          "
                        >
                          <div class="d-flex py-2">
                            <img src="~/assets/images/archive_down.svg" />
                            <div class="ml-2 mt-1">
                              <p>Crawl</p>
                            </div>
                          </div>
                        </b-dropdown-item>
                        <b-dropdown-item
                          v-b-modal.modal-remove
                          style="
                            padding-left: 5px !important;
                            padding-right: 5px !important;
                          "
                        >
                          <div class="d-flex py-2">
                            <img src="~/assets/images/icon_delete.svg" />
                            <div class="ml-2 mt-1">
                              <p>Delete</p>
                            </div>
                          </div>
                        </b-dropdown-item>
                      </b-dropdown>
                    </div>
                  </template>
                </b-table>
              </div></b-tab
            >
          </b-tabs>
        </b-card>
      </div>
      <div class="custom_info_group mt-3">
        <div class="w-100 px-3">
          <vue-editor v-model="htmlForEditor"></vue-editor>
        </div>
        <div class="p-3 mt-3 d-flex justify-content-end">
          <b-button class="px-4 button-send-mess"
            ><img src="~/assets/images/icon_message.svg" />
            Send Messages
          </b-button>
        </div>
      </div>
    </b-form>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { tableFields } from "~/utils/table-fields";
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
      infoGroup: {
        id: 1,
        name_group: "Back-end Developer",
        nominee: "Fontend",
        people: "People",
        location: "Vietnam",
        create_date: "2022-11-16  14:41:51",
        key_search: "Frontend Developer",
        location_group: "Danang",
        degree: "College degree",
        number_selected: 20,
      },
      listData: [
        {
          id: 1,
          name: "Le Thien An",
          email: "userinfor@email.com",
          location: "157 Bui Ta Han, Khue My, Ngu Hanh Son, Danang",
          date_of_birth: "03-05-1999",
          link_contact: "linkcontact1.com",
          status: 1,
          last_update: "2022-11-16  14:41:51",
        },
        {
          id: 2,
          name: "Le Thien An",
          email: "userinfor@email.com",
          location: "157 Bui Ta Han, Khue My, Ngu Hanh Son, Danang",
          date_of_birth: "03-05-1999",
          link_contact: "linkcontact1.com",
          status: 0,
          last_update: "2022-11-16  14:41:51",
        },
        {
          id: 3,
          name: "Le Thien An",
          email: "userinfor@email.com",
          location: "157 Bui Ta Han, Khue My, Ngu Hanh Son, Danang",
          date_of_birth: "03-05-1999",
          link_contact: "linkcontact1.com",
          status: 2,
          last_update: "2022-11-16  14:41:51",
        },
      ],
      isShowFilter: true,
      htmlForEditor: "",
    };
  },
  computed: {
    table() {
      return [
        {
          key: "id",
          label:
            '<b-form-checkbox v-model="checkboxSendMail"></b-form-checkbox>',
        },
        {
          key: "name",
          label: "User Infomation",
        },
        {
          key: "link_contact",
          label: "Link Contact",
        },
        {
          key: "email",
          label: "Email/ Phone",
        },
        {
          key: "location",
          label: "Address",
        },
        {
          key: "status",
          label: "Status",
        },
        {
          key: "last_update",
          label: "Last update",
        },
        {
          key: "action",
          label: null,
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
  methods: {
    showUIFilter() {
      this.isShowFilter = !this.isShowFilter;
    },
    backListGroup() {
      this.$router.push("/group");
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
.custom_info_group {
  background-color: #ffffff;
  border-radius: 15px;
  padding: 30px 0;
}
.custom_name_group {
  font-weight: 600;
  font-size: 20px;
  color: #3461b6;
}
.custom-text-filter {
  font-size: 18px;
  font-weight: 600;
}
.custom-info {
  border-right: 1px solid #d9d9d9;
}
.custom-datepicker {
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
}
.custom-icon-datepicker {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.button-send-mess {
  background-color: #ffa800;
  border-color: unset;
  border-color: #ffa800;
}
.color-success {
  background-color: #d0f5b9b8;
  color: #04ad00;
  border-radius: 5px;
}
.color-process {
  background-color: #ffe1a8;
  color: #ef9e00;
  border-radius: 5px;
}
.color-faild {
  background-color: #ffd1d1b8;
  color: #ad0000;
  border-radius: 5px;
}
.custom-back-list {
  background-color: #cfcfcf;
  border-color: #cfcfcf;
}
</style>
<style lang="scss">
.nav-tabs {
  border-bottom: unset;
}
.nav-tabs .nav-link.active {
  border-color: white;
}
.button-send-mess {
  background-color: #ffa800;
  border-color: unset;
  border-color: #ffa800;
}
.card-header {
  background-color: #e6ecf5;
}
.card {
  border: unset;
}
.nav-item {
  padding-left: 1.5rem !important;
  padding-right: 1.5rem !important;
}
</style>
