export default ({ app }) => {
  // Get localized path for homepage
  app.localePath('index')
  // Get path to switch current route to Eng
  app.switchLocalePath('en')
}
