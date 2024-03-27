<template>
  <!-- Start header-logged -->
  <div class="header-logged">
    <div class="header-logged-outer">
      <b-navbar
        class="header-logged-inner flex-nowrap px-0 py-2"
        toggleable="lg"
      >
        <!-- Start SideMenu collapse -->
        <b-button
          v-b-toggle.sidebar-left
          class="nav-collapse left"
          v-on:click="openSideMenu()"
        >
          <b-icon icon="grid1x2" aria-hidden="true" />
        </b-button>
        <div class="sidebar-collapse-outer position-fixed">
          <div
            class="sidebar-collapse position-fixed"
            v-bind:class="{ active: isActive }"
          >
            <div v-on:click="isActive = !isActive">
              {{ $t("header.close") }}
            </div>
            <div class="sidebar-collapse-body container">
              <!-- <SideMenu /> -->
            </div>
          </div>
        </div>
        <!-- End SideMenu collapse -->
        <!-- Start Nav desktop -->
        <nuxt-link v-bind:to="localeLocation('/')" class="">
          <b-img v-bind:src="LogoHR" alt="logo" class="w-100" />
        </nuxt-link>
        <b-collapse
          id="nav-collapse"
          class="justify-content-between collapse w-100"
          is-nav
        >
          <b-navbar-nav class="header-logged-inner-search mx-auto">
            <b-nav-form>
              <div role="button" class="search-icon d-flex">
                <div class="mr-2">
                  <BIconSearch />
                </div>
                <div>
                  <BIconChevronDown />
                </div>
              </div>
              <div class="search-input">
                <b-form-input
                  v-bind:placeholder="$t('common.search')"
                ></b-form-input>
              </div>
            </b-nav-form>
            <b-navbar-nav>
              <b-nav-item v-bind:to="localeLocation('/share-job')">
                <img src="~/assets/images/icon_connect.svg" />
                Connect
              </b-nav-item>
              <b-nav-item v-bind:to="localeLocation('/share-resource')">
                <img src="~/assets/images/icon_connect.svg" />
                Crawl
              </b-nav-item>
              <b-nav-item v-bind:to="localeLocation('/top-skill')">
                Connect
              </b-nav-item>
              <b-nav-item v-bind:to="localeLocation('/blog')">
                {{ $t("head_logo_admin.label.tech_blog") }}
              </b-nav-item>
              <b-nav-item v-bind:to="localeLocation('/new')">
                {{ $t("head_logo_admin.label.news") }}
              </b-nav-item>
            </b-navbar-nav>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav
            class="header-logged-inner-auth border-right align-items-center"
          >
            <b-nav-item-dropdown
              class="header-inner-language list-unstyled"
              right
            >
              <template #button-content>
                <div v-if="image !== null && image !== ''">
                  <b-img
                    v-bind:src="image"
                    alt="avatar"
                    class="auth-avatar rounded-circle p-0"
                  />
                </div>
                <div v-else>
                  <b-img
                    v-bind:src="Avatar"
                    alt="avatar"
                    class="auth-avatar rounded-circle p-0"
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
        <!-- End Nav desktop -->
        <!-- Start Nav collapse -->
        <b-button v-b-toggle.sidebar-right class="nav-collapse right">
          <b-icon icon="list" aria-hidden="true" />
        </b-button>
        <b-sidebar id="sidebar-right" title="HRSharing" right shadow>
          <b-navbar-nav class="header-logged-inner-search mx-auto">
            <b-nav-form>
              <div role="button" class="search-icon d-flex">
                <div class="mr-2">
                  <BIconSearch />
                </div>
                <div>
                  <BIconChevronDown />
                </div>
              </div>
              <div class="search-input">
                <b-form-input
                  v-bind:placeholder="$t('common.search')"
                ></b-form-input>
              </div>
            </b-nav-form>
            <b-navbar-nav class="py-3 border-bottom">
              <b-nav-item
                class="py-2 px-3"
                v-bind:to="localeLocation('/share-job')"
              >
                {{ $t("header.share_job") }}
              </b-nav-item>
              <b-nav-item
                class="py-2 px-3"
                v-bind:to="localeLocation('/share-resource')"
              >
                {{ $t("header.share_resource") }}
              </b-nav-item>
              <b-nav-item
                class="py-2 px-3"
                v-bind:to="localeLocation('/top-skill')"
              >
                Connect
              </b-nav-item>
              <b-nav-item class="py-2 px-3" v-bind:to="localeLocation('/blog')">
                {{ $t("head_logo_admin.label.tech_blog") }}
              </b-nav-item>
              <b-nav-item class="py-2 px-3" v-bind:to="localeLocation('/new')">
                {{ $t("head_logo_admin.label.news") }}
              </b-nav-item>
            </b-navbar-nav>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="header-logged-inner-auth">
            <div class="mb-3 text-black-50">{{ $t("header.account") }}</div>
            <div
              class="item-wrap px-3 d-flex justify-content-between align-items-center"
            >
              <b-nav-item class="auth-icon bg-transparent">
                <b-img v-bind:src="ICMessage" alt="logo" />
              </b-nav-item>
              <div
                class="total message rounded-circle d-flex justify-content-center align-items-center"
              >
                99
              </div>
            </div>
            <div
              class="item-wrap px-3 d-flex justify-content-between align-items-center"
            >
              <b-nav-item class="auth-icon bg-transparent">
                <b-img
                  v-bind:to="localeLocation('/notification')"
                  v-bind:src="ICNotification"
                  alt="logo"
                />
              </b-nav-item>
              <div
                class="total notify rounded-circle d-flex justify-content-center align-items-center"
              >
                99
              </div>
            </div>
            <div
              class="item-wrap px-3 d-flex align-items-center justify-content-between"
            >
              <b-nav-item-dropdown
                class="header-inner-language list-unstyled"
                right
              >
                <div v-if="image !== null && image !== ''">
                  <b-img
                    v-bind:src="image"
                    alt="avatar"
                    class="auth-avatar rounded-circle p-0"
                  />
                </div>
                <div v-else>
                  <b-img
                    v-bind:src="Avatar"
                    alt="avatar"
                    class="auth-avatar rounded-circle p-0"
                  />
                </div>
                <!-- <b-dropdown-item>
                  <div class="d-flex align-items-center">
                    <div>
                      <img width="25px" src="~/assets/images/user.png" alt="" />
                    </div>
                    <div class="ml-2">
                      <p class="text-setting">{{ company.name }}</p>
                      <p v-if="company.businessType === 0" class="text-company">
                        {{ $t("common.company") }}
                      </p>
                      <p v-else class="text-company">
                        {{ $t("ROLE.label.freelancer") }}
                      </p>
                    </div>
                  </div>
                </b-dropdown-item>
                <b-dropdown-item
                  v-bind:to="localeLocation('/password-setting')"
                >
                  <div class="d-flex align-items-center py-2">
                    <div>
                      <img
                        width="25px"
                        src="~/assets/images/settings.png"
                        alt=""
                      />
                    </div>
                    <div class="ml-2">
                      <p class="text-setting">
                        {{ $t("head_logo_admin.label.setting") }}
                      </p>
                    </div>
                  </div>
                </b-dropdown-item> -->
                <b-dropdown-item v-bind:to="localeLocation('/')">
                  <div class="d-flex align-items-center">
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
              <div>{{ company.name }}</div>
            </div>
          </b-navbar-nav>
          <div class="language mt-3">
            <div>{{ $t("common.language") }}</div>
            <!-- <b-nav-item-dropdown
              v-for="locale in availableLocales"
              v-bind:key="locale.code"
              class="header-inner-language px-3 py-2"
              right
            >
              <template #button-content>
                <b-img
                  class="header-inner-language-icon mr-1 flag"
                  v-bind:src="locale.code === 'en' ? vnFlag : engFlag"
                  alt="flag-us"
                  v-bind:to="switchLocalePath(locale.code)"
                />
                <b-icon
                  font-scale="0.80"
                  icon="chevron-down"
                  class="text-white"
                  aria-hidden="true"
                />
              </template>
              <b-dropdown-item v-bind:to="switchLocalePath('en')">
                >
                <b-img
                  class="header-inner-language-icon mr-1 flag"
                  v-bind:src="engFlag"
                  alt="flag-us"
                />UK
              </b-dropdown-item>
              <b-dropdown-item v-bind:to="switchLocalePath('vi')">
                >
                <b-img
                  class="header-inner-language-icon mr-1 flag"
                  v-bind:src="vnFlag"
                  alt="flag-us"
                />VN
              </b-dropdown-item>
            </b-nav-item-dropdown> -->
          </div>
        </b-sidebar>
        <!-- End Nav collapse -->
      </b-navbar>
    </div>
  </div>
  <!-- End header-logged -->
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { BIconChevronDown, BIconSearch } from "bootstrap-vue";
import Avatar from "assets/images/avatar-default.png";
import persion from "assets/images/avatar.png";
import Cookies from "js-cookie";
import { mapActions, mapGetters } from "vuex";
import LogoHR from "@/assets/images/logo-white.png";
import ICMessage from "@/assets/images/bxs-message-alt-dots.svg";
import ICNotification from "@/assets/images/notification-filled.svg";
import Logo from "@/assets/images/logo-toppage.png";
import engFlag from "@/assets/images/eng.png";
import vnFlag from "@/assets/images/vn.png";
import { Urls } from "~/utils/urls";

