import { Api } from "~/utils/http-common";
export const state = () => ({
  message: null,
  success: false,
  error: false,
  checkout: {},
  listConnect: [],
  dataUserConnect: [],
  infoAccountCrawl: {},
});

export const getters = {
  success: (state) => state.success,
  error: (state) => state.error,
  message: (state) => state.message,
  checkout: (state) => state.checkout,
  listConnect: (state) => state.listConnect,
  dataUserConnect: (state) => state.dataUserConnect,
  infoAccountCrawl: (state) => state.infoAccountCrawl,
};

export const mutations = {
  set(state, [variable, value]) {
    state[variable] = value;
  },
};

// create connect
export const actions = {
  async createConnect({ commit }, dataRequest) {
    return await Api.requestServer1
      .post(`/connect`, dataRequest)
      .then((response) => {
        const { data } = response;
        if (data.success) {
          commit("set", ["success", true]);
          commit("set", ["checkout", data.data]);
        } else {
          commit("set", ["error", true]);
        }
        return data;
      })
      .catch(() => {});
  },

  // get list connect
  async getListConnect({ commit }, dataRequest) {
    return await Api.requestServer1
      .post(`/category?page=${dataRequest.page}`, dataRequest)
      .then((response) => {
        const { data } = response;
        if (data.success) {
          commit("set", ["success", true]);
          commit("set", ["listConnect", data]);
        } else {
          commit("set", ["error", true]);
        }
        return data;
      })
      .catch(() => {});
  },

  // show user connect
  async showDataDetailConnect({ commit }, dataRequest) {
    return await Api.requestServer1
      .post(
        `/users-connect-filter?page=${dataRequest.page}`,
        dataRequest.dataJson
      )
      .then((response) => {
        const { data } = response;
        if (data.success) {
          commit("set", ["success", true]);
          commit("set", ["dataUserConnect", data]);
        } else {
          commit("set", ["error", true]);
        }
        return data;
      })
      .catch(() => {});
  },

  // filter category
  async filterCategory({ commit }, dataRequest) {
    return await Api.requestServer1
      .post(`/category-filter?page=${dataRequest.page}`, dataRequest.dataJson)
      .then((response) => {
        const { data } = response;
        if (data.success) {
          commit("set", ["success", true]);
          commit("set", ["listConnect", data]);
        } else {
          commit("set", ["error", true]);
        }
        return data;
      })
      .catch(() => {});
  },

  // filter user connect
  async filterUserConnect({ commit }, dataRequest) {
    return await Api.requestServer1
      .post(`/users-connect-filte?page=${dataRequest.page}`, dataRequest)
      .then((response) => {
        const { data } = response;
        if (data.success) {
          commit("set", ["success", true]);
          commit("set", ["dataUserConnect", data]);
        } else {
          commit("set", ["error", true]);
        }
        return data;
      })
      .catch(() => {});
  },

  // update status user linked
  async updateStatusLinked({ commit }, dataRequest) {
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

  // call api recannect
  async reconnect({ commit }, dataRequest) {
    return await Api.requestServer1
      .post(`/reconnect`, dataRequest)
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
  async crawl_connect({ commit }, dataRequest) {
    return await Api.requestServer1
      .post(`/crawl-category`, dataRequest)
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
