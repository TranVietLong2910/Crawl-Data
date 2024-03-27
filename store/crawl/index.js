import { Api } from "~/utils/http-common";
export const state = () => ({
  message: null,
  success: false,
  error: false,
  checkout: {},
  listCrawl: [],
  listGroup: [],
  status_crawl: {},
  listGroupZalo: [],
});

export const getters = {
  success: (state) => state.success,
  error: (state) => state.error,
  message: (state) => state.message,
  checkout: (state) => state.checkout,
  listCrawl: (state) => state.listCrawl,
  listGroup: (state) => state.listGroup,
  status_crawl: (state) => state.status_crawl,
  listGroupZalo: (state) => state.listGroupZalo,
};

export const mutations = {
  set(state, [variable, value]) {
    state[variable] = value;
  },
};

export const actions = {
  async createCrawl({ commit }, dataRequest) {
    return await Api.requestServer1
      .post(`/crawl`, dataRequest)
      .then((response) => {
        const { data } = response;
        if (data.success) {
          commit("set", ["success", true]);
        } else {
          commit("set", ["error", true]);
        }
        return data;
      })
      .catch(() => {});
  },
  async getListCrawl({ commit }, dataRequest) {
    return await Api.requestServer1
      .post(`/show-friend?page=${dataRequest.page}`, dataRequest.jsonRequest)
      .then((response) => {
        const { data } = response;
        if (data.success) {
          commit("set", ["success", true]);
          commit("set", ["listCrawl", data]);
        } else {
          commit("set", ["error", true]);
        }
        return data;
      })
      .catch(() => {});
  },
  async refeshUserCrawl({ commit }, dataRequest) {
    return await Api.requestServer1
      .post(`/update-status-linkediner`, dataRequest)
      .then((response) => {
        const { data } = response;
        if (data.success) {
          commit("set", ["success", true]);
        } else {
          commit("set", ["error", true]);
        }
        return data;
      })
      .catch(() => {});
  },
  async createGroup({ commit }, dataRequest) {
    return await Api.requestServer1
      .post(`/create-group`, dataRequest)
      .then((response) => {
        const { data } = response;
        if (data.success) {
          commit("set", ["success", true]);
        } else {
          commit("set", ["error", true]);
        }
        return data;
      })
      .catch(() => {});
  },
  async addMemberToGroup({ commit }, dataRequest) {
    return await Api.requestServer1
      .post(`/add-member-group`, dataRequest)
      .then((response) => {
        const { data } = response;
        if (data.success) {
          commit("set", ["success", true]);
        } else {
          commit("set", ["error", true]);
        }
        return data;
      })
      .catch(() => {});
  },
  async getListGroup({ commit }, dataRequest) {
    return await Api.requestServer1
      .post(`/show-group`, dataRequest)
      .then((response) => {
        const { data } = response;
        if (data.success) {
          commit("set", ["success", true]);
          commit("set", ["listGroup", data]);
        } else {
          commit("set", ["error", true]);
        }
        return data;
      })
      .catch(() => {});
  },
  async checkStatusCrawl({ commit }, dataRequest) {
    return await Api.requestServer1
      .post(`/check_crawl`, dataRequest)
      .then((response) => {
        const { data } = response;
        if (data.success) {
          commit("set", ["success", true]);
          commit("set", ["status_crawl", data]);
        } else {
          commit("set", ["error", true]);
        }
        return data;
      })
      .catch(() => {});
  },
  async sendMessage({ commit }, dataRequest) {
    return await Api.requestServer1
      .post(`/send-message-linkedin`, dataRequest)
      .then((response) => {
        const { data } = response;
        if (data.success) {
          commit("set", ["success", true]);
        } else {
          commit("set", ["error", true]);
        }
        return data;
      })
      .catch(() => {});
  },
  async addMemberToGroupZalo({ commit }, dataRequest) {
    return await Api.requestServer1
      .post(`/category-phone-zalo`, dataRequest)
      .then((response) => {
        const { data } = response;
        if (data.success) {
          commit("set", ["success", true]);
        } else {
          commit("set", ["error", true]);
        }
        return data;
      })
      .catch(() => {});
  },
  async getListGroupZalo({ commit }, dataRequest) {
    return await Api.requestServer1
      .post(`/show-category-phone`, dataRequest)
      .then((response) => {
        const { data } = response;
        if (data.success) {
          commit("set", ["success", true]);
          commit("set", ["listGroupZalo", data.data]);
        } else {
          commit("set", ["error", true]);
        }
        return data;
      })
      .catch(() => {});
  },
  async sendMessageWithZalo({ commit }, dataRequest) {
    return await Api.requestServer1
      .post(`/send-message-zalo`, dataRequest)
      .then((response) => {
        const { data } = response;
        if (data.success) {
          commit("set", ["success", true]);
        } else {
          commit("set", ["error", true]);
        }
        return data;
      })
      .catch(() => {});
  },
};
