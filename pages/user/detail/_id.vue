<template>
  <div class="hrCreate mt-3" style="background-color: #f3f3f3">
    <HRPreLoad v-bind:preload="preload" />
    <div class="back-ground-user">
      <div class="custom-background-color px-5 py-3 d-flex align-item-center">
        <div class="row w-100">
          <div
            class="col-lg-3 d-flex justify-content-center"
            style="padding: 1rem 0rem 1rem 1rem"
          >
            <div style="width: 150px; height: 150px">
              <img
                class="h-100 w-100"
                v-bind:src="infoUser.url_avt"
                style="width: 200px; border-radius: 50%"
              />
            </div>
          </div>
          <div class="p-3 col-lg-5">
            <h3 style="color: #2475c0">{{ infoUser.name }}</h3>
            <div class="mt-4">Link Contact:</div>
            <div class="mt-1 custom-link-contact">
              <a v-bind:href="infoUser.link_contact" target="_blank">{{
                infoUser.link_contact
              }}</a>
            </div>
          </div>
          <div class="p-3 col-lg-4">
            <div class="w-100">
              <b-button class="button-send-mess w-100"
                ><img src="~/assets/images/icon_message.svg" />
                Send Messages
              </b-button>
            </div>
            <div class="mt-3 w-100">
              <b-button
                class="px-4 custom-add-group w-100"
                v-on:click="showModalAddMember()"
                ><img src="~/assets/images/icon_add_to_group.svg" />
                Add to Group
              </b-button>
            </div>
            <div class="mt-3 w-100">
              <b-button
                class="px-4 custom-new-group w-100"
                v-on:click="backListGroup()"
                ><img src="~/assets/images/icon_new_group2.svg" />
                Back to Group
              </b-button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="description" class="custom-background-color px-5 py-3 mt-3">
        <div class="">
          <h2>About</h2>
        </div>
        <div style="font-size: 18px" class="ml-3">
          <div class="mt-1">
            {{ description }}
          </div>
        </div>
      </div>
      <div
        v-if="listCopany.length > 0"
        class="custom-background-color px-5 py-3 mt-3"
      >
        <h3>Experience</h3>
        <div
          v-for="(item, index) in listCopany"
          v-bind:key="index"
          class="py-3 ml-3"
          v-bind:class="index + 1 !== listCopany.length ? 'border-company' : ''"
        >
          <div class="d-flex">
            <div class="d-flex flex-column ml-3" style="font-size: 18px">
              <span style="font-size: 25px; font-weight: bold">
                {{ item.company }}</span
              >
              <span>
                {{ item.position }} <span v-if="item.employment"> . </span
                >{{ item.employment }}</span
              >
              <span>
                {{ item.start_day }} <span v-if="item.end_day"> . </span>
                {{ item.end_day }} <span v-if="item.time"> . </span>
                {{ item.time }}</span
              >
              <span> {{ item.location }}</span>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="education.length > 0"
        class="custom-background-color px-5 py-3 mt-3"
      >
        <h3>Education</h3>
        <div
          v-for="(item, index) in education"
          v-bind:key="index"
          class="py-3 ml-3"
          v-bind:class="index + 1 !== education.length ? 'border-company' : ''"
        >
          <div class="d-flex">
            <div class="d-flex flex-column ml-3">
              <span style="font-size: 20px; font-weight: bold">
                {{ item.school }}</span
              >
              <span>
                {{ item.degree }}<span v-if="item.majors">,</span
                >{{ item.majors }}</span
              >
              <span>
                {{ item.start_day }} <span v-if="item.end_day"> - </span
                >{{ item.end_day }}</span
              >
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="skill.length > 0"
        class="custom-background-color px-5 py-3 mt-3"
      >
        <h3>Skill</h3>
        <div
          v-for="(item, index) in skill"
          v-bind:key="index"
          class="py-3 ml-3"
          v-bind:class="index + 1 !== skill.length ? 'border-company' : ''"
        >
          <div class="d-flex flex-column">
            <span style="font-size: 16px; font-weight: 600">
              {{ item.skill }}</span
            >
          </div>
        </div>
      </div>
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
                  v-model="selectedGroup"
                  v-bind:options="optionGroup"
                  label="text"
                  class="w-100 mt-3"
                  placeholder=""
                ></v-select>
              </div>
            </div>
            <div class="col-lg-12 mt-4">
              <div v-if="selectedGroup" class="d-flex justify-content-center">
                <div
                  class="p-3"
                  style="border: 1px solid #c7c7c7; border-radius: 15px"
                >
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
                        v-for="(ele, index) in detail_group_by_id.avt_member"
                        v-bind:key="index"
                        v-bind:src="ele"
                      ></b-avatar>
                      <b-avatar v-if="detail_group_by_id.more_avt"
                        >+{{ detail_group_by_id.more_avt }}</b-avatar
                      >
                    </b-avatar-group>
                  </div>
                  <div class="custom_name_group">
                    {{ detail_group_by_id.group_name }}
                  </div>
                  <div class="mt-5" style="font-weight: 600">
                    <span>Fillter by:</span>
                  </div>
                  <div class="mt-3">
                    <ul>
                      <li class="mt-2">
                        Location: {{ detail_group_by_id.location }}
                      </li>
                      <li class="mt-2">
                        Position: {{ detail_group_by_id.position }}
                      </li>
                      <li class="mt-2">
                        Quantity Member:
                        <span style="font-weight: 600">{{
                          detail_group_by_id.number_member
                        }}</span>
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
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { mapActions, mapGetters } from "vuex";
import Cookies from "js-cookie";
import HRPreLoad from "~/components/Common/HRPreLoad/index.vue";
export default {
  name: "CreateResource",
  components: {
    HRPreLoad,
  },
  // layout: 'home',
  data() {
    return {
      infoUser: {},
      listCopany: [],
      education: [],
      skill: [],
      preload: false,
      id_member: null,
      infoAccountCrawl: null,
      description: null,
      optionGroup: [],
      selectedGroup: null,
      idGroup: null,
      detail_group_by_id: {},
    };
  },
  computed: {
    ...mapGetters({
      detail_member: "member/detail_member",
      listGroup: "crawl/listGroup",
      detail_group: "group/detail_group",
    }),
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
    detail_member() {
      this.infoUser = this.detail_member.data[0].information[0];
      this.description = this.detail_member.data[0].about[0].about;
      this.listCopany = this.detail_member.data[0].experience;
      this.education = this.detail_member.data[0].education;
      this.skill = this.detail_member.data[0].skills;
    },
    listGroup() {
      if (this.listGroup.data.length > 0) {
        this.listGroup.data.forEach((element) => {
          const optionList = {
            value: element.id,
            text: element.group_name,
          };
          this.optionGroup.push(optionList);
        });
      }
    },
    selectedGroup() {
      this.getALlMemberInGroup();
    },
    detail_group() {
      this.detail_group_by_id = this.detail_group.data[0];
    },
  },
  created() {
    if (process.client) {
      this.infoAccountCrawl = JSON.parse(
        Cookies.get("InfoAccount_Crawl")
          ? Cookies.get("InfoAccount_Crawl")
          : null
      );
      this.getDetailMember();
      this.getAllListGroups();
    }
  },
  methods: {
    ...mapActions({
      detailMember: "member/detailMember",
      addMemberToGroup: "crawl/addMemberToGroup",
      getListGroup: "crawl/getListGroup",
      detailGroupById: "group/detailGroupById",
    }),
    getDetailMember() {
      this.id_member = this.$nuxt.$route.query.id_user;
      const dataRequest = {
        email: this.infoAccountCrawl.user_name,
        password: this.infoAccountCrawl.password,
        id: this.id_member,
      };
      this.detailMember(dataRequest);
    },
    hideModalAdd() {
      this.$bvModal.hide("modal-add-member");
    },
    async showModalAddMember() {
      this.selectedGroup = null;
      await this.$bvModal.show("modal-add-member");
    },
    getAllListGroups() {
      const dataRequest = {
        group_name: null,
        number_member: null,
        location: null,
        position: null,
      };
      this.getListGroup(dataRequest);
    },
    getALlMemberInGroup() {
      if (this.selectedGroup) {
        const dataRequest = {
          group_name: this.selectedGroup.text,
        };
        this.detailGroupById(dataRequest);
      }
    },
    async addMemberGroup() {
      this.id_member = this.$nuxt.$route.query.id_user;
      const dataRequest = {
        id: this.selectedGroup.value,
        id_linkediner: this.id_member,
      };
      const dataRepond = await this.addMemberToGroup(dataRequest);
      if (dataRepond.success === true) {
        this.listMemberChecked = [];
        this.$bvModal.hide("modal-add-member");
        this.$toast.success(
          "Thêm thành viên vào group thành công",
          this.optionToast
        );
      }
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
.back-ground-user {
  margin: 5% 20%;
}
.custom-background-color {
  background-color: white;
  border-radius: 15px;
}
.custom-back-list {
  background-color: #cfcfcf;
  border-color: #cfcfcf;
}
.custom-link-contact:hover {
  cursor: pointer;
  color: #2993f5;
  text-decoration-line: underline;
}
.button-send-mess {
  background-color: #ffa800;
  border-color: unset;
  border-color: #ffa800;
}
.custom-add-group {
  background-color: #2993f5;
  border-color: unset;
  border-color: #2993f5;
}
.custom-new-group {
  background-color: #00498d;
  border-color: unset;
  border-color: #00498d;
}
.border-company {
  border-bottom: 1px solid #a1a1a1;
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
