/**
 * Performance monitoring utilities
 * 
 * Features:
 * - Core Web Vitals tracking
 * - Performance metrics logging
 * - Development mode only
 */

export function initPerformanceMonitoring() {
  if (typeof window === 'undefined') return

  // Measure and log Core Web Vitals
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      console.log(`${entry.name}: ${entry.value}ms`)
    })
  })

  // Observe paint and navigation timing
  observer.observe({ entryTypes: ['paint', 'navigation'] })

  // Log initial page load performance
  window.addEventListener('load', () => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    
    console.group('🚀 Performance Metrics')
    console.log(`DOM Content Loaded: ${navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart}ms`)
    console.log(`Page Load Complete: ${navigation.loadEventEnd - navigation.loadEventStart}ms`)
    console.log(`Total Load Time: ${navigation.loadEventEnd - navigation.fetchStart}ms`)
    console.groupEnd()
  })
}

// Lazy loading utility for images
export function lazyLoadImage(src: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(src)
    img.onerror = reject
    img.src = src
  })
}

// Debounce utility for performance optimization
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}