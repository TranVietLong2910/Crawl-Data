import { Api } from "~/utils/http-common";
export const state = () => ({
  message: null,
  success: false,
  error: false,
  listGroup: [],
  list_member_group: [],
  detail_group: [],
});

export const getters = {
  success: (state) => state.success,
  error: (state) => state.error,
  message: (state) => state.message,
  list_member_group: (state) => state.list_member_group,
  listGroup: (state) => state.listGroup,
  detail_group: (state) => state.detail_group,
};

export const mutations = {
  set(state, [variable, value]) {
    state[variable] = value;
  },
};

export const actions = {
  async showGroup({ commit }, dataRequest) {
    return await Api.requestServer1
      .post(`/show-group?page=${dataRequest.page}`, dataRequest.dataJson)
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
  async detailGroup({ commit }, dataRequest) {
    return await Api.requestServer1
      .post(`/show-member-group?page=${dataRequest.page}`, dataRequest.dataJson)
      .then((response) => {
        const { data } = response;
        if (data.success) {
          commit("set", ["success", true]);
          commit("set", ["list_member_group", data]);
        } else {
          commit("set", ["error", true]);
        }
        return data;
      })
      .catch(() => {});
  },
  async detailGroupById({ commit }, dataRequest) {
    return await Api.requestServer1
      .post(`/detail_group`, dataRequest)
      .then((response) => {
        const { data } = response;
        if (data.success) {
          commit("set", ["success", true]);
          commit("set", ["detail_group", data]);
        } else {
          commit("set", ["error", true]);
        }
        return data;
      })
      .catch(() => {});
  },
};
