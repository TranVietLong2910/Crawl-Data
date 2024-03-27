import { Api } from "~/utils/http-common";
export const state = () => ({
  message: null,
  success: false,
  error: false,
});

export const getters = {
  success: (state) => state.success,
  error: (state) => state.error,
  message: (state) => state.message,
};

export const mutations = {
  set(state, [variable, value]) {
    state[variable] = value;
  },
};

export const actions = {
  async createAccount({ commit }, dataRequest) {
    return await Api.requestServer1
      .post(`/sign-up`, dataRequest)
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
