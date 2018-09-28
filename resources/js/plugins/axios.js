import axios from 'axios'
import store from '~/store'
import router from '~/router'

// Request interceptor
axios.interceptors.request.use(request => {
  const token = store.getters['auth/token']
  if (token) {
    request.headers.common['Authorization'] = `Bearer ${token}`
  }

  const locale = store.getters['lang/locale']
  if (locale) {
    request.headers.common['Accept-Language'] = locale
  }

  // request.headers['X-Socket-Id'] = Echo.socketId()

  return request
})

// Response interceptor
axios.interceptors.response.use(response => response, error => {
  const { status } = error.response

  if (status >= 500) {
    alert('Request error ' + status)
    // swal({
    //   type: 'error',
    //   title: i18n.t('error_alert_title'),
    //   text: i18n.t('error_alert_text'),
    //   reverseButtons: true,
    //   confirmButtonText: i18n.t('ok'),
    //   cancelButtonText: i18n.t('cancel')
    // })
  }

  return Promise.reject(error)
})


export default axios
