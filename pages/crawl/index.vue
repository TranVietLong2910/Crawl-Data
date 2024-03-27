<template>
  <div class="hrJob">
    <HRPreLoad v-bind:preload="preload" />
    <div class="d-xl-none">
      <b-sidebar id="sidebar-1" class="bg-white" shadow>
        <div class="px-3 py-2 bg-white"></div>
      </b-sidebar>
    </div>
    <div class="pt-5">
      <h3 class="hrJob-title">List Crawl</h3>
    </div>
    <b-container fluid class="my-5">
      <b-row style="padding: 1% 8%">
        <div class="d-flex w-100 align-items-center justify-content-between">
          <b-button
            v-if="tabActive === 'zalo'"
            class="px-4 mr-3 button-new-crawl"
            v-bind:disabled="isDisabled"
            v-on:click="showModalZalo()"
          >
            <img src="~/assets/images/icon_new_crawl.svg" />Import User Zalo
          </b-button>
          <b-button
            v-else
            class="px-4 mr-3 button-new-crawl"
            v-bind:disabled="isDisabled"
            v-on:click="createNewCrawl()"
          >
            <img src="~/assets/images/icon_new_crawl.svg" />New Crawl
          </b-button>
          <b-button
            class="px-4 button-send-mess"
            v-on:click="showModalMessage()"
            ><img src="~/assets/images/icon_message.svg" />
            Send Messages
          </b-button>
        </div>
        <b-col lg="12" class="mt-3 px-0" style="background-color: white">
          <b-tabs content-class="mt-3" card>
            <b-tab title="Linkedin" v-on:click="changeTabActive('linkedin')">
              <b-col lg="12" class="mb-3">
                <div class="d-flex align-items-center justify-content-between">
                  <div>
                    <img src="~/assets/images/icon_filter.svg" />
                    <span
                      style="color: #3461b6; font-weight: 700; font-size: 17px"
                      >Filter by</span
                    >
                  </div>
                  <div v-on:click="showUIFilter()">
                    <img
                      v-if="isShowFilter === true"
                      src="~/assets/images/icon_down_up.svg"
                    />
                    <img v-else src="~/assets/images/icon_dropdown.svg" />
                  </div>
                </div>
              </b-col>

              <!-- UI Filter-->
              <b-row v-if="isShowFilter === true" class="w-100 ml-0">
                <b-col lg="3" class="mb-3">
                  <div class="search-keyword position-relative h-100">
                    <input
                      v-model="name"
                      placeholder="Name"
                      type="text"
                      class="form-control input-keyword h-100"
                    />
                  </div>
                </b-col>
                <b-col lg="3" sm="3" class="mb-3">
                  <div class="search-keyword position-relative h-100">
                    <input
                      v-model="position"
                      placeholder="Position"
                      type="text"
                      class="form-control input-keyword h-100"
                    />
                  </div>
                </b-col>
                <b-col lg="3" sm="3" class="mb-3">
                  <div class="search-location d-flex align-items-center">
                    <input
                      v-model="location"
                      placeholder="Location"
                      type="text"
                      class="form-control input-keyword h-100"
                    />
                  </div>
                </b-col>
                <b-col lg="3" sm="3" class="mb-3">
                  <div class="search-keyword position-relative h-100">
                    <input
                      v-model="email"
                      placeholder="Email"
                      type="text"
                      class="form-control input-keyword h-100"
                    />
                  </div>
                </b-col>
                <b-col lg="2" sm="3">
                  <div class="search-keyword position-relative h-100">
                    <input
                      v-model="phone"
                      placeholder="Phone"
                      type="text"
                      class="form-control input-keyword h-100"
                    />
                  </div>
                </b-col>
                <b-col lg="3">
                  <div class="search-keyword position-relative h-100">
                    <input
                      v-model="address"
                      placeholder="Address"
                      type="text"
                      class="form-control input-keyword h-100"
                    />
                  </div>
                </b-col>
                <b-col lg="2" sm="3">
                  <div class="search-keyword position-relative h-100">
                    <input
                      v-model="skill"
                      placeholder="Skill"
                      type="text"
                      class="form-control input-keyword h-100"
                    />
                  </div>
                </b-col>
                <b-col lg="5">
                  <div class="search-location d-flex align-items-center w-100">
                    <span class="text-nowrap">Birthday From</span>
                    <div class="d-flex h-100 ml-5">
                      <div>
                        <v-date-picker
                          v-model="start_day"
                          class="inline-block w-100 h-100"
                        >
                          <template #default="{ inputValue, togglePopover }">
                            <div class="d-flex items-center h-100">
                              <input
                                v-bind:value="inputValue"
                                class="bg-white text-gray-700 w-100 py-1 px-2 appearance-none border rounded-r focus:outline-none focus:border-blue-500"
                                readonly
                                v-on:click="togglePopover()"
                              />
                              <button
                                class="p-2 px-3 bg-blue-100 border border-blue-200 hover:bg-blue-200 text-blue-600 rounded-l focus:bg-blue-500 focus:text-white focus:border-blue-500 focus:outline-none"
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
                      <div class="ml-3">
                        <v-date-picker
                          v-model="finish_day"
                          class="inline-block w-100 h-100"
                        >
                          <template #default="{ inputValue, togglePopover }">
                            <div class="d-flex items-center h-100">
                              <input
                                v-bind:value="inputValue"
                                class="bg-white text-gray-700 w-100 py-1 px-2 appearance-none border rounded-r focus:outline-none focus:border-blue-500"
                                readonly
                                v-on:click="togglePopover()"
                              />
                              <button
                                class="p-2 px-3 bg-blue-100 border border-blue-200 hover:bg-blue-200 text-blue-600 rounded-l focus:bg-blue-500 focus:text-white focus:border-blue-500 focus:outline-none"
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
                    </div>
                  </div>
                </b-col>
                <b-col lg="12">
                  <div
                    class="d-flex align-items-center py-3 hrJob-top-popular mt-2"
                    style="justify-content: space-between"
                  >
                    <div class="font-weight-bold">
                      Total Record:
                      <span>{{ listCrawl.total_records }}</span>
                    </div>
                    <div>
                      <b-button
                        size="sm"
                        style="height: 100%; white-space: nowrap"
                        variant="primary"
                        class="mr-3"
                        v-on:click="showModalCreateGroup()"
                        ><img src="~/assets/images/icon_new_group.svg" /><span
                          class="pl-2"
                          >New Group
                        </span></b-button
                      >
                      <b-button
                        size="sm"
                        style="height: 100%; white-space: nowrap"
                        variant="primary"
                        class="mr-3"
                        v-on:click="showModalAddMember()"
                        ><img src="~/assets/images/icon_add_group2.svg" /><span
                          class="pl-2"
                          >Add to group
                        </span></b-button
                      >
                      <b-button
                        size="sm"
                        style="height: 100%; white-space: nowrap"
                        variant="primary"
                        v-on:click="getListCrawls(1)"
                        ><img src="~/assets/images/icon_search.svg" />
                        <span class="pl-2">Search </span></b-button
                      >
                      <b-button
                        size="sm"
                        class="ml-3"
                        style="height: 100%; white-space: nowrap"
                        variant="secondary"
                        ><img src="~/assets/images/icon_clear1.svg" />
                        <span class="pl-2">Clear</span></b-button
                      >
                    </div>
                  </div>
                </b-col>
              </b-row>
              <!-- end UI Filter-->

              <div>
                <b-table
                  id="tableListCrawl"
                  responsive
                  v-bind:items="listData"
                  v-bind:fields="table"
                >
                  <template
                    #head(id)="data"
                    style="text-align: center !important"
                  >
                    <input
                      v-bind:ref="data"
                      v-model="allSelected"
                      type="checkbox"
                      class="custom-checkbox"
                      v-on:click="selectAllMember()"
                    />
                  </template>
                  <template #cell(id)="data">
                    <input
                      v-model="selectedMember"
                      type="checkbox"
                      class="custom-checkbox"
                      v-bind:value="data.item.id"
                      v-on:click="selectMember(data.item.id)"
                    />
                  </template>
                  <template #cell(name)="data">
                    <div class="d-flex">
                      <div>
                        <img
                          v-bind:src="data.item.url_avt"
                          style="width: 80px; border-radius: 50%"
                        />
                      </div>
                      <div
                        class="ml-2"
                        style="width: 300px !important; word-break: break-word"
                      >
                        <div
                          class="custom-text-user"
                          v-on:click="detailUser(data.item.id)"
                        >
                          {{ data.item.name }}
                        </div>
                        <div
                          style="
                            width: 300px !important;
                            word-break: break-word;
                          "
                        >
                          {{ data.item.position }}
                        </div>
                        <div>
                          {{ data.item.location }}
                        </div>
                      </div>
                    </div>
                  </template>
                  <template #cell(link_contact)="data">
                    <div>
                      <div class="custom-linkcontact">
                        <a
                          v-bind:href="data.item.link_contact"
                          target="_blank"
                          >{{ data.item.link_contact }}</a
                        >
                      </div>
                    </div>
                  </template>
                  <template #cell(status)="data">
                    <div
                      v-if="data.item.status === 0"
                      class="color-faild p-2 d-flex justify-content-center"
                    >
                      <span> Faild </span>
                    </div>
                    <div
                      v-if="data.item.status === 1"
                      class="color-process p-2 d-flex justify-content-center"
                    >
                      <span> Process </span>
                    </div>
                    <div
                      v-if="data.item.status === 2"
                      class="color-success p-2 d-flex justify-content-center"
                    >
                      <span> Success </span>
                    </div>
                  </template>
                  <template #cell(skill)="data">
                    <div style="width: 100px">{{ data.item.skill }}</div>
                  </template>
                  <template #cell(action)="data">
                    <div class="bg-action">
                      <b-dropdown
                        size="lg"
                        variant="link"
                        class="dropdown"
                        toggle-class="text-decoration-none"
                        no-caret
                      >
                        <template #button-content>
                          <div
                            class="bg-dropdown d-flex align-items-center justify-content-center"
                          >
                            <img src="~/assets/images/3cham.svg" />
                            <span hidden>{{ data }}</span>
                          </div>
                        </template>
                        <b-dropdown-item
                          style="
                            padding-left: 5px !important;
                            padding-right: 5px !important;
                          "
                        >
                          <div class="d-flex py-2">
                            <div class="bg-box">
                              <img src="~/assets/images/archive_down.svg" />
                            </div>
                            <div class="ml-2 mt-1">
                              <p>Crawl</p>
                            </div>
                          </div>
                        </b-dropdown-item>
                        <b-dropdown-item
                          style="
                            padding-left: 5px !important;
                            padding-right: 5px !important;
                          "
                          v-on:click="addMember(data.item.id)"
                        >
                          <div class="d-flex py-2">
                            <div class="bg-trash">
                              <img src="~/assets/images/icon_add_member.svg" />
                            </div>
                            <div class="ml-2 mt-1">
                              <p>Add to group</p>
                            </div>
                          </div>
                        </b-dropdown-item>
                      </b-dropdown>
                    </div>
                  </template>
                </b-table>
                <HRPagination
                  v-if="lastPage > 1"
                  class="mt-3"
                  v-bind:totalpage="lastPage"
                  v-bind:current-page="currentPage"
                  v-on:update-page="updatePage"
                />
              </div>
            </b-tab>
            <b-tab title="Zalo" active v-on:click="changeTabActive('zalo')">
              <b-col lg="12" class="mb-3">
                <div class="d-flex align-items-center justify-content-between">
                  <div>
                    <img src="~/assets/images/icon_filter.svg" />
                    <span
                      style="color: #3461b6; font-weight: 700; font-size: 17px"
                      >Filter by</span
                    >
                  </div>
                  <div v-on:click="showUIFilter()">
                    <img
                      v-if="isShowFilter === true"
                      src="~/assets/images/icon_down_up.svg"
                    />
                    <img v-else src="~/assets/images/icon_dropdown.svg" />
                  </div>
                </div>
              </b-col>

              <!-- UI Filter-->
              <b-row v-if="isShowFilter === true" class="w-100 ml-0">
                <b-col lg="3" class="mb-3">
                  <div class="search-keyword position-relative h-100">
                    <input
                      v-model="name"
                      placeholder="Name"
                      type="text"
                      class="form-control input-keyword h-100"
                    />
                  </div>
                </b-col>
                <b-col lg="3" sm="3" class="mb-3">
                  <div class="search-keyword position-relative h-100">
                    <input
                      v-model="position"
                      placeholder="Position"
                      type="text"
                      class="form-control input-keyword h-100"
                    />
                  </div>
                </b-col>
                <b-col lg="3" sm="3" class="mb-3">
                  <div class="search-location d-flex align-items-center">
                    <input
                      v-model="location"
                      placeholder="Location"
                      type="text"
                      class="form-control input-keyword h-100"
                    />
                  </div>
                </b-col>
                <b-col lg="3" sm="3" class="mb-3">
                  <div class="search-keyword position-relative h-100">
                    <input
                      v-model="email"
                      placeholder="Email"
                      type="text"
                      class="form-control input-keyword h-100"
                    />
                  </div>
                </b-col>
                <b-col lg="2" sm="3">
                  <div class="search-keyword position-relative h-100">
                    <input
                      v-model="phone"
                      placeholder="Phone"
                      type="text"
                      class="form-control input-keyword h-100"
                    />
                  </div>
                </b-col>
                <b-col lg="3">
                  <div class="search-keyword position-relative h-100">
                    <input
                      v-model="address"
                      placeholder="Address"
                      type="text"
                      class="form-control input-keyword h-100"
                    />
                  </div>
                </b-col>
                <b-col lg="2" sm="3">
                  <div class="search-keyword position-relative h-100">
                    <input
                      v-model="skill"
                      placeholder="Skill"
                      type="text"
                      class="form-control input-keyword h-100"
                    />
                  </div>
                </b-col>
                <b-col lg="5">
                  <div class="search-location d-flex align-items-center w-100">
                    <span class="text-nowrap">Birthday From</span>
                    <div class="d-flex h-100 ml-5">
                      <div>
                        <v-date-picker
                          v-model="start_day"
                          class="inline-block w-100 h-100"
                        >
                          <template #default="{ inputValue, togglePopover }">
                            <div class="d-flex items-center h-100">
                              <input
                                v-bind:value="inputValue"
                                class="bg-white text-gray-700 w-100 py-1 px-2 appearance-none border rounded-r focus:outline-none focus:border-blue-500"
                                readonly
                                v-on:click="togglePopover()"
                              />
                              <button
                                class="p-2 px-3 bg-blue-100 border border-blue-200 hover:bg-blue-200 text-blue-600 rounded-l focus:bg-blue-500 focus:text-white focus:border-blue-500 focus:outline-none"
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
                      <div class="ml-3">
                        <v-date-picker
                          v-model="finish_day"
                          class="inline-block w-100 h-100"
                        >
                          <template #default="{ inputValue, togglePopover }">
                            <div class="d-flex items-center h-100">
                              <input
                                v-bind:value="inputValue"
                                class="bg-white text-gray-700 w-100 py-1 px-2 appearance-none border rounded-r focus:outline-none focus:border-blue-500"
                                readonly
                                v-on:click="togglePopover()"
                              />
                              <button
                                class="p-2 px-3 bg-blue-100 border border-blue-200 hover:bg-blue-200 text-blue-600 rounded-l focus:bg-blue-500 focus:text-white focus:border-blue-500 focus:outline-none"
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
                    </div>
                  </div>
                </b-col>
                <b-col lg="12">
                  <div
                    class="d-flex align-items-center py-3 hrJob-top-popular mt-2"
                    style="justify-content: space-between"
                  >
                    <div class="font-weight-bold">
                      Total Record:
                      <span>{{ listCrawl.total_records }}</span>
                    </div>
                    <div>
                      <b-button
                        size="sm"
                        style="height: 100%; white-space: nowrap"
                        variant="primary"
                        class="mr-3"
                        v-on:click="showModalCreateGroup()"
                        ><img src="~/assets/images/icon_new_group.svg" /><span
                          class="pl-2"
                          >New Group
                        </span></b-button
                      >
                      <b-button
                        size="sm"
                        style="height: 100%; white-space: nowrap"
                        variant="primary"
                        class="mr-3"
                        v-on:click="showModalAddMember()"
                        ><img src="~/assets/images/icon_add_group2.svg" /><span
                          class="pl-2"
                          >Add to group
                        </span></b-button
                      >
                      <b-button
                        size="sm"
                        style="height: 100%; white-space: nowrap"
                        variant="primary"
                        v-on:click="getListCrawls(1)"
                        ><img src="~/assets/images/icon_search.svg" />
                        <span class="pl-2">Search </span></b-button
                      >
                      <b-button
                        size="sm"
                        class="ml-3"
                        style="height: 100%; white-space: nowrap"
                        variant="secondary"
                        ><img src="~/assets/images/icon_clear1.svg" />
                        <span class="pl-2">Clear</span></b-button
                      >
                    </div>
                  </div>
                </b-col>
              </b-row>
              <!-- end UI Filter-->

              <div>
                <b-table
                  id="tableListCrawl"
                  responsive
                  v-bind:items="listData"
                  v-bind:fields="table"
                >
                  <template
                    #head(id)="data"
                    style="text-align: center !important"
                  >
                    <input
                      v-bind:ref="data"
                      v-model="allSelected"
                      type="checkbox"
                      class="custom-checkbox"
                      v-on:click="selectAllMember()"
                    />
                  </template>
                  <template #cell(id)="data">
                    <input
                      v-model="selectedMember"
                      type="checkbox"
                      class="custom-checkbox"
                      v-bind:value="data.item.id"
                      v-on:click="selectMember(data.item.id)"
                    />
                  </template>
                  <template #cell(name)="data">
                    <div class="d-flex">
                      <div>
                        <img
                          v-bind:src="data.item.url_avt"
                          style="width: 80px; border-radius: 50%"
                        />
                      </div>
                      <div
                        class="ml-2"
                        style="width: 300px !important; word-break: break-word"
                      >
                        <div
                          class="custom-text-user"
                          v-on:click="detailUser(data.item.id)"
                        >
                          {{ data.item.name }}
                        </div>
                        <div
                          style="
                            width: 300px !important;
                            word-break: break-word;
                          "
                        >
                          {{ data.item.position }}
                        </div>
                        <div>
                          {{ data.item.location }}
                        </div>
                      </div>
                    </div>
                  </template>
                  <template #cell(link_contact)="data">
                    <div>
                      <div class="custom-linkcontact">
                        <a
                          v-bind:href="data.item.link_contact"
                          target="_blank"
                          >{{ data.item.link_contact }}</a
                        >
                      </div>
                    </div>
                  </template>
                  <template #cell(status)="data">
                    <div
                      v-if="data.item.status === 0"
                      class="color-faild p-2 d-flex justify-content-center"
                    >
                      <span> Faild </span>
                    </div>
                    <div
                      v-if="data.item.status === 1"
                      class="color-process p-2 d-flex justify-content-center"
                    >
                      <span> Process </span>
                    </div>
                    <div
                      v-if="data.item.status === 2"
                      class="color-success p-2 d-flex justify-content-center"
                    >
                      <span> Success </span>
                    </div>
                  </template>
                  <template #cell(skill)="data">
                    <div style="width: 100px">{{ data.item.skill }}</div>
                  </template>
                  <template #cell(action)="data">
                    <div class="bg-action">
                      <b-dropdown
                        size="lg"
                        variant="link"
                        class="dropdown"
                        toggle-class="text-decoration-none"
                        no-caret
                      >
                        <template #button-content>
                          <div
                            class="bg-dropdown d-flex align-items-center justify-content-center"
                          >
                            <img src="~/assets/images/3cham.svg" />
                            <span hidden>{{ data }}</span>
                          </div>
                        </template>
                        <b-dropdown-item
                          style="
                            padding-left: 5px !important;
                            padding-right: 5px !important;
                          "
                        >
                          <div class="d-flex py-2">
                            <div class="bg-box">
                              <img src="~/assets/images/archive_down.svg" />
                            </div>
                            <div class="ml-2 mt-1">
                              <p>Crawl</p>
                            </div>
                          </div>
                        </b-dropdown-item>
                        <b-dropdown-item
                          style="
                            padding-left: 5px !important;
                            padding-right: 5px !important;
                          "
                          v-on:click="addMember(data.item.id)"
                        >
                          <div class="d-flex py-2">
                            <div class="bg-trash">
                              <img src="~/assets/images/icon_add_member.svg" />
                            </div>
                            <div class="ml-2 mt-1">
                              <p>Add to group</p>
                            </div>
                          </div>
                        </b-dropdown-item>
                      </b-dropdown>
                    </div>
                  </template>
                </b-table>
                <HRPagination
                  v-if="lastPage > 1"
                  class="mt-3"
                  v-bind:totalpage="lastPage"
                  v-bind:current-page="currentPage"
                  v-on:update-page="updatePage"
                />
              </div>
            </b-tab>
            <b-tab title="Facebook" v-on:click="changeTabActive('facebook')">
              <b-col lg="12" class="mb-3">
                <div class="d-flex align-items-center justify-content-between">
                  <div>
                    <img src="~/assets/images/icon_filter.svg" />
                    <span
                      style="color: #3461b6; font-weight: 700; font-size: 17px"
                      >Filter by</span
                    >
                  </div>
                  <div v-on:click="showUIFilter()">
                    <img
                      v-if="isShowFilter === true"
                      src="~/assets/images/icon_down_up.svg"
                    />
                    <img v-else src="~/assets/images/icon_dropdown.svg" />
                  </div>
                </div>
              </b-col>

              <!-- UI Filter-->
              <b-row v-if="isShowFilter === true" class="w-100 ml-0">
                <b-col lg="3" class="mb-3">
                  <div class="search-keyword position-relative h-100">
                    <input
                      v-model="name"
                      placeholder="Name"
                      type="text"
                      class="form-control input-keyword h-100"
                    />
                  </div>
                </b-col>
                <b-col lg="3" sm="3" class="mb-3">
                  <div class="search-keyword position-relative h-100">
                    <input
                      v-model="position"
                      placeholder="Position"
                      type="text"
                      class="form-control input-keyword h-100"
                    />
                  </div>
                </b-col>
                <b-col lg="3" sm="3" class="mb-3">
                  <div class="search-location d-flex align-items-center">
                    <input
                      v-model="location"
                      placeholder="Location"
                      type="text"
                      class="form-control input-keyword h-100"
                    />
                  </div>
                </b-col>
                <b-col lg="3" sm="3" class="mb-3">
                  <div class="search-keyword position-relative h-100">
                    <input
                      v-model="email"
                      placeholder="Email"
                      type="text"
                      class="form-control input-keyword h-100"
                    />
                  </div>
                </b-col>
                <b-col lg="2" sm="3">
                  <div class="search-keyword position-relative h-100">
                    <input
                      v-model="phone"
                      placeholder="Phone"
                      type="text"
                      class="form-control input-keyword h-100"
                    />
                  </div>
                </b-col>
                <b-col lg="3">
                  <div class="search-keyword position-relative h-100">
                    <input
                      v-model="address"
                      placeholder="Address"
                      type="text"
                      class="form-control input-keyword h-100"
                    />
                  </div>
                </b-col>
                <b-col lg="2" sm="3">
                  <div class="search-keyword position-relative h-100">
                    <input
                      v-model="skill"
                      placeholder="Skill"
                      type="text"
                      class="form-control input-keyword h-100"
                    />
                  </div>
                </b-col>
                <b-col lg="5">
                  <div class="search-location d-flex align-items-center w-100">
                    <span class="text-nowrap">Birthday From</span>
                    <div class="d-flex h-100 ml-5">
                      <div>
                        <v-date-picker
                          v-model="start_day"
                          class="inline-block w-100 h-100"
                        >
                          <template #default="{ inputValue, togglePopover }">
                            <div class="d-flex items-center h-100">
                              <input
                                v-bind:value="inputValue"
                                class="bg-white text-gray-700 w-100 py-1 px-2 appearance-none border rounded-r focus:outline-none focus:border-blue-500"
                                readonly
                                v-on:click="togglePopover()"
                              />
                              <button
                                class="p-2 px-3 bg-blue-100 border border-blue-200 hover:bg-blue-200 text-blue-600 rounded-l focus:bg-blue-500 focus:text-white focus:border-blue-500 focus:outline-none"
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
                      <div class="ml-3">
                        <v-date-picker
                          v-model="finish_day"
                          class="inline-block w-100 h-100"
                        >
                          <template #default="{ inputValue, togglePopover }">
                            <div class="d-flex items-center h-100">
                              <input
                                v-bind:value="inputValue"
                                class="bg-white text-gray-700 w-100 py-1 px-2 appearance-none border rounded-r focus:outline-none focus:border-blue-500"
                                readonly
                                v-on:click="togglePopover()"
                              />
                              <button
                                class="p-2 px-3 bg-blue-100 border border-blue-200 hover:bg-blue-200 text-blue-600 rounded-l focus:bg-blue-500 focus:text-white focus:border-blue-500 focus:outline-none"
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
                    </div>
                  </div>
                </b-col>
                <b-col lg="12">
                  <div
                    class="d-flex align-items-center py-3 hrJob-top-popular mt-2"
                    style="justify-content: space-between"
                  >
                    <div class="font-weight-bold">
                      Total Record:
                      <span>{{ listCrawl.total_records }}</span>
                    </div>
                    <div>
                      <b-button
                        size="sm"
                        style="height: 100%; white-space: nowrap"
                        variant="primary"
                        class="mr-3"
                        v-on:click="showModalCreateGroup()"
                        ><img src="~/assets/images/icon_new_group.svg" /><span
                          class="pl-2"
                          >New Group
                        </span></b-button
                      >
                      <b-button
                        size="sm"
                        style="height: 100%; white-space: nowrap"
                        variant="primary"
                        class="mr-3"
                        v-on:click="showModalAddMember()"
                        ><img src="~/assets/images/icon_add_group2.svg" /><span
                          class="pl-2"
                          >Add to group
                        </span></b-button
                      >
                      <b-button
                        size="sm"
                        style="height: 100%; white-space: nowrap"
                        variant="primary"
                        v-on:click="getListCrawls(1)"
                        ><img src="~/assets/images/icon_search.svg" />
                        <span class="pl-2">Search </span></b-button
                      >
                      <b-button
                        size="sm"
                        class="ml-3"
                        style="height: 100%; white-space: nowrap"
                        variant="secondary"
                        ><img src="~/assets/images/icon_clear1.svg" />
                        <span class="pl-2">Clear</span></b-button
                      >
                    </div>
                  </div>
                </b-col>
              </b-row>
              <!-- end UI Filter-->

              <div>
                <b-table
                  id="tableListCrawl"
                  responsive
                  v-bind:items="listData"
                  v-bind:fields="table"
                >
                  <template
                    #head(id)="data"
                    style="text-align: center !important"
                  >
                    <input
                      v-bind:ref="data"
                      v-model="allSelected"
                      type="checkbox"
                      class="custom-checkbox"
                      v-on:click="selectAllMember()"
                    />
                  </template>
                  <template #cell(id)="data">
                    <input
                      v-model="selectedMember"
                      type="checkbox"
                      class="custom-checkbox"
                      v-bind:value="data.item.id"
                      v-on:click="selectMember(data.item.id)"
                    />
                  </template>
                  <template #cell(name)="data">
                    <div class="d-flex">
                      <div>
                        <img
                          v-bind:src="data.item.url_avt"
                          style="width: 80px; border-radius: 50%"
                        />
                      </div>
                      <div
                        class="ml-2"
                        style="width: 300px !important; word-break: break-word"
                      >
                        <div
                          class="custom-text-user"
                          v-on:click="detailUser(data.item.id)"
                        >
                          {{ data.item.name }}
                        </div>
                        <div
                          style="
                            width: 300px !important;
                            word-break: break-word;
                          "
                        >
                          {{ data.item.position }}
                        </div>
                        <div>
                          {{ data.item.location }}
                        </div>
                      </div>
                    </div>
                  </template>
                  <template #cell(link_contact)="data">
                    <div>
                      <div class="custom-linkcontact">
                        <a
                          v-bind:href="data.item.link_contact"
                          target="_blank"
                          >{{ data.item.link_contact }}</a
                        >
                      </div>
                    </div>
                  </template>
                  <template #cell(status)="data">
                    <div
                      v-if="data.item.status === 0"
                      class="color-faild p-2 d-flex justify-content-center"
                    >
                      <span> Faild </span>
                    </div>
                    <div
                      v-if="data.item.status === 1"
                      class="color-process p-2 d-flex justify-content-center"
                    >
                      <span> Process </span>
                    </div>
                    <div
                      v-if="data.item.status === 2"
                      class="color-success p-2 d-flex justify-content-center"
                    >
                      <span> Success </span>
                    </div>
                  </template>
                  <template #cell(skill)="data">
                    <div style="width: 100px">{{ data.item.skill }}</div>
                  </template>
                  <template #cell(action)="data">
                    <div class="bg-action">
                      <b-dropdown
                        size="lg"
                        variant="link"
                        class="dropdown"
                        toggle-class="text-decoration-none"
                        no-caret
                      >
                        <template #button-content>
                          <div
                            class="bg-dropdown d-flex align-items-center justify-content-center"
                          >
                            <img src="~/assets/images/3cham.svg" />
                            <span hidden>{{ data }}</span>
                          </div>
                        </template>
                        <b-dropdown-item
                          style="
                            padding-left: 5px !important;
                            padding-right: 5px !important;
                          "
                        >
                          <div class="d-flex py-2">
                            <div class="bg-box">
                              <img src="~/assets/images/archive_down.svg" />
                            </div>
                            <div class="ml-2 mt-1">
                              <p>Crawl</p>
                            </div>
                          </div>
                        </b-dropdown-item>
                        <b-dropdown-item
                          style="
                            padding-left: 5px !important;
                            padding-right: 5px !important;
                          "
                          v-on:click="addMember(data.item.id)"
                        >
                          <div class="d-flex py-2">
                            <div class="bg-trash">
                              <img src="~/assets/images/icon_add_member.svg" />
                            </div>
                            <div class="ml-2 mt-1">
                              <p>Add to group</p>
                            </div>
                          </div>
                        </b-dropdown-item>
                      </b-dropdown>
                    </div>
                  </template>
                </b-table>
                <HRPagination
                  v-if="lastPage > 1"
                  class="mt-3"
                  v-bind:totalpage="lastPage"
                  v-bind:current-page="currentPage"
                  v-on:update-page="updatePage"
                />
              </div>
            </b-tab>
          </b-tabs>
        </b-col>
      </b-row>

      <!-- modal new group-->
      <b-modal
        id="modal-create-group"
        size="lg"
        header-class="modalHeader py-2"
        body-class="custom-body py-2"
        hide-footer
      >
        <template #modal-header>
          <div class="h-100 w-100" style="color: white; text-align: center">
            <h5><img src="~/assets/images/icon_new_group.svg" />New Group</h5>
          </div>
        </template>
        <template #default="{}">
          <div class="row p-3 text-aligh">
            <div v-if="position || location" class="col-lg-12">
              <div class="p-3" style="background-color: #d9d9d9">
                <div class="d-flex justify-content-center">
                  <div style="font-size: 14px; font-weight: 700">
                    Fillter by:
                  </div>
                  <div class="ml-3">
                    <div style="font-size: 14px">Position: {{ position }}</div>
                    <div style="font-size: 14px">Location: {{ location }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12 mt-3">
              <div class="d-flex hrCreate-label">Group’s name</div>
              <div>
                <input
                  v-model="groupName"
                  type="text"
                  class="form-control input-keyword h-100 mt-2"
                />
              </div>
            </div>
            <div class="col-lg-12 mt-3 text-center">
              <b-button
                size="sm"
                style="height: 100%; white-space: nowrap"
                variant="secondary"
                v-on:click="hideModalCreate()"
                ><span class="">Cancel</span></b-button
              >
              <b-button
                size="sm"
                class="ml-3"
                style="height: 100%; white-space: nowrap"
                variant="primary"
                v-on:click="createGroupCrawl()"
                ><span class="">Create Group </span></b-button
              >
            </div>
          </div>
        </template>
      </b-modal>
      <!-- end modal new group-->

      <!-- modal add member group-->
      <b-modal
        id="modal-add-member"
        size="lg"
        header-class="modalHeader py-2"
        body-class="custom-body py-2"
        hide-footer
      >
        <template #modal-header>
          <div class="h-100 w-100" style="color: white; text-align: center">
            <h5>
              <img src="~/assets/images/icon_add_group.svg" />ADD TO GROUP
            </h5>
          </div>
        </template>
        <template #default="{}">
          <div class="row p-3 w-100">
            <div class="col-lg-12 mt-3 px-5">
              <div class="d-flex hrCreate-label">Search Group</div>
              <div>
                <v-select
                  v-model="selectedGroup"
                  v-bind:options="optionGroup"
                  label="text"
                  class="w-100 mt-3"
                  placeholder=""
                ></v-select>
              </div>
            </div>
            <div class="col-lg-12 mt-4">
              <div v-if="selectedGroup" class="d-flex justify-content-center">
                <div
                  class="p-3"
                  style="border: 1px solid #c7c7c7; border-radius: 15px"
                >
                  <div>
                    <img
                      class="w-100"
                      src="~/assets/images/image_background_group.svg"
                    />
                    <b-avatar-group
                      size="70px"
                      class="px-3"
                      style="position: absolute; top: 90px"
                    >
                      <b-avatar
                        v-for="(ele, index) in detail_group_by_id.avt_member"
                        v-bind:key="index"
                        v-bind:src="ele"
                      ></b-avatar>
                      <b-avatar v-if="detail_group_by_id.more_avt"
                        >+{{ detail_group_by_id.more_avt }}</b-avatar
                      >
                    </b-avatar-group>
                  </div>
                  <div class="custom_name_group">
                    {{ detail_group_by_id.group_name }}
                  </div>
                  <div class="mt-5" style="font-weight: 600">
                    <span>Fillter by:</span>
                  </div>
                  <div class="mt-3">
                    <ul>
                      <li class="mt-2">
                        Location: {{ detail_group_by_id.location }}
                      </li>
                      <li class="mt-2">
                        Position: {{ detail_group_by_id.position }}
                      </li>
                      <li class="mt-2">
                        Quantity Member:
                        <span style="font-weight: 600">{{
                          detail_group_by_id.number_member
                        }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12 mt-3 text-center">
              <b-button
                size="sm"
                style="height: 100%; white-space: nowrap"
                variant="secondary"
                class="px-3 py-2"
                v-on:click="hideModalAdd()"
                ><span class="">Cancel</span></b-button
              >
              <b-button
                size="sm"
                class="ml-3 button-add-group px-3 py-2"
                style="white-space: nowrap"
                variant="primary"
                v-on:click="addMemberGroup()"
                >Add</b-button
              >
            </div>
          </div>
        </template>
      </b-modal>

      <!-- moaal send message-->
      <b-modal
        id="modal-send-message"
        size="xl"
        header-class="modalHeader py-2"
        body-class="custom-body py-2"
        hide-footer
      >
        <template #modal-header>
          <div class="h-100 w-100" style="color: white; text-align: center">
            <h5><img src="~/assets/images/icon_message.svg" />Send Message</h5>
          </div>
        </template>
        <template #default="{}">
          <div class="row p-3 w-100">
            <div class="col-lg-12 mt-3 px-5">
              <div class="d-flex hrCreate-label">Choose Type</div>
              <div>
                <v-select
                  v-model="typeAccount"
                  v-bind:options="optionType"
                  label="text"
                  class="w-100 mt-3"
                  placeholder="Type Account"
                  style="width: 200px !important"
                ></v-select>
              </div>
            </div>
            <div
              v-if="typeAccount.value === 'zalo'"
              class="col-lg-12 mt-3 px-5"
            >
              <div class="d-flex hrCreate-label">Name Category</div>
              <div>
                <input
                  v-model="name_category_zalo"
                  label="text"
                  class="w-100 mt-3 form-control"
                  placeholder=""
                />
              </div>
            </div>
            <div v-if="tabActive === 'zalo'" class="col-lg-12 mt-3 px-5">
              <div class="d-flex hrCreate-label">Search Group</div>
              <div>
                <v-select
                  v-model="selectedGroupZalo"
                  v-bind:options="listGroupZalo"
                  label="name_category"
                  class="w-100 mt-3"
                  placeholder=""
                ></v-select>
              </div>
            </div>
            <div v-else class="col-lg-12 mt-3 px-5">
              <div class="d-flex hrCreate-label">Search Group</div>
              <div>
                <v-select
                  v-model="selectedGroup"
                  v-bind:options="optionGroup"
                  label="text"
                  class="w-100 mt-3"
                  placeholder=""
                ></v-select>
              </div>
            </div>
            <!-- <div class="col-lg-12 mt-4">
              <div v-if="selectedGroup" class="d-flex justify-content-center">
                <div
                  class="p-3"
                  style="border: 1px solid #c7c7c7; border-radius: 15px"
                >
                  <div>
                    <img
                      class="w-100"
                      src="~/assets/images/image_background_group.svg"
                    />
                    <b-avatar-group
                      size="70px"
                      class="px-3"
                      style="position: absolute; top: 90px"
                    >
                      <b-avatar
                        v-for="(ele, index) in detail_group_by_id.avt_member"
                        v-bind:key="index"
                        v-bind:src="ele"
                      ></b-avatar>
                      <b-avatar v-if="detail_group_by_id.more_avt"
                        >+{{ detail_group_by_id.more_avt }}</b-avatar
                      >
                    </b-avatar-group>
                  </div>
                  <div class="custom_name_group">
                    {{ detail_group_by_id.group_name }}
                  </div>
                  <div class="mt-5" style="font-weight: 600">
                    <span>Fillter by:</span>
                  </div>
                  <div class="mt-3">
                    <ul>
                      <li class="mt-2">
                        Location: {{ detail_group_by_id.location }}
                      </li>
                      <li class="mt-2">
                        Position: {{ detail_group_by_id.position }}
                      </li>
                      <li class="mt-2">
                        Quantity Member:
                        <span style="font-weight: 600">{{
                          detail_group_by_id.number_member
                        }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> -->
            <div class="my-4 col-12 px-5">
              <div class="d-flex hrCreate-label">Message</div>
              <div class="mt-3">
                <div
                  v-for="(element, index) in listImageUpload"
                  v-bind:key="index"
                  class="w-100 preview-img p-2 row ml-0 align-items-center"
                  style="border: 1px #ebebeb solid"
                >
                  <img
                    v-bind:src="element.url_image"
                    class="col-lg-1 px-0"
                    style="width: 40px; height: 40px; object-fit: contain"
                  />
                  <!-- <div v-else></div> -->
                  <div class="px-2 col-lg-10">
                    <div class="d-flex text-nowrap">
                      <div style="color: #000000e6" class="custom-text-file">
                        {{ element.name }}
                      </div>
                      <span style="padding: 0 0.4rem">•</span>
                      <span style="color: #00000099"
                        >{{ (element.size / 1024 / 1024).toFixed(2) }} MB
                      </span>
                    </div>
                    <span style="color: #00000099">Attached</span>
                  </div>
                  <div class="col-lg-1">
                    <span
                      style="cursor: pointer"
                      v-on:click="deleteImage(index)"
                      >X</span
                    >
                  </div>
                </div>
                <div
                  v-for="(item, index) in listFileUpload"
                  v-bind:key="index"
                  class="w-100 preview-img p-2 row ml-0 align-items-center"
                  style="border: 1px #ebebeb solid"
                >
                  <img
                    src="~/assets/images/icon_file.png"
                    class="col-lg-1 px-0"
                    style="width: 40px; height: 40px; object-fit: contain"
                  />
                  <!-- <div v-else></div> -->
                  <div class="px-2 col-lg-10">
                    <div class="d-flex text-nowrap">
                      <div style="color: #000000e6" class="custom-text-file">
                        {{ item.name }}
                      </div>
                      <span style="padding: 0 0.4rem">•</span>
                      <span style="color: #00000099"
                        >{{ (item.size / 1024 / 1024).toFixed(2) }} MB
                      </span>
                    </div>
                    <span style="color: #00000099">Attached</span>
                  </div>
                  <div class="col-lg-1">
                    <span style="cursor: pointer" v-on:click="deleteFile(index)"
                      >X</span
                    >
                  </div>
                </div>
              </div>
              <textarea
                v-model="message"
                class="w-100 p-2"
                placeholder="Write a message..."
                rows="6"
                max-rows="6"
                style="border: 1px #ebebeb solid"
              ></textarea>
              <div
                class="w-100 custom-send-message p-2 d-flex align-items-center justify-content-between"
                style="border: 1px #ebebeb solid; margin-top: -10px"
              >
                <div>
                  <img
                    class="w-100 custom_icon_send"
                    src="~/assets/images/icon_image.svg"
                    v-on:click.prevent="uploadPre()"
                  />
                  <img
                    class="w-100 custom_icon_send ml-2"
                    src="~/assets/images/icon_ghim.svg"
                    v-on:click.prevent="uploadFileChat()"
                  />
                  <img
                    class="w-100 custom_icon_send ml-2"
                    src="~/assets/images/icon_gif.svg"
                  />
                  <img
                    class="w-100 custom_icon_send ml-2"
                    src="~/assets/images/icon_emojis.svg"
                  />
                </div>
                <div>
                  <b-button
                    variant="danger"
                    style="
                      border-radius: 20px;
                      color: #e5e5e6;
                      background-color: #2680eb;
                      border-color: #2680eb;
                    "
                    v-on:click="sendMessageZalo()"
                    >Send</b-button
                  >
                </div>
              </div>
              <div>
                <input
                  id="upload"
                  type="file"
                  class="d-none"
                  accept="image/jpg, image/png, image/jpeg, image/svg"
                  v-on:change="uploadImage($event)"
                />
                <input
                  id="uploadFile"
                  type="file"
                  class="d-none"
                  accept=".csv,application/vnd.ms-excel, application/pdf, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,text/plain"
                  v-on:change="uploadFile($event)"
                />
              </div>
            </div>
            <div class="col-lg-12 mt-3 text-center d-none">
              <b-button
                size="sm"
                style="height: 100%; white-space: nowrap"
                variant="secondary"
                class="px-3 py-2"
                v-on:click="hideModalSendMessage()"
                ><span class="">Cancel</span></b-button
              >
              <b-button
                size="sm"
                class="ml-3 button-add-group px-3 py-2"
                style="white-space: nowrap"
                variant="primary"
                v-on:click="sendMessageGroups()"
                >Send</b-button
              >
            </div>
          </div>
        </template>
      </b-modal>
      <!-- end modal send message Linkedin -->

      <!-- import account zalo-->
      <b-modal
        id="modal-add-member-zalo"
        size="lg"
        header-class="modalHeader py-2"
        body-class="custom-body py-2"
        hide-footer
      >
        <template #modal-header>
          <div class="h-100 w-100" style="color: white; text-align: center">
            <h5>
              <img src="~/assets/images/icon_add_group.svg" />ADD TO GROUP
            </h5>
          </div>
        </template>
        <template #default="{}">
          <div class="row p-3 w-100">
            <div class="col-6">
              <span class="text-title-account-zalo">User Create:</span>
            </div>
            <div class="col-6">
              <span>{{ infoAccountCrawl?.user_name }}</span>
            </div>
            <div class="col-lg-12 mt-3 px-3 h-100 custom-title-zalo">
              <span
                class="text-title-account-zalo col-6"
                style="white-space: nowrap"
                >Name group:</span
              >
              <input
                v-model="groupNameZalo"
                type="text"
                class="form-control input-keyword h-100 mt-2 w-50 ml-3 col-6"
              />
            </div>
            <div class="col-lg-12 mt-3 px-3 h-100 custom-title-zalo">
              <span
                class="text-title-account-zalo col-6 px-0"
                style="white-space: nowrap"
                >Phone Number:</span
              >
              <div class="col-6 d-flex align-items-end px-0">
                <div v-f>
                  <input
                    v-for="(item, index) in listPhoneNumber"
                    v-bind:key="index"
                    v-model="listPhoneNumber[index]"
                    type="text"
                    maxlength="11"
                    class="form-control input-keyword w-100 h-100 my-1"
                    onkeypress="return event.keyCode === 8 || event.charCode >= 48 && event.charCode <= 57"
                  />
                </div>
                <div class="mb-2">
                  <b-icon
                    icon="plus-circle"
                    style="font-size: 25px; margin-left: 10px"
                    v-on:click="addInuputPhoneNumber()"
                  ></b-icon>
                </div>
              </div>
            </div>
            <div class="col-lg-12 mt-3 text-center">
              <b-button
                size="sm"
                style="height: 100%; white-space: nowrap"
                variant="secondary"
                class="px-3 py-2"
                v-on:click="hideModalAddZalo()"
                ><span class="">Cancel</span></b-button
              >
              <b-button
                size="sm"
                class="ml-3 button-add-group px-3 py-2"
                style="white-space: nowrap"
                variant="primary"
                v-bind:disabled="!groupNameZalo && listPhoneNumber.length === 1"
                v-on:click="addMemberZalo()"
                >Add</b-button
              >
            </div>
          </div>
        </template>
      </b-modal>
      <!-- end modal import account zalo-->
    </b-container>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Cookies from "js-cookie";
import io from "socket.io-client";
import HRPreLoad from "~/components/Common/HRPreLoad/index.vue";
import HRPagination from "~/components/Common/HRPagination/index.vue";
export default {
  name: "ShareJob",
  components: {
    HRPreLoad,
    HRPagination,
  },
  layout: "home",
  data() {
    return {
      preload: false,
      listStatus: [
        {
          value: 0,
          text: "Denied",
        },
        {
          value: 1,
          text: "Wating",
        },
        {
          value: 2,
          text: "Accepted",
        },
      ],
      createTime: null,
      date: new Date(),
      listData: [],
      optionTypeCrawl: [
        { value: 1, text: "Linkedn" },
        { value: 2, text: "Faceboook" },
        { value: 3, text: "Zalo" },
      ],
      selected: [],
      selectAll: false,
      checkedConnect: 1,
      city: null,
      location: null,
      keyWord: null,
      isShow: false,
      keyUserConnect: null,
      isShowFilter: true,
      tyleCrawl: null,
      position: null,
      email: null,
      phone: null,
      address: null,
      start_day: null,
      finish_day: null,
      name: null,
      lastPage: 0,
      skill: null,
      groupName: null,
      listMemberChecked: [],
      optionGroup: [],
      selectedGroup: null,
      infoAccountCrawl: null,
      detail_group_by_id: {},
      isDisabled: false,
      limit_crawl: null,
      selectedMember: [],
      allSelected: false,
      message: null,
      imageUpload: null,
      listImageUpload: [],
      objectImage: null,
      listFileUpload: [],
      objectFile: {},
      tabActive: "zalo",
      listPhoneNumber: [""],
      groupNameZalo: "",
      name_category_zalo: null,
      selectedGroupZalo: null,
      typeAccount: { value: "linkedin", text: "Linked" },
      optionType: [
        { value: "facebook", text: "FaceBook" },
        { value: "linkedin", text: "Linked" },
        { value: "zalo", text: "Zalo" },
      ],
      optionToast: {
        position: "top-right",
        duration: 5000,
        keepOnHover: true,
        singleton: true,
        fitToScreen: true,
      },
    };
  },
  computed: {
    ...mapGetters({
      listCrawl: "crawl/listCrawl",
      listGroup: "crawl/listGroup",
      detail_group: "group/detail_group",
      status_crawl: "crawl/status_crawl",
      listGroupZalo: "crawl/listGroupZalo",
    }),
    table() {
      return [
        {
          key: "id",
          label: "",
        },
        {
          key: "name",
          label: "User Infomation",
          thStyle: { width: "300px !impotant" },
        },
        {
          key: "link_contact",
          label: "Link Contact",
        },
        {
          key: "email",
          label: "Email/ Phone",
        },
        {
          key: "location",
          label: "Address",
        },
        {
          key: "skill",
          label: "Skill",
        },
        {
          key: "action",
          label: null,
        },
      ];
    },
  },
  watch: {
    listCrawl() {
      this.listData = this.listCrawl.data;
      this.currentPage = Number(this.listCrawl.currentPage) + 1;
      this.lastPage = Number(this.listCrawl.total_pages);
    },
    listGroup() {
      if (this.listGroup.data.length > 0) {
        this.listGroup.data.forEach((element) => {
          const optionList = {
            value: element.id,
            text: element.group_name,
          };
          this.optionGroup.push(optionList);
        });
      }
    },
    selectedGroup() {
      this.getALlMemberInGroup();
    },
    detail_group() {
      this.detail_group_by_id = this.detail_group.data[0];
    },
    status_crawl() {
      if (this.status_crawl.status === 2) {
        this.isDisabled = false;
      } else if (this.status_crawl.status === 1) {
        this.isDisabled = true;
      }
    },
    async typeAccount() {
      if (this.typeAccount.value === "linkedin") {
        this.getAllListGroups();
      } else if (this.typeAccount.value === "zalo") {
        const dataRequest = {
          user_create: this.infoAccountCrawl?.user_name,
        };
        await this.getListGroupZalo(dataRequest);
      }
    },
  },
  created() {
    if (process.client) {
      this.infoAccountCrawl = JSON.parse(
        Cookies.get("InfoAccount_Crawl")
          ? Cookies.get("InfoAccount_Crawl")
          : null
      );
      if (this.tabActive === "linkedin") {
        this.getListCrawls(1);
        this.getAllListGroups();
        this.checkStatusCrawl();
      }
      const socket = io.connect("http://192.168.1.120:32368");

      // getting data from server
      // create socket connect after emit data socket on show_qr_code
      socket.on("connect", function () {
        // sending to server
      });
    }
  },
  methods: {
    ...mapActions({
      getListCrawl: "crawl/getListCrawl",
      createCrawl: "crawl/createCrawl",
      createGroup: "crawl/createGroup",
      addMemberToGroup: "crawl/addMemberToGroup",
      getListGroup: "crawl/getListGroup",
      detailGroupById: "group/detailGroupById",
      checkStatusCrawl: "crawl/checkStatusCrawl",
      sendMessage: "crawl/sendMessage",
      addMemberToGroupZalo: "crawl/addMemberToGroupZalo",
      getListGroupZalo: "crawl/getListGroupZalo",
      sendMessageWithZalo: "crawl/sendMessageWithZalo",
    }),
    async getListCrawls(idpage) {
      if (this.position === "") {
        this.position = null;
      }
      if (this.name === "") {
        this.name = null;
      }
      if (this.location === "") {
        this.location = null;
      }
      if (this.email === "") {
        this.email = null;
      }
      if (this.phone === "") {
        this.phone = null;
      }
      if (this.address === "") {
        this.address = null;
      }
      const dataRequest = {
        jsonRequest: {
          user_connect: this.infoAccountCrawl.user_name,
          name: this.name,
          position: this.position,
          location: this.location,
          email: this.email,
          phone: this.phone,
          address: this.address,
          start_day: this.start_day,
          finish_day: this.finish_day,
          skills: this.skill,
        },
        page: idpage,
      };
      await this.getListCrawl(dataRequest);
    },
    selectedConnect(idConnect) {
      this.checkedConnect = idConnect;
    },
    screenAddConnect() {
      this.$router.push("/connect/create");
    },
    showModalSearch() {
      this.isShow = !this.isShow;
    },
    hideModalCreate() {
      this.$bvModal.hide("modal-create-group");
    },
    async showModalCreateGroup() {
      await this.$bvModal.show("modal-create-group");
      await this.$bvModal.hide("modal-add-member");
    },
    hideModalAdd() {
      this.$bvModal.hide("modal-add-member");
    },
    async showModalAddMember() {
      this.selectedGroup = null;
      await this.$bvModal.show("modal-add-member");
    },
    showUIFilter() {
      this.isShowFilter = !this.isShowFilter;
    },
    createNewCrawl() {
      this.limit_crawl = localStorage.getItem("Limit_Crawl");
      const dataRequest = {
        email: this.infoAccountCrawl.user_name,
        password: this.infoAccountCrawl.password,
        limit: this.limit_crawl,
      };
      this.createCrawl(dataRequest);
      this.$toast.success("Crawl data starting ...", this.optionToast);
      this.isDisabled = true;
    },
    async updatePage(idpage) {
      const dataRequest = {
        jsonRequest: {
          user_connect: this.infoAccountCrawl.user_name,
          name: this.name,
          position: this.position,
          location: this.location,
          email: this.email,
          phone: this.phone,
          address: this.address,
          start_day: this.start_day,
          finish_day: this.finish_day,
          skills: this.skill,
        },
        page: idpage,
      };
      this.selectedMember = [];
      this.listMemberChecked = [];
      this.allSelected = false;
      if (process.client) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant",
        });
      }
      await this.getListCrawl(dataRequest);
    },
    detailUser(idUser) {
      this.$router.push({ path: "/user/detail", query: { id_user: idUser } });
    },
    async createGroupCrawl() {
      const dataRequest = {
        user_connect: this.infoAccountCrawl.user_name,
        group_name: this.groupName,
        location: this.location,
        position: this.position,
      };
      const dataRepond = await this.createGroup(dataRequest);
      if (dataRepond.success === true) {
        await this.$bvModal.hide("modal-create-group");
        await this.$toast.success("Tạo Group thành công", this.optionToast);
        await this.getAllListGroups();
      }
    },
    selectMember(idMember) {
      if (this.listMemberChecked.length === 0) {
        this.listMemberChecked.push(idMember);
      } else if (!this.listMemberChecked.find((e) => e === idMember)) {
        this.listMemberChecked.push(idMember);
      } else {
        const indexOf = this.listMemberChecked.indexOf(idMember);
        this.listMemberChecked.splice(indexOf, 1);
      }
    },
    selectAllMember() {
      this.allSelected = !this.allSelected;
      if (this.allSelected === true) {
        this.listData.forEach((element) => {
          this.selectedMember.push(element.id);
          this.listMemberChecked.push(element.id);
        });
      } else {
        this.selectedMember = [];
        this.listMemberChecked = [];
      }
    },
    getAllListGroups() {
      const dataRequest = {
        user_connect: this.infoAccountCrawl.user_name,
        group_name: null,
        number_member: null,
        location: null,
        position: null,
      };
      this.getListGroup(dataRequest);
    },
    async addMemberGroup() {
      const dataRequest = {
        id: this.selectedGroup.value,
        id_linkediner: this.listMemberChecked,
      };
      const dataRepond = await this.addMemberToGroup(dataRequest);
      if (dataRepond.success === true) {
        this.listMemberChecked = [];
        this.$bvModal.hide("modal-add-member");
        this.$toast.success(
          "Thêm thành viên vào group thành công",
          this.optionToast
        );
      }
      this.selectedMember = [];
      this.listMemberChecked = [];
      this.allSelected = false;
    },
    async addMember(idMember) {
      this.selectedGroup = null;
      await this.listMemberChecked.push(idMember);
      await this.$bvModal.show("modal-add-member");
    },
    getALlMemberInGroup() {
      if (this.selectedGroup) {
        const dataRequest = {
          group_name: this.selectedGroup.text,
        };
        this.detailGroupById(dataRequest);
      }
    },
    showModalMessage() {
      this.selectedGroup = null;
      this.message = null;
      this.listImageUpload = [];
      this.listFileUpload = [];
      this.$bvModal.show("modal-send-message");
    },
    hideModalSendMessage() {
      this.$bvModal.hide("modal-send-message");
    },
    async sendMessageGroups() {
      const formData = new FormData();
      formData.append("email", this.infoAccountCrawl.user_name);
      formData.append("password", this.infoAccountCrawl.password);
      formData.append("id_group", this.selectedGroup.value);
      formData.append("message", this.message);
      formData.append("image", this.objectImage);
      formData.append("file_input", this.objectFile);
      const dataRepond = await this.sendMessage(formData);
      if (dataRepond.success === true) {
        this.selectedGroup = null;
        this.message = null;
        this.objectImage = null;
        this.objectFile = null;
        this.listImageUpload = [];
        this.listFileUpload = [];
        this.$bvModal.hide("modal-send-message");
        this.$toast.success("Gửi tin nhắn thành công", this.optionToast);
      } else if (dataRepond.success === false) {
        this.$toast.error("Gửi tin nhắn lỗi", this.optionToast);
      }
    },
    uploadPre() {
      document.getElementById("upload").click();
    },
    uploadFileChat() {
      document.getElementById("uploadFile").click();
    },
    uploadImage(e) {
      if (e.target.files[0]) {
        if (e.target.files[0].size / 1024 / 1024 > 10) {
          this.$toast.error(
            "Image exceeds allowed size of 10 MB.",
            this.optionToast
          );
          document.getElementById("upload").value = "";
        } else {
          this.objectImage = e.target.files[0];
          this.objectImage.url_image = URL.createObjectURL(this.objectImage);
          document.getElementById("upload").value = "";
          this.listImageUpload.push(this.objectImage);
        }
      }
    },
    uploadFile(e) {
      if (e.target.files[0]) {
        if (e.target.files[0].size / 1024 / 1024 > 30) {
          this.$toast.error(
            "File exceeds allowed size of 30 MB.",
            this.optionToast
          );
          document.getElementById("uploadFile").value = "";
        } else {
          this.objectFile = e.target.files[0];
          this.objectFile.url_image = URL.createObjectURL(this.objectFile);
          document.getElementById("uploadFile").value = "";
          this.listFileUpload.push(this.objectFile);
        }
      }
    },
    deleteImage(index) {
      this.listImageUpload.splice(index, 1);
    },
    deleteFile(index) {
      this.listFileUpload.splice(index, 1);
    },
    async sendMessageZalo() {
      // websocket connection
      const socket = io.connect("http://192.168.1.120:32368");

      // getting data from server
      // create socket connect after emit data socket on show_qr_code
      // sending to server
      socket.emit("show_qr_code", {
        name_category: this.name_category_zalo,
      });

      const formData = new FormData();
      formData.append("name_category", this.name_category_zalo);
      formData.append("user_create", this.infoAccountCrawl?.user_name);
      formData.append(
        "name_category_phone",
        this.selectedGroupZalo.name_category
      );
      formData.append("message", this.message);

      const dataRepond = await this.sendMessageWithZalo(formData);
      if (dataRepond.success === true) {
        socket.on("qr_code", (data) => {
          console.log(data);
        });
        // this.name_category_zalo = null;
        // this.selectedGroup = "";
        // this.selectedGroup = null;
        this.$bvModal.hide("modal-send-messagz-zalo");
        this.$toast.success("Gửi tin nhắn thành công", this.optionToast);
      } else if (dataRepond.success === false) {
        this.$toast.error("Gửi tin nhắn lỗi", this.optionToast);
      }
    },
    changeTabActive(value) {
      this.tabActive = value;
    },
    showModalZalo() {
      this.groupNameZalo = null;
      this.listPhoneNumber = [""];
      this.$bvModal.show("modal-add-member-zalo");
    },
    addInuputPhoneNumber() {
      this.listPhoneNumber.push("");
    },
    async addMemberZalo() {
      const dataRequest = {
        user_create: this.infoAccountCrawl?.user_name,
        name_category: this.groupNameZalo,
        phones: this.listPhoneNumber,
      };
      const dataRepond = await this.addMemberToGroupZalo(dataRequest);
      if (dataRepond.success === true) {
        this.$bvModal.hide("modal-add-member-zalo");
        this.$toast.success(
          "Thêm thành viên vào group thành công",
          this.optionToast
        );
      }
    },
    hideModalAddZalo() {
      this.$bvModal.hide("modal-add-member-zalo");
    },
  },
  auth: false,
};
</script>
<style lang="scss" scoped>
@import "~/assets/scss/sharejob/job.scss";

