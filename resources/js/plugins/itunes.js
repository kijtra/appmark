import Vue from 'vue'
import axios from './axios'
import store from '~/store'

class iTunes {
    constructor() {
        this.base =　'https://itunes.apple.com/'
    }

    search(params) {
        let locale = store.state.global.locale

        params = Object.assign({
            country: ('ja' === locale ? 'jp' : 'us'),
            lang: ('ja' === locale ? 'ja_jp' : 'en_us'),
            media: 'software',
            entity: 'software',
            // genreId: 6014,
        }, params)

        return axios.get(this.base + 'search', {
            params: params,
            dataType: 'json'
        })
    }

    lookup(id) {
        return axios.get(this.base + 'search', {
            params: {
                id: id
            }
        })
    }
}

const itunes = {
    install(Vue) {
        Vue.prototype.$itunes = new iTunes()
    }
}

Vue.use(itunes)
