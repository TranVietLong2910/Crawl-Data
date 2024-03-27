export default function ({ $axios, redirect }) {
  // eslint-disable-next-line no-unused-expressions
  redirect
  $axios.onRequest((config) => {
    $axios.defaults.headers.common['Content-Type'] = 'application/json'
    $axios.defaults.headers.common.Authorization =
      localStorage.getItem('auth._token.local')
    return config
  })
}
