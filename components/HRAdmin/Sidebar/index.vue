<template>
  <div class="adminSidebar w-100 d-flex flex-column">
    <div class="adminSidebar-logo">
      <img v-if="active" v-bind:src="logo" alt="" class="logoActive" />
      <img v-else v-bind:src="logo1" alt="" class="logo" />
    </div>
    <div class="adminSidebar-menu d-flex flex-column w-100">
      <div
        v-for="(item, index) in menu"
        v-bind:key="index"
        class="d-flex flex-column align-items-center my-4"
      >
        <div class="menu-title">{{ item.title }}</div>
        <div class="menu-list d-flex flex-column w-100">
          <NuxtLink
            v-for="(item1, index1) in item.list"
            v-bind:key="index1"
            to="/"
          >
            <div
              class="menu-list-item d-flex align-items-center"
              v-bind:class="item1.active == 1 ? 'active' : ''"
            >
              <b-icon v-bind:icon="item1.icon" class="icon"></b-icon>
              <div class="name">{{ item1.name }}</div>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="d-flex flex-column"></div>
    </div>
  </div>
</template>

<script>
import logo from '~/assets/images/logo-white.png'
import logo1 from '~/assets/images/logoAdmin1.svg'
export default {
  data() {
    return {
      logo,
      logo1,
      active: true,
      menu: [
        {
          title: 'MANAGEMENT',
          list: [
            { icon: 'person-square', name: 'Dashboard', active: 1 },
            { icon: 'person-square', name: 'Account', active: 0 },
            { icon: 'person-square', name: 'Job', active: 0 },
            { icon: 'person-square', name: 'Resource', active: 0 },
            { icon: 'person-square', name: 'Contract', active: 0 },
            { icon: 'person-square', name: 'HRPoint', active: 0 },
            { icon: 'person-square', name: 'Payment', active: 0 },
            { icon: 'person-square', name: 'Pagkage', active: 0 },
            { icon: 'person-square', name: 'Pagkage', active: 0 }
          ]
        },
        {
          title: 'SETTINGS',
          list: [
            { icon: 'person-square', name: 'Service', active: 0 },
            { icon: 'person-square', name: 'Help', active: 0 },
            { icon: 'person-square', name: 'Settings', active: 0 },
            { icon: 'person-square', name: 'Settings', active: 0 }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.adminSidebar {
  min-height: 100vh;
  padding: 40px;
  background: #4c8deb;
  &-logo {
    .logo {
      height: 50px;
      width: 100%;
      object-fit: contain;
    }
    .logoActive {
      object-fit: contain;
      width: 100%;
      height: 50px;
    }
  }
  &-menu {
    max-height: calc(100vh - 190px);
    overflow-y: scroll;
    margin: 30px 0;
    &::-webkit-scrollbar {
      display: none;
    }
    .menu-title {
      color: $white;
      font-size: 18px;
      font-weight: bold;
    }
    .menu-list {
      &-item {
        height: 50px;
        margin: 10px 0;
        padding: 10px 20px;
        .icon {
          font-size: 25px;
          color: $white;
        }
        .name {
          font-size: 16px;
          color: $white;
          margin-left: 10px;
        }
      }
      .active {
        background: $deepseablue;
        border-radius: 10px;
      }
    }
  }
}
</style>
