import { colors, colorCodesMapper } from "../config";

export const wordToColor = (color = "") => {
  if (colorCodesMapper[color.toLowerCase()]) {
    return [colorCodesMapper[color.toLowerCase()]];
  } else {
    const keyWord = color.slice(0, 2);
    const filteredColors = colors.filter((color) => color.includes(keyWord));
    if (filteredColors.length !== 0) {
      return filteredColors.map(
        (filteredColor) => colorCodesMapper[filteredColor.toLowerCase()]
      );
    } else {
      return [" No Data Found "];
    }
  }
};
