import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faAddressCard,
  faPencilRuler,
  faBriefcase,
  faDraftingCompass,
  faRocket,
  faBookUser,
  faEnvelope,
  faBars
} from '@fortawesome/pro-regular-svg-icons'
import {
  faLinkedin,
  faFacebookSquare,
  faTwitterSquare,
  faGithubSquare
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faAddressCard,
  faPencilRuler,
  faBriefcase,
  faDraftingCompass,
  faRocket,
  faBookUser,
  faEnvelope,
  faLinkedin,
  faFacebookSquare,
  faTwitterSquare,
  faGithubSquare,
  faBars
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
