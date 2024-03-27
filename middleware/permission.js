export default async function (context) {
  const value = context.store.state.auth.strategy
  if (value && value !== true) {
    const permission = await context.route.matched.some((m) => {
      if (process.client) {
        // Client
        return Object.values(m.components).some((component) => {
          if (component.options) {
            if (
              Array.isArray(component.options.auth) &&
              component.options.auth.includes(value)
            ) {
              return true
            } else if (
              component.options.auth === value ||
              component.options.auth === false
            ) {
              return true
            }
          }
          return false
        })
      } else {
        // SSR
        return Object.values(m.components).some((component) =>
          Object.values(component._Ctor).some((ctor) => {
            if (ctor.options) {
              if (
                Array.isArray(ctor.options.auth) &&
                ctor.options.auth.includes(value)
              ) {
                return true
              } else if (
                ctor.options.auth === value ||
                ctor.options.auth === false
              ) {
                return true
              }
            }
            return false
          })
        )
      }
    })
    if (!permission) {
      return context.error({ statusCode: 403, message: 'Unauthorized' })
    }
  }
}
