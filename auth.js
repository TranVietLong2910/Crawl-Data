function default1 ({ $axios, redirect }) {
  $auth.onError((error, name, endpoint) => {
    console.error(name, error)
  })
}

function default2 ({ $auth }) {
  $auth.onRedirect((to, from) => {
    // eslint-disable-next-line no-console
    console.error(to)
    // you can optionally change `to` by returning a new value
  })
}

export default { default1, default2 }
