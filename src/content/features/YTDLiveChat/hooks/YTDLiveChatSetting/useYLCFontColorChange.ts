import { useCallback, useEffect, useRef } from 'react';

import type { RGBColor } from 'react-color';

const propertyList: string[] = ['--extension-yt-live-font-color'];

const propertyLightList: string[] = ['--extension-yt-live-secondary-font-color'];

export const useYLCFontColorChange = () => {
  const ref = useRef<HTMLIFrameElement | null>(null);
  useEffect(() => {
    const element = document.querySelector('#my-extension-root iframe.ytd-live-chat-frame');
    if (element instanceof HTMLIFrameElement) {
      ref.current = element;
    }
  }, []);
  const changeIframeFontColor = useCallback((rgba: RGBColor) => {
    if (ref.current?.contentWindow) {
      const document = ref.current.contentWindow.document.documentElement;
      propertyList.forEach((property) => {
        document.style.setProperty(property, `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`);
      });
      propertyLightList.forEach((property) => {
        document.style.setProperty(
          property,
          `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${Math.max(0, (rgba.a || 0) - 0.4)})`,
        );
      });
    }
  }, []);
  const changeColor = useCallback(
    (rgba: RGBColor) => {
      changeIframeFontColor(rgba);
    },
    [changeIframeFontColor],
  );
  return { changeColor };
};