thead {
  width: 100%;
}
.number-connect {
  border-radius: 5px;
  font-size: 30px;
  background-color: #e8e8e8;
  width: 70px;
  height: 70px;
}

.margin-top {
  margin-top: 5px;
}

.color-success {
  background-color: #d0f5b9b8;
  color: #04ad00;
  border-radius: 5px;
}

.color-process {
  background-color: #ffe1a8;
  color: #ef9e00;
  border-radius: 5px;
}

.color-faild {
  background-color: #ffd1d1b8;
  color: #ad0000;
  border-radius: 5px;
}

.check-connect {
  background-color: white !important;
}

.custom-modal-filter {
  position: absolute;
  background-color: white;
  z-index: 100;
  border: 1px solid #dadada;
}

.button-send-mess {
  background-color: #ffa800;
  border-color: unset;
  border-color: #ffa800;
}

.button-new-crawl {
  background-color: #2475c0;
  color: white;
  border-color: #2475c0;
}

.hrCreate {
  background: #f1f2f4;

  &-label {
    font-weight: 400;
    font-size: 15px;
    display: flex;

    &::before {
      content: "";
      background: #2475c0;
      display: block;
      height: 20px;
      border-radius: 10px;
      width: 5px;
      margin-right: 5px;
    }
  }
}

