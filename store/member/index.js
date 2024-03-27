import { Api } from "~/utils/http-common";
export const state = () => ({
  message: null,
  success: false,
  error: false,
  listGroup: [],
  detail_member: [],
});

export const getters = {
  success: (state) => state.success,
  error: (state) => state.error,
  message: (state) => state.message,
  detail_member: (state) => state.detail_member,
};

export const mutations = {
  set(state, [variable, value]) {
    state[variable] = value;
  },
};

export const actions = {
  async detailMember({ commit }, dataRequest) {
    return await Api.requestServer1
      .post(`/show-detail-friend`, dataRequest)
      .then((response) => {
        const { data } = response;
        if (data.success) {
          commit("set", ["success", true]);
          commit("set", ["detail_member", data]);
          commit("set", ["error", true]);
        }
        return data;
      })
      .catch(() => {});
  },
};
