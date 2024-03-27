<template>
  <div class="hrStatistical">
    <div
      class="d-flex justify-content-between align-items-center flex-wrap p-3"
    >
      <div class="d-flex align-items-center flex-wrap">
        <div>
          <img v-bind:src="img" alt="" />
        </div>
        <div class="title-statistical ml-2">
          {{ textTitle }}
        </div>
        <div class="d-flex align-items-center ml-4">
          <div class="button">
            <b-button-group size="sm">
              <b-button v-model="week"> {{ $t('common.week') }} </b-button>
              <b-button v-model="month"> {{ $t('common.month') }} </b-button>
              <b-button v-model="year"> {{ $t('common.year') }} </b-button>
            </b-button-group>
          </div>
          <div class="d-flex align-items-center mt-1 input-date-picker">
            <span class="mr-2 ml-4">{{ $t('common.from') }}</span>
            <b-form-datepicker
              id="example-datepicker"
              v-model="fromDatepicker"
              v-bind:date-format-options="{
                year: 'numeric',
                month: 'numeric',
                day: 'numeric'
              }"
              label-no-date-selected=" "
              class="mb-2"
            ></b-form-datepicker>
            <span class="px-2">{{ $t('common.to') }}</span>
            <b-form-datepicker
              id="datepicker"
              v-model="toDatepicker"
              v-bind:date-format-options="{
                year: 'numeric',
                month: 'numeric',
                day: 'numeric'
              }"
              label-no-date-selected=" "
              class="mb-2"
            ></b-form-datepicker>
          </div>
        </div>
      </div>
      <div class="statistical-header-right">
        <div class="iconUpDown">
          <b-icon
            v-if="isShowStatistical === false"
            icon="caret-down-fill"
            v-on:click="showStatistical()"
          ></b-icon>
          <b-icon
            v-else
            icon="caret-up-fill"
            v-on:click="showStatistical()"
          ></b-icon>
        </div>
      </div>
    </div>
    <div v-if="isShowStatistical === true" class="statistical py-3">
      <b-col v-if="checkCol === 1" lg="10" class="mx-auto">
        <div class="statistical-detail my-4">
          <b-row class="py-4">
            <b-col xl="4" class="py-2">
              <div
                class="items d-flex justify-content-center align-items-center"
              >
                <div>
                  <div class="title">
                    {{ titleOpen }}
                    <div
                      class="content pt-4 d-flex justify-content-center align-items-center"
                    >
                      {{ open }}
                      <span class="number">{{ labelOpen }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </b-col>
            <b-col xl="4" class="py-2 border-item">
              <div
                class="items d-flex justify-content-center align-items-center"
              >
                <div>
                  <div class="title">
                    {{ titleClose }}
                    <div
                      class="content pt-4 d-flex justify-content-center align-items-center"
                    >
                      {{ close }}
                      <span class="number">{{ labelClose }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </b-col>
            <b-col xl="4" class="py-2">
              <div
                class="items d-flex justify-content-center align-items-center"
              >
                <div>
                  <div class="title">
                    {{ titleDraft }}
                    <div
                      class="content pt-4 d-flex justify-content-center align-items-center"
                    >
                      {{ draft }}
                      <span class="number">{{ labelDraft }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-col>
      <b-col v-if="checkCol === 2" lg="7" class="mx-auto">
        <div class="statistical-detail my-4">
          <b-row class="py-4">
            <b-col lg="6" class="py-2">
              <div
                class="items d-flex justify-content-center align-items-center"
              >
                <div>
                  <div class="title">
                    {{ titleOpen }}
                    <div
                      class="content pt-4 d-flex justify-content-center align-items-center"
                    >
                      {{ open }}
                      <span class="number">{{ labelOpen }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </b-col>
            <b-col lg="6" class="py-2 border-item-col">
              <div
                class="items d-flex justify-content-center align-items-center"
              >
                <div>
                  <div class="title">
                    {{ titleClose }}
                    <div
                      class="content pt-4 d-flex justify-content-center align-items-center"
                    >
                      {{ close }}
                      <span class="number">{{ labelClose }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-col>
      <div class="statistical-chart">
        <div class="p-3">
          <div class="title-chart">{{ titleChart }}</div>
          <div>({{ content }})</div>
          <HRBar v-bind:chart-data="chartData" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import shareJob from '@/assets/images/share_job.png'
export default {
  name: 'HRStatistical',
  components: {},
  props: {
    img: {
      type: String,
      default() {
        return ''
      }
    },
    textTitle: {
      type: String,
      default() {
        return ''
      }
    },
    textButton: {
      type: String,
      default() {
        return ''
      }
    },
    items: {
      type: Array,
      default() {
        return []
      }
    },
    titleChart: {
      type: String,
      default() {
        return ''
      }
    },
    content: {
      type: String,
      default() {
        return ''
      }
    },
    chartData: {
      type: Object,
      default() {
        return {}
      }
    },
    options: {
      type: Array,
      default() {
        return []
      }
    },
    open: {
      type: Number,
      default() {
        return 0
      }
    },
    close: {
      type: Number,
      default() {
        return 0
      }
    },
    draft: {
      type: Number,
      default() {
        return 0
      }
    },
    titleOpen: {
      type: String,
      default() {
        return ''
      }
    },
    titleClose: {
      type: String,
      default() {
        return ''
      }
    },
    titleDraft: {
      type: String,
      default() {
        return ''
      }
    },
    labelOpen: {
      type: String,
      default() {
        return ''
      }
    },
    labelClose: {
      type: String,
      default() {
        return ''
      }
    },
    labelDraft: {
      type: String,
      default() {
        return ''
      }
    },
    checkCol: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  data() {
    return {
      shareJob,
      fromDatepicker: null,
      toDatepicker: null,
      isShowStatistical: true,
      selected: 1,
      week: 1,
      month: 2,
      year: 3
    }
  },
  watch: {
    selected() {
      this.$emit('update-chart', this.selected)
    }
  },
  methods: {
    showStatistical() {
      this.isShowStatistical = !this.isShowStatistical
    }
  }
}
</script>

<style lang="scss" scoped>
.hrStatistical {
  background: $white;
  border-radius: 10px;
  .title-statistical {
    font-size: 22px;
    font-weight: $font-weight-bold;
    letter-spacing: 1.2px;
    color: $deepseablue;
    text-transform: uppercase;
  }
  .button-drop-down {
    &:deep(.dropdown-toggle) {
      background: $waterblue;
      border-radius: 10px;
      border: none;
      padding: 2px 15px;
    }
  }
  .button {
    .btn-group {
      height: 40px;
      .btn {
        background: #5199ee;
        border: none;
        padding: 0px 15px;
      }
      .btn:focus {
        background: #0458bd;
      }
      .btn:first-child {
        border-radius: 7px 0px 0px 7px;
      }
      .btn:last-child {
        border-radius: 0px 7px 7px 0px;
      }
    }
  }
  .input-date-picker {
    span {
      font-size: 15px;
      color: #3a85c6;
      font-weight: $font-weight-medium;
    }

    .dropdown {
      border: 2px solid #3a85c6;
      border-radius: 8px;
      height: 40px;
      width: 105px;
      flex-direction: row-reverse;
      &:deep(.btn) {
        margin: -18px;
        svg {
          display: none;
        }
      }
      &:deep(.form-control) {
        white-space: nowrap;
        font-size: 13px;
        margin-top: 2px;
        font-weight: $font-weight-bold;
      }
    }
  }
  .select-day {
    .custom-select {
      background: $waterblue;
      color: $white;
      border-radius: 10px;
    }
    .icon-chevron {
      color: white;
      top: 10px;
      right: 10px;
    }
  }
  .statistical {
    border-radius: 10px;
    background-color: $white;
    &-header {
      padding: 15px 20px;
      border-bottom: 2px solid #f5f5f5;
      &-right {
        .iconUpDown {
          cursor: pointer;
          svg {
            padding: 5px;
            font-size: 30px;
            color: $deepseablue;
          }
        }
      }
    }
    &-detail {
      border-radius: 10px;
      background-color: #f9f9f9;
      .items {
        .title {
          color: $deepseablue;
          font-weight: 600;
        }
        .content {
          font-weight: $font-weight-bold-seven;
          font-size: 36px;
          color: $black;
          .number {
            font-size: 16px;
            margin-left: 10px;
            font-weight: $font-weight-bold;
          }
        }
      }
      .border-item {
        border-left: 2px solid $cathedralgray;
        border-right: 2px solid $cathedralgray;
        @include screen(767) {
          border-left: none;
          border-right: none;
          border-top: 2px solid $cathedralgray;
          border-bottom: 2px solid $cathedralgray;
        }
      }
      .border-item-col {
        border-left: 2px solid $cathedralgray;
        @include screen(767) {
          border-left: none;
          border-top: 2px solid $cathedralgray;
        }
      }
    }
    &-chart {
      width: 80%;
      margin: 30px auto;
      border: 2px solid #999191;
      border-radius: 10px;
      .title-chart {
        font-weight: $font-weight-bold-seven;
        font-size: 18px;
      }
    }
  }
}
</style>
