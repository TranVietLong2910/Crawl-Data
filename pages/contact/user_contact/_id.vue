<template>
  <div class="hrCreate mt-3" style="background-color: #f3f3f3">
    <HRPreLoad v-bind:preload="preload" />
    <div class="back-ground-user">
      <div class="custom-background-color px-5 py-3 d-flex align-item-center">
        <div class="row">
          <div
            class="col-lg-2 d-flex justify-content-center"
            style="padding: 1rem 0rem 1rem 1rem"
          >
            <div style="width: 150px; height: 150px">
              <img class="h-100 w-100" src="~/assets/images/avatar.svg" />
            </div>
          </div>
          <div class="p-3 col-lg-7">
            <h3 style="color: #2475c0">{{ infoUser.name }}</h3>
            <div class="mt-3">
              {{ infoUser.description }}
            </div>
            <div class="mt-4">Link Contact:</div>
            <div class="mt-1 custom-link-contact">
              {{ infoUser.link_contact }}
            </div>
          </div>
          <div class="p-3 col-lg-3">
            <div class="w-100">
              <b-button class="button-send-mess w-100"
                ><img src="~/assets/images/icon_message.svg" />
                Send Messages
              </b-button>
            </div>
            <div class="mt-3 w-100">
              <b-button
                class="px-4 custom-add-group w-100"
                v-on:click="backListGroup()"
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
      <div class="custom-background-color px-5 py-3 mt-3">
        <div class="">
          <h2>About</h2>
        </div>
        <div class="mt-4">
          <span style="font-size: 18px">About</span>
        </div>
        <div style="font-size: 14px">
          <div class="mt-1">
            Gender: <span>{{ infoUser.gender }}</span>
          </div>
          <div class="mt-1">
            Date of birth: <span>{{ infoUser.day_of_birth }}</span>
          </div>
          <div class="mt-1">
            Nationatily <span>{{ infoUser.nationatily }}</span>
          </div>
          <div class="mt-1">
            Personality <span>{{ infoUser.personality }}</span>
          </div>
        </div>
      </div>
      <div class="custom-background-color px-5 py-3 mt-3">
        <h3>Experience</h3>
        <div
          v-for="(item, index) in listCopany"
          v-bind:key="index"
          class="py-3"
          v-bind:class="index + 1 !== listCopany.length ? 'border-company' : ''"
        >
          <div class="d-flex">
            <div class="d-flex flex-column ml-3">
              <span> {{ item.name_company }}</span>
              <span> {{ item.description }} . {{ item.working_time }}</span>
              <span> {{ item.time_start_working }}</span>
              <span> {{ item.location }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="custom-background-color px-5 py-3 mt-3">
        <h3>Education</h3>
        <div
          v-for="(item, index) in education"
          v-bind:key="index"
          class="py-3"
          v-bind:class="index + 1 !== education.length ? 'border-company' : ''"
        >
          <div class="d-flex">
            <div class="d-flex flex-column ml-3">
              <span> {{ item.name_education }}</span>
              <span> {{ item.description }}</span>
              <span> {{ item.time_working }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="custom-background-color px-5 py-3 mt-3">
        <h3>Skill</h3>
        <div
          v-for="(item, index) in skill"
          v-bind:key="index"
          class="py-3"
          v-bind:class="index + 1 !== skill.length ? 'border-company' : ''"
        >
          <div class="d-flex flex-column">
            <span style="font-size: 16px; font-weight: 600">
              {{ item.name_skill }}</span
            >
            <div class="d-flex align-items-center">
              <img src="~/assets/images/icon_member.svg" />
              {{ item.number_member }} Endorsements
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import HRPreLoad from "~/components/Common/HRPreLoad/index.vue";
export default {
  name: "CreateResource",
  components: {
    HRPreLoad,
  },
  // layout: 'home',
  data() {
    return {
      infoUser: {
        name: "Le Thien An",
        description:
          "Freelance recruiter (Hỗ trợ cho người tìm việc và NTD tìm kiếm được công việc/ứng viên phù hợp, nhanh chóng)",
        link_contact: "linkcontact1.com",
        avatar: "~/assets/images/user.sv",
        gender: "Female",
        day_of_birth: "12-12-2002",
        nationatily: "VietNam",
        personality: "friendly, ambitious",
      },
      listCopany: [
        {
          name_company: "HR Excutive at FLEXTECH., JSCHR ",
          description: "FLEXTECH., JSC",
          working_time: "Full-time",
          time_start_working: "May 20, 2021-Person-1yr 9mos",
          location: "HaNoi, VietNam",
        },
        {
          name_company: "C&B Excutive",
          description: "Softdreams",
          working_time: "Full-time",
          time_start_working: "May 20, 2021-Person-1yr 2mos",
          location: "HaNoi, VietNam",
        },
        {
          name_company: "Human Resource",
          description: "Eyelus Media",
          working_time: "Full-time",
          time_start_working: "May 20, 2021-Person-1yr9mos",
          location: "HaNoi, VietNam",
        },
      ],
      education: [
        {
          name_education: "Thanh Dong University",
          description: "Finance & Banking",
          time_working: "2015 - 2018",
        },
        {
          name_education: "Edu Viet",
          description: "Certificate, PROFESSIONAL, PERSONNEL",
          time_working: "2018 - 2019",
        },
      ],
      skill: [
        {
          name_skill: "HR Operations",
          number_member: 2,
        },
        {
          name_skill: "Recruiting",
          number_member: 4,
        },
        {
          name_skill: "Human Resource (HR)",
          number_member: 7,
        },
        {
          name_skill: "Benefits Adminstration",
          number_member: 5,
        },
      ],
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
</style>
