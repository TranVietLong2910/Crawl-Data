<template>
  <div id="footer" class="footer">
    <div class="container">
      <b-row>
        <b-col cols="12" md="3">
          <div class="footer-logo mb-5 pt-2" v-on:click="$router.push('/')">
            <b-img v-bind:src="images.Logo" alt="big-logo" class="w-100" />
          </div>
        </b-col>
        <b-col cols="12" md="3" class="mb-5">
          <ul class="footer-list list-unstyled text-uppercase">
            <li class="footer-item">
              <span class="footer-link"> {{ $t("footer.share_job") }}</span>
            </li>
            <li class="footer-item">
              <NuxtLink
                v-bind:to="localeLocation('/register')"
                class="footer-link"
              >
                {{ $t("footer.share_resource") }}
              </NuxtLink>
            </li>
            <li class="footer-item">
              <NuxtLink
                v-bind:to="localeLocation('/news/list')"
                class="footer-link"
              >
                {{ $t("footer.top_skill") }}
              </NuxtLink>
            </li>
            <li class="footer-item">
              <NuxtLink
                v-bind:to="localeLocation('/news/list')"
                class="footer-link"
              >
                {{ $t("footer.tech_blog") }}
              </NuxtLink>
            </li>
          </ul>
        </b-col>
        <b-col cols="12" md="3" class="mb-5">
          <ul class="footer-list list-unstyled text-uppercase">
            <li class="footer-item">
              <span class="footer-link">{{ $t("footer.new") }}</span>
            </li>
            <li class="footer-item">
              <NuxtLink
                v-bind:to="localeLocation('/register')"
                class="footer-link"
              >
                {{ $t("footer.about_us") }}
              </NuxtLink>
            </li>
            <li class="footer-item">
              <NuxtLink
                v-bind:to="localeLocation('/news/list')"
                class="footer-link"
              >
                {{ $t("footer.supports") }}
              </NuxtLink>
            </li>
            <li class="footer-item">
              <NuxtLink
                v-bind:to="localeLocation('/news/list')"
                class="footer-link"
              >
                {{ $t("footer.service_list") }}
              </NuxtLink>
            </li>
          </ul>
        </b-col>
        <b-col cols="12" md="3" class="mb-5">
          <ul class="footer-list list-unstyled text-uppercase">
            <li class="footer-item">
              <span class="footer-link"> {{ $t("footer.faq") }} </span>
            </li>
            <li class="footer-item">
              <NuxtLink
                v-bind:to="localeLocation('/register')"
                class="footer-link"
              >
                {{ $t("footer.cookie_policy") }}
              </NuxtLink>
            </li>
            <li class="footer-item">
              <NuxtLink
                v-bind:to="localeLocation('/news/list')"
                class="footer-link"
              >
                {{ $t("footer.terms_of_service") }}
              </NuxtLink>
            </li>
          </ul>
        </b-col>
        <div class="clearfix" />
      </b-row>
      <b-row class="contact">
        <b-col cols="12" md="6" lg="4" class="mb-2">
          <span>
            <BIconGeoAlt />
          </span>
          <span class="contact-address ml-1">
            {{ $t("footer.address") }}
          </span>
        </b-col>
        <b-col cols="12" md="6" lg="2" class="mb-2">
          <span>
            <BIconTelephone />
          </span>
          <span class="ml-1">{{ $t("footer.hotline") }}</span>
        </b-col>
        <b-col cols="12" md="6" lg="3" class="my-md-auto my-lg-0 mb-2">
          <span>
            <BIconEnvelope />
          </span>
          <!-- <span class="ml-1">info@psoft.com</span> -->
        </b-col>
        <b-col
          cols="12"
          md="6"
          lg="3"
          class="d-flex justify-content-around justify-content-md-around"
        >
          <div>
            <b-img
              v-bind:src="icons.ICFb"
              alt="facebook"
              width="52"
              height="52"
            />
          </div>
          <div>
            <b-img
              v-bind:src="icons.ICInsta"
              alt="facebook"
              width="52"
              height="52"
            />
          </div>
          <div>
            <b-img
              v-bind:src="icons.ICIn"
              alt="facebook"
              width="52"
              height="52"
            />
          </div>
        </b-col>
      </b-row>
      <div>
        <div class="text-center footer-copyright text-black">
          © 2022 EMD Technology Solutions. All Rights Reserved
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { BIconEnvelope, BIconGeoAlt, BIconTelephone } from "bootstrap-vue";
import ICFb from "@/assets/images/facebook.png";
import ICInsta from "@/assets/images/instagram.png";
import ICIn from "@/assets/images/linkedin.png";
import Logo from "@/assets/images/big-logo.svg";

export default {
  name: "FooterPage",
  data() {
    return {
      auth: this.$auth.loggedIn,
      wpUrl: process.env.API_WORDPRESS,
      icons: {
        ICFb,
        ICInsta,
        ICIn,
      },
      images: {
        Logo,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 90px 0 20px 0;
  background-color: $white;
  position: relative;
  box-shadow: 0 3px 6px #00000029;

  &-link {
    color: black !important;
  }

  .title {
    font-weight: bold;
    line-height: 19px;
  }

  &-logo {
    cursor: pointer;
    @include screen(767) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &-list {
    margin: 0;
    @include screen(767) {
    }
  }

  &-item {
    padding: 6px 0;
    @include screen(767) {
      // text-align: center;
    }
  }

  &-link {
    color: #fff;
    font-size: 14px;

    &:hover {
      text-decoration: none;
      color: $leafygreen;
    }
  }

  &-copyright {
    margin-top: 60px;
    font-size: 14px;
    padding-top: 30px;
    border-top: 2px solid $gray-300;
  }
  .contact {
    gap: 10px 0;
    &-address {
      line-height: 150%;
    }
  }
}
</style>
