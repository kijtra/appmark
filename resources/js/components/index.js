import Vue from 'vue'
import Card from './Card'

// Components that are registered globaly.
[
  Card
].forEach(Component => {
  Vue.component(Component.name, Component)
})
