/// <reference types="vite/client" />

declare global {
  interface Window {
    Wistia: any;
  }
  
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'media-id'?: string;
        aspect?: string;
        muted?: boolean;
        autoplay?: boolean;
        loop?: boolean;
        playsinline?: boolean;
        controls?: boolean;
      };
    }
  }
}

export {};