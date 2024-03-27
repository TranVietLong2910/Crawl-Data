<template>
  <div class="comp-account">
    <b-container class="account-content">
      <b-row>
        <b-col
          cols="12"
          lg="3"
          class="hero-avatar d-flex justify-content-center align-items-center"
        >
          <label for="camera">
            <div class="avatar">
              <img src="~/assets/images/no_image.svg" alt="" />
              <div class="edit-profile-image">
                <div class="select-image">
                  <b-icon icon="camera-fill"></b-icon>
                </div>
              </div>
              <div class="icon-camera" style="height: 35px; width: 35px"></div>
              <input
                id="camera"
                v-bind:model="fileAvatar"
                type="file"
                class="d-none"
                v-on:change="onchangeImageAvatar($event)"
              />
            </div>
          </label>
        </b-col>
        <b-col cols="12" lg="9" class="hero-info d-flex">
          <div class="info-left">
            <div class="name">{{ info.name }}</div>
            <div class="desc d-flex align-items-center">
              <div class="desc d-flex align-items-center">
                <div class="desc-type">Company</div>
                <div class="desc-rank">
                  <div v-if="info.rank === 1">
                    <img v-bind:src="iconBronze" alt="" />
                    Bronze Account
                  </div>
                  <div v-else-if="info.rank === 2">
                    <img v-bind:src="iconSilver" alt="" />
                    Silver Account
                  </div>
                  <div v-else-if="info.rank === 3">
                    <img v-bind:src="iconGold" alt="" />
                    Gold Account
                  </div>
                  <div v-else-if="info.rank === 4">
                    <img v-bind:src="iconPlatinum" alt="" />
                    Platinum Account
                  </div>
                </div>
              </div>
            </div>
            <div class="reg-date d-flex align-items-center">
              <div class="reg-date-label">
                {{ $t("user.info.label.reg_date") }}
              </div>
              <div class="reg-date-content">
                {{ info.registrationDate }}
              </div>
            </div>
            <div class="submission d-flex align-items-center">
              <div class="submission-label">
                {{ $t("user.info.label.submission") }}
              </div>
              <div
                v-if="info.businessType === 4"
                class="submission-content"
                style="color: #11ac26"
              >
                {{ $t("user.info.label.bussines_confirmed") }}
                <b-icon icon="check-circle-fill" variant="success"> </b-icon>
              </div>
              <div v-else class="submission-content">
                {{ $t("user.info.label.bussines_uconfirmation") }}
              </div>
            </div>
            <div class="location d-flex align-items-center">
              <div class="location-label">{{ $t("common.location") }}:</div>
              <div class="location-content">{{ locationAccount }}</div>
            </div>
          </div>
          <!-- <div class="info-right">
            <div class="phone">
              <div class="phone-label">
                <b-icon icon="telephone-fill"></b-icon>
                {{ $t('common.phone') }}
              </div>
              <div class="phone-content">084.4522.XXX</div>
              <div class="phone-confirm">
                Confirmed<b-icon icon="check2"></b-icon>
              </div>
            </div>
          </div> -->
        </b-col>
      </b-row>
    </b-container>
    <NuxtLink v-bind:to="localeLocation('/user/info/review')">
      <div class="container account-desc d-flex">
        <div
          class="account-desc-item number-contract d-flex flex-column align-items-center"
        >
          <div
            class="label number-contract-label d-flex align-items-center justify-content-between"
          >
            <img v-bind:src="iconContract" alt="" />
            {{ $t("user.info.label.number_contract") }}
          </div>
          <div
            class="content number-contract-content d-flex align-items-center justify-content-center"
          >
            {{ info.numContract
            }}<span class="text">{{ $t("user.info.label.contract") }}</span>
          </div>
        </div>
        <div
          class="account-desc-item deal-percent d-flex flex-column align-items-center justify-content-between"
        >
          <div class="label deal-percent-label d-flex align-items-center">
            <img v-bind:src="iconCrown" alt="" />
            {{ $t("user.info.label.deal_percent") }}
          </div>
          <div
            class="content deal-percent-content text-center justify-content-center"
          >
            {{ info.dealPercentage }} %
          </div>
        </div>
        <div
          class="account-desc-item rating d-flex flex-column align-items-center justify-content-between"
        >
          <div class="label rating-label d-flex align-items-center">
            <img v-bind:src="iconPieChart" alt="" />
            {{ $t("user.info.label.rating") }}
          </div>
          <div
            class="content rating-content d-flex align-items-center justify-content-center"
          >
            {{ info.rating }} <b-icon icon="star-fill"></b-icon>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
import moment from "moment";
import avatar from "~/assets/images/avatar-default.png";
// import iconRank from "~/assets/images/gold.png";
import iconCrown from "~/assets/images/crown.svg";
import iconContract from "~/assets/images/product.svg";
import iconPieChart from "~/assets/images/bx-pie-chart.svg";
// import iconGold from "~/assets/images/gold.png";
import iconBronze from "~/assets/images/bronze.png";
import iconSilver from "~/assets/images/silver.png";
import iconPlatinum from "~/assets/images/platinum.png";
import { Urls } from "~/utils/urls";
import { location } from "~/utils/location";

