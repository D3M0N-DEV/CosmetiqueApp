import { useEffect, useState } from 'react'

// Returns true on touch / coarse-pointer devices (phones, tablets)
// so we can disable hover-only effects (tilt, magnetic, custom cursor).
export default function useIsTouch() {
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(pointer: coarse)')
    const update = () => setIsTouch(mq.matches)
    update()
    mq.addEventListener?.('change', update)
    return () => mq.removeEventListener?.('change', update)
  }, [])

  return isTouch
}
