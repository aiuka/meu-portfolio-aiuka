
import { useEffect, useState } from "react"

// Define multiple breakpoints for better responsiveness
export const BREAKPOINTS = {
  mobile: 640,   // sm
  tablet: 768,   // md
  laptop: 1024,  // lg
  desktop: 1280, // xl
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${BREAKPOINTS.mobile - 1}px)`)
    
    const onChange = () => {
      setIsMobile(window.innerWidth < BREAKPOINTS.mobile)
    }
    
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < BREAKPOINTS.mobile)
    
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<'mobile' | 'tablet' | 'laptop' | 'desktop' | undefined>(undefined)

  useEffect(() => {
    const checkBreakpoint = () => {
      const width = window.innerWidth
      if (width < BREAKPOINTS.mobile) {
        setBreakpoint('mobile')
      } else if (width < BREAKPOINTS.tablet) {
        setBreakpoint('tablet')
      } else if (width < BREAKPOINTS.laptop) {
        setBreakpoint('laptop')
      } else {
        setBreakpoint('desktop')
      }
    }

    window.addEventListener('resize', checkBreakpoint)
    checkBreakpoint()
    
    return () => window.removeEventListener('resize', checkBreakpoint)
  }, [])

  return breakpoint
}