.button-add-group {
  background-color: #2993f5;
}

::placeholder {
  color: #a4a4a4;
  opacity: 1;
  /* Firefox */
}
.custom-title-zalo {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
<style>
.modalHeader {
  background-color: #0a66c2;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.modal-content {
  -webkit-border-radius: 0px !important;
  -moz-border-radius: 0px !important;
  border-radius: 10px !important;
}

.custom-body {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5%;
  margin-right: 5%;
}

.custom-text-user {
  font-weight: 600;
  color: #0079e9;
  cursor: pointer;
}

.custom_name_group {
  position: absolute;
  top: 54px;
  left: 0;
  width: 100%;
  height: 50%;
  display: block;
  text-align: center;
  color: #ffffff;
}

.custom-checkbox {
  top: 0.25rem;
  left: -1.5rem;
  width: 1rem;
  height: 1rem;
  background: 50% / 50% 50% no-repeat;
}

.custom_icon_send {
  cursor: pointer;
  width: 25px !important;
}

textarea {
  resize: none;
}

.custom-text-file {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 350px;
}

.card-header {
  background-color: #1985e9;
}

.nav-item a {
  color: white;
}

.nav-tabs .nav-link.active {
  color: #007bff;
}
.text-title-account-zalo {
  font-weight: bold;
}
</style>

<style>
table {
  display: block;
  overflow-x: auto;
}

#tableListCrawl tr td:nth-child(5) {
  white-space: nowrap;
}

#tableListCrawl tr td:nth-child(6) {
  width: 300px !important;
}
</style>
