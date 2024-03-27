<template>
  <div class="hrCreate">
    <HRPreLoad v-bind:preload="preload" />
    <b-form class="form-detail">
      <!-- Basic information -->
      <b-row class="bg-white h-100 hrCreate-border-button">
        <b-col lg="12" class="py-3 text-center" style="color: #3461b6">
          <h4 style="font-weight: 600; font-size: 30px">NEW CONNECT</h4>
        </b-col>
        <b-col sm="12" md="12" lg="12" xl="12" class="mx-auto py-3">
          <span style="font-size: 20px; font-weight: 600"
            >Basic information</span
          >
        </b-col>
        <b-col sm="12" md="12" lg="12" xl="12" class="mx-auto mt-3">
          <div class="">
            <div class="d-flex hrCreate-label">Link Contact</div>
            <div class="validate-form position-relative">
              <b-form-input class="mt-1" type="text"></b-form-input>
            </div>
          </div>
        </b-col>
        <b-col sm="12" md="12" lg="12" xl="12" class="mx-auto mt-3">
          <div class="">
            <div class="d-flex hrCreate-label">Name</div>
            <div class="validate-form position-relative">
              <b-form-input class="mt-1" type="text"></b-form-input>
            </div>
          </div>
        </b-col>
        <b-col sm="12" md="12" lg="12" xl="12" class="mx-auto mt-3">
          <b-row>
            <b-col cols="12" md="12" xl="4" class="mt-4">
              <div class="d-flex hrCreate-label">Day of birth</div>
              <div class="validate-form position-relative">
                <v-date-picker class="inline-block w-100 h-100 mt-1">
                  <template #default="{ inputValue, togglePopover }">
                    <div class="d-flex items-center h-100 mt-1">
                      <input
                        v-bind:value="inputValue"
                        class="bg-white text-gray-700 w-100 py-1 px-2 appearance-none border rounded-r focus:outline-none focus:border-blue-500 custom-datepicker"
                        readonly
                        v-on:click="togglePopover()"
                      />
                      <button
                        class="p-2 px-3 bg-blue-100 border border-blue-200 hover:bg-blue-200 text-blue-600 rounded-l focus:bg-blue-500 focus:text-white focus:border-blue-500 focus:outline-none custom-icon-datepicker"
                        v-on:click="togglePopover()"
                      >
                        <b-icon
                          icon="calendar"
                          style="font-size: 20px"
                        ></b-icon>
                      </button>
                    </div>
                  </template>
                </v-date-picker>
              </div>
            </b-col>
            <b-col cols="12" md="12" xl="4" class="mt-4">
              <div class="d-flex hrCreate-label">Position</div>
              <div class="validate-form position-relative mt-1">
                <v-select
                  label="text"
                  v-bind:reduce="(label) => label.id"
                  class="w-100 ml-1"
                ></v-select>
              </div>
            </b-col>
            <b-col cols="12" md="12" xl="4" class="mt-4">
              <div class="d-flex hrCreate-label">Location</div>
              <div class="validate-form position-relative mt-1">
                <b-form-input id="main-skill" type="text"></b-form-input>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col sm="12" md="12" lg="12" xl="12" class="mx-auto mt-3">
          <b-row>
            <b-col cols="12" md="12" xl="4" class="mt-4">
              <div class="d-flex hrCreate-label">Email</div>
              <div class="validate-form position-relative">
                <b-form-input id="main-skill" type="text"></b-form-input>
              </div>
            </b-col>
            <b-col cols="12" md="12" xl="4" class="mt-4">
              <div class="d-flex hrCreate-label">Phone</div>
              <div class="validate-form position-relative mt-1">
                <b-form-input id="main-skill" type="text"></b-form-input>
              </div>
            </b-col>
            <b-col cols="12" md="12" xl="4" class="mt-4">
              <div class="d-flex hrCreate-label">Address</div>
              <div class="validate-form position-relative mt-1">
                <b-form-input id="main-skill" type="text"></b-form-input>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col sm="12" md="12" lg="12" xl="12" class="mx-auto mt-3">
          <b-row>
            <b-col lg="8">
              <div class="d-flex hrCreate-label">About</div>
              <div class="validate-form position-relative">
                <b-form-textarea
                  rows="4"
                  class="w-100"
                  style="border: 1px solid #ced4da"
                  placeholder="Messages"
                ></b-form-textarea>
              </div>
            </b-col>
            <b-col lg="4">
              <div class="d-flex hrCreate-label">Upload avatar</div>
              <div class="validate-form position-relative">
                <label for="camera">
                  <div class="avatar" style="width: 200px; height: 200px">
                    <img
                      class="w-100"
                      src="~/assets/images/no_image.svg"
                      alt=""
                      style="object-fit: contain"
                    />
                    <div
                      class="edit-profile-image"
                      style="width: 200px; height: 200px"
                    >
                      <div class="select-image">
                        <b-icon icon="camera-fill"></b-icon>
                      </div>
                    </div>
                    <input
                      id="camera"
                      type="file"
                      class="d-none"
                      v-on:change="onchangeImageAvatar($event)"
                    />
                  </div>
                </label>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <!-- end -->

      <!-- UI Experience -->
      <b-row class="bg-white h-100 hrCreate-border-button mt-4">
        <b-col sm="12" md="12" lg="12" xl="12" class="mx-auto py-3">
          <span style="font-size: 20px; font-weight: 600">Experience</span>
        </b-col>
        <b-col sm="12" md="12" lg="12" xl="12" class="mx-auto mt-3">
          <div class="">
            <div class="d-flex hrCreate-label">Title</div>
            <div class="validate-form position-relative">
              <b-form-input class="mt-1" type="text"></b-form-input>
            </div>
          </div>
        </b-col>
        <b-col sm="12" md="12" lg="12" xl="12" class="mx-auto mt-3">
          <div class="">
            <div class="d-flex hrCreate-label">Employment type</div>
            <div class="validate-form position-relative">
              <v-select
                label="text"
                v-bind:reduce="(label) => label.id"
                class="w-100 mt-1"
              ></v-select>
            </div>
          </div>
        </b-col>
        <b-col sm="12" md="12" lg="12" xl="12" class="mx-auto mt-3">
          <div class="">
            <div class="d-flex hrCreate-label">Company name</div>
            <div class="validate-form position-relative">
              <b-form-input class="mt-1" type="text"></b-form-input>
            </div>
          </div>
        </b-col>
        <b-col sm="12" md="12" lg="12" xl="12" class="mx-auto mt-3">
          <div class="">
            <div class="d-flex hrCreate-label">Location</div>
            <div class="validate-form position-relative">
              <b-form-input class="mt-1" type="text"></b-form-input>
            </div>
          </div>
        </b-col>
        <b-col sm="12" md="12" lg="12" xl="12" class="mx-auto mt-3">
          <b-form-checkbox
            id="checkbox-1"
            name="checkbox-1"
            value="accepted"
            class="d-flex align-items-center h-100"
            unchecked-value="not_accepted"
          >
            <span>I am currently working in this role</span>
          </b-form-checkbox>
        </b-col>
        <b-col sm="12" md="12" lg="12" xl="12" class="mx-auto mt-4">
          <b-row>
            <b-col lg="12">
              <div class="d-flex hrCreate-label">Start date</div>
            </b-col>
            <b-col cols="12" md="12" xl="6" class="mt-1">
              <div class="validate-form position-relative">
                <v-select
                  label="text"
                  v-bind:reduce="(label) => label.id"
                  class="w-100 mt-1"
                ></v-select>
              </div>
            </b-col>
            <b-col cols="12" md="12" xl="6" class="mt-1">
              <div class="validate-form position-relative mt-1">
                <v-select
                  label="text"
                  v-bind:reduce="(label) => label.id"
                  class="w-100 ml-1"
                ></v-select>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col sm="12" md="12" lg="12" xl="12" class="mx-auto mt-4">
          <b-row>
            <b-col lg="12">
              <div class="d-flex hrCreate-label">End date</div>
            </b-col>
            <b-col cols="12" md="12" xl="6" class="mt-1">
              <div class="validate-form position-relative">
                <v-select
                  label="text"
                  v-bind:reduce="(label) => label.id"
                  class="w-100 mt-1"
                ></v-select>
              </div>
            </b-col>
            <b-col cols="12" md="12" xl="6" class="mt-1">
              <div class="validate-form position-relative mt-1">
                <v-select
                  label="text"
                  v-bind:reduce="(label) => label.id"
                  class="w-100 ml-1"
                ></v-select>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col sm="12" md="12" lg="12" xl="12" class="mx-auto mt-3">
          <div class="d-flex hrCreate-label">Description</div>
          <div class="validate-form position-relative">
            <b-form-textarea
              rows="4"
              class="w-100 mt-1"
              style="border: 1px solid #ced4da"
              placeholder="Messages"
            ></b-form-textarea>
          </div>
        </b-col>
      </b-row>
      <!-- end UI Experience -->

      <!-- UI Education -->
      <b-row class="bg-white h-100 hrCreate-border-button mt-4">
        <b-col sm="12" md="12" lg="12" xl="12" class="mx-auto py-3">
          <span style="font-size: 20px; font-weight: 600">Education</span>
        </b-col>
        <b-col sm="12" md="12" lg="12" xl="12" class="mx-auto mt-3">
          <div class="">
            <div class="d-flex hrCreate-label">School</div>
            <div class="validate-form position-relative">
              <b-form-input class="mt-1" type="text"></b-form-input>
            </div>
          </div>
        </b-col>
        <b-col sm="12" md="12" lg="12" xl="12" class="mx-auto mt-3">
          <div class="">
            <div class="d-flex hrCreate-label">Degree</div>
            <div class="validate-form position-relative">
              <b-form-input class="mt-1" type="text"></b-form-input>
            </div>
          </div>
        </b-col>
        <b-col sm="12" md="12" lg="12" xl="12" class="mx-auto mt-3">
          <div class="">
            <div class="d-flex hrCreate-label">Field of study</div>
            <div class="validate-form position-relative">
              <b-form-input class="mt-1" type="text"></b-form-input>
            </div>
          </div>
        </b-col>
        <b-col sm="12" md="12" lg="12" xl="12" class="mx-auto mt-4">
          <b-row>
            <b-col lg="12">
              <div class="d-flex hrCreate-label">Start date</div>
            </b-col>
            <b-col cols="12" md="12" xl="6" class="mt-1">
              <div class="validate-form position-relative">
                <v-select
                  label="text"
                  v-bind:reduce="(label) => label.id"
                  class="w-100 mt-1"
                ></v-select>
              </div>
            </b-col>
            <b-col cols="12" md="12" xl="6" class="mt-1">
              <div class="validate-form position-relative mt-1">
                <v-select
                  label="text"
                  v-bind:reduce="(label) => label.id"
                  class="w-100 ml-1"
                ></v-select>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col sm="12" md="12" lg="12" xl="12" class="mx-auto mt-4">
          <b-row>
            <b-col lg="12">
              <div class="d-flex hrCreate-label">End date</div>
            </b-col>
            <b-col cols="12" md="12" xl="6" class="mt-1">
              <div class="validate-form position-relative">
                <v-select
                  label="text"
                  v-bind:reduce="(label) => label.id"
                  class="w-100 mt-1"
                ></v-select>
              </div>
            </b-col>
            <b-col cols="12" md="12" xl="6" class="mt-1">
              <div class="validate-form position-relative mt-1">
                <v-select
                  label="text"
                  v-bind:reduce="(label) => label.id"
                  class="w-100 ml-1"
                ></v-select>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col sm="12" md="12" lg="12" xl="12" class="mx-auto mt-3">
          <div class="">
            <div class="d-flex hrCreate-label">Grade</div>
            <div class="validate-form position-relative">
              <b-form-input class="mt-1" type="text"></b-form-input>
            </div>
          </div>
        </b-col>
        <b-col sm="12" md="12" lg="12" xl="12" class="mx-auto mt-3">
          <div class="d-flex hrCreate-label">Activities and societies</div>
          <div class="validate-form position-relative">
            <b-form-textarea
              rows="4"
              class="w-100 mt-1"
              style="border: 1px solid #ced4da"
              placeholder="Messages"
            ></b-form-textarea>
          </div>
        </b-col>
        <b-col sm="12" md="12" lg="12" xl="12" class="mx-auto mt-3">
          <div class="d-flex hrCreate-label">Description</div>
          <div class="validate-form position-relative">
            <b-form-textarea
              rows="4"
              class="w-100 mt-1"
              style="border: 1px solid #ced4da"
              placeholder="Messages"
            ></b-form-textarea>
          </div>
        </b-col>
      </b-row>
      <!-- end UI Education -->

      <!-- UI Skill-->
      <b-row class="bg-white h-100 hrCreate-border-button mt-4">
        <b-col sm="12" md="12" lg="12" xl="12" class="mx-auto py-3">
          <span style="font-size: 20px; font-weight: 600">Skill</span>
        </b-col>
        <b-col sm="12" md="12" lg="12" xl="12" class="mx-auto mt-3">
          <div class="">
            <div class="d-flex hrCreate-label">Skill</div>
            <div class="validate-form position-relative">
              <b-form-input class="mt-1" type="text"></b-form-input>
            </div>
          </div>
        </b-col>
        <b-col sm="12" md="12" lg="12" xl="12" class="mx-auto mt-3">
          <div class="">
            <div class="d-flex hrCreate-label">Degree</div>
            <div
              class="validate-form position-relative p-3"
              style="background-color: #f9fafb"
            >
              <span>Suggested</span>
            </div>
          </div>
        </b-col>
      </b-row>
      <!-- end UI Skill-->
      <div class="hrCreate-group-action d-flex justify-content-between mt-3">
        <b-button
          style="background-color: #a1a1a1; color: white"
          class="px-4"
          onclick="history.back()"
        >
          <b-icon icon="caret-left-fill"></b-icon>
          Back to List Contact
        </b-button>
        <b-button
          class="px-4 py-2"
          style="background-color: #2993f5; border-color: unset"
          v-on:click="handleCreateNewResource()"
        >
          <b-icon icon="plus-lg"></b-icon> Import
        </b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import HRPreLoad from '~/components/Common/HRPreLoad/index.vue'
