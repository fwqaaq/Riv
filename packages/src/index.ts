import Rivk from './components/Riv.vue'
// import { RivPlugin } from './plugin'
import type { App, Plugin } from 'vue'
// export default RivPlugin(Rivk)

const withInstall = <T>(component: T) => {
  ;(component as T & Plugin).install = (app: App) => {
    app.component('Riv', Rivk)
  }
  return component as T & Plugin
}

export default withInstall(Rivk)
