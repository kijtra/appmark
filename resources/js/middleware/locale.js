import i18n from '~/plugins/i18n'

export default async (to, from, next) => {
  if (!to.params.lang || i18n.i18next.languages.indexOf(to.params.lang) === -1) {
    let path = '/' + i18n.i18next.language
    let current = to.path
    if (/^\/[a-z]{2}\//.test(current)) {
      current = current.substr(3)
    }
    if ('/' !== current) {
      path += current
    }
    if (to.path !== path) {
      return next(path)
    }
  }

  next()
}
