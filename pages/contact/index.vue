<template>
  <div class="hrJob">
    <HRPreLoad v-bind:preload="preload" />
    <div class="d-xl-none">
      <!-- <div class="display-icon-sidebar pb-4 border-none">
        <b-icon
          v-b-toggle.sidebar-1
          class="hrJob-icon-filter"
          icon="filter"
          role="button"
          aria-hidden="true"
        ></b-icon>
      </div> -->
      <b-sidebar id="sidebar-1" class="bg-white" shadow>
        <div class="px-3 py-2 bg-white"></div>
      </b-sidebar>
    </div>
    <b-container fluid class="my-5">
      <b-row style="padding: 1% 8%">
        <div class="d-flex w-100 align-items-center justify-content-between">
          <b-button
            v-b-modal.modal-create-group
            class="px-4 mr-3 button-new-crawl"
          >
            <img src="~/assets/images/icon_import_contact.svg" />Import Contact
          </b-button>
          <b-button class="px-4 button-send-mess"
            ><img src="~/assets/images/icon_message.svg" />
            Send Messages
          </b-button>
        </div>
        <b-col lg="12" class="p-3 mt-3" style="background-color: white">
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

          <!-- UI Filter-->
          <b-row v-if="isShowFilter === true" class="w-100 ml-0">
            <b-col lg="3" class="mb-3">
              <div
                class="search-location d-flex align-items-center"
                style="border: 1px solid #ced4da"
              >
                <v-select
                  v-model="city"
                  v-bind:options="optionTypeCrawl"
                  label="text"
                  v-bind:reduce="(label) => label.id"
                  class="w-100 ml-1"
                  v-bind:placeholder="$t('common.location')"
                ></v-select>
              </div>
            </b-col>
            <b-col lg="3" class="mb-3">
              <div class="search-keyword position-relative h-100">
                <input
                  v-model="keyWord"
                  placeholder="Name"
                  type="text"
                  class="form-control input-keyword h-100"
                />
              </div>
            </b-col>
            <b-col lg="2" sm="3" class="mb-3">
              <div class="search-keyword position-relative h-100">
                <input
                  v-model="keyWord"
                  placeholder="Position"
                  type="text"
                  class="form-control input-keyword h-100"
                />
              </div>
            </b-col>
            <b-col lg="2" sm="3" class="mb-3">
              <div
                class="search-location d-flex align-items-center"
                style="border: 1px solid #ced4da"
              >
                <v-select
                  v-model="city"
                  v-bind:options="listLocation"
                  label="text"
                  v-bind:reduce="(label) => label.id"
                  class="w-100 ml-1"
                  v-bind:placeholder="$t('common.location')"
                ></v-select>
              </div>
            </b-col>
            <b-col lg="2" sm="3" class="mb-3">
              <div class="search-keyword position-relative h-100">
                <input
                  v-model="keyWord"
                  placeholder="Email"
                  type="text"
                  class="form-control input-keyword h-100"
                />
              </div>
            </b-col>
            <b-col lg="3" sm="3">
              <div class="search-keyword position-relative h-100">
                <input
                  v-model="keyWord"
                  placeholder="Phone"
                  type="text"
                  class="form-control input-keyword h-100"
                />
              </div>
            </b-col>
            <b-col lg="3">
              <div class="search-keyword position-relative h-100">
                <input
                  v-model="keyWord"
                  placeholder="Address"
                  type="text"
                  class="form-control input-keyword h-100"
                />
              </div>
            </b-col>
            <b-col lg="2">
              <div
                class="search-location d-flex align-items-center"
                style="border: 1px solid #ced4da"
              >
                <v-select
                  v-model="city"
                  v-bind:options="listStatus"
                  label="text"
                  class="w-100 ml-1"
                  placeholder="Status"
                ></v-select>
              </div>
            </b-col>
            <b-col lg="4">
              <div class="search-location d-flex align-items-center w-100">
                Birthday From
                <div class="d-flex h-100">
                  <div>
                    <v-date-picker
                      v-model="date"
                      class="inline-block w-100 h-100"
                    >
                      <template #default="{ inputValue, togglePopover }">
                        <div class="d-flex items-center h-100">
                          <input
                            v-bind:value="inputValue"
                            class="bg-white text-gray-700 w-100 py-1 px-2 appearance-none border rounded-r focus:outline-none focus:border-blue-500"
                            readonly
                            v-on:click="togglePopover()"
                          />
                          <button
                            class="p-2 px-3 bg-blue-100 border border-blue-200 hover:bg-blue-200 text-blue-600 rounded-l focus:bg-blue-500 focus:text-white focus:border-blue-500 focus:outline-none"
                            v-on:click="togglePopover()"
                          >
                            <b-icon
                              icon="calendar"
                              style="font-size: 20px"
                            ></b-icon>
                          </button>
                        </div>
                      </template>
                    </v-date-picker>
                  </div>
                  <div class="ml-3">
                    <v-date-picker
                      v-model="date"
                      class="inline-block w-100 h-100"
                    >
                      <template #default="{ inputValue, togglePopover }">
                        <div class="d-flex items-center h-100">
                          <input
                            v-bind:value="inputValue"
                            class="bg-white text-gray-700 w-100 py-1 px-2 appearance-none border rounded-r focus:outline-none focus:border-blue-500"
                            readonly
                            v-on:click="togglePopover()"
                          />
                          <button
                            class="p-2 px-3 bg-blue-100 border border-blue-200 hover:bg-blue-200 text-blue-600 rounded-l focus:bg-blue-500 focus:text-white focus:border-blue-500 focus:outline-none"
                            v-on:click="togglePopover()"
                          >
                            <b-icon
                              icon="calendar"
                              style="font-size: 20px"
                            ></b-icon>
                          </button>
                        </div>
                      </template>
                    </v-date-picker>
                  </div>
                </div>
              </div>
            </b-col>
            <b-col lg="12">
              <div
                class="d-flex align-items-center py-2 hrJob-top-popular mt-2 justify-content-end"
              >
                <b-button
                  size="sm"
                  style="height: 100%; white-space: nowrap"
                  variant="primary"
                  ><b-icon icon="search"></b-icon
                  ><span class="pl-2">Search </span></b-button
                >
                <b-button
                  size="sm"
                  class="ml-3"
                  style="height: 100%; white-space: nowrap"
                  variant="secondary"
                  ><b-icon icon="arrow-repeat"></b-icon
                  ><span class="pl-2">Clear</span></b-button
                >
              </div>
            </b-col>
          </b-row>
          <!-- end UI Filter-->

          <div>
            <b-table responsive v-bind:items="listData" v-bind:fields="table">
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
                        <div class="bg-box">
                          <img src="~/assets/images/archive_down.svg" />
                        </div>
                        <div class="ml-2 mt-1">
                          <p>New Connect</p>
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
                        <div class="bg-trash">
                          <b-icon icon="trash"></b-icon>
                        </div>
                        <div class="ml-2 mt-1">
                          <p>Remove</p>
                        </div>
                      </div>
                    </b-dropdown-item>
                  </b-dropdown>
                </div>
              </template>
            </b-table>
          </div>
        </b-col>
      </b-row>

      <!-- modal new group-->
      <b-modal
        id="modal-create-group"
        size="lg"
        header-class="modalHeader py-2"
        body-class="custom-body py-2"
        hide-footer
      >
        <template #modal-header>
          <div class="h-100 w-100" style="color: white; text-align: center">
            <h5><img src="~/assets/images/icon_new_group.svg" />New Group</h5>
          </div>
        </template>
        <template #default="{}">
          <div class="row p-3">
            <div
              class="p-3 col-lg-6"
              style="border-right: 1px solid #d9d9d9; background-color: #fbfbfb"
            >
              <div style="color: #3461b6; font-size: 16px; font-weight: 500">
                Crawl Dev Front-End 1
              </div>
              <div style="font-size: 12px">
                Create Time: 2022-11-16 14:41:51
              </div>
              <div style="font-size: 12px">
                Finish Time: 2022-11-16 14:41:51
              </div>
            </div>
            <div class="p-3 col-lg-6" style="background-color: #fbfbfb">
              <div class="d-flex">
                <div style="font-size: 14px; font-weight: 500">Fillter by:</div>
                <div class="ml-3">
                  <div style="font-size: 14px">
                    Key search: Frontend Developer
                  </div>
                  <div style="font-size: 14px">Location: Danang</div>
                  <div style="font-size: 14px">Degree: College degree</div>
                  <div style="font-size: 14px">
                    Number Selected: <span style="font-weight: 600">12</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12 mt-3">
              <div class="d-flex hrCreate-label">Group’s name</div>
              <div>
                <input
                  v-model="keyWord"
                  type="text"
                  class="form-control input-keyword h-100 mt-2"
                />
              </div>
            </div>
            <div class="col-lg-12 mt-3 text-center">
              <b-button
                size="sm"
                style="height: 100%; white-space: nowrap"
                variant="secondary"
                v-on:click="hideModalCreate()"
                ><span class="">Cancel</span></b-button
              >
              <b-button
                size="sm"
                class="ml-3"
                style="height: 100%; white-space: nowrap"
                variant="primary"
                v-on:click="createGroup()"
                ><span class="">Create Group </span></b-button
              >
            </div>
          </div>
        </template>
      </b-modal>
      <!-- end modal new group-->

      <!-- modal add member group-->
      <b-modal
        id="modal-add-member"
        size="lg"
        header-class="modalHeader py-2"
        body-class="custom-body py-2"
        hide-footer
      >
        <template #modal-header>
          <div class="h-100 w-100" style="color: white; text-align: center">
            <h5>
              <img src="~/assets/images/icon_add_group.svg" />ADD TO GROUP
            </h5>
          </div>
        </template>
        <template #default="{}">
          <div class="row p-3 w-100">
            <div class="col-lg-12 mt-3 px-5">
              <div class="d-flex hrCreate-label">Search Group</div>
              <div>
                <v-select
                  v-model="city"
                  v-bind:options="optionTypeCrawl"
                  label="text"
                  v-bind:reduce="(label) => label.id"
                  class="w-100 mt-3"
                  placeholder="Group's name"
                ></v-select>
              </div>
            </div>
            <div class="col-lg-12 mt-4">
              <div class="d-flex justify-content-center">
                <div
                  class="p-3"
                  style="border: 1px solid #c7c7c7; border-radius: 15px"
                >
                  <img src="~/assets/images/image-member.svg" />
                  <div class="mt-3" style="font-weight: 600">
                    <span>Fillter by:</span>
                  </div>
                  <div class="mt-3">
                    <ul>
                      <li class="mt-2">Search key: Frontend Developer</li>
                      <li class="mt-2">Location: Danang</li>
                      <li class="mt-2">Degree: College degree</li>
                      <li class="mt-2">
                        Number Selected:
                        <span style="font-weight: 600">12</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12 mt-3 text-center">
              <b-button
                size="sm"
                style="height: 100%; white-space: nowrap"
                variant="secondary"
                class="px-3 py-2"
                v-on:click="hideModalAdd()"
                ><span class="">Cancel</span></b-button
              >
              <b-button
                size="sm"
                class="ml-3 button-add-group px-3 py-2"
                style="white-space: nowrap"
                variant="primary"
                v-on:click="addMemberGroup()"
                >Add</b-button
              >
            </div>
          </div>
        </template>
      </b-modal>
    </b-container>
  </div>
