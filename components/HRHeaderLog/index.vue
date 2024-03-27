<template>
  <div class="header w-100 fixed-top">
    <div class="header-outer">
      <b-navbar class="header-inner px-0 py-3" toggleable="lg">
        <nuxt-link v-bind:to="localeLocation('/')" class="header-inner-logo">
          <b-img
            class="w-100"
            v-bind:src="Logo"
            alt="logo"
            style="height: 53px; object-fit: contain"
          />
        </nuxt-link>

        <b-button
          v-b-toggle.sidebar-right
          class="nav-collapse right bg-transparent text-dark"
        >
          <b-icon icon="list" aria-hidden="true" />
        </b-button>
        <b-sidebar id="sidebar-right" title="HR-Crawl" right shadow>
          <div class="px-5 py-3">
            <b-navbar-nav class="header-logged-inner-search mx-auto">
              <b-navbar-nav class="py-3 border-bottom">
                <b-nav-item
                  class="py-2 px-3"
                  v-bind:to="localeLocation('/connect')"
                >
                  Connect
                </b-nav-item>
                <b-nav-item
                  class="py-2 px-3"
                  v-bind:to="localeLocation('/crawl')"
                >
                  Crawl
                </b-nav-item>
                <b-nav-item
                  class="py-2 px-3"
                  v-bind:to="localeLocation('/contact')"
                >
                  Contact
                </b-nav-item>
                <b-nav-item
                  class="py-2 px-3"
                  v-bind:to="localeLocation('/setting')"
                >
                  Setting
                </b-nav-item>
              </b-navbar-nav>
            </b-navbar-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="header-logged-inner-auth">
              <b-nav-item>
                <b-button
                  pill
                  variant="primary"
                  class="w-100 mt-3"
                  v-on:click="logout()"
                  >Log Out</b-button
                >
              </b-nav-item>
            </b-navbar-nav>
          </div>
        </b-sidebar>
        <b-collapse
          id="nav-collapse"
          class="justify-content-between collapse w-100"
          is-nav
        >
          <b-navbar-nav class="header-inner-nav mx-auto">
            <b-nav-item v-bind:to="'/connect'">
              <div
                v-if="name_url === '/connect'"
                class="d-flex justify-content-center align-items-center px-2"
                style="background-color: white; border-radius: 5px"
              >
                <img src="~/assets/images/icon_connect_clicked.svg" />
                <span style="color: #0079e9">Connect</span>
              </div>
              <div
                v-else
                class="d-flex justify-content-center align-items-center"
              >
                <img src="~/assets/images/icon_connect.svg" />
                <span style="color: white">Connect</span>
              </div>
            </b-nav-item>
            <!-- <b-nav-item v-bind:to="'/crawl'"> -->
            <div class="d-flex justify-content-center align-items-center">
              <!-- <span style="color: white">Crawl</span> -->
              <b-dropdown
                size="lg"
                variant="link"
                class="dropdown custom-dropdown"
                toggle-class="text-decoration-none"
                no-caret
              >
                <template #button-content>
                  <div
                    v-if="name_url === '/crawl'"
                    class="bg-dropdown d-flex align-items-center justify-content-center px-2"
                    style="background-color: white; border-radius: 5px"
                  >
                    <img src="~/assets/images/icon_crawl_clicked.svg" />
                    <span style="color: #0079e9">Contact</span>
                  </div>
                  <div
                    v-else
                    class="bg-dropdown d-flex align-items-center justify-content-center"
                  >
                    <img src="~/assets/images/icon_crawl-header.svg" />
                    <span style="color: white">Contact</span>
                  </div>
                </template>
                <b-dropdown-item
                  ref="itemFirst"
                  v-b-modal.edit-member
                  style="
                    padding-left: 5px !important;
                    padding-right: 5px !important;
                  "
                  v-on:click="screnListCrawl()"
                >
                  <div class="d-flex py-2">
                    <div class="ml-2 mt-1">
                      <p>List Crawl</p>
                    </div>
                  </div>
                </b-dropdown-item>
                <b-dropdown-item
                  v-b-modal.modal-remove
                  style="
                    padding-left: 5px !important;
                    padding-right: 5px !important;
                  "
                  v-on:click="screnListGroup()"
                >
                  <div class="d-flex py-2">
                    <div class="ml-2 mt-1">
                      <p>Group</p>
                    </div>
                  </div>
                </b-dropdown-item>
              </b-dropdown>
            </div>
            <!-- </b-nav-item> -->
            <b-nav-item v-bind:to="localeLocation('/contact')">
              <div
                v-if="name_url === '/contact'"
                class="d-flex justify-content-center align-items-center px-2"
                style="background-color: white; border-radius: 5px"
              >
                <img src="~/assets/images/icon_contact_clicked.svg" />
                <span style="color: #0079e9">Message</span>
              </div>
              <div
                v-else
                class="d-flex justify-content-center align-items-center"
              >
                <img src="~/assets/images/icon_message.svg" />
                <span style="color: white">Message</span>
              </div>
            </b-nav-item>
            <b-nav-item v-bind:to="localeLocation('/setting')">
              <div
                v-if="name_url === '/setting'"
                class="d-flex justify-content-center align-items-center px-2"
                style="background-color: white; border-radius: 5px"
              >
                <img src="~/assets/images/icon_setting_clicked.svg" />
                <span style="color: #0079e9">Setting</span>
              </div>
              <div
                v-else
                class="d-flex justify-content-center align-items-center"
              >
                <img src="~/assets/images/Settings.svg" />
                <span style="color: white">Setting</span>
              </div>
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav
            class="header-logged-inner-auth align-items-center"
            style="border-left: unset !important"
          >
            <b-nav-item-dropdown
              class="header-inner-language list-unstyled"
              right
            >
              <template #button-content>
                <div>
                  <img
                    src="~/assets/images/icon_avatar.png"
                    alt="avatar"
                    class="auth-avatar rounded-circle p-0"
                    height="40"
                    width="40"
                  />
                </div>
              </template>
              <b-dropdown-item v-bind:to="localeLocation('/')">
                <div class="d-flex align-items-center" v-on:click="logout()">
                  <div>
                    <img
                      width="25px"
                      src="~/assets/images/log_out.png"
                      alt=""
                    />
                  </div>
                  <div class="ml-2">
                    <p class="text-setting">
                      {{ $t("head_logo_admin.label.log_out") }}
                    </p>
                  </div>
                </div>
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import { Api } from "../../utils/http-common";
import Logo from "@/assets/images/image_logo.png";
import engFlag from "@/assets/images/eng.png";
import vnFlag from "@/assets/images/vn.png";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "HRHeaderLog",
  components: {},
  data() {
    return {
      Logo,
      engFlag,
      vnFlag,
      name_url: null,
    };
  },
  computed: {},
  watch: {
    $route() {
      this.name_url = this.$nuxt.$route.path;
    },
  },
  mounted() {},
  created() {
    // this.name_url = this.$nuxt.$route.path;
    // const valueToken = Cookies.get("token_user")
    //   ? Cookies.get("token_user")
    //   : null;
    // if (!valueToken) {
    //   this.$router.push(this.localeLocation("/login"));
    // }
  },
  methods: {
    setLanguage(language) {
      localStorage.setItem("language", language);
    },
    screnListCrawl() {
      this.$router.push("/crawl");
    },
    screnListGroup() {
      this.$router.push("/group");
    },
    logout() {
      Api.requestServer1
        .post(`/log-out`)
        .then((response) => {
          Cookies.remove("token_user");
          Cookies.remove("InfoAccount_Crawl");
          Cookies.remove("Limit_Crawl");
          localStorage.removeItem("token_user");
          this.$router.push("/login");
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #0079e9;
  box-shadow: 0 3px 6px #00000029;
  font-family: "Montserrat", sans-serif;
  &-outer {
    @include container;
  }
  &-inner {
    position: sticky;
    top: 0px;
    width: 100%;
    &-logo {
      width: 15%;
      @include screen(767) {
        width: auto;
      }
    }
    .btn.nav-collapse.btn-secondary.collapsed {
      @include screen(992) {
        display: none;
      }
    }
    &-nav {
      font-weight: 500;
      @include screen(1024) {
        font-size: 12px;
        gap: 0 12px;
      }
      @include screen(1200) {
        font-size: 1.1rem;
        gap: 0 25px;
      }
      .nav-item {
        .nav-link {
          color: $warmgray;
          font-weight: $font-weight-bold;
          white-space: nowrap;
        }
        .nav-link:hover {
          border-bottom: 2px solid $waterblue;
          color: $waterblue;
        }
        .nav-link:focus {
          border-bottom: 2px solid $waterblue;
          color: $waterblue;
        }
      }
    }

    &-auth {
      @include screen(320374) {
        border-bottom: 1px solid $gray-300 !important;
        border-right: none !important;
      }
      .text-button {
        border-radius: 20px;
        border: none;
        font-size: 15px;
        padding: 8px 20px 8px 20px;
        font-weight: $font-weight-medium;
        white-space: nowrap;
      }
      .button-sign-up {
        background: #2680eb;
      }
      .button-sign-in:active {
        background: #2680eb;
      }
      .button-sign-in {
        background: $white;
        color: #2680eb;
      }
    }

    &-language {
      // css custom dropdown
      &:deep(.dropdown-toggle) {
        padding-top: 0;
        padding-bottom: 0;
        &::after {
          display: none;
        }
      }
      &:deep(.dropdown-menu) {
        min-width: 6rem;
        li {
          .dropdown-item {
            a {
              color: $warmgray;
              font-weight: $font-weight-medium;
            }
          }
        }
      }
      &-icon {
        width: 60%;
      }
    }
  }
}

.flag {
  height: 30px;
  width: 30px;
}
// css b-sidebar
@import "~/assets/scss/sidebar/sidebar.scss";
</style>
<style lang="scss">
.custom-dropdown {
  .show {
    width: 160px;
    border: unset;
    background-color: #0079e9;
    li a {
      color: #fff;
      &:hover {
        color: #0079e9;
        background-color: #fff;
      }
    }
  }
}
</style>
