import { useState, useEffect } from 'react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-24 right-6 w-12 h-12 bg-dark-card border border-accent-green rounded-full flex items-center justify-center text-accent-green hover:bg-accent-green hover:text-dark transition-all z-50"
    >
      ↑
    </button>
  ) : null
}

export default ScrollToTop