</template>
<script>
import HRPreLoad from "~/components/Common/HRPreLoad/index.vue";
export default {
  name: "ShareJob",
  components: {
    HRPreLoad,
  },
  layout: "home",
  data() {
    return {
      preload: false,
      listConnect: [
        {
          id: 1,
          title: "Connect Dev Front-End 1",
          email: "huuphuongtp@gmail.com",
          nominee: "Fontend",
          people: "People",
          location: "Vietnam",
          messsage: "Hi. I’m Phuong, nice to connect",
          create_date: "2022-11-16  14:41:51",
          finish_date: "2022-11-18  14:41:51",
          number_connect: 20,
        },
        {
          id: 2,
          title: "Connect Dev Front-End 1",
          email: "huuphuongtp@gmail.com",
          nominee: "Fontend",
          people: "People",
          location: "Vietnam",
          messsage: "Hi. I’m Phuong, nice to connect",
          create_date: "2022-11-16  14:41:51",
          finish_date: "",
          number_connect: 9,
        },
        {
          id: 3,
          title: "Connect Dev Front-End 1",
          email: "huuphuongtp@gmail.com",
          nominee: "Fontend",
          people: "People",
          location: "Vietnam",
          messsage: "Hi. I’m Phuong, nice to connect",
          create_date: "2022-11-16  14:41:51",
          finish_date: "",
          number_connect: 10,
        },
        {
          id: 4,
          title: "Connect Dev Front-End 1",
          email: "huuphuongtp@gmail.com",
          nominee: "Fontend",
          people: "People",
          location: "Vietnam",
          messsage: "Hi. I’m Phuong, nice to connect",
          create_date: "2022-11-16  14:41:51",
          finish_date: "2022-11-18  14:41:51",
          number_connect: 15,
        },
      ],
      listStatus: [
        {
          value: 0,
          text: "Denied",
        },
        {
          value: 1,
          text: "Wating",
        },
        {
          value: 2,
          text: "Accepted",
        },
      ],
      createTime: null,
      date: new Date(),
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
      listLocation: [
        { value: 1, text: "Hồ Chí Minh" },
        { value: 2, text: "Đà Nẵng" },
        { value: 3, text: "Hà Nội" },
      ],
      optionTypeCrawl: [
        { value: 1, text: "Linkedn" },
        { value: 2, text: "Faceboook" },
        { value: 3, text: "Zalo" },
      ],
      selected: [],
      selectAll: false,
      checkedConnect: 1,
      city: null,
      location: null,
      keyWord: null,
      isShow: false,
      keyUserConnect: null,
      isShowFilter: true,
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
  watch: {},
  // eslint-disable-next-line vue/order-in-components
  created() {},
  methods: {
    select() {
      this.selected = [];
      if (!this.selectAll) {
        for (const i in this.listData) {
          this.selected.push(this.listData[i].jobId);
        }
      }
    },
    formatPrice(data) {
      if (data !== null && data !== "" && data !== undefined) {
        return new Intl.NumberFormat("de-DE").format(data);
      } else {
        return 0;
      }
    },
    selectedConnect(idConnect) {
      this.checkedConnect = idConnect;
    },
    screenAddConnect() {
      this.$router.push("/connect/create");
    },
    showModalSearch() {
      this.isShow = !this.isShow;
    },
    hideModalCreate() {
      this.$bvModal.hide("modal-create-group");
    },
    async createGroup() {
      await this.$bvModal.hide("modal-create-group");
      await this.$bvModal.show("modal-add-member");
    },
    hideModalAdd() {
      this.$bvModal.hide("modal-add-member");
    },
    async addMemberGroup() {
      await this.$bvModal.hide("modal-add-member");
    },
    showUIFilter() {
      this.isShowFilter = !this.isShowFilter;
    },
  },
  auth: false,
};
</script>
<style lang="scss" scoped>
@import "~/assets/scss/sharejob/job.scss";
.number-connect {
  border-radius: 5px;
  font-size: 30px;
  background-color: #e8e8e8;
  width: 70px;
  height: 70px;
}
.margin-top {
  margin-top: 5px;
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
.check-connect {
  background-color: white !important;
}
.custom-modal-filter {
  position: absolute;
  background-color: white;
  z-index: 100;
  border: 1px solid #dadada;
}
.button-send-mess {
  background-color: #ffa800;
  border-color: unset;
  border-color: #ffa800;
}
.button-new-crawl {
  background-color: #2475c0;
  color: white;
  border-color: #2475c0;
}
.hrCreate {
  background: #f1f2f4;
  &-label {
    font-weight: 400;
    font-size: 15px;
    display: flex;

    &::before {
      content: "";
      background: #2475c0;
      display: block;
      height: 20px;
      border-radius: 10px;
      width: 5px;
      margin-right: 5px;
    }
  }
}
.button-add-group {
  background-color: #2993f5;
}
::placeholder {
  color: #a4a4a4;
  opacity: 1; /* Firefox */
}
</style>
<style>
.modalHeader {
  background-color: #0a66c2;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.modal-content {
  -webkit-border-radius: 0px !important;
  -moz-border-radius: 0px !important;
  border-radius: 10px !important;
}
.custom-body {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5%;
  margin-right: 5%;
}
</style>
