<template>
  <div class="hrJob" style="background: #e0e3e8">
    <HRPreLoad v-bind:preload="preload" />
    <div class="d-xl-none">
      <b-sidebar id="sidebar-1" class="bg-white" shadow>
        <div class="px-3 py-2 bg-white"></div>
      </b-sidebar>
    </div>
    <div class="pt-5">
      <h3 class="hrJob-title">List Connect</h3>
    </div>
    <b-container fluid class="mb-5" style="background-color: #f3f3f3">
      <b-row class="my-5 mx-2">
        <b-col class="p-2 h-100" lg="3" sm="12" style="background-color: white">
          <div class="d-flex justify-content-between pt-2">
            <div class="search-keyword position-relative w-100">
              <b-input-group>
                <b-form-input
                  v-model="keyWord"
                  placeholder="Search"
                  prepend-html="<b-icon icon='search'></b-icon>"
                  type="text"
                ></b-form-input>
                <b-input-group-append>
                  <b-input-group-text
                    class="p-2"
                    style="background-color: white; font-size: 15px"
                    v-on:click="showModalSearch()"
                  >
                    <b-icon icon="chevron-compact-down" />
                  </b-input-group-text>
                </b-input-group-append>
              </b-input-group>
            </div>
            <div class="ml-3">
              <b-button
                size="sm"
                style="height: 100%; white-space: nowrap"
                variant="primary"
                v-on:click="screenAddConnect()"
                ><b-icon icon="plus-lg"></b-icon
                ><span class="pl-2">New Connect</span></b-button
              >
            </div>
          </div>
          <div class="p-3 custom-modal-filter" v-bind:hidden="isShow !== true">
            <span style="font-weight: 700">Filter by</span>
            <div>
              <div class="row mt-3">
                <div class="col-lg-6">
                  <v-date-picker
                    v-model="start_day"
                    class="inline-block w-100 h-100"
                    v-bind:update-on-input="false"
                  >
                    <template #default="{ inputValue, inputEvents }">
                      <div class="d-flex items-center h-100">
                        <input
                          class="bg-white border w-100 py-1 px-2"
                          v-bind:value="inputValue"
                          v-on="inputEvents"
                        />
                        <button
                          class="p-2 px-3 bg-blue-100 border border-blue-200 hover:bg-blue-200 text-blue-600 rounded-l focus:bg-blue-500 focus:text-white focus:border-blue-500 focus:outline-none"
                          v-on="inputEvents"
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
                <div class="col-lg-6">
                  <v-date-picker
                    v-model="finish_day"
                    class="inline-block w-100 h-100"
                    v-bind:update-on-input="false"
                  >
                    <template #default="{ inputValue, inputEvents }">
                      <div class="d-flex items-center h-100">
                        <input
                          class="bg-white border w-100 py-1 px-2"
                          v-bind:value="inputValue"
                          v-on="inputEvents"
                        />
                        <button
                          class="p-2 px-3 bg-blue-100 border border-blue-200 hover:bg-blue-200 text-blue-600 rounded-l focus:bg-blue-500 focus:text-white focus:border-blue-500 focus:outline-none"
                          v-on="inputEvents"
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
                <div class="col-lg-6 mt-2">
                  <input
                    v-model="key"
                    placeholder="Key"
                    type="text"
                    class="form-control input-keyword h-100"
                  />
                </div>
                <div class="col-lg-6 mt-2">
                  <input
                    v-model="keyFilter"
                    placeholder="Filter"
                    type="text"
                    class="form-control input-keyword h-100"
                  />
                </div>
                <div class="col-lg-12 mt-2">
                  <input
                    v-model="keyLocation"
                    placeholder="Location"
                    type="text"
                    class="form-control input-keyword h-100"
                  />
                </div>
                <div class="col-lg-12 mt-2">
                  <input
                    v-model="keyName_Connect"
                    placeholder="Name Connect"
                    type="text"
                    class="form-control input-keyword h-100"
                  />
                </div>
              </div>
              <div class="mt-3">
                <div class="d-flex justify-content-end">
                  <b-button
                    style="background-color: #a1a1a1; color: white"
                    class="px-4 mr-3"
                    v-on:click="clearFilterConnect()"
                  >
                    Clear
                  </b-button>
                  <b-button
                    class="px-4"
                    style="background-color: #2993f5; border-color: unset"
                    v-on:click="filterConnect()"
                    >Filter
                  </b-button>
                </div>
              </div>
            </div>
          </div>
          <div v-if="listConnects.length > 0">
            <div
              v-for="(item, index) in listConnects"
              v-bind:key="index"
              class="d-flex h-100 mt-2 w-100"
            >
              <div
                v-bind:class="
                  item.id === checkedConnect ? 'clicked-connect' : ''
                "
                class="click-connect"
                style=""
              ></div>
              <div
                v-bind:class="item.id === checkedConnect ? 'check-connect' : ''"
                style="background: #e0e3e8; width: 100%"
                v-on:click="selectedConnect(item.id)"
              >
                <div class="p-3">
                  <div
                    class="row pb-2"
                    style="border-bottom: 1px solid #d6d6d6"
                  >
                    <div class="col-7">
                      <span class="" style="color: #3461b6; font-size: 20px">{{
                        item.name_category
                      }}</span>
                      <div>
                        <div class="mt-2" style="font-size: 15px">
                          Create Time:
                          {{ new Date(item.create_time).toLocaleDateString() }}
                        </div>
                        <div class="mt-3" style="font-size: 15px">
                          Finish Time:
                          {{ new Date(item.finish_time).toLocaleDateString() }}
                        </div>
                      </div>
                    </div>
                    <div
                      class="w-100 col-5 px-2"
                      style="
                        display: flex;
                        justify-content: center;
                        align-items: center;
                      "
                    >
                      <div
                        class="py-3 number-connect d-flex align-items-center justify-content-center"
                        v-bind:class="
                          item.id === checkedConnect ? 'clicked-connect' : ''
                        "
                        style="
                          border-radius: 5px;
                          font-size: 30px;
                          background-color: #fff;
                          width: 100%;
                          height: 70px;
                          color: #2475c0;
                          align-items: center;
                        "
                      >
                        <span
                          v-if="parseInt(item.number_accept) < 10"
                          style="justify-content: center"
                        >
                          0{{ item.number_accept }}</span
                        >
                        <span v-else style="justify-content: center">
                          {{ item.number_accept }}</span
                        >
                        <span>/</span>
                        <span
                          v-if="parseInt(item.number_connect) < 10"
                          style="justify-content: center"
                        >
                          0{{ item.number_connect }}</span
                        >
                        <span v-else style="justify-content: center">{{
                          item.number_connect
                        }}</span>
                        <span>/</span>
                        <span
                          v-if="parseInt(item.limit_connect) < 10"
                          style="justify-content: center"
                        >
                          0{{ item.limit_connect }}</span
                        >
                        <span v-else style="justify-content: center">{{
                          item.limit_connect
                        }}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="mt-3">
                      <div>
                        <b-icon style="color: #2475c0" icon="person"></b-icon
                        ><span class="ml-1">{{ item.user_connect }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="row mt-2 px-3">
                    <div class="col-4 col-lg-4 col-md-6 px-0">
                      <img src="~/assets/images/key.svg" /><span class="ml-1">{{
                        item.search_key
                      }}</span>
                    </div>
                    <div class="col-4 col-lg-4 col-md-6 px-0">
                      <img src="~/assets/images/Vector1.svg" /><span
                        class="ml-1"
                        >{{ item.filter }}</span
                      >
                    </div>
                    <div class="col-4 col-lg-4 col-md-6 px-0">
                      <img src="~/assets/images/location.svg" /><span
                        class="ml-1"
                        >{{ item.locations }}</span
                      >
                    </div>
                  </div>
                  <div class="mt-2">
                    <div>
                      <img src="~/assets/images/icon-mess.svg" />
                      <span style="color: #3461b6">{{ item.message }}</span>
                    </div>
                  </div>

                  <div class="row">
                    <div class="mt-2 col-6">
                      <div>
                        <b-button
                          variant="primary"
                          v-on:click="acctionReconnect(item)"
                          >Reconnect</b-button
                        >
                        <b-button
                          v-if="item.number_accept > 0"
                          variant="primary"
                          v-on:click="actionCrawlConnect(item.id)"
                          >Crawl</b-button
                        >
                      </div>
                    </div>
                    <div
                      class="col-6"
                      style="
                        align-items: center;
                        justify-content: center;
                        display: flex;
                      "
                    >
                      <div
                        v-if="item.status === 'ERROR'"
                        class="status_connect"
                      >
                        <img
                          style="width: 20px"
                          src="../../assets/images/icon_error.png"
                        />
                        <span style="color: red" class="ml-2">
                          {{ item.status }}<br /><span style="color: red">{{
                            item.log
                          }}</span></span
                        >
                      </div>
                      <div
                        v-if="item.status === 'RUNNING'"
                        class="status_connect"
                      >
                        <img
                          style="width: 20px"
                          src="../../assets/images/icon_running.png"
                        />
                        <span class="ml-2" style="color: orange">{{
                          item.status
                        }}</span>
                      </div>
                      <div
                        v-if="item.status === 'FINISH'"
                        class="status_connect"
                      >
                        <img
                          style="width: 20px"
                          src="../../assets/images/icon_success.png"
                        />
                        <span class="ml-2" style="color: green">{{
                          item.status
                        }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <HRPagination
              v-if="lastPage > 1"
              class="mt-3"
              v-bind:totalpage="lastPage"
              v-bind:current-page="currentPage"
              v-on:update-page="updatePage"
            />
          </div>
        </b-col>
        <b-col
          lg="9"
          sm="12"
          class="h-100 px-2"
          style="background-color: #f3f3f3"
        >
          <div class="p-3" style="background-color: white">
            <div class="row">
              <b-col lg="3">
                <div class="search-keyword position-relative h-100">
                  <input
                    v-model="keySeachName"
                    placeholder="Name"
                    type="text"
                    class="form-control input-keyword h-100"
                  />
                </div>
              </b-col>
              <b-col lg="3">
                <div class="search-keyword position-relative h-100">
                  <input
                    v-model="keySeachPosition"
                    placeholder="Position"
                    type="text"
                    class="form-control input-keyword h-100"
                  />
                </div>
              </b-col>
              <b-col lg="3">
                <div
                  class="search-location d-flex align-items-center"
                  style="border: 1px solid #ced4da"
                >
                  <input
                    v-model="keySeachLocation"
                    placeholder="Location"
                    type="text"
                    class="form-control input-keyword h-100"
                  />
                </div>
              </b-col>
              <b-col lg="3">
                <div
                  class="search-location d-flex align-items-center"
                  style="border: 1px solid #ced4da"
                >
                  <v-select
                    v-model="keySeachStatus"
                    v-bind:options="listStatus"
                    label="text"
                    class="w-100 ml-1"
                    placeholder="Status"
                  ></v-select>
                </div>
              </b-col>
              <b-col lg="12" class="mb-3">
                <div
                  class="row pt-3 align-items-center"
                  style="justify-content: space-between"
                >
                  <div class="font-weight-bold col-lg-6 col-sm-12">
                    Total Record:
                    <span>{{ dataUserConnect.total_records }}</span>
                  </div>
                  <div class="col-lg-6 col-sm-12">
                    <div class="row">
                      <div class="px-2 col-lg-4 col-sm-3">
                        <b-button
                          size="sm"
                          style=""
                          variant="primary"
                          class="button-search"
                          v-on:click="searchUserConnect()"
                          ><b-icon icon="search"></b-icon
                          ><span class="pl-2">Search </span></b-button
                        >
                      </div>
                      <div class="px-2 col-lg-4 col-sm-3">
                        <b-button
                          size="sm"
                          class="button-clear"
                          variant="secondary"
                          ><b-icon icon="arrow-repeat"></b-icon
                          ><span class="pl-2">Clear</span></b-button
                        >
                      </div>
                      <div class="px-2 col-lg-4 col-sm-3">
                        <b-button
                          size="sm"
                          class="button-clear"
                          variant="secondary"
                          ><img src="~/assets/images/icon_clear.svg" /><span
                            class="pl-2"
                            >Resfesh</span
                          ></b-button
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </b-col>
            </div>
            <div class="mt-1">
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
                      <img
                        v-bind:src="data.item.url_avt"
                        style="width: 80px; border-radius: 50%"
                      />
                    </div>
                    <div class="ml-2">
                      <div style="font-weight: 600">
                        <span style="color: #0079e9">{{ data.item.name }}</span>
                      </div>
                      <div>
                        {{ data.item.position }}
                      </div>
                      <div>
                        {{ data.item.location }}
                      </div>
                    </div>
                  </div>
                </template>
                <template #cell(link_contact)="data">
                  <div>
                    <div>
                      <a v-bind:href="data.item.link_contact" target="_blank">{{
                        data.item.link_contact
                      }}</a>
                    </div>
                  </div>
                </template>
                <template #cell(status)="data">
                  <div
                    v-if="data.item.status === 0"
                    class="color-waitting p-2 d-flex justify-content-center"
                  >
                    <span> Waitting </span>
                  </div>
                  <div
                    v-if="data.item.status === 1"
                    class="color-accepted p-2 d-flex justify-content-center"
                  >
                    <span> Accepted </span>
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
                            <img src="~/assets/images/icon_connect_black.svg" />
                          </div>
                          <div class="ml-2 mt-1">
                            <p>Connect</p>
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
                      <b-dropdown-item
                        style="
                          padding-left: 5px !important;
                          padding-right: 5px !important;
                        "
                        v-on:click="refeshUser(data.item.link_contact)"
                      >
                        <div class="d-flex py-2">
                          <div class="bg-trash">
                            <img src="~/assets/images/icon_clear_black.svg" />
                          </div>
                          <div class="ml-2 mt-1">
                            <p>Resfesh</p>
                          </div>
                        </div>
                      </b-dropdown-item>
                    </b-dropdown>
                  </div>
                </template>
              </b-table>
            </div>
            <HRPagination
              v-if="lastPageUserConnect > 1"
              class="mt-3"
              v-bind:totalpage="lastPageUserConnect"
              v-bind:current-page="currentPageUserConnect"
              v-on:update-page="updatePageUserConnect"
            />
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-modal
      id="modal-reconnect"
      size="lg"
      header-class="modalHeader py-2"
      body-class="custom-body py-2"
      hide-footer
    >
      <template #modal-header>
        <div class="h-100 w-100" style="color: white; text-align: center">
          <h5><img src="~/assets/images/icon_add_group.svg" />Reconnect</h5>
        </div>
      </template>
      <template #default="{}">
        <div class="row p-3 w-100">
          <div class="col-lg-12 mt-4">
            <div class="d-flex justify-content-center">
              <div
                class="p-3"
                style="border: 1px solid #c7c7c7; border-radius: 15px"
              >
                <div class="mt-3">
                  <ul>
                    <li class="mt-2">
                      Name Connect: &ensp;<span style="font-weight: 600">{{
                        dataReconnect.name_category
                      }}</span>
                    </li>
                    <li class="mt-2">
                      Email: &ensp;<span style="font-weight: 600">{{
                        dataReconnect.user_connect
                      }}</span>
                    </li>
                    <li class="mt-2">
                      Key: &ensp;<span style="font-weight: 600">{{
                        dataReconnect.search_key
                      }}</span>
                    </li>
                    <li class="mt-2">
                      Filter: &ensp;<span style="font-weight: 600">{{
                        dataReconnect.filter
                      }}</span>
                    </li>
                    <li class="mt-2">
                      Location: &ensp;<span style="font-weight: 600">{{
                        dataReconnect.locations
                      }}</span>
                    </li>
                    <li class="mt-2">
                      <div class="d-flex align-items-center">
                        <span class="text-nowrap">Number Connect: &ensp;</span>
                        <b-form-input
                          v-model="number_reconnect"
                          type="number"
                          onkeypress="return event.keyCode === 8 || event.charCode >= 48 && event.charCode <= 57"
                        />
                      </div>
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
              v-on:click="hideModalReconnect()"
              ><span class="">Cancel</span></b-button
            >
            <b-button
              size="sm"
              class="ml-3 button-add-group px-3 py-2"
              style="white-space: nowrap"
              variant="primary"
              v-on:click="callAPiReconnect()"
              >Add</b-button
            >
          </div>
        </div>
      </template>
    </b-modal>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Cookies from "js-cookie";
import HRPreLoad from "~/components/Common/HRPreLoad/index.vue";
import HRPagination from "~/components/Common/HRPagination/index.vue";
export default {
  components: {
    HRPreLoad,
    HRPagination,
  },
  layout: "home",
  data() {
    return {
      preload: false,
      listConnects: [],
      listStatus: [
        {
          value: 0,
          text: "Denied",
        },
        {
          value: 1,
          text: "Accepted",
        },
      ],
      createTime: null,
      date: new Date(),
      listData: [],
      listLocation: [
        { value: 1, text: "Hồ Chí Minh" },
        { value: 2, text: "Đà Nẵng" },
        { value: 3, text: "Hà Nội" },
      ],
      selected: [],
      selectAll: false,
      checkedConnect: 1,
      city: null,
      location: null,
      keyWord: null,
      isShow: false,
      keyFilter: null,
      keyLocation: null,
      lastPage: 0,
      currentPage: 0,
      lastPageUserConnect: 0,
      currentPageUserConnect: 0,
      start_day: null,
      finish_day: null,
      keySeachName: null,
      keySeachPosition: null,
      keySeachLocation: null,
      keySeachStatus: null,
      key: null,
      infoAccountCrawl: null,
      dataReconnect: null,
      number_reconnect: 1,
      keyName_Connect: null,
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
    ...mapGetters({
      listConnect: "connect/listConnect",
      dataUserConnect: "connect/dataUserConnect",
      message: "connect/message",
    }),
    table() {
      return [
        {
          key: "name",
          label: "Name/Position/Location",
        },
        {
          key: "link_contact",
          label: "Link Contact",
        },
        {
          key: "create_time",
          label: "Create Time",
        },
        {
          key: "status",
          label: "Status",
          thStyle: "text-align: center",
        },
        {
          key: "action",
          label: null,
        },
      ];
    },
  },
  // mouted() {
  //   if (!process.client) return;
  // },
  watch: {
    async listConnect() {
      this.listConnects = this.listConnect.data;
      if (this.listConnects.length > 0) {
        if (this.listConnects) {
          this.checkedConnect = this.listConnects[0].id;
        }
        this.currentPage = Number(this.listConnect.currentPage) + 1;
        this.lastPage = Number(this.listConnect.total_pages);
        if (this.listConnects) {
          await this.getUserConnectByIdConnect(1, this.listConnects[0].id);
        }
        this.preload = false;
      } else {
        this.$toast.error("Current account has no data", this.optionToast);
        this.listData = [];
        this.lastPageUserConnect = 0;
      }
    },
    dataUserConnect() {
      this.preload = false;
      this.listData = this.dataUserConnect.data;
      this.currentPageUserConnect =
        Number(this.dataUserConnect.currentPage) + 1;
      this.lastPageUserConnect = Number(this.dataUserConnect.total_pages);
    },
  },
  created() {
    if (process.client) {
      // if()
      this.infoAccountCrawl = JSON.parse(
        Cookies.get("InfoAccount_Crawl")
          ? Cookies.get("InfoAccount_Crawl")
          : null
      );
    }
  },
  methods: {
    ...mapActions({
      getListConnect: "connect/getListConnect",
      showDataDetailConnect: "connect/showDataDetailConnect",
      refeshUserCrawl: "connect/refeshUserCrawl",
      filterCategory: "connect/filterCategory",
      updateStatusLinked: "connect/updateStatusLinked",
      reconnect: "connect/reconnect",
      crawl_connect: "connect/crawl_connect",
    }),
    async selectedConnect(idConnect) {
      this.checkedConnect = idConnect;
      await this.getUserConnectByIdConnect(1, this.checkedConnect);
    },
    screenAddConnect() {
      this.$router.push("/connect/create");
    },
    showModalSearch() {
      this.isShow = !this.isShow;
    },
    async getListConnects(idpage) {
      if (this.infoAccountCrawl) {
        const dataRequest = {
          dataJson: {
            email: this.infoAccountCrawl.user_name,
            password: this.infoAccountCrawl.password,
            start_day:
              this.start_day !== null ? this.formatDate(this.start_day) : null,
            finish_day:
              this.finish_day !== null
                ? this.formatDate(this.finish_day)
                : null,
            search_key: this.key,
            filter: this.keyFilter,
            location: this.keyLocation,
          },
          page: idpage,
        };
        await this.filterCategory(dataRequest);
      }
    },
    async updatePage(pageSelect) {
      if (this.infoAccountCrawl) {
        const dataRequest = {
          dataJson: {
            email: this.infoAccountCrawl.user_name,
            password: this.infoAccountCrawl.password,
            start_day:
              this.start_day !== null ? this.formatDate(this.start_day) : null,
            finish_day:
              this.finish_day !== null
                ? this.formatDate(this.finish_day)
                : null,
            search_key: this.key,
            filter: this.keyFilter,
            location: this.keyLocation,
          },
          page: pageSelect,
        };
        if (process.client) {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
          });
        }
        await this.filterCategory(dataRequest);
      }
    },
    async getUserConnectByIdConnect(pageSelect, idCategory) {
      if (this.infoAccountCrawl) {
        const dataRequest = {
          dataJson: {
            email: this.infoAccountCrawl.user_name,
            password: this.infoAccountCrawl.password,
            id_category: idCategory,
            name: this.keySeachName,
            position: this.keySeachPosition,
            location: this.keySeachLocation,
            status: this.keySeachStatus ? this.keySeachStatus.value : null,
          },
          page: pageSelect,
        };
        if (process.client) {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
          });
        }
        await this.showDataDetailConnect(dataRequest);
      }
    },
    async searchUserConnect() {
      const dataRequest = {
        dataJson: {
          email: this.infoAccountCrawl.user_name,
          password: this.infoAccountCrawl.password,
          id_category: this.checkedConnect,
          name: this.keySeachName,
          position: this.keySeachPosition,
          location: this.keySeachLocation,
          status: this.keySeachStatus ? this.keySeachStatus.value : null,
        },
        page: 1,
      };
      if (process.client) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant",
        });
      }
      await this.showDataDetailConnect(dataRequest);
    },
    async updatePageUserConnect(pageSelect) {
      const dataRequest = {
        dataJson: {
          email: this.infoAccountCrawl.user_name,
          password: this.infoAccountCrawl.password,
          id_category: this.checkedConnect,
          name: this.keySeachName,
          position: this.keySeachPosition,
          location: this.keySeachLocation,
          status: this.keySeachStatus ? this.keySeachStatus.value : null,
        },
        page: pageSelect,
      };
      if (process.client) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant",
        });
      }
      await this.showDataDetailConnect(dataRequest);
    },
    async refeshUser(linkContact) {
      const dataRequest = {
        email: this.infoAccountCrawl.user_name,
        password: this.infoAccountCrawl.password,
        link_contact: linkContact,
      };
      await this.updateStatusLinked(dataRequest);
      await this.getUserConnectByIdConnect(1, this.checkedConnect);
    },
    async filterConnect() {
      const dataRequest = {
        dataJson: {
          email: this.infoAccountCrawl.user_name,
          password: this.infoAccountCrawl.password,
          start_day:
            this.start_day !== null ? this.formatDate(this.start_day) : null,
          finish_day:
            this.finish_day !== null ? this.formatDate(this.finish_day) : null,
          search_key: this.key,
          filter: this.keyFilter,
          location: this.keyLocation,
          name_category: this.keyName_Connect,
        },
        page: 1,
      };
      await this.filterCategory(dataRequest);
    },
    async clearFilterConnect() {
      this.start_day = null;
      this.finish_day = null;
      this.keyFilter = null;
      this.keyLocation = null;
      this.key = null;
      const dataRequest = {
        dataJson: {
          email: this.infoAccountCrawl.user_name,
          password: this.infoAccountCrawl.password,
          start_day: null,
          finish_day: null,
          search_key: null,
          filter: null,
          location: null,
          name_category: null,
        },
        page: 1,
      };
      this.isShow = !this.isShow;
      await this.filterCategory(dataRequest);
    },
    acctionReconnect(item) {
      this.dataReconnect = item;
      this.$bvModal.show("modal-reconnect");
    },
    hideModalReconnect() {
      this.$bvModal.hide("modal-reconnect");
    },
    async callAPiReconnect() {
      const dataRequest = {
        email: this.infoAccountCrawl.user_name,
        password: this.infoAccountCrawl.password,
        id: this.dataReconnect.id,
        search_key: this.dataReconnect.search_key,
        message: this.dataReconnect.message,
        limit: parseInt(this.number_reconnect),
        filter: this.dataReconnect.filter,
        locations: this.dataReconnect.locations,
        name_category: this.dataReconnect.name_category,
      };
      await this.reconnect(dataRequest);
      await this.getListConnects(1);
      await this.$bvModal.hide("modal-reconnect");
    },
    formatDate(date) {
      const d = new Date(date);
      let month = "" + (d.getMonth() + 1);
      let day = "" + d.getDate();
      const year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    },
    async actionCrawlConnect(id) {
      const dataRequest = {
        email: "nhinp11974@gmail.com",
        password: "Nhi12312",
        id_category: id,
      };
      const dataRepond = await this.crawl_connect(dataRequest);
      if (dataRepond.success === true) {
        this.$toast.success(dataRepond.message, this.optionToast);
      } else {
        this.$toast.error(dataRepond.message, this.optionToast);
      }
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

.color-accepted {
  background-color: #d0f5b9b8;
  color: #04ad00;
  border-radius: 5px;
}

.color-waiting {
  background-color: #ffe1a8;
  color: #ef9e00;
  border-radius: 5px;
}

.color-waitting {
  background-color: #ffe1a8;
  color: #ef9e00;
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

.click-connect {
  width: 10px;
  background-color: #e0e3e8;
}

.clicked-connect {
  border-top-right-radius: 15px 15px;
  border-bottom-right-radius: 15px 15px;
  background-color: #3461b6;
}

.button-search {
  height: 100%;
  white-space: nowrap;
  background-color: #2993f5;
  border-color: #2993f5;
}

.button-clear {
  height: 100%;
  white-space: nowrap;
  background-color: #c9c9c9;
  border-color: #c9c9c9;
}

.clicked-connect {
  background-color: #2475c0 !important;
  color: #ffffff !important;
}
.status_connect {
  display: flex;
  align-items: center;
}
</style>
