<template>
  <div class="hrJob">
    <HRPreLoad v-bind:preload="preload" />
    <div class="pt-5">
      <h3 class="hrJob-title">List Group</h3>
    </div>
    <div class="d-xl-none">
      <b-sidebar id="sidebar-1" class="bg-white" shadow>
        <div class="px-3 py-2 bg-white"></div>
      </b-sidebar>
    </div>
    <b-container fluid class="my-5">
      <b-row style="padding: 1% 8%">
        <b-col lg="12" class="p-3 mt-3" style="background-color: white">
          <b-col lg="12" class="mb-3">
            <div class="d-flex align-items-center justify-content-between">
              <div>
                <span style="color: #3461b6; font-weight: 700; font-size: 17px"
                  >Advanced Search</span
                >
              </div>
            </div>
          </b-col>
          <b-row class="w-100 ml-0">
            <b-col lg="3">
              <div class="search-keyword position-relative h-100">
                <input
                  v-model="keyNameGroup"
                  placeholder="Group's name"
                  type="text"
                  class="form-control input-keyword h-100"
                />
              </div>
            </b-col>
            <b-col lg="3">
              <div class="search-keyword position-relative h-100">
                <input
                  v-model="keyNumberMember"
                  placeholder="Number Member"
                  type="text"
                  class="form-control input-keyword h-100"
                />
              </div>
            </b-col>
            <b-col lg="2">
              <div class="search-keyword position-relative h-100">
                <input
                  v-model="keyPosition"
                  placeholder="Position"
                  type="text"
                  class="form-control input-keyword h-100"
                />
              </div>
            </b-col>
            <b-col lg="2">
              <div class="search-keyword position-relative h-100">
                <input
                  v-model="keyLoaction"
                  placeholder="Location"
                  type="text"
                  class="form-control input-keyword h-100"
                />
              </div>
            </b-col>
            <b-col lg="2">
              <div
                class="d-flex align-items-center hrJob-top-popular justify-content-end mt-0"
              >
                <b-button
                  size="sm"
                  style="height: 100%; white-space: nowrap"
                  variant="primary"
                  v-on:click="getListGroup()"
                  ><img
                    src="~/assets/images/icon-search.svg"
                    style="width: 28px"
                  /><span class="pl-2">Search </span></b-button
                >
                <b-button
                  size="sm"
                  class="ml-3"
                  style="height: 100%; white-space: nowrap"
                  variant="secondary"
                  v-on:click="clearFilter()"
                  ><img src="~/assets/images/icon-restart.svg" /><span
                    class="pl-2"
                    >Clear</span
                  ></b-button
                >
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col v-for="(item, index) in listGroups" v-bind:key="index" lg="3">
          <div class="mt-3 p-3 custom-list-group">
            <div class="d-flex justify-content-end w-100">
              <div>
                <img
                  class="w-100"
                  src="~/assets/images/image_background_group.svg"
                />
                <b-avatar-group
                  size="70px"
                  class="px-3"
                  style="position: absolute; top: 90px"
                >
                  <b-avatar
                    v-for="(ele, index) in item.avt_member"
                    v-bind:key="index"
                    v-bind:src="ele"
                  ></b-avatar>
                  <b-avatar v-if="item.more_avt">+{{ item.more_avt }}</b-avatar>
                </b-avatar-group>
              </div>
              <b-dropdown
                size="lg"
                variant="link"
                class="dropdown"
                toggle-class="text-decoration-none"
                style="position: absolute; top: 28px; right: 20px"
                no-caret
              >
                <template #button-content>
                  <div
                    class="bg-dropdown d-flex align-items-center justify-content-center"
                  >
                    <img src="~/assets/images/icon_3cham_trang.svg" />
                  </div>
                </template>
                <b-dropdown-item
                  v-b-modal.edit-member
                  style="
                    padding-left: 5px !important;
                    padding-right: 5px !important;
                  "
                  v-on:click="editGroup(item.id)"
                >
                  <div class="d-flex py-2">
                    <div class="bg-box">
                      <img src="~/assets/images/icon_edit.svg" />
                    </div>
                    <div class="ml-2 mt-1">
                      <p>Edit</p>
                    </div>
                  </div>
                </b-dropdown-item>
                <b-dropdown-item
                  v-b-modal.modal-remove
                  style="
                    padding-left: 5px !important;
                    padding-right: 5px !important;
                  "
                  v-on:click="removeGroup(index)"
                >
                  <div class="d-flex py-2">
                    <div class="bg-trash">
                      <img src="~/assets/images/icon_trash.svg" />
                    </div>
                    <div class="ml-2 mt-1">
                      <p>Remove</p>
                    </div>
                  </div>
                </b-dropdown-item>
              </b-dropdown>
              <div class="custom_name_group">
                {{ item.group_name }}
              </div>
            </div>
            <div class="mt-5" style="font-weight: 600">
              <span>Fillter by:</span>
            </div>
            <div class="mt-3">
              <ul>
                <li class="mt-2">
                  Location:
                  <span style="font-weight: 600">{{ item.location }}</span>
                </li>
                <li class="mt-2">
                  Degree:
                  <span style="font-weight: 600">{{ item.position }}</span>
                </li>
                <li class="mt-2">
                  Number Selected:
                  <span style="font-weight: 600">{{ item.number_member }}</span>
                </li>
              </ul>
            </div>
            <div class="mt-3 text-center">
              <b-button
                class="px-4 button-send-mess"
                v-on:click="sendMail(item.id)"
                ><img src="~/assets/images/icon_message.svg" />
                Send Messages
              </b-button>
            </div>
          </div>
        </b-col>
      </b-row>
      <div>
        <HRPagination
          v-if="lastPage > 1"
          class="mt-3"
          v-bind:totalpage="lastPage"
          v-bind:current-page="currentPage"
          v-on:update-page="updatePage"
        />
      </div>
    </b-container>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Cookies from "js-cookie";
