import COLORS from "./Colors";

export const FONTS = {
  FAMILY: {
    MONTSERRAT: '-apple-system,"Montserrat", "Helvetica Neue", sans-serif',
  },
  SIZE: {
    XSMALL: "0.6rem",
    SMALL: "0.8rem",
    MEDIUM: "1rem",
    LARGE: "1.2rem",
    XLARGE: "1.4rem",
  },
  WEIGHT: {
    THIN: 400,
    REGULAR: 500,
    BOLD: 600,
  },
  COLORS,
};

export interface IObject {
  [key: string]: any;
}
const mixSubTheme = (
  themeObject: IObject,
  callback: (obj: IObject, entries: { key: string; value: any }) => IObject,
) =>
  Object.entries(themeObject).reduce(
    (object, [key, value]) =>
      Object.assign(object, callback(object, { key, value })),
    {},
  );

export const FONT_STYLES: IObject = mixSubTheme(
  FONTS.FAMILY,
  (_familyObj, family) => ({
    [family.key]: mixSubTheme(FONTS.SIZE, (_sizeObj, size) => ({
      [size.key]: mixSubTheme(FONTS.WEIGHT, (_weightObj, weight) => ({
        [weight.key]: mixSubTheme(FONTS.COLORS, (_colorObj, color) => {
          if (typeof color.value === "string") {
            return {
              [color.key]: `
              font-family:${family.value};
              font-size:${size.value};
              font-weight:${weight.value};
              color:${color.value};`,
            };
          }
          return Object.assign(
            _colorObj,
            mixSubTheme(color.value, (_subcolorObj, subcolor) => ({
              [`${color.key}_${subcolor.key}`]: `
              font-family:${family.value};
              font-size:${size.value};
              font-weight:${weight.value};
              color:${subcolor.value};`,
            })),
          );
        }),
      })),
    })),
  }),
);
