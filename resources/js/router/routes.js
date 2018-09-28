import Home from '~/pages/home'
import NotFound from '~/pages/404'

export default [
  {
    path: '/:lang([a-z]{2})',
    component: Home,
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      },
      {
        path: 'test',
        name: 'test',
        component: Home
      }
    ]
  },

  {
    path: '*',
    component: NotFound
  }
]