import HRPreLoad from "~/components/Common/HRPreLoad/index.vue";
import HRPagination from "~/components/Common/HRPagination/index.vue";
export default {
  name: "ShareJob",
  components: {
    HRPreLoad,
    HRPagination,
  },
  layout: "home",
  data() {
    return {
      preload: false,
      listGroups: [],
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
      keyNameGroup: null,
      keyNumberMember: null,
      keyPosition: null,
      keyLoaction: null,
      lastPage: 0,
      currentPage: 0,
      nfoAccountCrawl: null,
    };
  },
  computed: {
    ...mapGetters({
      listGroup: "group/listGroup",
    }),
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
    listGroup() {
      this.listGroups = this.listGroup.data;
      this.currentPage = Number(this.listGroup.currentPage) + 1;
      this.lastPage = Number(this.listGroup.total_pages);
    },
  },
  created() {
    this.infoAccountCrawl = JSON.parse(
      Cookies.get("InfoAccount_Crawl") ? Cookies.get("InfoAccount_Crawl") : null
    );
    this.getListGroup();
  },
  methods: {
    ...mapActions({
      showGroup: "group/showGroup",
    }),
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
    editGroup(id) {
      this.$router.push("/group/detail/" + id);
    },
    removeGroup(index) {
      this.listGroup.splice(index, 1);
    },
    sendMail(id) {
      this.$router.push("/message/" + id);
    },
    getListGroup() {
      const dataRequest = {
        dataJson: {
          user_connect: this.infoAccountCrawl.user_name,
          group_name: this.keyNameGroup,
          number_member: this.keyNumberMember,
          location: this.keyLoaction,
          position: this.keyPosition,
        },
        page: 1,
      };
      this.showGroup(dataRequest);
    },
    clearFilter() {
      this.keyNameGroup = null;
      this.keyNumberMember = null;
      this.keyLoaction = null;
      this.keyPosition = null;
      const dataRequest = {
        dataJson: {
          user_connect: this.infoAccountCrawl.user_name,
          group_name: null,
          number_member: null,
          location: null,
          position: null,
        },
        page: 1,
      };
      this.showGroup(dataRequest);
    },
    async updatePage(pageSelect) {
      if (this.infoAccountCrawl) {
        const dataRequest = {
          dataJson: {
            user_connect: this.infoAccountCrawl.user_name,
            group_name: this.keyNameGroup,
            number_member: this.keyNumberMember,
            location: this.keyLoaction,
            position: this.keyPosition,
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
        await this.showGroup(dataRequest);
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
.custom-list-group {
  background-color: #ffffff;
  border-radius: 10px;
}
.custom_name_group {
  position: absolute;
  top: 54px;
  left: 0;
  width: 100%;
  height: 50%;
  display: block;
  text-align: center;
  color: #ffffff;
}
</style>
