import * as React from "react"

/**
 * Crash Override — useIsMobile
 * Reports whether the viewport is below the mobile breakpoint (768px). Used by
 * the Sidebar to swap the docked rail for a Sheet on small screens.
 */
const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const subscribe = React.useCallback((onStoreChange: () => void) => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    mql.addEventListener("change", onStoreChange)
    return () => mql.removeEventListener("change", onStoreChange)
  }, [])

  const getSnapshot = () => window.innerWidth < MOBILE_BREAKPOINT
  const getServerSnapshot = () => false

  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
