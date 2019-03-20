import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faAddressCard,
  faPencilRuler,
  faBriefcase,
  faDraftingCompass,
  faRocket,
  faBookUser
} from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faAddressCard,
  faPencilRuler,
  faBriefcase,
  faDraftingCompass,
  faRocket,
  faBookUser
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
