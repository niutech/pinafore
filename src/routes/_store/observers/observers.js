import { onlineObservers } from './onlineObservers.js'
import { nowObservers } from './nowObservers.js'
import { navObservers } from './navObservers.js'
import { pageVisibilityObservers } from './pageVisibilityObservers.js'
import { resizeObservers } from './resizeObservers.js'
import { setupLoggedInObservers } from './setupLoggedInObservers.js'
import { logOutObservers } from './logOutObservers.js'
import { touchObservers } from './touchObservers.js'
import { grayscaleObservers } from './grayscaleObservers.js'
import { focusRingObservers } from './focusRingObservers.js'
import { leftRightFocusObservers } from './leftRightFocusObservers.js'
import { bottomNavObservers } from './bottomNavObservers.js'

export function observers (store) {
  onlineObservers(store)
  nowObservers(store)
  navObservers(store)
  bottomNavObservers(store);
  pageVisibilityObservers(store)
  resizeObservers(store)
  touchObservers(store)
  logOutObservers(store)
  focusRingObservers(store)
  grayscaleObservers(store)
  leftRightFocusObservers(store)
  setupLoggedInObservers(store)
}
