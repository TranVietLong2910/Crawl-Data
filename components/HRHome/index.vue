<template>
  <Connect />
</template>

<script>
import { Connect } from "~/pages/connect/index.vue";
export default {
  name: "HRHome",
  components: {
    Connect,
  },
};
</script>

<style lang="scss">
.hr-home {
  background-color: #fbfbfb;
  &-title-section {
    background-image: url(~/assets/images/top_page.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50%;
    min-height: 660px;
    margin-top: -15px;

    @include screen(768991) {
      background-position: 51%;
      min-height: 650px;
    }

    @include screen(767) {
      background-image: unset !important;
      min-height: 100px;
    }
    @include screen(1600) {
      min-height: 815px;
    }

    .title {
      text-align: center;
      font: normal normal bold 25px/52px UTM Nokia;
      color: $deepseablue;
      text-transform: uppercase;

      @include screen(01199) {
        font: normal normal bold 17px/34px UTM Nokia;
      }

      .best {
        color: $waterblue;
      }
    }

    .input-search {
      background: #e7e7e7;
      border-radius: 10px;
      padding-left: 45px;
      height: 45px;
      border: 1px solid white;
    }

    .icon-input {
      top: 11px;
      left: 14px;
      font-size: 20px;
      color: $darkgray;
    }

    .icon-search {
      font-size: 12px;
    }

    .button {
      background: $deepseablue;
      border-radius: 10px;
      height: 100%;
      border: none;
      padding: 12px;
      font-size: 13px;
      white-space: nowrap;

      @include screen(991) {
        padding: 9px;
      }
    }

    .bg-popular {
      background: $canary;
      border-radius: 30px;
      padding: 5px;

      .text {
        text-align: center;
        font-size: 12px;
        font-weight: $font-weight-medium;
        color: $white;
      }
    }

    .text-popular {
      text-align: center;
      font-size: 14px;
      font-weight: $font-weight-bold-seven;
      color: $deepseablue;
      white-space: nowrap;
    }

    .bg-dropdown {
      color: #d6d7d7;
      border-radius: 30px;
      font-size: 13px;
      width: 30px;
      height: 29px;
      border: 2px solid #d6d7d7;
    }

    .bg-dropdown:active {
      color: $waterblue;
      border-radius: 30px;
      font-size: 13px;
      width: 30px;
      height: 29px;
      border: 2px solid $waterblue;
    }

    .item {
      width: 100%;
      padding-top: 35px;

      @include screen(768991) {
        padding-top: 45px;
      }

      .img-content {
        top: 15px;
      }
    }

    .dropdown {
      color: $persianblue;

      .btn-lg {
        padding: 5px;
      }

      .dropdown-menu {
        overflow-y: scroll;
        width: 150px;
        height: 200px;
        border-radius: 15px;
        transform: translate3d(-131px, -202px, 0px);

        li {
          background: $canary;
          margin: 13px;
          border-radius: 15px;

          .dropdown-item {
            color: $white;
            text-align: center;
          }

          a:hover {
            background-color: $switchblue;
            border-radius: 15px;
          }
        }
      }

      ::-webkit-scrollbar {
        width: 6px;
        background: $white;
        border-radius: 15px;
        height: 35px;
      }

      ::-webkit-scrollbar-thumb {
        border-radius: 15px;
        background-color: $darkgray;
      }
    }
  }

  .text-highlight {
    color: $waterblue;
  }
  .top-job {
    bottom: 190px;
    @include screen(1600) {
      bottom: 330px;
    }
    @include screen(768991) {
      bottom: 165px;
    }
    @include screen(767) {
      bottom: 160px;
    }
  }

  .banner {
    height: 160vh;

    &-inner {
      width: 90%;
      margin: 0 auto;
    }

    &-bg {
      height: 200vh;
      width: 100%;
      object-fit: cover;
      z-index: -1;
    }

    &-content {
      margin-top: 6rem;

      &-bigTitle {
        h2 {
          font-size: 3rem;
          text-transform: uppercase;
          font-weight: 700;
          white-space: pre-line;
          color: $deepseablue;
          line-height: 65%;
        }
      }

      &-desc {
        font-size: 1.5rem;
        text-transform: uppercase;
        color: $black;
        font-weight: $font-weight-bold;
      }

      &-searchbar {
        border-radius: 30px;
        padding: 0 10px;
        border: 1.6px solid $deepseablue;

        @include screen(240320) {
          display: flex !important;
          align-items: center;
          justify-content: space-between;
        }

        form.form-inline {
          flex-wrap: nowrap;
        }
      }

      &-btn {
        button {
          border-radius: 30px;
          font-weight: $font-weight-bold;
          font-size: 1.2rem;
          border: none;
          background-color: $waterblue;
        }

        .btn .b-icon.bi {
          font-size: 200%;
        }
      }
    }
  }

  .banner-bottom {
    transition: all 0.2s ease-in-out;

    &-header {
      background: transparent
        linear-gradient(180deg, $waterblue 0%, #01a6c0 100%) 0 0 no-repeat
        padding-box;
      border-radius: 0 0 60px 60px;
      height: 40vh;

      @include screen(480) {
        height: 40vh;
      }
    }

    &-content {
      &-desc {
        font-family: "Montserrat", sans-serif;
        color: $white;
        white-space: pre-line;
        line-height: 120%;
      }
    }

    &-listCard {
      margin-top: -50px;

      .hr-left {
        border-top: 3px dashed $canary;
      }

      .hr-center {
        border-top: 3px dashed $deepseablue;
      }

      .hr-right {
        border-top: 3px dashed $lawngreen;
      }

      .listCard-inner {
        .border-yellow {
          border-bottom: 7px solid $canary;
          border-radius: 10px;
        }

        .border-blue {
          border-top: 7px solid $deepseablue;
          border-radius: 10px;
        }

        .border-green {
          border-bottom: 7px solid $leafygreen;
          border-radius: 10px;
        }

        .hr-card-ads {
          &-thumbnail {
            &::before {
              display: block;
              overflow: hidden;
              padding-bottom: 100%;
              content: "";
            }

            picture {
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;

              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
          }

          .border-lef-right-yellow {
            border-left: 1px solid $canary;
            border-right: 1px solid $canary;
          }

          .border-lef-right-blue {
            border-left: 1px solid $deepseablue;
            border-right: 1px solid $deepseablue;
          }

          .border-lef-right-green {
            border-left: 1px solid $leafygreen;
            border-right: 1px solid $leafygreen;
          }

          &-content {
            font-family: "Montserrat", sans-serif;

            .title {
              font-weight: $font-weight-bold;
              font-size: 21px;
              text-transform: uppercase;
              line-height: 24px;
              color: #50738e;
            }

            .desc {
              font-size: 19px;
              color: #50738e;
              font-weight: $font-weight-medium;
            }
          }
        }
      }
    }
  }

  .hr-job {
    &-title {
      font-weight: 800;
      font-size: 1.8rem;
      padding: 40px 0;
      width: 100%;
      position: absolute;
      top: 440px;
    }
    .row {
      .col-lg-3 {
        flex: 0 0 21%;
        max-width: 21%;
        @include screen(768991) {
          flex: 0 0 21%;
          max-width: 21%;
        }
      }
      .col-lg-6 {
        flex: 0 0 60%;
        max-width: 58%;
        @include screen(768991) {
          .col-md-6 {
            flex: 0 0 57%;
            max-width: 57%;
          }
        }
      }
    }
  }

  .hr-resource {
    &-title {
      font-weight: 900;
      font-size: 1.5rem;
      padding: 40px 0;
    }
    .row {
      .col-lg-3 {
        flex: 0 0 21%;
        max-width: 21%;
        @include screen(768991) {
          flex: 0 0 21%;
          max-width: 21%;
        }
      }
      .col-lg-6 {
        flex: 0 0 60%;
        max-width: 58%;
        @include screen(768991) {
          .col-md-6 {
            flex: 0 0 57%;
            max-width: 57%;
          }
        }
      }
    }
  }

  .hr-skill {
    background-color: $gray-200;
    font-family: "Montserrat", sans-serif;

    &-title {
      font-weight: 900;
      font-size: 1.5rem;
      padding: 40px 0;
    }

    &-list-item {
      border-radius: 8px;
      overflow: hidden;

      .item-title {
        background-color: $deepseablue;
      }
    }
  }

  .hr-tech-blog {
    background-color: $gray;
    padding-bottom: 10rem;

    .tech-blog {
      &-title {
        font-weight: 900;
        font-size: 1.5rem;
        padding: 40px 0;
      }
    }

    &-list {
      .list-item {
        &-content {
          font-family: "Montserrat", sans-serif;

          @include screen(480) {
            margin-top: 1rem;
          }

          &-title {
            text-transform: uppercase;
            font-weight: $font-weight-semi-bold;
            font-size: 1.2rem;
          }

          &-desc {
            line-height: 150%;
            color: $gray-500;
          }
        }
      }
    }
  }
}

.load-more-text {
  color: $deepseablue;
  font-weight: $font-weight-medium;
}

.load-more-icon {
  background: $deepseablue;
  width: 18px;
  height: 18px;

  .rounded-circle {
    font-size: 13px;
  }
}

.hide_button {
  display: none !important;
}

.show_button {
  display: block !important;
}
</style>