export default {
  name: 'CreateResource',
  components: {
    HRPreLoad
  },
  // layout: 'home',
  data() {
    return {}
  },
  watch: {},
  created() {},
  methods: {},
  auth: false
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/resoucre/create.scss';
.validate-form {
  .error-text {
    span {
      white-space: nowrap;
    }
  }
}
.hrCreate-border-button {
  padding: 5% 10% !important;
}
.form-detail {
  margin: 5% 15% !important;
}
.hrCreate-label {
  font-weight: unset;
}
.custom-datepicker {
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
  border-right-color: white !important;
  border-left-color: #c3c3c3 !important;
  border-top-color: #c3c3c3 !important;
  border-bottom-color: #c3c3c3 !important;
}
.custom-icon-datepicker {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: white !important;
  background-color: white;
  border-right-color: #c3c3c3 !important;
  border-top-color: #c3c3c3 !important;
  border-bottom-color: #c3c3c3 !important;
}
.edit-profile-image {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  background: #00000030;
}
.select-image {
  position: relative;
  height: 40px;
  line-height: 40px;
  margin: auto;
  overflow: hidden;
  padding: 0 10px;
  color: #fff;
}
.avatar:hover .edit-profile-image {
  display: flex;
  transition: 0.5s ease-in-out;
}
</style>
