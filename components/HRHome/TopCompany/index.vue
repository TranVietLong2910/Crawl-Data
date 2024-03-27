<template>
  <div class="hr-company">
    <div class="hr-company-title d-flex justify-content-center text-uppercase">
      <div>{{ $t('home_page.label.top') }}</div>
      <div class="text-highlight ml-2">{{ $t('common.company') }}</div>
    </div>
    <div class="hr-company-list">
      <b-col xl="10" class="mx-auto">
        <b-row>
          <b-col cols="12" md="10" lg="4" class="mx-md-auto mb-lg-0 mb-3">
            <div>
              <img
                class="w-100"
                src="~assets/images/ads.png"
                alt="ads"
                style="height: 700px"
              />
            </div>
          </b-col>
          <b-col cols="12" md="10" lg="4" class="mx-md-auto mb-lg-0 mb-3">
            <div class="hr-card-company h-100">
              <div class="hr-card-company-content h-100">
                <div class="content-title">
                  <div class="content-title-icon">
                    <b-icon icon="file-earmark-break" aria-hidden="true" />
                  </div>
                  <div class="content-title-text">Share Works</div>
                </div>
                <div class="company-list h-100">
                  <b-container
                    class="company-list-inner d-flex flex-column"
                    style="margin-top: 10px"
                  >
                    <div
                      v-for="(company, index) in list_company_share_job"
                      v-bind:key="index"
                      class="company-list-item d-flex justify-content-between align-items-center mb-3 mt-3"
                    >
                      <div class="item-thumbnail mr-2">
                        <img
                          v-if="company.avatar !== null"
                          v-bind:src="urlImage + company.avatar.filePath"
                          style="height: 90px; width: 90px; object-fit: cover"
                          alt=""
                        />
                      </div>
                      <div class="item-content w-100">
                        <div class="item-content-title mb-3">
                          {{ company.companyName }}
                        </div>
                        <div class="item-content-desc d-flex">
                          <div class="desc-icon">
                            <b-icon
                              icon="file-earmark-break"
                              aria-hidden="true"
                            />
                          </div>
                          <div class="desc-number font-weight-bold mx-2">
                            {{ company.jobShare }}
                          </div>
                          <div>
                            <span>Jobs to Share</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </b-container>
                </div>
              </div>
            </div>
          </b-col>
          <b-col id="a123213" cols="12" md="10" lg="4" class="mx-md-auto">
            <div class="hr-card-company h-100">
              <div class="hr-card-company-content h-100">
                <div class="content-title">
                  <div class="content-title-icon">
                    <b-icon icon="people" aria-hidden="true" />
                  </div>
                  <div class="content-title-text">Share Resource</div>
                </div>
                <div class="company-list h-100">
                  <b-container
                    class="company-list-inner d-flex flex-column"
                    style="margin-top: 10px"
                  >
                    <div
                      v-for="(company, index) in list_company_share_resource"
                      v-bind:key="index"
                      class="company-list-item d-flex justify-content-between align-items-center mb-3 mt-3"
                    >
                      <div class="item-thumbnail mr-2">
                        <img
                          v-if="company.avatar !== null"
                          v-bind:src="urlImage + company.avatar.filePath"
                          style="height: 90px; width: 90px; object-fit: cover"
                          alt=""
                        />
                      </div>
                      <div class="item-content w-100">
                        <div class="item-content-title mb-3">
                          {{ company.companyName }}
                        </div>
                        <div class="item-content-desc d-flex">
                          <div class="desc-icon">
                            <b-icon icon="people" aria-hidden="true" />
                          </div>
                          <div class="desc-number font-weight-bold mx-2">
                            {{ company.resourceShare }}
                          </div>
                          <div>
                            <span>Resource to Share</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </b-container>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { companyList } from '~/utils/dataSample'
import { Urls } from '~/utils/urls'

export default {
  name: 'TopCompany',
  data() {
    return {
      companyList,
      list_company_share_job: null,
      list_company_share_resource: null,
      urlImage: Urls.URL_SERVER
    }
  },
  computed: {
    ...mapGetters({
      success: 'top-page/success',
      message: 'top-page/message',
      error: 'top-page/error',
      listCompanies: 'top-page/listCompanies'
    })
  },
  watch: {
    listCompanies() {}
  },
  async created() {
    await this.getListCompanies()
    this.list_company_share_job = this.listCompanies.shareJob
    this.list_company_share_resource = this.listCompanies.shareResource
  },
  methods: {
    ...mapActions({
      getListCompanies: 'top-page/getListCompanies'
    })
  }
}
</script>
<style lang="scss" scoped>
.hr-company {
  background-color: #ebf4ff;
  font-family: 'Montserrat', sans-serif;
  &-title {
    font-weight: 900;
    font-size: 1.5rem;
    padding: 40px 0;
    .text-highlight {
      color: $waterblue;
    }
  }
  &-list {
    padding-bottom: 8rem;
    padding-top: 2rem;
  }
}
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
