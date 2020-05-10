const Theme = () => {
  // const LAYOUT_PADDING = "padding: 250px 0 0 0";
  const rootSideOffset = "5vw";
  const theme = {
    rootSideOffset,

    headerAttr: `
      position: absolute;
      top: 30px;
      font-size: 25px;
      line-height: 35px;
      z-index: 10;
      cursor: pointer;
    `,
    layoutAttr: `
    padding: 150px 0 0 0;
  `,
    DW: {
      mobileS: "320px",
      mobileM: "375px",
      mobileL: "425px",
      tablet: "768px",
      laptop: "1024px",
      laptopL: "1440px",
      desktop: "2560px",
    },
    minWidth: "320px",
    bgColor: "#ffffff",
    blackColor: "#000000",
    blueColor: "#3897f0",
    redColor: "#ED4956",
    lightGreyColor: "#A0A4A8",
    normalGreyColor: "#52575C",
    darkGreyColor: "#999",
    darkBlueColor: "#003569",
    rootMaxWidth: `calc(100vw - ${rootSideOffset} * 2)`,

    trendBgColor: "#F2F2F2",
    trendPink: "#BF545D",
    trendDarkBlue: "#0F1926",
    trendBeige: "#F2BC79",
    trendRed: "#8C0303",
  };
  return theme;
};
export default Theme();
