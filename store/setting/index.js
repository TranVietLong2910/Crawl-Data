import { Api } from "~/utils/http-common";
export const state = () => ({
  message: null,
  success: false,
  error: false,
  listAccount: [],
  detail_account: {},
});

export const getters = {
  success: (state) => state.success,
  error: (state) => state.error,
  message: (state) => state.message,
  listAccount: (state) => state.listAccount,
  detail_account: (state) => state.detail_account,
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
  async getAccountImport({ commit }, dataRequest) {
    return await Api.requestServer1
      .post(`/get_account?page=${dataRequest.page}`, dataRequest.typeAccount)
      .then((response) => {
        const { data } = response;
        if (data.success) {
          commit("set", ["success", true]);
          commit("set", ["listAccount", data]);
        } else {
          commit("set", ["error", true]);
        }
        return data;
      })
      .catch(() => {});
  },
  async add_Account({ commit }, dataRequest) {
    return await Api.requestServer1
      .post(`/add_setting_account`, dataRequest)
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
  async getDetailAccount({ commit }, dataRequest) {
    return await Api.requestServer1
      .post(`/get_detail_account`, dataRequest)
      .then((response) => {
        const { data } = response;
        if (data.success) {
          commit("set", ["success", true]);
          commit("set", ["detail_account", data.data]);
        } else {
          commit("set", ["error", true]);
        }
        return data;
      })
      .catch(() => {});
  },
  async updateAccount({ commit }, dataRequest) {
    return await Api.requestServer1
      .post(`/edit_setting_account`, dataRequest)
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