export default {
  name: "HRHeaderLogged",
  components: {},

  data() {
    return {
      Logo,
      LogoHR,
      engFlag,
      vnFlag,
      persion,
      ICMessage,
      image: "",
      ICNotification,
      company: {},
      Avatar,
      isActive: false,
      isSetting: false,
    };
  },
  computed: {
    ...mapGetters({
      // infoCompany: 'companies/infoCompany'
    }),
  },
  watch: {
    infoCompany() {
      this.company = this.infoCompany;
      if (this.infoCompany.avatar !== null) {
        this.image = Urls.URL_SERVER + this.infoCompany.avatar.filePath;
      }
    },
  },
  created() {
    // const valueToken = Cookies.get("token_user")
    //   ? Cookies.get("token_user")
    //   : null;
    // if (!valueToken) {
    //   this.$router.push(this.localeLocation("/login"));
    // }
  },

  methods: {
    ...mapActions({
      // getCompany: 'companies/getCompany'
    }),
    openSideMenu() {
      this.isActive = !this.isActive;
    },
    setLanguage(language) {
      localStorage.setItem("language", language);
    },
    logout() {
      Cookies.remove("token_user");
      Cookies.remove("user_id");
      Cookies.remove("role");
      Cookies.remove("checkLogin");
      this.$router.push(this.localeLocation("/login"));
    },
  },
};
</script>

