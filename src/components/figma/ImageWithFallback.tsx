import { useState } from 'react'

interface ImageWithFallbackProps {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
  fallbackSrc?: string
}

export function ImageWithFallback({
  src,
  alt,
  className,
  style,
  fallbackSrc,
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setHasError(true)
      if (fallbackSrc) setImgSrc(fallbackSrc)
    }
  }

  if (hasError && !fallbackSrc) {
    return <div className={className} style={{ ...style, backgroundColor: '#1a0a00' }} />
  }

  return (
    <img src={imgSrc} alt={alt} className={className} style={style} onError={handleError} />
  )
}
