import { useEffect, useState } from 'react';
import { preloadCriticalImages } from '../utils/imageUtils';

interface UseImagePreloaderOptions {
  images: string[];
  priority?: boolean;
}

export const useImagePreloader = ({ images, priority = false }: UseImagePreloaderOptions) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    if (!images.length) {
      setIsLoaded(true);
      return;
    }

    let loadedImages = 0;
    const totalImages = images.length;

    const loadImage = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          loadedImages++;
          setLoadedCount(loadedImages);
          if (loadedImages === totalImages) {
            setIsLoaded(true);
          }
          resolve();
        };
        img.onerror = reject;
        img.src = src;
      });
    };

    // Load images with appropriate priority
    if (priority) {
      // Load critical images immediately
      Promise.all(images.map(loadImage)).catch(console.error);
    } else {
      // Load non-critical images with delay
      const timer = setTimeout(() => {
        Promise.all(images.map(loadImage)).catch(console.error);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [images, priority]);

  return {
    isLoaded,
    loadedCount,
    progress: images.length ? (loadedCount / images.length) * 100 : 100
  };
};

export default useImagePreloader;