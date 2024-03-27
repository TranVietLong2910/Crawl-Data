export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: "static",
  ssr: false,
  head: {
    title: "HRSHARING CRAWL",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: "",
      },
      {
        name: "format-detection",
        content: "telephone=no",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/logoHrCrawl.png",
      },
    ],
  },

  publicRuntimeConfig: {
    baseURL: process.env.API_BASE,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/axios.js",
    {
      src: "~/plugins/persistedState.client.js",
      ssr: true,
    },
    { src: "~/plugins/vue-select.js" },
    { src: "~/plugins/scroll-chat.js" },
    { src: "~plugins/vue-calendar.js", ssr: false },
    "@/plugins/vuelidate.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    ["@nuxtjs/dotenv", {}],
    "@nuxtjs/style-resources",
    "@nuxtjs/eslint-module",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/auth-next",
    "@nuxtjs/pwa",
    "@nuxt/http",
    "@nuxtjs/dotenv",
    "@nuxtjs/i18n",
    "vue2-editor/nuxt",
    "@nuxtjs/toast",
  ],
  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
      },
      {
        code: "vi",
        name: "Vietnam",
      },
    ],
    defaultLocale: "en",
    vueI18nLoader: true,
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: require("./locales/en.json"),
        vi: require("./locales/vi.json"),
      },
    },
  },
  styleResources: {
    scss: [
      "./assets/vars/*.scss",
      "./assets/scss/_variables.scss",
      "./assets/scss/_mixins.scss", // use underscore "_" & also file extension ".scss"
    ],
  },

  bootstrapVue: {
    icons: true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: '/',
    proxy: true,
    proxyHeaders: false,
    credentials: false,
  },

  router: {
    middleware: ["auth", "permission"],
  },

  auth: {
    redirect: {
      login: "/login",
      logout: "/login",
      callback: false,
      home: false,
    },
    plugins: ["@/plugins/auth-lang-redirect.js"],
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  // pwa: {
  //   manifest: {
  //     lang: 'en'
  //   }
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  server: {
    host: "0.0.0.0",
  },
};
