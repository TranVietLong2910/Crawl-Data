<template>
  <div
    class="hrCreate py-3 px-5"
    style="margin: 5% 15%; background-color: #ffffff"
  >
    <HRPreLoad v-bind:preload="preload" />
    <div class="py-4" style="border-bottom: 1px solid #dcdcdc">
      <div class="d-flex align-items-center">
        <img src="~/assets/images/icon_crawl_setting.svg" />
        <div class="custom-title">Crawl Setting</div>
      </div>
      <div class="d-flex align-items-center mt-3">
        <div style="font-size: 20px">Limit:</div>
        <div class="ml-3">
          <b-form-input
            v-model="valueLimit"
            type="number"
            onkeypress="return event.keyCode === 8 || event.charCode >= 48 && event.charCode <= 57"
          ></b-form-input>
        </div>
      </div>
    </div>
    <div class="mt-3 py-4">
      <div class="d-flex justify-content-between">
        <div class="align-items-center d-flex">
          <img src="~/assets/images/icon_accounting.svg" />
          <div class="custom-title">Account Setting</div>
        </div>
        <div>
          <b-button
            class="px-4 button-import-account"
            v-on:click="screenImportAccount()"
            ><img src="~/assets/images/icon_import_account.svg" />
            Import Account
          </b-button>
        </div>
      </div>
      <div>
        <div class="d-flex align-items-center">
          <div>Choose Type</div>
          <div class="ml-3">
            <v-select
              v-model="typeAccount"
              v-bind:options="optionType"
              label="text"
              class="w-100 ml-1"
              placeholder="Status"
              style="width: 200px !important"
            ></v-select>
          </div>
        </div>
      </div>
      <div class="mt-3">
        <span class="ml-5" style="color: #a5a5a5">
          Account is using default
        </span>
      </div>
      <div class="mt-4">
        <b-table
          responsive
          v-bind:items="listOption"
          v-bind:fields="tableField"
          thead-class="hidden_header"
          sorter
        >
          <template #cell(id)="data">
            <!-- <b-form-checkbox v-model="data.id" v-on:click="select()">
            </b-form-checkbox> -->
            <b-form-radio
              v-model="accountSelected"
              v-bind:reduce="(name) => data.item.id_account"
              class="d-flex align-items-center"
              name="radio"
              text-field="name"
              size="lg"
              v-bind:value="data.item"
              v-on:change="selectedAccount(accountSelected)"
            ></b-form-radio>
          </template>
          <template #cell(option)="data">
            <div class="row h-100 w-100">
              <div
                v-if="typeAccount.value === 'zalo'"
                class="d-flex flex-column col-lg-5 px-0"
              >
                <div>
                  <span style="color: #3461b6; font-weight: 500"
                    >Phone Number: </span
                  >{{ data.item.user_name }}
                </div>
                <div class="mt-3">
                  <span style="font-weight: 500">Date Import: </span
                  >{{ formatDate(data.item.date_import) }}
                </div>
              </div>
              <div v-else class="d-flex flex-column col-lg-5 px-0">
                <div>
                  <span style="color: #3461b6; font-weight: 500"
                    >User name: </span
                  >{{ data.item.user_name }}
                </div>
                <div class="mt-3">
                  <span style="color: #3461b6; font-weight: 500"
                    >Password: </span
                  >{{ data.item.password }}
                </div>
              </div>
              <div class="d-flex flex-column col-lg-3 px-0">
                <div>
                  <span style="font-weight: 500">Name: </span
                  >{{ data.item.name }}
                </div>
                <div class="mt-3">
                  <span style="font-weight: 500">Gender: </span
                  >{{ data.item.gender }}
                </div>
              </div>
              <div
                v-if="typeAccount.value !== 'zalo'"
                class="d-flex flex-column col-lg-3 px-0"
              >
                <div>
                  <span style="font-weight: 500">Date Create: </span
                  >{{ formatDate(data.item.date_create) }}
                </div>
                <div class="mt-3">
                  <span style="font-weight: 500">Date Import: </span
                  >{{ formatDate(data.item.date_import) }}
                </div>
              </div>
              <div class="col-lg-1 p-3">
                <div
                  class="bg-box"
                  v-on:click="detailAccount(data.item.id_account)"
                >
                  <img src="~/assets/images/icon_edit.svg" />
                </div>
              </div>
            </div>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Cookies from "js-cookie";
import { tableFields } from "~/utils/table-fields";
import HRPreLoad from "~/components/Common/HRPreLoad/index.vue";
export default {
  name: "CreateResource",
  components: {
    HRPreLoad,
  },
  // layout: 'home',
  data() {
    return {
      tableFields,
      optionType: [
        { value: "facebook", text: "FaceBook" },
        { value: "linkedin", text: "Linked" },
        { value: "zalo", text: "Zalo" },
      ],
      selectedType: 1,
      preload: false,
      listOption: [],
      typeAccount: { value: "linkedin", text: "Linked" },
      valueLimit: 10,
      accountSelected: null,
    };
  },
  computed: {
    ...mapGetters({
      listAccount: "setting/listAccount",
    }),
    tableField() {
      return [
        {
          key: "id",
          label: "",
        },
        {
          key: "option",
          label: "",
        },
      ];
    },
  },
  watch: {
    listAccount() {
      this.listOption = this.listAccount.data;
      this.accountSelected = JSON.parse(
        Cookies.get("InfoAccount_Crawl")
          ? Cookies.get("InfoAccount_Crawl")
          : null
      );
    },
    valueLimit() {
      Cookies.set("Limit_Crawl", this.valueLimit);
    },
    accountSelected() {
      Cookies.set("InfoAccount_Crawl", JSON.stringify(this.accountSelected));
    },
    typeAccount() {
      this.getListAccount(this.typeAccount);
    },
  },
  created() {
    if (process.client) {
      this.valueLimit = Cookies.get("Limit_Crawl")
        ? Cookies.get("Limit_Crawl")
        : this.valueLimit;
      this.getListAccount(this.typeAccount);
    }
  },
  auth: false,
  methods: {
    ...mapActions({
      getAccountImport: "setting/getAccountImport",
    }),
    async getListAccount(selectTypeAccount) {
      const dataRequest = {
        typeAccount: {
          type: selectTypeAccount.value,
        },
        page: 1,
      };
      await this.getAccountImport(dataRequest);
    },
    selectedAccount(data) {},
    screenImportAccount() {
      this.$router.push("/setting/import_account");
    },
    formatDate(date) {
      if (date) {
        const d = new Date(date);
        let month = "" + (d.getMonth() + 1);
        let day = "" + d.getDate();
        const year = d.getFullYear();

        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;

        return [year, month, day].join("-");
      }
    },
    detailAccount(id) {
      this.$router.push("/setting/detail_account/" + id);
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

.custom-title {
  font-size: 22px;
  font-weight: 700;
  color: #0a66c2;
}

.button-import-account {
  background-color: #2475c0;
  color: white;
  border-color: #2475c0;
}
.custom-active {
  background-color: #d0f5b9b8;
  color: #04ad00;
  font-weight: 500;
  border-color: #d0f5b9b8;
  border-radius: 10px;
  width: 90px !important;
  text-align: center;
}
.custom-inactive {
  background-color: #ffd1d1b8;
  color: #ad0000;
  font-weight: 500;
  border-color: #ffd1d1b8;
  border-radius: 10px;
  width: 90px !important;
  text-align: center;
}
</style>
<style lang="scss">
.table td {
  border-top: unset !important;
}
.hidden_header {
  display: none !important;
}
</style>
