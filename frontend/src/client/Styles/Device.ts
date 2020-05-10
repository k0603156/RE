interface Size<T> {
  [key: string]: T;
}
const deviceSize: Size<number> = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

// Todo:style만 분리한 함수 필요 빈값체크가 생겨서는안됨
const maxWidth = (style?: string) =>
  Object.keys(deviceSize).reduce((acc: Size<string>, cur) => {
    acc[
      cur
    ] = `@media only screen and (max-width: ${deviceSize[cur]}px) ${style}`;
    return acc;
  }, {});

export default deviceSize;
export { maxWidth };
