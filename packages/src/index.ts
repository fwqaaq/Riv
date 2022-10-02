import Rivk from './components/Riv.vue'
import type { App, Plugin } from 'vue'

const withInstall = <T>(component: T) => {
  ;(component as T & Plugin).install = (app: App) => {
    app.component('Riv', Rivk)
  }
  return component as T & Plugin
}

export default withInstall(Rivk)
