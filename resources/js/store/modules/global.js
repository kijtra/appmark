import * as types from '../mutation-types'
import i18n from '~/plugins/i18n'

// state
export const state = {
  appName: 'APPMARK',
  locale: 'en',
  locales: {},
  spotsTable: null,
  sidebarActive: false,
}

// getters
export const getters = {
  appName: state => state.appName,
  locale: state => state.locale,
  locales: state => state.locales,
  sidebarActive: state => state.sidebarActive,
}

// mutations
export const mutations = {
  [types.SIDEBAR_TOGGLE] (state) {
    state.sidebarActive = !state.sidebarActive
  },
}

// actions
export const actions = {
  async initLocale ({ state }) {
    state.locale = i18n.i18next.language
    await Object.keys(i18n.i18next.store.data).forEach(lang => {
        state.locales[lang] = {
            id: lang,
            name: i18n.i18next.store.data[lang].name || lang.toUpperCase()
        }
    })
  },

  sidebarToggle ({ commit }) {
    commit(types.SIDEBAR_TOGGLE)
  },
}
