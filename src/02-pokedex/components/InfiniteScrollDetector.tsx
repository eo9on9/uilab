import { useEffect, useRef } from 'react'

export interface InfiniteScrollDetectorProps {
  isDetect?: boolean
  onDetect?: () => void
}

export const InfiniteScrollDetector = ({
  isDetect = true,
  onDetect,
}: InfiniteScrollDetectorProps) => {
  const loadMoreRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && isDetect) onDetect?.()
      },
      { threshold: 1 },
    )

    if (loadMoreRef.current) observer.observe(loadMoreRef.current)

    return () => observer.disconnect()
  }, [isDetect, onDetect])

  return <div ref={loadMoreRef} style={{ height: '1px' }} />
}