export default {
  name: "AccountContent",
  filters: {
    formatDate(value) {
      if (value) {
        return moment(String(value)).format("MM-DD-YYYY");
      }
    },
  },
  props: {
    info: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      avatar,
      iconRank,
      iconContract,
      iconCrown,
      iconPieChart,
      iconGold,
      iconBronze,
      iconSilver,
      iconPlatinum,
      urlImageAvatar: null,
      imageAvatarSelected: null,
      fileAvatar: null,
      locationCompany: null,
      locationAccount: null,
      dataLocation: location.VIE,
    };
  },
  computed: {},
  watch: {
    info() {
      if (this.info.avatar) {
        this.urlImageAvatar = Urls.URL_SERVER + this.info.avatar.filePath;
        console.log(this.urlImageAvatar);
      }
      if (this.info.location && this.info.location !== null) {
        const locationCompany = this.dataLocation.filter(
          (item) => item.id === parseInt(this.info.location)
        );
        this.locationAccount = locationCompany[0]
          ? locationCompany[0].text
          : "";
      }
    },
    imageAvatar() {
      if (this.imageAvatar) {
        this.urlImageAvatar = Urls.URL_SERVER + this.imageAvatar.filePath;
      }
    },
  },
  methods: {
    onchangeImageAvatar(e) {
      if (
        e.target.files[0].type === "image/jpeg" ||
        e.target.files[0].type === "image/png" ||
        e.target.files[0].type === "image/jpg"
      ) {
        this.imageAvatarSelected = e.target.files[0];
        this.urlImageAvatar = URL.createObjectURL(this.imageAvatarSelected);
      }
      this.$emit("avatar-account", e.target.files[0]);
      // const formData = new FormData()
      // formData.append('file', e.target.files[0])
      // this.uploadAvatar(formData)
    },
  },
};
</script>

<style lang="scss" scoped>
.edit-profile-image {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  background: #00000030;
  border-radius: 100%;
}
.select-image {
  position: relative;
  height: 40px;
  line-height: 40px;
  margin: auto;
  overflow: hidden;
  padding: 0 10px;
  color: #fff;
}

.account-content {
  padding: 50px 20px;
  .hero-avatar {
    .avatar {
      position: relative;
      width: 150px;
      height: 150px;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
        border-radius: 100%;
        object-fit: cover;
      }
      .icon-camera {
        position: absolute;
        bottom: 5px;
        right: 12px;
        padding: 5px;
        border-radius: 100%;
        svg {
          font-size: 18px;
        }
      }
    }
    .avatar:hover .edit-profile-image {
      display: flex;
      transition: 0.5s ease-in-out;
    }
  }
  .hero-info {
    @include screen(767) {
      flex-direction: column;
      row-gap: 10px;
    }
    column-gap: 40px;
    .info-left {
      line-height: 1.8;
      font-size: 14px;
      .name {
        font-size: 18px;
        font-weight: 600;
        color: #424242;
      }
      .desc {
        &-type {
          padding-right: 10px;
          border-right: 1px solid;
          font-weight: normal;
        }
        &-rank {
          padding-left: 10px;
          font-weight: 500;
          img {
            height: 40px;
            width: 35px;
            object-fit: cover;
          }
        }
      }
      .reg-date {
        &-label {
          margin-right: 10px;
          font-weight: 500;
        }
      }
      .submission {
        &-label {
          margin-right: 10px;
          font-weight: 500;
        }
        &-content {
          color: $red;
          svg {
            font-size: 13px;
          }
          .type-confirm {
            color: $warmgray;
            font-weight: 300;
          }
        }
      }
      .location {
        &-label {
          margin-right: 10px;
          font-weight: 500;
        }
      }
    }
    .info-right {
      color: $warmgray;
      line-height: 1.6;
      .phone {
        &-confirm {
          font-size: 13px;
          background-color: #c3c3c3;
          padding: 3px 10px;
          border-radius: 20px;
          color: $white;
          width: fit-content;
        }
      }
    }
  }
}
.account-desc {
  width: calc(100% - 120px);
  padding: 20px 0;
  margin: 0px 60px;
  background-color: #f9f9f9;
  border-radius: 20px;
  margin-bottom: 30px;
  @include screen(767) {
    flex-direction: column;
    width: calc(100% - 80px);
    margin: 0px 40px;
  }
  &-item {
    padding: 0 30px;
    width: calc(100% / 3);
    @include screen(767) {
      width: 100%;
    }
    .label {
      font-weight: 600;
      color: #014783;
      margin-bottom: 30px;
    }
    .content {
      font-weight: bold;
      font-size: 30px;
      color: $black;
      .text {
        font-size: 13px;
        margin-left: 10px;
      }
      svg {
        font-size: 16px;
        margin-left: 10px;
        color: #014783;
      }
    }
    img {
      width: 25px;
      height: 25px;
      margin-right: 10px;
    }
  }
  .deal-percent {
    border-left: 1px solid #707070;
    border-right: 1px solid #707070;
    @include screen(767) {
      border-left: none;
      border-right: none;
      margin: 20px 0;
    }
  }
}
.confirmAccount {
  border: 5px solid #18c52f;
}
.avatar:hover .edit-profile-image {
  display: flex;
  transition: 0.5s ease-in-out;
}
</style>