<style lang="scss">
.header-logged {
  background: transparent
    linear-gradient(180deg, #2680eb 0%, #3a7cef 98%, #5876f6 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 0 3px 6px #00000029;
  position: sticky;
  top: 0px;
  width: 100%;
  z-index: 1000;
  &-outer {
    @include container;
  }
  .btn.nav-collapse.btn-secondary.collapsed {
    @include screen(992) {
      display: none;
    }
  }
  &-inner {
    @include screen(768991) {
      gap: 0 20px;
    }
    // button toggle
    .nav-collapse {
      position: relative;
      background-color: transparent;
      border: none;
      padding: 0;
      z-index: 1000;
    }
    .nav-collapse.left {
      left: 0;
      @include screen(320374) {
        left: -3px;
      }
    }
    .nav-collapse.right {
      right: 0;
      @include screen(320374) {
        right: -3px;
      }
    }
    // end button toggle
    // sidebar
    @import "~/assets/scss/sidebar/sidebar.scss";
    // end sidebar
    &-search {
      gap: 0 10px;
      form.form-inline {
        background-color: $white;
        border-radius: 20px;
        padding-right: auto;
        padding-left: 10px;
        opacity: 0.25;
        flex-flow: nowrap;
      }
      .navbar-nav {
        font-size: 1rem;
        .nav-item {
          .nav-link {
            color: $white;
          }
        }
        @include screen(1024) {
          font-size: 12px;
        }
        @include screen(1200) {
          font-size: 1rem;
        }
      }

      .search-input {
        .form-control {
          background-color: transparent;
          border: none;
        }

        .form-control:focus {
          background-color: transparent;
          border-color: transparent;
          outline: 0;
        }
      }
    }

    &-auth {
      gap: 0 10px;

      .auth-icon {
        width: 40px;
        height: 40px;
        background-color: aliceblue;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        .nav-link {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .auth-avatar {
        max-width: 40px;
        max-height: 40px;
        object-fit: cover;
        img {
          width: 100%;
          height: auto;
          border-radius: 50%;
          object-fit: cover;
        }
      }
      @include screen(320374) {
        border-bottom: 1px solid #dee2e6 !important;
        border-right: none !important;
      }
    }
  }
}
// SideMenu
.sidebar-collapse-outer {
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  overflow: visible;
  z-index: 1071;
}
.sidebar-collapse {
  left: 0;
  right: auto;
  width: 320px;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
  transform: translateX(-100%);
  transition: all 0.2s ease-in-out;
}
.sidebar-collapse.active {
  transform: translateX(0);
  background-color: #2680eb;
  .sidebar-collapse {
    &-body {
      overflow-y: auto;
      height: 100vh;
      .hr-side-menu {
        display: block;
      }
    }
  }
}
.header-inner-language {
  .dropdown-toggle {
    &::after {
      display: none;
    }
  }
  .dropdown-menu {
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
  .text-setting {
    font-size: 15px;
    font-weight: $font-weight-medium;
    color: $pewterrgray;
  }
  .text-company {
    font-size: 13px;
    font-weight: $font-weight-medium;
    color: $waterblue;
  }
}

.flag {
  height: 30px;
  width: 30px;
}
</style>
