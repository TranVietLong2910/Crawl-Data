<template>
  <div class="hrDashboard">
    <div class="hrDashboard-item-title pb-5">
      <b-row>
        <b-col xl="6">
          <b-row>
            <b-col xl="3">
              <b-dropdown
                id="dropdown-left"
                v-bind:text="textButton"
                variant="primary"
                class="m-2 button-dropdown"
              >
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-item>Something else here</b-dropdown-item>
              </b-dropdown>
            </b-col>
            <b-col xl="7">
              <div>
                <div class="hrDashboard-inputDate">
                  <div
                    class="d-flex align-items-center mt-2 flex-none-wrap w-100 input-type-date"
                  >
                    <div>
                      <input
                        type="date"
                        class="form-control hrInputDate-input-apply"
                      />
                    </div>
                    <div>
                      <p class="px- hrInputDate-to mx-2">
                        {{ $t('admin_dashboard.label.to') }}
                      </p>
                    </div>
                    <div>
                      <input
                        type="date"
                        class="form-control hrInputDate-input-apply"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </b-col>
            <b-col xl="2"></b-col>
          </b-row>
        </b-col>
        <b-col xl="6">
          <div class="d-flex justify-content-end">
            <b-button size="sm" class="mb-2 button-download">
              <b-icon icon="download" aria-hidden="true"></b-icon>
              {{ $t('admin_dashboard.label.download') }}
            </b-button>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HRFilter',
  props: {
    textButton: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hrDashboard {
  &-item-title {
    .button-download {
      background: #2680eb;
      border-radius: 10px;
      border: none;
      padding: 10px 15px;
    }
    .button-dropdown {
      &:deep(.dropdown-toggle) {
        background: #2680eb;
        border-radius: 10px;
        border: none;
        padding: 8px 15px;
      }
    }
  }
  &-inputDate {
    .input-type-date {
      &:deep(input[type='date']) {
        background-image: url('~/assets/images/date\.png');
        color: $cathedralgray;
        background-size: 23px;
        background-position: 97%;
        background-repeat: no-repeat;
        border-radius: 10px;
        height: 40px;
      }

      input[type='date']::-webkit-calendar-picker-indicator {
        opacity: 0;
      }

      @include screen(576) {
        flex-direction: column;
      }
    }
  }
}
</style>
