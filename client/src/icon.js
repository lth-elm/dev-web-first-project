import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faHome, faSortDown, faSignInAlt, faSignOutAlt, faStar as fasFaStar, faUserPlus, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

// Utiliser uniquement les icônes archway, ad et brain
library.add(faHome, faSortDown, faSignInAlt, faSignOutAlt, fasFaStar, farFaStar, faGithub, faUserPlus, faCheckCircle)

// Remplacer toutes les balises <i class="fa..."> par un <svg> et utiliser un MutationObserver pour
// continuer à le faire quand le DOM change.
dom.watch()
