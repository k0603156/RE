interface IFontStyles {
  [key: string]: any;
}
const Theme = () => {
  const ROOT_SIDE_OFFSET = "5vw";
  const COLOR = {
    BACKGROUND_COLOR: "#FFFFFF",
    GRAY: "#52575C",
    BLACK: "#000000",
    BLUE: "#3897f0",
    RED: "#ED4956",
    LIGHT: {
      GRAY: "#A0A4A8",
    },
    DARK: {
      BLUE: "#003569",
      GRAY: "#999",
    },
    TRENDY: {
      BEIGE: "#F2BC79",
      PINK: "#BF545D",
      RED: "#8C0303",
      BLUE: "#0F1926",
    },
  };
  const FONT = {
    FAMILY: {
      MONTSERRAT: "-apple-system,'Montserrat', 'Helvetica Neue', sans-serif",
    },
    SIZE: {
      SMALL: "0.8rem",
      MEDIUM: "1rem",
      LARGE: "1.2rem",
    },
    COLOR,
  };

  const DEVICE_BREAKPOINT = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
  };

  // todo: const createStyles =()=>{}

  const FONT_STYLES: any = Object.entries(FONT.FAMILY)
    .map(([familyKey, falmilyValue]) => {
      return {
        [familyKey]: Object.entries(FONT.SIZE)
          .map(([sizeKey, sizeValue]) => {
            return {
              [sizeKey]: Object.entries(FONT.COLOR)
                .map(([colorKey, colorValue]) => {
                  if (typeof colorValue === "string") {
                    return {
                      [colorKey]: `font-family:${falmilyValue};font-size:${sizeValue}';color:${colorValue};
                `,
                    };
                  }
                  return Object.entries(colorValue).map(
                    ([subColorKey, subColorValue]) => ({
                      [`${colorKey}_${subColorKey}`]: `font-family:${falmilyValue};font-size:${sizeValue}';color:${subColorValue};
                  `,
                    }),
                  );
                })
                .flat()
                .reduce((obj, item) => Object.assign(obj, item), {}),
            };
          })
          .reduce((obj, item) => Object.assign(obj, item), {}),
      };
    })
    .flat()
    .reduce((obj, item) => Object.assign(obj, item), {});

  console.log(FONT_STYLES, FONT_STYLES.MONTSERRAT.LARGE.RED);

  const theme = {
    ROOT_SIDE_OFFSET,
    DEVICE_BREAKPOINT,
    COLOR,
    FONT,
    FONT_STYLES,

    MONTSERRAT_SMALL_BLACK: `
      color:${COLOR.BLACK};
      font-size:${FONT.SIZE.MEDIUM};
      font-family:${FONT.FAMILY.MONTSERRAT};
    `,
    MONTSERRAT_MEDIUM_BLACK: `
      color:${COLOR.BLACK};
      font-size:${FONT.SIZE.MEDIUM};
      font-family:${FONT.FAMILY.MONTSERRAT};
    `,
    MONTSERRAT_LARGE_BLACK: `
      color:${COLOR.BLACK};
      font-size:${FONT.SIZE.MEDIUM};
      font-family:${FONT.FAMILY.MONTSERRAT};
    `,
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
    minWidth: "320px",
    rootMaxWidth: `calc(100vw - ${ROOT_SIDE_OFFSET} * 2)`,
  };
  return theme;
};
export default Theme();
