import type { Plugin } from 'vue'
import { Riv } from '.'

export function RivPlugin(): Plugin {
  return {
    install(app) {
      app.component('Riv', Riv)
    },
  }
}
