import { FONTS, FONT_STYLES } from "./Fonts";
import { DEVICE_BREAKPOINTS } from "./DeviceBreakpoints";
import COLORS from "./Colors";
import DEFAULT from "./Default";

const theme = () => {
  const HEADER_STYLES = `
  position: absolute;
  top: 30px;
  font-size: 25px;
  line-height: 35px;
  z-index: 10;
  cursor: pointer;
  `;

  const ROOT_OFFSET = "5vw";
  const LAYOUT_PADDING = `padding: 150px 0 0 0;`;
  const MIN_WIDTH = "320px";
  const rootMaxWidth = `calc(100vw - ${ROOT_OFFSET} * 2)`;

  return {
    DEVICE_BREAKPOINTS,
    COLORS,
    FONTS,
    FONT_STYLES,
    DEFAULT,

    HEADER_STYLES,
    ROOT_OFFSET,
    LAYOUT_PADDING,
    MIN_WIDTH,
    rootMaxWidth,
  };
};
export default theme();
