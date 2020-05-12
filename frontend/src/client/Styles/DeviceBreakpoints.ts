export interface Size<T> {
  [key: string]: T;
}
const DEVICE_BREAKPOINTS: Size<number> = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

const maxWidth = (style?: string) =>
  Object.keys(DEVICE_BREAKPOINTS).reduce((acc: Size<string>, cur) => {
    acc[
      cur
    ] = `@media only screen and (max-width: ${DEVICE_BREAKPOINTS[cur]}px) ${style}`;
    return acc;
  }, {});

export { DEVICE_BREAKPOINTS, maxWidth };
