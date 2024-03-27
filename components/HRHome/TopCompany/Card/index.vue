<template>
  <div v-if="companies" class="hr-card-company h-100">
    <div class="hr-card-company-content h-100">
      <div
        v-if="title === 'share works' && icon === 'file-earmark-break'"
        class="content-title"
      >
        <div class="content-title-icon">
          <b-icon icon="file-earmark-break" aria-hidden="true" />
        </div>
        <div class="content-title-text">Share Works</div>
      </div>
      <div v-else class="content-title">
        <div class="content-title-icon">
          <b-icon icon="people" aria-hidden="true" />
        </div>
        <div class="content-title-text">Share Resource</div>
      </div>
      <div class="company-list h-100">
        <b-container
          class="company-list-inner d-flex flex-column justify-content-between"
        >
          <div
            v-for="company in companies"
            v-bind:key="company.id"
            class="company-list-item d-flex justify-content-between align-items-center mb-2"
          >
            <div class="item-thumbnail mr-2">
              <img
                v-bind:src="require(`~/assets/images/${company.logo_img}`)"
                alt=""
                class="w-100"
              />
            </div>
            <div class="item-content w-100">
              <div class="item-content-title mb-3">
                {{ company.title }}
              </div>
              <div class="item-content-desc d-flex">
                <div v-if="icon === 'file-earmark-break'" class="desc-icon">
                  <b-icon icon="file-earmark-break" aria-hidden="true" />
                </div>
                <div v-else class="desc-icon">
                  <b-icon icon="people" aria-hidden="true" />
                </div>
                <div class="desc-number font-weight-bold mx-2">
                  {{ company.jobs_to_share | formatNumber }}
                </div>
                <div v-if="title === 'share works'" class="desc-text">
                  <span>Jobs to Share</span>
                </div>
                <div v-else class="desc-text">
                  <span>Resource to Share</span>
                </div>
              </div>
            </div>
          </div>
        </b-container>
      </div>
    </div>
  </div>
  <div v-else>
    <img class="w-100" src="~assets/images/ads.png" alt="ads" />
  </div>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  name: "HRCardCompany",
  filters: {
    formatNumber(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
  props: {
    companies: {
      type: Array,
      default() {
        return null;
      },
    },
    icon: {
      type: String,
      default() {
        return "";
      },
    },
    title: {
      type: String,
      default() {
        return "";
      },
    },
  },
});
</script>
<style lang="scss" scoped>
.hr-card-company {
  &-content {
    overflow: hidden;
    border-radius: 15px;
    background-color: white;

    .content-title {
      display: flex;
      padding: 10px 0;
      background-color: #3a85c6;
      text-transform: uppercase;
      color: $white;
      font-weight: $font-weight-bold;

      &-icon {
        margin-left: 3%;
      }

      div:last-child {
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }

    .company-list {
      &-inner {
        height: calc(100% - 100px);
        @include screen(480) {
          padding: 20px;
        }
      }
      &-item {
        .item-content {
          &-title {
            font-weight: $font-weight-bold;
            color: #014783;
          }
          @include screen(480) {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
}
</style>
