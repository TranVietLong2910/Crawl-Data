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
        <b-col md="12" lg="4" sm="12" class="custom-info py-3">
          <div class="d-flex flex-column justify-content-center h-100">
            <div class="custom_name_group">{{ infoGroup.group_name }}</div>
          </div>
        </b-col>
        <b-col md="12" lg="4" sm="12" class="custom-info py-3">
          <div class="d-flex h-100 justify-content-center">
            <div class="custom-text-filter text-nowrap" style="font-size: 16px">
              Fillter by:
            </div>
            <div class="ml-3" style="font-size: 14px">
              <div>Position: {{ infoGroup.position }}</div>
              <div>Location: {{ infoGroup.location }}</div>
            </div>
          </div>
        </b-col>
        <b-col md="12" lg="4" sm="12" class="py-3">
          <div class="d-flex align-items-center justify-content-center h-100">
            <div class="text-nowrap" style="font-size: 16px">
              Quantity Nember:
              <span style="font-weight: 600">{{
                infoGroup.number_member
              }}</span>
            </div>
          </div>
        </b-col>
      </b-row>
      <!-- end -->

      <div class="custom_info_group mt-3">
        <b-row class="mx-1 px-2">
          <!-- UI filter-->
          <b-col lg="12" class="mb-3">
            <div class="d-flex align-items-center justify-content-between">
              <div>
                <img src="~/assets/images/icon_filter.svg" />
                <span style="color: #3461b6; font-weight: 700; font-size: 17px"
                  >Filter by</span
                >
              </div>
              <div v-on:click="showUIFilter()">
                <img
                  v-if="isShowFilter === true"
                  src="~/assets/images/icon_down_up.svg"
                />
                <img v-else src="~/assets/images/icon_dropdown.svg" />
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row v-if="isShowFilter === true" class="mt-3 mx-0">
          <b-col lg="3" class="mb-3">
            <div class="search-keyword position-relative h-100">
              <input
                v-model="keyName"
                placeholder="Name"
                type="text"
                class="form-control input-keyword h-100"
              />
            </div>
          </b-col>
          <b-col lg="3" sm="3" class="mb-3">
            <div class="search-keyword position-relative h-100">
              <input
                v-model="keyPosition"
                placeholder="Position"
                type="text"
                class="form-control input-keyword h-100"
              />
            </div>
          </b-col>
          <b-col lg="3" class="mb-3">
            <div class="search-location d-flex align-items-center">
              <b-form-input
                v-model="keyAddress"
                placeholder="Address"
                prepend-html="<b-icon icon='search'></b-icon>"
                type="text"
              ></b-form-input>
            </div>
          </b-col>
          <b-col lg="3" sm="3" class="mb-3">
            <div class="search-keyword position-relative h-100">
              <input
                v-model="keyLocation"
                placeholder="Location"
                type="text"
                class="form-control input-keyword h-100"
              />
            </div>
          </b-col>
          <b-col lg="3" sm="3">
            <div class="search-keyword position-relative">
              <input
                v-model="keyEmail"
                placeholder="Email"
                type="text"
                class="form-control input-keyword"
              />
            </div>
          </b-col>
          <b-col lg="3" sm="3">
            <div class="search-keyword position-relative">
              <input
                v-model="keyPhone"
                placeholder="Phone"
                type="text"
                class="form-control input-keyword"
              />
            </div>
          </b-col>
          <b-col lg="3" sm="3">
            <div class="search-keyword position-relative">
              <input
                v-model="keySkill"
                placeholder="Skill"
                type="text"
                class="form-control input-keyword"
              />
            </div>
          </b-col>
          <b-col lg="12" class="mt-3">
            <div
              class="d-flex align-items-center justify-content-between h-100"
            >
              <div>
                <b-button class="px-4 button-send-mess"
                  ><img src="~/assets/images/icon_message.svg" />
                  Send Messages
                </b-button>
              </div>
              <div class="h-100">
                <b-button
                  size="sm"
                  style="height: 100%; white-space: nowrap; border-radius: 5px"
                  variant="primary"
                  v-on:click="getALlMemberInGroup()"
                  ><img src="~/assets/images/icon_search.svg" /><span
                    class="pl-2"
                    >Search
                  </span></b-button
                >
                <b-button
                  size="sm"
                  class="ml-3"
                  style="height: 100%; white-space: nowrap; border-radius: 5px"
                  variant="secondary"
                  v-on:click="clearFilter()"
                  ><img src="~/assets/images/icon_clear.svg" /><span
                    class="pl-2"
                    >Clear</span
                  ></b-button
                >
              </div>
            </div>
          </b-col>
        </b-row>
        <!-- end UI Filter-->

        <b-col lg="12" class="mt-5">
          <div>
            <b-table
              id="tableListMember"
              responsive
              v-bind:items="listData"
              v-bind:fields="table"
            >
              <template #cell(id)="data">
                <b-form-checkbox v-model="data.item.id"> </b-form-checkbox>
              </template>
              <template #cell(name)="data">
                <div class="d-flex">
                  <div>
                    <img
                      v-bind:src="data.item.url_avt"
                      style="width: 80px; border-radius: 50%"
                    />
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
              <template #cell(link_contact)="data">
                <div>
                  <div class="custom-linkcontact">
                    <a v-bind:href="data.item.link_contact" target="_blank">{{
                      data.item.link_contact
                    }}</a>
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
        </b-col>
      </div>
    </b-form>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { mapActions, mapGetters } from "vuex";
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
      preload: false,
      infoGroup: {},
      listData: [],
      isShowFilter: true,
      city: null,
      keyName: null,
      keyPosition: null,
      keyEmail: null,
      keyPhone: null,
      keyBirthdayFrom: null,
      keyBirthdayTo: null,
      keyLocation: null,
      keyAddress: null,
      keySkill: null,
      idGroup: null,
    };
  },
  computed: {
    ...mapGetters({
      list_member_group: "group/list_member_group",
    }),
    table() {
      return [
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
          key: "address",
          label: "Address",
        },
        {
          key: "skill",
          label: "Skill",
        },
        // // {
        // //   key: "status",
        // //   label: "Status",
        // // },
        // {
        //   key: "last_update",
        //   label: "Last update",
        // },
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
    list_member_group() {
      this.listData = this.list_member_group.data;
      this.infoGroup = this.list_member_group.detail_group;
    },
  },
  created() {
    this.getALlMemberInGroup();
  },
  methods: {
    ...mapActions({
      detailGroup: "group/detailGroup",
    }),
    showUIFilter() {
      this.isShowFilter = !this.isShowFilter;
    },
    backListGroup() {
      this.$router.push("/group");
    },
    getALlMemberInGroup() {
      this.idGroup = parseInt(this.$nuxt.$route.params.id);
      const dataRequest = {
        dataJson: {
          id: this.idGroup,
          name: this.keyName,
          position: this.keyPosition,
          location: this.keyLocation,
          email: this.keyEmail,
          phone: this.keyPhone,
          address: this.keyAddress,
          start_day: this.keyBirthdayFrom,
          finish_day: this.keyBirthdayTo,
          skills: this.keySkill,
        },
        page: 1,
      };
      this.detailGroup(dataRequest);
    },
    clearFilter() {
      this.idGroup = this.$nuxt.$route.params.id;
      const dataRequest = {
        dataJson: {
          id: this.idGroup,
          name: null,
          position: null,
          location: null,
          email: null,
          phone: null,
          address: null,
          start_day: null,
          finish_day: null,
          skills: null,
        },
        page: 1,
      };
      this.detailGroup(dataRequest);
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
<style>
table {
  display: block;
  overflow-x: auto;
}
#tableListMember tr td:nth-child(1) {
  white-space: nowrap;
}
#tableListMember tr td:nth-child(4) {
  white-space: nowrap;
}
#tableListMember tr td:nth-child(5) {
  white-space: nowrap;
}
</style>
