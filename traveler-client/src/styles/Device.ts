interface Size<T> {
  [key: string]: T;
}
const Device_Size: Size<number> = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
  desktop2: 22560
};
const Mx_Width = Object.keys(Device_Size).reduce((acc: Size<string>, cur) => {
  acc[cur] = `@media only screen and (max-width: ${Device_Size[cur]}px)`;
  return acc;
}, {});
export default Device_Size;
export { Mx_Width };
