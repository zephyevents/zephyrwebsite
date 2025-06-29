import React, { useState, useRef, useEffect } from 'react';

interface ImageOptimizedProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  sizes?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
  style?: React.CSSProperties;
}

const ImageOptimized: React.FC<ImageOptimizedProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  priority = false,
  sizes = '100vw',
  placeholder,
  onLoad,
  onError,
  style,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (loading === 'eager' || priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [loading, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Generate optimized src with WebP support
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.includes('pexels.com')) {
      // For Pexels images, add WebP format and compression
      return originalSrc.replace(/\.(jpg|jpeg|png)/, '.webp');
    }
    return originalSrc;
  };

  const optimizedSrc = getOptimizedSrc(src);

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={style}
    >
      {/* Placeholder/Loading state */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-neutral-200 animate-pulse flex items-center justify-center">
          {placeholder ? (
            <img 
              src={placeholder} 
              alt="" 
              className="w-full h-full object-cover opacity-50 blur-sm"
            />
          ) : (
            <div className="w-8 h-8 border-2 border-neutral-400 border-t-transparent rounded-full animate-spin" />
          )}
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center text-neutral-500">
          <div className="text-center">
            <div className="text-2xl mb-2">📷</div>
            <div className="text-sm">Image unavailable</div>
          </div>
        </div>
      )}

      {/* Main image */}
      {isInView && (
        <picture>
          {/* WebP source for modern browsers */}
          <source 
            srcSet={optimizedSrc} 
            type="image/webp"
            sizes={sizes}
          />
          {/* Fallback for older browsers */}
          <img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={priority ? 'high' : 'auto'}
            sizes={sizes}
            onLoad={handleLoad}
            onError={handleError}
            style={{
              contentVisibility: 'auto',
              containIntrinsicSize: '300px 200px',
            }}
          />
        </picture>
      )}
    </div>
  );
};

export default ImageOptimized;